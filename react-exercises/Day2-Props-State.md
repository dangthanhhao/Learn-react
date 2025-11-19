# 📝 Day 2 Exercises - Components, Props & State

**Difficulty:** ⭐⭐ (Beginner to Intermediate)
**Time:** 45-90 minutes
**Skills:** Props, State (useState), Component re-rendering, Event handlers

------------------------------------------------------------------------

## Exercise 1: Props & Prop Destructuring

**Objective:** Master passing data between components

Create `Greeting.js`:

```javascript
// Without destructuring (basic)
function GreetingBasic(props) {
  return <h1>Hello, {props.name}! Nice to meet you.</h1>;
}

// With destructuring (cleaner)
function Greeting({ name, age, favorite }) {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>Age: {age} years old</p>
      <p>Favorite hobby: {favorite}</p>
    </div>
  );
}

export default Greeting;
```

Use in `App.js`:
```javascript
import Greeting from "./Greeting";

function App() {
  return (
    <div>
      <Greeting name="Barry" age={24} favorite="coding" />
      <Greeting name="Sarah" age={28} favorite="reading" />
      <Greeting name="Mike" age={32} favorite="gaming" />
    </div>
  );
}

export default App;
```

**Tasks:**
- [ ] Create the component using destructuring
- [ ] Pass 3+ different props
- [ ] Try passing numbers, strings, and booleans
- [ ] Check what happens with missing props
- [ ] Test both `props.name` and destructured `{name}` syntax

**Questions to Ask Copilot:**
- "What is destructuring and why do we use it?"
- "What happens if a prop is undefined?"
- "How is props different from function parameters?"

---

## Exercise 2: State Management with useState

**Objective:** Learn state and component re-rendering

Create `Counter.js`:

```javascript
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Counter");

  return (
    <div style={styles.container}>
      <h2>{name}</h2>
      <h1 style={styles.number}>{count}</h1>

      <div style={styles.buttons}>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name your counter"
      />
    </div>
  );
}

const styles = {
  container: {
    border: "2px solid #007bff",
    padding: "30px",
    borderRadius: "10px",
    maxWidth: "400px",
    margin: "20px",
    textAlign: "center"
  },
  number: {
    fontSize: "48px",
    color: "#007bff",
    margin: "20px 0"
  },
  buttons: {
    marginBottom: "20px"
  }
};

export default Counter;
```

Use in `App.js`:
```javascript
import Counter from "./Counter";

function App() {
  return (
    <div>
      <h1>Multiple Counters</h1>
      <Counter />
      <Counter />
      <Counter />
    </div>
  );
}

export default App;
```

**Tasks:**
- [ ] Create the Counter component
- [ ] Test increment/decrement
- [ ] Test reset button
- [ ] Change the counter name
- [ ] Notice: Each Counter has its own state (independent)
- [ ] Add a button to double the count
- [ ] Add a button to add 10

**Questions to Ask Copilot:**
- "What does `useState` return and why is it an array?"
- "Why does the component re-render when state changes?"
- "How is state different from props?"

---

## Exercise 3: Input Handling & State Updates

**Objective:** Practice form inputs and state management

Create `TodoInput.js`:

```javascript
import { useState } from 'react';

function TodoInput() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    if (input.trim() !== "") {
      setItems([...items, input]);
      setInput("");  // Clear input
      setCount(count + 1);
    }
  };

  const handleRemove = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
    setCount(count - 1);
  };

  return (
    <div style={styles.container}>
      <h2>Simple Todo</h2>
      <p>Total items: {count}</p>

      <div style={styles.inputGroup}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleAdd()}
          placeholder="Type a task..."
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      <ul>
        {items.map((item, index) => (
          <li key={index} style={styles.item}>
            {item}
            <button onClick={() => handleRemove(index)}>✕</button>
          </li>
        ))}
      </ul>

      {items.length === 0 && <p style={styles.empty}>No items yet</p>}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "500px",
    margin: "20px",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px"
  },
  inputGroup: {
    display: "flex",
    marginBottom: "15px",
    gap: "10px"
  },
  item: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px",
    borderBottom: "1px solid #eee",
    alignItems: "center"
  },
  empty: {
    fontStyle: "italic",
    color: "#999"
  }
};

export default TodoInput;
```

Use in `App.js`:
```javascript
import TodoInput from "./TodoInput";

function App() {
  return (
    <div>
      <h1>My Tasks</h1>
      <TodoInput />
    </div>
  );
}

export default App;
```

**Tasks:**
- [ ] Create the TodoInput component
- [ ] Add items to the list
- [ ] Delete items
- [ ] Clear input after adding
- [ ] Count total items
- [ ] Test pressing Enter to add
- [ ] Show empty message when no items

**Questions to Ask Copilot:**
- "How does spread operator `[...items, input]` work?"
- "What is `.filter()` and why use it for removal?"
- "How do we handle the Enter key?"

---

## Challenge: Build a Color Mixer

### Requirements:
1. Create 3 sliders (Red, Green, Blue) with values 0-255
2. Display the RGB color in real-time as a box
3. Show the RGB value as text
4. Add a "Copy Color Code" button that copies the hex value

**Starter code:**
```javascript
const [red, setRed] = useState(100);
const [green, setGreen] = useState(100);
const [blue, setBlue] = useState(100);

const rgbColor = `rgb(${red}, ${green}, ${blue})`;
```

**Example Output:**
```
Red:   [====●========] 100
Green: [==========●===] 150
Blue:  [======●=======] 120

Color:   [███████████]
RGB: rgb(100, 150, 120)
[Copy to Clipboard]
```

**Hint:**
- Use HTML `<input type="range">` for sliders
- Use `parseInt(value, 16)` to convert hex to decimal
- Use `toString(16)` for decimal to hex conversion

---

## 🎯 Summary

By completing these exercises, you've practiced:
- ✅ Prop destructuring and passing
- ✅ useState hook
- ✅ Event handlers (onClick, onChange)
- ✅ Updating state arrays
- ✅ Conditional rendering based on state
- ✅ Input handling

---

## 💡 Tips

✅ State is immutable - always create new values
✅ Component re-renders when state changes
✅ Each component instance has separate state
✅ Use console.log to debug state changes
✅ Test keyboard shortcuts (Enter, etc.)

---

**Next:** Ready for Day 3? Time for Conditional Rendering & Lists! 🚀
