# 📝 Day 1.5 Exercises - React Hooks Introduction

**Difficulty:** ⭐ to ⭐⭐
**Time:** 1-2 hours
**Skills:** Understanding hooks, useState basics, hook rules, comparing hooks vs class components

---

## Exercise 1: Your First Hook - useState (Easy)

**Objective:** Understand the simplest hook and how it replaces `this.state`

```javascript
import React, { useState } from 'react';

function CounterWithHook() {
  // Hooks always start with "use"
  // useState returns [currentValue, functionToUpdateValue]
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: '20px', border: '1px solid blue' }}>
      <h3>Counter with useState Hook</h3>
      <p>Current Count: <strong>{count}</strong></p>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>

      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}

export default CounterWithHook;
```

**Tasks to Complete:**
- [ ] Create this component in your React app
- [ ] Click the buttons and observe the count updating
- [ ] Change the initial value from `0` to `10` and verify it starts at 10
- [ ] Add a new button that increments by 5 instead of 1
- [ ] Try this: change `setCount(count + 1)` to `setCount(count + 1); setCount(count + 1);` and observe what happens (React batches updates!)

**Questions for Copilot:**
- "Why is the hook called `useState` and not just `State`?"
- "What does it mean that useState returns an array with two elements?"
- "Why do we use `setCount` instead of directly modifying `count`?"
- "What's the difference between useState in a hook and `this.state` in a class component?"

---

## Exercise 2: Multiple State Variables (Medium)

**Objective:** Manage multiple independent pieces of state with hooks

```javascript
import React, { useState } from 'react';

function UserProfile() {
  // You can have MULTIPLE useState calls in one component!
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div style={{ padding: '20px', border: '1px solid green', maxWidth: '400px' }}>
      <h3>User Profile Form</h3>

      {/* Input for name */}
      <div style={{ marginBottom: '10px' }}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            style={{ marginLeft: '10px', padding: '5px' }}
          />
        </label>
      </div>

      {/* Input for age */}
      <div style={{ marginBottom: '10px' }}>
        <label>
          Age:
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
            placeholder="Enter your age"
            style={{ marginLeft: '10px', padding: '5px' }}
          />
        </label>
      </div>

      {/* Input for email */}
      <div style={{ marginBottom: '10px' }}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            style={{ marginLeft: '10px', padding: '5px' }}
          />
        </label>
      </div>

      {/* Toggle login status */}
      <div style={{ marginBottom: '10px' }}>
        <label>
          <input
            type="checkbox"
            checked={isLoggedIn}
            onChange={(e) => setIsLoggedIn(e.target.checked)}
          />
          {' '}Logged In
        </label>
      </div>

      {/* Display current state */}
      <div style={{
        marginTop: '20px',
        padding: '10px',
        backgroundColor: '#f0f0f0',
        borderRadius: '5px'
      }}>
        <h4>Current State:</h4>
        <p><strong>Name:</strong> {name || '(not set)'}</p>
        <p><strong>Age:</strong> {age || '(not set)'}</p>
        <p><strong>Email:</strong> {email || '(not set)'}</p>
        <p><strong>Status:</strong> {isLoggedIn ? '✅ Logged In' : '❌ Logged Out'}</p>
      </div>

      {/* Reset button */}
      <button
        onClick={() => {
          setName('');
          setAge(0);
          setEmail('');
          setIsLoggedIn(false);
        }}
        style={{ marginTop: '10px', padding: '8px 16px' }}
      >
        Reset Form
      </button>
    </div>
  );
}

export default UserProfile;
```

**Tasks to Complete:**
- [ ] Create this component and test it
- [ ] Type into all the input fields and see the state update in real-time
- [ ] Click "Reset Form" and verify all fields reset
- [ ] Add a new `useState` for "country" and add an input field for it
- [ ] Create a "Save Profile" button that logs all the state values to the console

**Questions for Copilot:**
- "Can I update multiple state variables at once or do I need separate setters?"
- "What happens if I have 10 different useState calls?"
- "How is using multiple useState calls different from a class component's single `this.state` object?"
- "What's the order of useState calls and why does it matter?"

---

## Exercise 3: Understanding Hook Rules (Medium)

**Objective:** Learn the critical rules of hooks and what happens when you break them

