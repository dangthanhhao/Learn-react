# 📝 Day 10 Exercises - Testing with React Testing Library

**Difficulty:** ⭐⭐⭐⭐ (Advanced)
**Time:** 90-180 minutes
**Skills:** Unit testing, integration testing, React Testing Library, Jest

------------------------------------------------------------------------

## Setup

React Testing Library comes with Create React App. No additional installation needed!

---

## Exercise 1: Testing Simple Components

**Objective:** Write your first component tests

Create `Button.js`:

```javascript
function Button({ label, onClick, disabled }) {
  return (
    <button onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
}

export default Button;
```

Create `Button.test.js`:

```javascript
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button';

describe('Button Component', () => {

  test('renders button with label', () => {
    render(<Button label="Click me" onClick={() => {}} />);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  test('calls onClick when clicked', async () => {
    const mockClick = jest.fn();
    render(<Button label="Click me" onClick={mockClick} />);

    const button = screen.getByText('Click me');
    await userEvent.click(button);

    expect(mockClick).toHaveBeenCalledTimes(1);
  });

  test('disables button when disabled prop is true', () => {
    render(<Button label="Click me" onClick={() => {}} disabled={true} />);

    const button = screen.getByText('Click me');
    expect(button).toBeDisabled();
  });

  test('enables button when disabled prop is false', () => {
    render(<Button label="Click me" onClick={() => {}} disabled={false} />);

    const button = screen.getByText('Click me');
    expect(button).not.toBeDisabled();
  });

});
```

**Run tests:**
```bash
npm test
```

**Tasks:**
- [ ] Create Button component
- [ ] Create Button.test.js
- [ ] Run tests and see them pass
- [ ] Understand render and screen
- [ ] Understand expect assertions
- [ ] Add more test cases
- [ ] Test all props

---

## Exercise 2: Testing with State

**Objective:** Test components that use state

Create `Counter.js`:

```javascript
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;
```

Create `Counter.test.js`:

```javascript
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from './Counter';

describe('Counter Component', () => {

  test('renders initial count of 0', () => {
    render(<Counter />);
    expect(screen.getByText('Count: 0')).toBeInTheDocument();
  });

  test('increments count when increment button is clicked', async () => {
    render(<Counter />);

    const incrementBtn = screen.getByText('Increment');
    await userEvent.click(incrementBtn);

    expect(screen.getByText('Count: 1')).toBeInTheDocument();
  });

  test('decrements count when decrement button is clicked', async () => {
    render(<Counter />);

    const decrementBtn = screen.getByText('Decrement');
    await userEvent.click(decrementBtn);

    expect(screen.getByText('Count: -1')).toBeInTheDocument();
  });

  test('resets count to 0 when reset button is clicked', async () => {
    render(<Counter />);

    const incrementBtn = screen.getByText('Increment');
    await userEvent.click(incrementBtn);
    await userEvent.click(incrementBtn);

    const resetBtn = screen.getByText('Reset');
    await userEvent.click(resetBtn);

    expect(screen.getByText('Count: 0')).toBeInTheDocument();
  });

  test('increments count multiple times', async () => {
    render(<Counter />);

    const incrementBtn = screen.getByText('Increment');
    await userEvent.click(incrementBtn);
    await userEvent.click(incrementBtn);
    await userEvent.click(incrementBtn);

    expect(screen.getByText('Count: 3')).toBeInTheDocument();
  });

});
```

**Tasks:**
- [ ] Create Counter component
- [ ] Create Counter.test.js
- [ ] Test initial state
- [ ] Test increment
- [ ] Test decrement
- [ ] Test reset
- [ ] Test multiple clicks
- [ ] Run all tests

---

## Exercise 3: Testing Forms

**Objective:** Test form components and validation

Create `LoginForm.js`:

```javascript
import { useState } from 'react';

function LoginForm({ onSubmit }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("All fields are required");
      return;
    }

    if (!email.includes('@')) {
      setError("Invalid email");
      return;
    }

    setError("");
    onSubmit({ email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
```

Create `LoginForm.test.js`:

