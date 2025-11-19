# 📝 Day 1 Exercises - React Basics & Environment Setup

**Difficulty:** ⭐ (Beginner)
**Time:** 30-60 minutes
**Skills:** JSX, Components, Props, Basic styling

------------------------------------------------------------------------

## Exercise 1: Dynamic Greeting Component

**Objective:** Practice JSX and conditional logic

Create `DynamicGreeting.js`:

```javascript
function DynamicGreeting({ name, time }) {
  let greeting;

  if (time < 12) {
    greeting = "Good Morning";
  } else if (time < 18) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }

  return <h1>{greeting}, {name}! 👋</h1>;
}

export default DynamicGreeting;
```

Use in `App.js`:
```javascript
import DynamicGreeting from "./DynamicGreeting";

function App() {
  return (
    <div>
      <DynamicGreeting name="Barry" time={new Date().getHours()} />
    </div>
  );
}

export default App;
```

**Tasks:**
- [ ] Create the component
- [ ] Test with different times (change the number)
- [ ] Test with different names
- [ ] Verify correct greeting displays

**Questions to Ask Copilot:**
- "Why do we use curly braces `{}` in JSX?"
- "How does `new Date().getHours()` work?"
- "What's the difference between this and writing HTML?"

---

## Exercise 2: Welcome Card Component

**Objective:** Practice components, props, and inline styling

Create `WelcomeCard.js`:

```javascript
function WelcomeCard({ username, role, status }) {
  return (
    <div style={styles.card}>
      <h2 style={styles.title}>{username}</h2>
      <p><strong>Role:</strong> {role}</p>
      <p><strong>Status:</strong> {status}</p>
    </div>
  );
}

const styles = {
  card: {
    border: "2px solid #007bff",
    borderRadius: "8px",
    padding: "20px",
    margin: "10px",
    backgroundColor: "#f9f9f9",
    maxWidth: "400px",
  },
  title: {
    color: "#007bff",
    marginBottom: "10px",
  }
};

export default WelcomeCard;
```

Use in `App.js`:
```javascript
import WelcomeCard from "./WelcomeCard";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Team Members</h1>
      <WelcomeCard username="Barry" role="Developer" status="Learning React" />
      <WelcomeCard username="Sarah" role="Designer" status="Building UIs" />
      <WelcomeCard username="John" role="PM" status="Planning features" />
    </div>
  );
}

export default App;
```

**Tasks:**
- [ ] Create the WelcomeCard component
- [ ] Add at least 3 team members
- [ ] Change the card color
- [ ] Change the border style
- [ ] Add more fields (email, location, etc.)

**Questions to Ask Copilot:**
- "How do inline styles work in React?"
- "Why do we use camelCase for CSS properties like `backgroundColor`?"
- "How can I make the card look better with more styling?"

---

## Exercise 3: Multiple User Profiles (Composition)

**Objective:** Practice component composition and reusability

Create `UserProfile.js`:

```javascript
function UserProfile({ user }) {
  if (!user) {
    return <h2>No user found</h2>;
  }

  return (
    <div style={styles.profile}>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Location: {user.city}</p>
      {user.bio && <p>Bio: {user.bio}</p>}
      <p>Joined: {user.joinDate}</p>
    </div>
  );
}

const styles = {
  profile: {
    border: "2px solid #28a745",
    padding: "20px",
    borderRadius: "10px",
    margin: "15px",
    backgroundColor: "#f0f8f0",
    maxWidth: "500px",
  }
};

export default UserProfile;
```

Use in `App.js`:
```javascript
import UserProfile from "./UserProfile";

function App() {
  const users = [
    {
      name: "Barry Smith",
      email: "barry@example.com",
      city: "San Francisco",
      bio: "Full-stack developer",
      joinDate: "Nov 2024"
    },
    {
      name: "Alice Johnson",
      email: "alice@example.com",
      city: "New York",
      bio: "Frontend specialist",
      joinDate: "Oct 2024"
    },
    {
      name: "Bob Wilson",
      email: "bob@example.com",
      city: "Austin",
      bio: null,  // No bio
      joinDate: "Dec 2024"
    }
  ];

  return (
    <div>
      <h1>User Directory</h1>
      {users.map((user, index) => (
        <UserProfile key={index} user={user} />
      ))}
    </div>
  );
}

export default App;
```

**Tasks:**
- [ ] Create the UserProfile component
- [ ] Add 3+ users with different data
- [ ] Test with missing `bio` field
- [ ] Test rendering all users
- [ ] Add more user fields (phone, website, etc.)

**Questions to Ask Copilot:**
- "What does `.map()` do in React?"
- "Why do we use the `key` prop when rendering lists?"
- "How does conditional rendering work with `{user.bio && ...}`?"

---

## Challenge: Build Your Own

### Create a "Book Card" System

**Requirements:**
1. Create a `BookCard` component showing:
   - Title
   - Author
   - Rating (1-5 stars)
   - A short description

2. Display 4-5 books using the component

3. Style each card nicely

**Example:**
```
┌─────────────────────────────┐
│ The Pragmatic Programmer    │
│ By: Dave Thomas             │
│ Rating: ⭐⭐⭐⭐⭐            │
│ "A guide to professional... │
└─────────────────────────────┘
```

**Hint:**
```javascript
const books = [
  {
    title: "The Pragmatic Programmer",
    author: "Dave Thomas",
    rating: 5,
    description: "A guide to professional..."
  },
  // ... more books
];
```

---

## 🎯 Summary

By completing these exercises, you've practiced:
- ✅ Creating React components
- ✅ Using JSX syntax
- ✅ Passing props to components
- ✅ Inline styling
- ✅ Conditional rendering
- ✅ Component composition

---

## 💡 Tips

✅ Type code yourself (don't copy-paste)
✅ Test each change in the browser
✅ Use React DevTools to inspect components
✅ Ask Copilot Chat to explain concepts
✅ Commit your code to GitHub

---

**Next:** Ready for Day 2? Move on to Components, Props, and State! 🚀
