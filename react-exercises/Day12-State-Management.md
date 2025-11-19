# 📝 Day 12 Exercises - State Management (Redux/Zustand Basics)

**Difficulty:** ⭐⭐⭐⭐⭐ (Advanced)
**Time:** 120-180 minutes
**Skills:** Redux basics, actions, reducers, store, Zustand lightweight alternative

------------------------------------------------------------------------

## Option 1: Redux (Traditional State Management)

### Setup

```bash
npm install redux react-redux
```

---

## Exercise 1: Redux Fundamentals

**Objective:** Understand Redux store, actions, and reducers

Create `store.js`:

```javascript
import { createStore } from 'redux';

// Initial state
const initialState = {
  count: 0,
  todos: []
};

// Action types (constants)
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';
export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

// Reducer
function appReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1
      };

    case DECREMENT:
      return {
        ...state,
        count: state.count - 1
      };

    case RESET:
      return {
        ...state,
        count: 0
      };

    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: Date.now(),
            text: action.payload,
            completed: false
          }
        ]
      };

    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };

    default:
      return state;
  }
}

// Create store
export const store = createStore(appReducer);
```

Create `App.js`:

```javascript
import { Provider } from 'react-redux';
import { store } from './store';
import Counter from './components/Counter';
import TodoList from './components/TodoList';

function App() {
  return (
    <Provider store={store}>
      <div style={styles.container}>
        <h1>Redux App</h1>
        <Counter />
        <TodoList />
      </div>
    </Provider>
  );
}

const styles = {
  container: {
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto'
  }
};

export default App;
```

Create `components/Counter.js`:

```javascript
import { useSelector, useDispatch } from 'react-redux';
import { INCREMENT, DECREMENT, RESET } from '../store';

function Counter() {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  return (
    <div style={styles.container}>
      <h2>Counter</h2>
      <div style={styles.count}>{count}</div>

      <div style={styles.buttons}>
        <button onClick={() => dispatch({ type: INCREMENT })}>+</button>
        <button onClick={() => dispatch({ type: DECREMENT })}>-</button>
        <button onClick={() => dispatch({ type: RESET })}>Reset</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    border: '1px solid #ddd',
    padding: '20px',
    borderRadius: '8px',
    marginBottom: '20px'
  },
  count: {
    fontSize: '48px',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: '20px 0'
  },
  buttons: {
    display: 'flex',
    gap: '10px',
    justifyContent: 'center'
  }
};

export default Counter;
```

Create `components/TodoList.js`:

```javascript
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_TODO, REMOVE_TODO } from '../store';

function TodoList() {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();
  const [input, setInput] = useState('');

  const handleAdd = () => {
    if (input.trim()) {
      dispatch({ type: ADD_TODO, payload: input });
      setInput('');
    }
  };

  return (
    <div style={styles.container}>
      <h2>Todo List</h2>

      <div style={styles.inputGroup}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleAdd()}
          placeholder="Add todo..."
          style={styles.input}
        />
        <button onClick={handleAdd} style={styles.addBtn}>Add</button>
      </div>

      <ul style={styles.list}>
        {todos.map(todo => (
          <li key={todo.id} style={styles.item}>
            <span>{todo.text}</span>
            <button
              onClick={() => dispatch({ type: REMOVE_TODO, payload: todo.id })}
              style={styles.deleteBtn}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      {todos.length === 0 && <p>No todos yet</p>}
    </div>
  );
}

const styles = {
  container: {
    border: '1px solid #ddd',
    padding: '20px',
    borderRadius: '8px'
  },
  inputGroup: {
    display: 'flex',
    gap: '10px',
    marginBottom: '20px'
  },
  input: {
    flex: 1,
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px'
  },
  addBtn: {
    padding: '10px 20px',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  },
  list: {
    listStyle: 'none',
    padding: 0
  },
  item: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px',
    borderBottom: '1px solid #eee'
  },
  deleteBtn: {
    backgroundColor: '#dc3545',
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '4px',
    cursor: 'pointer'
  }
};

export default TodoList;
```

**Tasks:**
- [ ] Install redux and react-redux
- [ ] Create store with reducer
- [ ] Wrap app with Provider
- [ ] Create Counter component
- [ ] Use useSelector to access state
- [ ] Use useDispatch to dispatch actions
- [ ] Test counter functionality
- [ ] Create TodoList component
- [ ] Add and remove todos

---

## Option 2: Zustand (Lightweight State Management)

### Setup

```bash
npm install zustand
```

---

## Exercise 2: Zustand (Simpler Alternative)

**Objective:** Use Zustand for simpler state management

Create `store.js` (Zustand version):

