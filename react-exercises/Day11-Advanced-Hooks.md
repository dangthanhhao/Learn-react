# 📝 Day 11 Exercises - Advanced Hooks (useReducer, useRef, useCallback, useMemo)

**Difficulty:** ⭐⭐⭐⭐⭐ (Advanced)
**Time:** 120-180 minutes
**Skills:** useReducer, useRef, useCallback, useMemo, custom hooks

------------------------------------------------------------------------

## Exercise 1: useReducer for Complex State Management

**Objective:** Master useReducer for complex state logic

Create `FormWithReducer.js`:

```javascript
import { useReducer } from 'react';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  errors: {}
};

function formReducer(state, action) {
  switch (action.type) {
    case 'SET_FIELD':
      return {
        ...state,
        [action.payload.field]: action.payload.value,
        errors: { ...state.errors, [action.payload.field]: '' }
      };

    case 'SET_ERROR':
      return {
        ...state,
        errors: { ...state.errors, [action.payload.field]: action.payload.message }
      };

    case 'RESET':
      return initialState;

    default:
      return state;
  }
}

function FormWithReducer() {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const validate = () => {
    const newErrors = {};

    if (state.firstName.length < 2) {
      newErrors.firstName = 'First name must be at least 2 characters';
    }
    if (state.lastName.length < 2) {
      newErrors.lastName = 'Last name must be at least 2 characters';
    }
    if (!state.email.includes('@')) {
      newErrors.email = 'Invalid email';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validate();
    if (Object.keys(errors).length > 0) {
      Object.entries(errors).forEach(([field, message]) => {
        dispatch({
          type: 'SET_ERROR',
          payload: { field, message }
        });
      });
      return;
    }

    console.log('Form submitted:', state);
    alert('Form submitted!');
    dispatch({ type: 'RESET' });
  };

  const handleChange = (field, value) => {
    dispatch({
      type: 'SET_FIELD',
      payload: { field, value }
    });
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2>useReducer Form</h2>

      <div style={styles.formGroup}>
        <label>First Name:</label>
        <input
          value={state.firstName}
          onChange={(e) => handleChange('firstName', e.target.value)}
          style={state.errors.firstName ? styles.inputError : styles.input}
        />
        {state.errors.firstName && (
          <p style={styles.error}>{state.errors.firstName}</p>
        )}
      </div>

      <div style={styles.formGroup}>
        <label>Last Name:</label>
        <input
          value={state.lastName}
          onChange={(e) => handleChange('lastName', e.target.value)}
          style={state.errors.lastName ? styles.inputError : styles.input}
        />
        {state.errors.lastName && (
          <p style={styles.error}>{state.errors.lastName}</p>
        )}
      </div>

      <div style={styles.formGroup}>
        <label>Email:</label>
        <input
          type="email"
          value={state.email}
          onChange={(e) => handleChange('email', e.target.value)}
          style={state.errors.email ? styles.inputError : styles.input}
        />
        {state.errors.email && (
          <p style={styles.error}>{state.errors.email}</p>
        )}
      </div>

      <div style={styles.buttons}>
        <button type="submit" style={styles.submitBtn}>Submit</button>
        <button
          type="button"
          onClick={() => dispatch({ type: 'RESET' })}
          style={styles.resetBtn}
        >
          Reset
        </button>
      </div>

      <details style={styles.debug}>
        <summary>View State</summary>
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </details>
    </form>
  );
}

const styles = {
  form: {
    maxWidth: '500px',
    margin: '20px',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px'
  },
  formGroup: {
    marginBottom: '20px'
  },
  input: {
    width: '100%',
    padding: '10px',
    marginTop: '5px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    boxSizing: 'border-box'
  },
  inputError: {
    width: '100%',
    padding: '10px',
    marginTop: '5px',
    border: '2px solid #dc3545',
    borderRadius: '4px',
    boxSizing: 'border-box'
  },
  error: {
    color: '#dc3545',
    fontSize: '12px',
    marginTop: '5px'
  },
  buttons: {
    display: 'flex',
    gap: '10px'
  },
  submitBtn: {
    flex: 1,
    padding: '12px',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  },
  resetBtn: {
    flex: 1,
    padding: '12px',
    backgroundColor: '#6c757d',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  },
  debug: {
    marginTop: '20px',
    padding: '10px',
    backgroundColor: '#f5f5f5',
    borderRadius: '4px'
  }
};

export default FormWithReducer;
```

