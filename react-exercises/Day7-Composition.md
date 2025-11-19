# 📝 Day 7 Exercises - Component Composition & Props Drilling

**Difficulty:** ⭐⭐⭐ (Intermediate to Advanced)
**Time:** 75-150 minutes
**Skills:** Component composition, prop drilling, component hierarchy, extracting components

------------------------------------------------------------------------

## Exercise 1: Building a Composed Component Structure

**Objective:** Practice breaking down UIs into smaller components

Create `BlogPost.js`:

```javascript
// Main component
function BlogPost({ post }) {
  return (
    <article style={styles.article}>
      <BlogHeader title={post.title} author={post.author} date={post.date} />
      <BlogContent body={post.body} />
      <BlogFooter tags={post.tags} likes={post.likes} />
    </article>
  );
}

// Child components
function BlogHeader({ title, author, date }) {
  return (
    <header style={styles.header}>
      <h1>{title}</h1>
      <div style={styles.meta}>
        <span>By {author}</span>
        <span>•</span>
        <span>{date}</span>
      </div>
    </header>
  );
}

function BlogContent({ body }) {
  return (
    <main style={styles.content}>
      <p>{body}</p>
    </main>
  );
}

function BlogFooter({ tags, likes }) {
  return (
    <footer style={styles.footer}>
      <div style={styles.tagsContainer}>
        {tags.map((tag) => (
          <span key={tag} style={styles.tag}>
            #{tag}
          </span>
        ))}
      </div>
      <div style={styles.stats}>
        <span>❤️ {likes} likes</span>
        <button style={styles.button}>Share</button>
      </div>
    </footer>
  );
}

const styles = {
  article: {
    maxWidth: "700px",
    margin: "20px",
    padding: "20px",
    border: "1px solid #eee",
    borderRadius: "8px",
    backgroundColor: "#fff"
  },
  header: {
    borderBottom: "2px solid #f0f0f0",
    paddingBottom: "15px",
    marginBottom: "20px"
  },
  meta: {
    display: "flex",
    gap: "10px",
    color: "#666",
    fontSize: "14px",
    marginTop: "10px"
  },
  content: {
    lineHeight: "1.8",
    color: "#333",
    marginBottom: "20px"
  },
  footer: {
    borderTop: "2px solid #f0f0f0",
    paddingTop: "15px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  tagsContainer: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap"
  },
  tag: {
    backgroundColor: "#e3f2fd",
    color: "#1976d2",
    padding: "5px 10px",
    borderRadius: "20px",
    fontSize: "12px"
  },
  stats: {
    display: "flex",
    gap: "15px",
    alignItems: "center"
  },
  button: {
    padding: "8px 15px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer"
  }
};

export default BlogPost;
```

Use in `App.js`:

```javascript
import BlogPost from "./BlogPost";

function App() {
  const posts = [
    {
      title: "Getting Started with React",
      author: "Sarah Johnson",
      date: "Nov 15, 2024",
      body: "React is a JavaScript library for building user interfaces...",
      tags: ["react", "javascript", "tutorial"],
      likes: 234
    },
    {
      title: "Advanced React Patterns",
      author: "Mike Chen",
      date: "Nov 10, 2024",
      body: "In this post, we'll explore advanced React patterns and techniques...",
      tags: ["react", "advanced", "patterns"],
      likes: 567
    }
  ];

  return (
    <div>
      <h1>Blog</h1>
      {posts.map((post, index) => (
        <BlogPost key={index} post={post} />
      ))}
    </div>
  );
}

export default App;
```

**Tasks:**
- [ ] Create the component structure
- [ ] Render multiple blog posts
- [ ] Test breaking apart components
- [ ] Notice component hierarchy
- [ ] Add more fields to post
- [ ] Create more components
- [ ] Test with different data

**Questions to Ask Copilot:**
- "How do I know when to extract a component?"
- "What makes a good component structure?"
- "How deep should component nesting go?"

---

## Exercise 2: Prop Drilling & State Management

**Objective:** Understand prop drilling and its challenges