```javascript
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginForm from './LoginForm';

describe('LoginForm Component', () => {

  test('renders form fields', () => {
    const mockSubmit = jest.fn();
    render(<LoginForm onSubmit={mockSubmit} />);

    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
  });

  test('shows error when fields are empty', async () => {
    const mockSubmit = jest.fn();
    render(<LoginForm onSubmit={mockSubmit} />);

    const submitBtn = screen.getByRole('button', { name: /login/i });
    await userEvent.click(submitBtn);

    expect(screen.getByText(/all fields are required/i)).toBeInTheDocument();
    expect(mockSubmit).not.toHaveBeenCalled();
  });

  test('shows error for invalid email', async () => {
    const mockSubmit = jest.fn();
    render(<LoginForm onSubmit={mockSubmit} />);

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const submitBtn = screen.getByRole('button', { name: /login/i });

    await userEvent.type(emailInput, 'invalidemail');
    await userEvent.type(passwordInput, 'password123');
    await userEvent.click(submitBtn);

    expect(screen.getByText(/invalid email/i)).toBeInTheDocument();
    expect(mockSubmit).not.toHaveBeenCalled();
  });

  test('submits form with valid data', async () => {
    const mockSubmit = jest.fn();
    render(<LoginForm onSubmit={mockSubmit} />);

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const submitBtn = screen.getByRole('button', { name: /login/i });

    await userEvent.type(emailInput, 'test@example.com');
    await userEvent.type(passwordInput, 'password123');
    await userEvent.click(submitBtn);

    expect(mockSubmit).toHaveBeenCalledWith({
      email: 'test@example.com',
      password: 'password123'
    });
  });

  test('clears error message on successful submission', async () => {
    const mockSubmit = jest.fn();
    const { rerender } = render(<LoginForm onSubmit={mockSubmit} />);

    // First, submit empty form to trigger error
    const submitBtn = screen.getByRole('button', { name: /login/i });
    await userEvent.click(submitBtn);
    expect(screen.getByText(/all fields are required/i)).toBeInTheDocument();

    // Then fill in form and submit
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);

    await userEvent.type(emailInput, 'test@example.com');
    await userEvent.type(passwordInput, 'password123');
    await userEvent.click(submitBtn);

    expect(screen.queryByText(/all fields are required/i)).not.toBeInTheDocument();
  });

});
```

**Tasks:**
- [ ] Create LoginForm component
- [ ] Create LoginForm.test.js
- [ ] Test form renders
- [ ] Test empty field validation
- [ ] Test email validation
- [ ] Test successful submission
- [ ] Test error clearing
- [ ] Run tests

---

## Exercise 4: Testing API Calls

**Objective:** Test components that fetch data

Create `UserList.js`:

```javascript
import { useState, useEffect } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default UserList;
```

Create `UserList.test.js`:

```javascript
import { render, screen, waitFor } from '@testing-library/react';
import UserList from './UserList';

describe('UserList Component', () => {

  beforeEach(() => {
    // Mock fetch
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  test('shows loading state initially', () => {
    global.fetch.mockImplementation(() =>
      new Promise(() => {}) // Never resolves
    );

    render(<UserList />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  test('renders users after loading', async () => {
    const mockUsers = [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' }
    ];

    global.fetch.mockResolvedValueOnce({
      json: async () => mockUsers
    });

    render(<UserList />);

    await waitFor(() => {
      expect(screen.getByText('Alice')).toBeInTheDocument();
      expect(screen.getByText('Bob')).toBeInTheDocument();
    });
  });

  test('shows error message on fetch failure', async () => {
    global.fetch.mockRejectedValueOnce(
      new Error('Network error')
    );

    render(<UserList />);

    await waitFor(() => {
      expect(screen.getByText(/Error: Network error/)).toBeInTheDocument();
    });
  });

});
```

**Tasks:**
- [ ] Create UserList component
- [ ] Create UserList.test.js
- [ ] Test loading state
- [ ] Mock fetch
- [ ] Test data loading
- [ ] Test error handling
- [ ] Use waitFor
- [ ] Run tests

---

## 🎯 Summary

By completing these exercises, you've practiced:
- ✅ Testing with React Testing Library
- ✅ render and screen queries
- ✅ userEvent for interactions
- ✅ jest.fn() for mocks
- ✅ Testing components with state
- ✅ Testing forms and validation
- ✅ Mocking API calls
- ✅ waitFor for async operations

---

## 💡 Testing Best Practices

✅ Test user behavior, not implementation
✅ Use semantic queries (getByRole, getByLabelText)
✅ Avoid testing implementation details
✅ Mock external dependencies
✅ Keep tests focused on one thing
✅ Use meaningful test descriptions
✅ Aim for high coverage gradually

---

**Next:** Ready for Day 11? Time for Advanced Hooks! 🚀