**Tasks:**
- [ ] Create form with useReducer
- [ ] Test field updates
- [ ] Test validation
- [ ] Test error display
- [ ] Test reset
- [ ] Understand action types
- [ ] Add more complex logic

---

## Exercise 2: useRef for DOM Access

**Objective:** Learn useRef for direct DOM manipulation

Create `TextareaWithCharCount.js`:

```javascript
import { useRef, useState } from 'react';

function TextareaWithCharCount() {
  const textareaRef = useRef(null);
  const [charCount, setCharCount] = useState(0);
  const [wordCount, setWordCount] = useState(0);

  const handleChange = () => {
    const text = textareaRef.current.value;
    setCharCount(text.length);
    setWordCount(text.trim().split(/\s+/).filter(w => w).length);
  };

  const handleFocus = () => {
    textareaRef.current.style.borderColor = '#007bff';
  };

  const handleBlur = () => {
    textareaRef.current.style.borderColor = '#ddd';
  };

  const handleClear = () => {
    textareaRef.current.value = '';
    setCharCount(0);
    setWordCount(0);
    textareaRef.current.focus();
  };

  const handleSelectAll = () => {
    textareaRef.current.select();
  };

  return (
    <div style={styles.container}>
      <h2>Textarea with useRef</h2>

      <textarea
        ref={textareaRef}
        onchange={handleChange}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder="Type something..."
        style={styles.textarea}
      />

      <div style={styles.stats}>
        <p>Characters: {charCount}</p>
        <p>Words: {wordCount}</p>
      </div>

      <div style={styles.buttons}>
        <button onClick={handleSelectAll} style={styles.button}>
          Select All
        </button>
        <button onClick={handleClear} style={styles.button}>
          Clear
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '600px',
    margin: '20px',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px'
  },
  textarea: {
    width: '100%',
    height: '200px',
    padding: '10px',
    fontSize: '16px',
    border: '2px solid #ddd',
    borderRadius: '4px',
    fontFamily: 'monospace',
    boxSizing: 'border-box',
    transition: 'border-color 0.3s'
  },
  stats: {
    display: 'flex',
    gap: '30px',
    marginTop: '15px',
    padding: '15px',
    backgroundColor: '#f5f5f5',
    borderRadius: '4px'
  },
  buttons: {
    display: 'flex',
    gap: '10px',
    marginTop: '15px'
  },
  button: {
    flex: 1,
    padding: '10px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  }
};

export default TextareaWithCharCount;
```

**Tasks:**
- [ ] Create textarea component
- [ ] Use useRef to access DOM
- [ ] Count characters
- [ ] Count words
- [ ] Manipulate styles with ref
- [ ] Test focus/blur
- [ ] Test clear functionality

---

## Exercise 3: useCallback for Performance

**Objective:** Prevent unnecessary re-renders with useCallback

Create `CallbackExample.js`:

```javascript
import { useCallback, useState } from 'react';

function CallbackExample() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');

  // Without useCallback - function recreated on every render
  const handleClickWithout = () => {
    setCount(count + 1);
  };

  // With useCallback - same function reference if dependencies don't change
  const handleClickWith = useCallback(() => {
    setCount(c => c + 1);  // Use functional update to avoid dependency on count
  }, []);

  const handleSearch = useCallback((searchTerm) => {
    console.log('Searching for:', searchTerm);
    // Simulate API call
  }, []);

  return (
    <div style={styles.container}>
      <h2>useCallback Example</h2>

      <div style={styles.section}>
        <h3>Count: {count}</h3>
        <button onClick={handleClickWith} style={styles.button}>
          Increment (with useCallback)
        </button>
      </div>

      <div style={styles.section}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type to search..."
          style={styles.input}
        />
        <button
          onClick={() => handleSearch(input)}
          style={styles.button}
        >
          Search
        </button>
      </div>

      <ChildComponent onSearch={handleSearch} />

      <div style={styles.info}>
        <p>useCallback prevents child re-renders when passing functions as props</p>
      </div>
    </div>
  );
}

function ChildComponent({ onSearch }) {
  const [renderCount, setRenderCount] = useState(0);

  return (
    <div style={styles.child}>
      <h4>Child Component (renders: {renderCount})</h4>
      <button onClick={() => setRenderCount(renderCount + 1)}>
        Render count: {renderCount}
      </button>
      <p>onSearch function reference: stable with useCallback</p>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '600px',
    margin: '20px',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px'
  },
  section: {
    marginBottom: '20px',
    padding: '15px',
    backgroundColor: '#f9f9f9',
    borderRadius: '4px'
  },
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    boxSizing: 'border-box'
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  },
  child: {
    marginTop: '20px',
    padding: '15px',
    border: '2px solid #17a2b8',
    borderRadius: '4px',
    backgroundColor: '#f0f8f9'
  },
  info: {
    marginTop: '20px',
    padding: '10px',
    backgroundColor: '#e7f3ff',
    borderRadius: '4px',
    fontSize: '12px'
  }
};

export default CallbackExample;
```

**Tasks:**
- [ ] Create callback example
- [ ] Compare with and without useCallback
- [ ] Pass callbacks to child
- [ ] Test re-render behavior
- [ ] Understand closure
- [ ] Test dependencies

---

## Exercise 4: useMemo for Performance

**Objective:** Optimize expensive calculations with useMemo

Create `MemoExample.js`:

```javascript
import { useMemo, useState } from 'react';

function MemoExample() {
  const [count, setCount] = useState(0);
  const [numbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  // Expensive calculation without useMemo - runs on every render
  const sumWithoutMemo = () => {
    console.log('Calculating sum...');
    return numbers.reduce((a, b) => a + b, 0);
  };

  // Memoized calculation - only runs when numbers changes
  const sum = useMemo(() => {
    console.log('Calculating memoized sum...');
    return numbers.reduce((a, b) => a + b, 0);
  }, [numbers]);

  // Expensive list filter
  const filteredNumbers = useMemo(() => {
    console.log('Filtering numbers...');
    return numbers.filter(n => n > 5);
  }, [numbers]);

  return (
    <div style={styles.container}>
      <h2>useMemo Example</h2>

      <div style={styles.section}>
        <h3>Count: {count}</h3>
        <button onClick={() => setCount(count + 1)} style={styles.button}>
          Increment Count
        </button>
        <p>Changing count won't recalculate sum (check console)</p>
      </div>

      <div style={styles.section}>
        <h3>Memoized Sum: {sum}</h3>
        <p>Numbers: {numbers.join(', ')}</p>
      </div>

      <div style={styles.section}>
        <h3>Filtered Numbers (> 5): {filteredNumbers.join(', ')}</h3>
      </div>

      <div style={styles.info}>
        <p>Open console to see which calculations are running</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '600px',
    margin: '20px',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px'
  },
  section: {
    marginBottom: '20px',
    padding: '15px',
    backgroundColor: '#f9f9f9',
    borderRadius: '4px'
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  },
  info: {
    marginTop: '20px',
    padding: '10px',
    backgroundColor: '#e7f3ff',
    borderRadius: '4px',
    fontSize: '12px'
  }
};

export default MemoExample;
```

**Tasks:**
- [ ] Create useMemo example
- [ ] Compare memoized vs non-memoized
- [ ] Check console for function calls
- [ ] Test with dependencies
- [ ] Notice performance difference
- [ ] Understand when to use

---

## Challenge: Build a Custom Hook

### Create useLocalStorage Hook:

```javascript
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
}

// Usage:
function MyComponent() {
  const [name, setName] = useLocalStorage('name', '');

  return (
    <input
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder="Your name"
    />
  );
}
```

---

## 🎯 Summary

By completing these exercises, you've practiced:
- ✅ useReducer for complex state
- ✅ useRef for DOM access
- ✅ useCallback for function memoization
- ✅ useMemo for value memoization
- ✅ Performance optimization
- ✅ Custom hooks

---

**Next:** Ready for Day 12? Time for State Management! 🚀