```javascript
import { create } from 'zustand';

export const useStore = create((set) => ({
  count: 0,
  todos: [],

  // Counter actions
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),

  // Todo actions
  addTodo: (text) => set((state) => ({
    todos: [
      ...state.todos,
      {
        id: Date.now(),
        text,
        completed: false
      }
    ]
  })),

  removeTodo: (id) => set((state) => ({
    todos: state.todos.filter(todo => todo.id !== id)
  })),

  toggleTodo: (id) => set((state) => ({
    todos: state.todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
  }))
}));
```

Create `components/Counter.js` (Zustand version):

```javascript
import { useStore } from '../store';

function Counter() {
  const { count, increment, decrement, reset } = useStore();

  return (
    <div style={styles.container}>
      <h2>Counter (Zustand)</h2>
      <div style={styles.count}>{count}</div>

      <div style={styles.buttons}>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    border: '1px solid #ddd',
    padding: '20px',
    borderRadius: '8px',
    marginBottom: '20px'
  },
  count: {
    fontSize: '48px',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: '20px 0'
  },
  buttons: {
    display: 'flex',
    gap: '10px',
    justifyContent: 'center'
  }
};

export default Counter;
```

Create `components/TodoList.js` (Zustand version):

```javascript
import { useState } from 'react';
import { useStore } from '../store';

function TodoList() {
  const { todos, addTodo, removeTodo, toggleTodo } = useStore();
  const [input, setInput] = useState('');

  const handleAdd = () => {
    if (input.trim()) {
      addTodo(input);
      setInput('');
    }
  };

  return (
    <div style={styles.container}>
      <h2>Todo List (Zustand)</h2>

      <div style={styles.inputGroup}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleAdd()}
          placeholder="Add todo..."
          style={styles.input}
        />
        <button onClick={handleAdd} style={styles.addBtn}>Add</button>
      </div>

      <ul style={styles.list}>
        {todos.map(todo => (
          <li key={todo.id} style={styles.item}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <span style={todo.completed ? styles.completed : {}}>
              {todo.text}
            </span>
            <button
              onClick={() => removeTodo(todo.id)}
              style={styles.deleteBtn}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      {todos.length === 0 && <p>No todos yet</p>}
    </div>
  );
}

const styles = {
  container: {
    border: '1px solid #ddd',
    padding: '20px',
    borderRadius: '8px'
  },
  inputGroup: {
    display: 'flex',
    gap: '10px',
    marginBottom: '20px'
  },
  input: {
    flex: 1,
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px'
  },
  addBtn: {
    padding: '10px 20px',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  },
  list: {
    listStyle: 'none',
    padding: 0
  },
  item: {
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
    padding: '10px',
    borderBottom: '1px solid #eee'
  },
  completed: {
    textDecoration: 'line-through',
    color: '#999'
  },
  deleteBtn: {
    marginLeft: 'auto',
    backgroundColor: '#dc3545',
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '4px',
    cursor: 'pointer'
  }
};

export default TodoList;
```

**Tasks:**
- [ ] Install zustand
- [ ] Create store with create()
- [ ] Create Counter component
- [ ] Create TodoList component with toggle
- [ ] Notice simpler syntax vs Redux
- [ ] Compare both approaches

---

## Exercise 3: Comparing Redux vs Zustand

**Objective:** Understand pros and cons of each

| Feature            | Redux     | Zustand      |
| ------------------ | --------- | ------------ |
| **Boilerplate**    | High      | Low          |
| **Learning curve** | Steep     | Gentle       |
| **Bundle size**    | Larger    | Smaller      |
| **DevTools**       | Excellent | Good         |
| **Middleware**     | Built-in  | Manual setup |
| **Scalability**    | Excellent | Good         |
| **Setup time**     | Long      | Quick        |

**When to use Redux:**
- Large, complex applications
- Team already familiar with it
- Need extensive DevTools
- Complex async logic

**When to use Zustand:**
- Smaller to medium projects
- Simple to moderate state needs
- Want quick setup
- Prefer minimal boilerplate

---

## Challenge: Build Shopping Cart with State Management

### Requirements:
1. Global cart state using Redux or Zustand
2. Features:
   - Add items to cart
   - Remove items
   - Update quantities
   - Calculate total
   - Persist to localStorage

3. Components:
   - Product list
   - Cart display
   - Cart summary

---

## 🎯 Summary

By completing these exercises, you've practiced:
- ✅ Redux fundamentals
- ✅ Creating stores and reducers
- ✅ Dispatching actions
- ✅ Using useSelector and useDispatch
- ✅ Zustand as lightweight alternative
- ✅ Comparing state management solutions
- ✅ Global state management patterns

---

**Next:** Ready for Days 13-15? Time for Final Projects! 🚀