```javascript
import React, { useState } from 'react';

// ✅ CORRECT: Hooks at the top level of the component
function CorrectHookUsage() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  return (
    <div style={{ padding: '20px', border: '1px solid green' }}>
      <h3>✅ Correct Hook Usage</h3>
      <p>Count: {count}</p>
      <p>Name: {name}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

// ❌ WRONG: Don't do this!
// This component will NOT work as expected
function WrongHookUsage({ shouldRender }) {
  // WRONG: Hooks inside a conditional
  if (shouldRender) {
    const [count, setCount] = useState(0);  // ❌ DON'T DO THIS
  }

  // WRONG: Hooks inside a loop
  for (let i = 0; i < 2; i++) {
    const [value, setValue] = useState(0);  // ❌ DON'T DO THIS
  }

  return <div>This component has broken hooks</div>;
}

// ✅ CORRECT: Conditional rendering instead
function CorrectConditionalLogic() {
  const [shouldRender, setShouldRender] = useState(false);
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: '20px', border: '1px solid green' }}>
      <h3>✅ Correct Conditional Logic</h3>

      <button onClick={() => setShouldRender(!shouldRender)}>
        {shouldRender ? 'Hide' : 'Show'} Counter
      </button>

      {shouldRender && (
        <div>
          <p>Count: {count}</p>
          <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
      )}
    </div>
  );
}

// ✅ CORRECT: Only call hooks from React functions
function SimpleComponent() {
  const [message, setMessage] = useState('Hello from hooks!');

  // You CAN call functions from inside hooks
  function handleClick() {
    setMessage('Updated!');
  }

  return (
    <div style={{ padding: '20px', border: '1px solid blue' }}>
      <h3>✅ Correct - Hooks in Functional Component</h3>
      <p>{message}</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default CorrectHookUsage;
```

**Tasks to Complete:**
- [ ] Read through the examples and understand the "Rules of Hooks"
- [ ] Try to understand WHY the conditional/loop examples are wrong
- [ ] Create the CorrectConditionalLogic component and test it
- [ ] Open browser console - you should see no warnings for correct components
- [ ] Try creating a component that calls useState inside an if statement and observe the warning
- [ ] Fix the broken component by moving hooks to the top level

**Rules of Hooks to Remember:**
1. **Only call hooks at the top level** of a functional component (not in conditionals, loops, or nested functions)
2. **Only call hooks from functional components** or from custom hooks (not from regular functions)

**Questions for Copilot:**
- "Why can't I call hooks inside conditionals?"
- "What error do I get if I break the rules of hooks?"
- "How does React know which state belongs to which hook call?"
- "What's the internal mechanism that makes the order of useState calls matter?"

---

## 🎯 Challenge: Build a Simple Todo Item Component

Create a reusable `<TodoItem />` component that uses hooks:

**Requirements:**
- [ ] Display a todo text
- [ ] Have a checkbox to mark as complete (and style it differently when checked)
- [ ] Have a delete button
- [ ] Show the creation date
- [ ] Pass todo data via props (title, id)
- [ ] Parent component manages the state

**Starter Code:**
```javascript
import React, { useState } from 'react';

function TodoItem({ id, title, onDelete, onToggle }) {
  const [isComplete, setIsComplete] = useState(false);
  const [createdAt] = useState(new Date().toLocaleDateString());

  // Handle toggle
  const handleToggle = () => {
    setIsComplete(!isComplete);
  };

  // Handle delete
  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <div style={{
      padding: '10px',
      margin: '10px 0',
      border: '1px solid #ccc',
      backgroundColor: isComplete ? '#f0f0f0' : 'white',
      textDecoration: isComplete ? 'line-through' : 'none'
    }}>
      <input
        type="checkbox"
        checked={isComplete}
        onChange={handleToggle}
      />
      <span style={{ marginLeft: '10px' }}>{title}</span>
      <span style={{ fontSize: '0.8em', color: 'gray', marginLeft: '10px' }}>
        ({createdAt})
      </span>
      <button
        onClick={handleDelete}
        style={{ float: 'right', backgroundColor: 'red', color: 'white' }}
      >
        Delete
      </button>
    </div>
  );
}

// Usage in parent component
function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, title: 'Learn hooks' },
    { id: 2, title: 'Practice useState' },
    { id: 3, title: 'Build a project' }
  ]);

  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>My Todos</h2>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          title={todo.title}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
}

export default TodoList;
```

**Bonus Challenges:**
- [ ] Add an "Edit" button that lets you modify the todo text
- [ ] Add a counter showing how many todos are complete vs incomplete
- [ ] Add priority level (high, medium, low) as state
- [ ] Add a due date and display if it's overdue

---

## Summary

By completing these exercises, you've learned:

✅ **What hooks are** - Functions that let you "hook into" React features like state
✅ **How useState works** - The simplest hook for managing component state
✅ **Multiple state variables** - How to manage many independent pieces of state
✅ **Rules of hooks** - Critical rules to prevent bugs (top level only, functional components only)
✅ **When to use hooks** - Functional components with hooks replace class components

**Next Steps:**
- Day 2 will dive deeper into props and how they differ from state
- Day 7.5 will introduce custom hooks for reusing logic
- Advanced hooks (useEffect, useContext, useReducer) come later

**Key Takeaways:**
- Hooks always start with the word "use" (useState, useEffect, useContext, etc.)
- Call hooks at the top level, not inside conditionals
- Use multiple useState calls for multiple state variables
- Hooks are much simpler than class component state management