Create `UserProfile.js`:

```javascript
import { useState } from 'react';

function UserProfile() {
  const [theme, setTheme] = useState("light");
  const [notifications, setNotifications] = useState(3);
  const [userName, setUserName] = useState("Barry");

  return (
    <div style={styles.container(theme)}>
      <Header
        theme={theme}
        setTheme={setTheme}
        notifications={notifications}
        userName={userName}
      />
      <Content theme={theme} />
      <Footer theme={theme} />
    </div>
  );
}

function Header({ theme, setTheme, notifications, userName }) {
  return (
    <header style={styles.header(theme)}>
      <div style={styles.headerContent}>
        <h1>Welcome, {userName}!</h1>
        <div>
          <span style={styles.notification}>
            🔔 {notifications}
          </span>
          <ThemeToggle theme={theme} setTheme={setTheme} />
        </div>
      </div>
    </header>
  );
}

function ThemeToggle({ theme, setTheme }) {
  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      style={styles.themeBtn(theme)}
    >
      {theme === "light" ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}

function Content({ theme }) {
  return (
    <main style={styles.content(theme)}>
      <UserCard theme={theme} />
      <UserStats theme={theme} />
    </main>
  );
}

function UserCard({ theme }) {
  return (
    <div style={styles.card(theme)}>
      <h2>Profile</h2>
      <p>Email: user@example.com</p>
      <p>Member since: Jan 2024</p>
    </div>
  );
}

function UserStats({ theme }) {
  return (
    <div style={styles.card(theme)}>
      <h2>Statistics</h2>
      <p>Posts: 42</p>
      <p>Followers: 128</p>
    </div>
  );
}

function Footer({ theme }) {
  return (
    <footer style={styles.footer(theme)}>
      <p>© 2024 My App | Theme: {theme}</p>
    </footer>
  );
}

const styles = {
  container: (theme) => ({
    minHeight: "100vh",
    backgroundColor: theme === "light" ? "#fff" : "#1a1a1a",
    color: theme === "light" ? "#333" : "#f0f0f0"
  }),
  header: (theme) => ({
    backgroundColor: theme === "light" ? "#f8f9fa" : "#2d2d2d",
    padding: "20px",
    borderBottom: `1px solid ${theme === "light" ? "#e0e0e0" : "#444"}`
  }),
  headerContent: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  notification: {
    marginRight: "15px",
    fontSize: "18px"
  },
  themeBtn: (theme) => ({
    padding: "8px 15px",
    backgroundColor: theme === "light" ? "#333" : "#f0f0f0",
    color: theme === "light" ? "#fff" : "#333",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer"
  }),
  content: (theme) => ({
    padding: "20px",
    maxWidth: "800px",
    margin: "0 auto"
  }),
  card: (theme) => ({
    padding: "20px",
    marginBottom: "20px",
    border: `1px solid ${theme === "light" ? "#e0e0e0" : "#444"}`,
    borderRadius: "8px",
    backgroundColor: theme === "light" ? "#f9f9f9" : "#2d2d2d"
  }),
  footer: (theme) => ({
    padding: "20px",
    textAlign: "center",
    borderTop: `1px solid ${theme === "light" ? "#e0e0e0" : "#444"}`
  })
};

export default UserProfile;
```

**Tasks:**
- [ ] Create the UserProfile component
- [ ] Test theme toggle
- [ ] Notice how props are passed down
- [ ] Count levels of prop drilling
- [ ] Test with more nested components
- [ ] Discuss: How can we improve this?
- [ ] Next: Context API will solve this!

**Questions to Ask Copilot:**
- "What is prop drilling?"
- "Why is prop drilling a problem?"
- "When should I use Context API instead?"

---

## Exercise 3: Smart & Dumb Components Pattern

**Objective:** Separate logic from presentation

Create `TodoApp.js`:

```javascript
import { useState, useEffect } from 'react';

// Container/Smart Component (handles logic)
function TodoAppContainer() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setTodos([
        { id: 1, text: "Learn React", completed: true },
        { id: 2, text: "Build projects", completed: false },
        { id: 3, text: "Master hooks", completed: false }
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const handleAdd = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false
    };
    setTodos([...todos, newTodo]);
  };

  const handleToggle = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  if (loading) {
    return <p>Loading todos...</p>;
  }

  return (
    <TodoApp
      todos={todos}
      onAdd={handleAdd}
      onToggle={handleToggle}
      onDelete={handleDelete}
    />
  );
}

// Presentational/Dumb Component (just displays)
function TodoApp({ todos, onAdd, onToggle, onDelete }) {
  const [input, setInput] = useState("");

  const handleAddClick = () => {
    if (input.trim()) {
      onAdd(input);
      setInput("");
    }
  };

  const completed = todos.filter(t => t.completed).length;

  return (
    <div style={styles.container}>
      <h2>My Todos</h2>
      <p>Progress: {completed}/{todos.length}</p>

      <TodoInput
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onAdd={handleAddClick}
      />

      <TodoList
        todos={todos}
        onToggle={onToggle}
        onDelete={onDelete}
      />
    </div>
  );
}

// Pure Presentational Components
function TodoInput({ value, onChange, onAdd }) {
  return (
    <div style={styles.inputGroup}>
      <input
        value={value}
        onChange={onChange}
        onKeyPress={(e) => e.key === 'Enter' && onAdd()}
        placeholder="Add a new todo..."
        style={styles.input}
      />
      <button onClick={onAdd} style={styles.addBtn}>Add</button>
    </div>
  );
}

function TodoList({ todos, onToggle, onDelete }) {
  return (
    <ul style={styles.list}>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={() => onToggle(todo.id)}
          onDelete={() => onDelete(todo.id)}
        />
      ))}
    </ul>
  );
}

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li style={styles.item}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={onToggle}
      />
      <span style={todo.completed ? styles.completed : {}}>
        {todo.text}
      </span>
      <button onClick={onDelete} style={styles.deleteBtn}>✕</button>
    </li>
  );
}

const styles = {
  container: {
    maxWidth: "500px",
    margin: "20px",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px"
  },
  inputGroup: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px"
  },
  input: {
    flex: 1,
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "4px"
  },
  addBtn: {
    padding: "10px 20px",
    backgroundColor: "#28a745",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer"
  },
  list: {
    listStyle: "none",
    padding: 0
  },
  item: {
    display: "flex",
    alignItems: "center",
    padding: "10px",
    borderBottom: "1px solid #eee",
    gap: "10px"
  },
  completed: {
    textDecoration: "line-through",
    color: "#999"
  },
  deleteBtn: {
    marginLeft: "auto",
    backgroundColor: "#dc3545",
    color: "white",
    border: "none",
    padding: "5px 10px",
    borderRadius: "4px",
    cursor: "pointer"
  }
};

export default TodoAppContainer;
```

**Tasks:**
- [ ] Create the TodoApp structure
- [ ] Test adding todos
- [ ] Test toggling completion
- [ ] Test deleting todos
- [ ] Notice separation of logic and UI
- [ ] Understand container vs presentational
- [ ] Test loading state

**Questions to Ask Copilot:**
- "What's the difference between container and presentational components?"
- "Why separate logic from presentation?"
- "When should I use this pattern?"

---

## Challenge: Build a Comment Section

### Requirements:
1. Container component that:
   - Manages comment state
   - Fetches comments (fake API)
   - Handles add/delete operations

2. Presentational components for:
   - Comment form (add new)
   - Comment list
   - Individual comment

3. Features:
   - Show loading state
   - Display comment count
   - Timestamp for each comment
   - User avatar/name for each comment

---

## 🎯 Summary

By completing these exercises, you've practiced:
- ✅ Breaking down UIs into components
- ✅ Prop drilling and its challenges
- ✅ Component hierarchy design
- ✅ Container/Presentational pattern
- ✅ Extracting reusable components
- ✅ Composition over inheritance

---

**Next:** Ready for Day 8? Time for Context API! 🚀
