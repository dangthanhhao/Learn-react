Write your own notes here for Day 1 learning. You can include key concepts, code snippets, or anything you found important. English is preferred for wider accessibility.
E.g:

-Known how to create react app
-Learned jsx syntax, create class and function component
...

# 📚 React Learning Notes - Technical Reference

> Cheat sheet để tra cứu kiến thức React - Focus vào technical concepts

---

## 🚀 Setup & Installation

### Create React App
```bash
npx create-react-app my-react-learning
cd my-react-learning
npm start
```

---

## 📝 JSX Syntax

### Embedding JavaScript in JSX
```jsx
// Sử dụng {} để nhúng JavaScript vào JSX
<h1>{variableName}</h1>
<p>{expression + 123}</p>
<div>{functionCall()}</div>

// Ví dụ
const name = "Vũ";
<h1>Hello, {name}!</h1>  // Output: Hello, Vũ!
```

### JSX vs HTML Differences
```jsx
// HTML: class
// JSX: className
<div className="container"></div>

// HTML: style="color: red"
// JSX: style={{color: 'red'}}
<div style={{color: 'red', fontSize: '16px'}}></div>
```

---

## 🧩 Components

### Function Component Structure
```jsx
// Basic function component
function ComponentName() {
  return <div>Content</div>;
}

export default ComponentName;
```

### Component with Props
```jsx
// Destructuring props
function Greeting({ name, age }) {
  return <h1>Hello {name}, you are {age}</h1>;
}

// Using props object
function Greeting(props) {
  return <h1>Hello {props.name}</h1>;
}
```

### Import & Export Components
```jsx
// Export
export default MyComponent;

// Import
import MyComponent from './MyComponent';
// ./ = same directory
// ../ = parent directory
```

---

## 🎨 Styling in React

### Inline Styles
```jsx
// Style object - use camelCase for CSS properties
const styles = {
  card: {
    backgroundColor: '#f9f9f9',  // background-color → backgroundColor
    borderRadius: '8px',          // border-radius → borderRadius
    padding: '20px',
    margin: '10px'
  }
};

// Apply style
<div style={styles.card}>Content</div>

// Or inline directly
<div style={{color: 'red', fontSize: '16px'}}>Text</div>
```

### Why camelCase?
```
CSS Property    →    React Style Property
background-color  →  backgroundColor
font-size         →  fontSize
border-radius     →  borderRadius
```

---

## 🔄 Conditional Rendering

### Using if-else
```jsx
function Component({ condition }) {
  let content;
  
  if (condition) {
    content = "True case";
  } else {
    content = "False case";
  }
  
  return <div>{content}</div>;
}
```

### Logical AND (&&)
```jsx
// Chỉ render khi condition = true
{condition && <p>This shows when true</p>}

// Ví dụ: Chỉ hiển thị bio nếu có
{user.bio && <p>Bio: {user.bio}</p>}
```

### Ternary Operator
```jsx
{condition ? <p>True</p> : <p>False</p>}
```

### Early Return Pattern
```jsx
function Component({ data }) {
  if (!data) {
    return <h2>No data found</h2>;
  }
  
  return <div>{data}</div>;
}
```

---

## 📋 Rendering Lists

### Array.map() Method
```jsx
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 }
];

// Render list
{users.map((user, index) => (
  <div key={index}>
    <h2>{user.name}</h2>
    <p>{user.age}</p>
  </div>
))}
```

### Why `key` prop?
```jsx
// ✅ CORRECT - unique key helps React identify items
{items.map((item, index) => (
  <div key={index}>...</div>
))}

// ❌ WARNING - missing key
{items.map((item) => (
  <div>...</div>  // React will show warning
))}
```

**Key prop giúp:**
- React track được element nào thay đổi
- Optimize re-rendering performance
- Avoid bugs khi update list

---

## 🕐 Working with Date & Time

### Get Current Time
```jsx
new Date()              // Current date & time object
new Date().getHours()   // Current hour (0-23)
new Date().getMinutes() // Current minutes (0-59)
new Date().getDate()    // Day of month (1-31)
```

### Example Usage
```jsx
const currentHour = new Date().getHours();

if (currentHour < 12) {
  greeting = "Good Morning";
} else if (currentHour < 18) {
  greeting = "Good Afternoon";
} else {
  greeting = "Good Evening";
}
```

---

## 🔧 Common Patterns

### Component Composition
```jsx
// Reusable component
function Card({ title, content }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}

// Use multiple times
<Card title="Card 1" content="Content 1" />
<Card title="Card 2" content="Content 2" />
```

### Props Validation Pattern
```jsx
function Component({ data }) {
  // Check if data exists
  if (!data) {
    return <p>No data available</p>;
  }
  
  // Safe to use data
  return <div>{data.value}</div>;
}
```

### Rendering Stars/Ratings
```jsx
const renderStars = (rating) => {
  let stars = "";
  for (let i = 0; i < rating; i++) {
    stars += "⭐";
  }
  return stars;
};

// Usage
<p>Rating: {renderStars(5)}</p>  // Output: ⭐⭐⭐⭐⭐
```

---

## 💡 Key Concepts Summary

| Concept | Syntax | Purpose |
|---------|--------|---------|
| **JSX Expression** | `{variable}` | Embed JS in JSX |
| **Props** | `<Component prop={value} />` | Pass data to component |
| **Destructuring** | `{ name, age }` | Extract props easily |
| **Conditional** | `{condition && <div/>}` | Show/hide elements |
| **List Rendering** | `.map()` | Render arrays |
| **Key Prop** | `key={index}` | Identify list items |
| **Inline Style** | `style={{}}` | Apply CSS in JS |
| **Export/Import** | `export default` | Share components |

---

## 🎯 Best Practices

✅ **DO:**
- Use destructuring for props
- Add `key` prop when rendering lists
- Use camelCase for style properties
- Export one component per file
- Name components with PascalCase

❌ **DON'T:**
- Forget `key` prop in lists
- Use `class` instead of `className`
- Mix HTML and JSX syntax
- Forget to export components

---

## 🔍 Quick Reference

### Component Template
```jsx
function MyComponent({ prop1, prop2 }) {
  return (
    <div>
      <h1>{prop1}</h1>
      <p>{prop2}</p>
    </div>
  );
}

export default MyComponent;
```

### Using Component
```jsx
import MyComponent from './MyComponent';

function App() {
  return <MyComponent prop1="Hello" prop2="World" />;
}
```

---

**Last Updated:** Day 1 - React Basics
**Next Topics:** State, Events, Hooks