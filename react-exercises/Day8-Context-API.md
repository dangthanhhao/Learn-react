# 📝 Day 8 Exercises - Context API & Global State

**Difficulty:** ⭐⭐⭐⭐ (Advanced)
**Time:** 90-150 minutes
**Skills:** React Context, useContext, useReducer, global state management

------------------------------------------------------------------------

## Exercise 1: Basic Context API

**Objective:** Share state across components without prop drilling

Create `ThemeContext.js`:

```javascript
import { createContext, useState } from 'react';

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(prev => prev === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
```

Create `App.js`:

```javascript
import { ThemeProvider } from "./ThemeContext";
import AppContent from "./AppContent";

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
```

Create `AppContent.js`:

```javascript
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

function AppContent() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default AppContent;
```

Create `components/Header.js`:

```javascript
import { useContext } from 'react';
import { ThemeContext } from "../ThemeContext";

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const isDark = theme === "dark";

  return (
    <header style={{
      backgroundColor: isDark ? "#1a1a1a" : "#f0f0f0",
      color: isDark ? "#fff" : "#333",
      padding: "20px",
      borderBottom: `2px solid ${isDark ? "#333" : "#ddd"}`,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}>
      <h1>My App</h1>
      <button
        onClick={toggleTheme}
        style={{
          padding: "8px 15px",
          backgroundColor: isDark ? "#fff" : "#333",
          color: isDark ? "#333" : "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer"
        }}
      >
        {isDark ? "☀️ Light" : "🌙 Dark"}
      </button>
    </header>
  );
}

export default Header;
```

Create `components/MainContent.js`:

```javascript
import { useContext } from 'react';
import { ThemeContext } from "../ThemeContext";

function MainContent() {
  const { theme } = useContext(ThemeContext);

  const isDark = theme === "dark";

  return (
    <main style={{
      padding: "40px",
      backgroundColor: isDark ? "#0d0d0d" : "#fff",
      color: isDark ? "#f0f0f0" : "#333",
      minHeight: "500px"
    }}>
      <h2>Content Area</h2>
      <p>The theme is being used from Context API!</p>
      <p>Current theme: {theme}</p>
    </main>
  );
}

export default MainContent;
```

Create `components/Footer.js`:

```javascript
import { useContext } from 'react';
import { ThemeContext } from "../ThemeContext";

function Footer() {
  const { theme } = useContext(ThemeContext);

  const isDark = theme === "dark";

  return (
    <footer style={{
      backgroundColor: isDark ? "#1a1a1a" : "#f0f0f0",
      color: isDark ? "#f0f0f0" : "#333",
      padding: "20px",
      textAlign: "center",
      borderTop: `2px solid ${isDark ? "#333" : "#ddd"}`
    }}>
      <p>© 2024 My App | Theme: {theme}</p>
    </footer>
  );
}

export default Footer;
```

**Tasks:**
- [ ] Create all files in the folder structure
- [ ] Create ThemeProvider wrapper
- [ ] Use useContext in multiple components
- [ ] Test theme toggle from any component
- [ ] Notice: No prop drilling needed!
- [ ] Verify theme changes everywhere
- [ ] Understand how Context simplifies state

**Questions to Ask Copilot:**
- "How does createContext work?"
- "What does useContext do?"
- "When should I use Context vs props?"

---

## Exercise 2: User Authentication Context

**Objective:** Build a realistic authentication context

Create `AuthContext.js`:

```javascript
import { createContext, useState, useCallback } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = useCallback(async (email, password) => {
    try {
      setLoading(true);
      setError(null);

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      if (!email || !password) {
        throw new Error("Email and password are required");
      }

      // Simulate user data
      const userData = {
        id: 1,
        email,
        name: email.split('@')[0],
        role: "user"
      };

      setUser(userData);
      return userData;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    setError(null);
  }, []);

  const value = {
    user,
    loading,
    error,
    login,
    logout,
    isAuthenticated: !!user
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
```

Create `LoginPage.js`:

```javascript
import { useContext, useState } from 'react';
import { AuthContext } from "./AuthContext";

function LoginPage() {
  const { login, loading, error } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [localError, setLocalError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      setEmail("");
      setPassword("");
    } catch (err) {
      setLocalError(err.message);
    }
  };

  return (
    <div style={styles.container}>
      <h2>Login</h2>

      {(error || localError) && (
        <p style={styles.error}>{error || localError}</p>
      )}

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          disabled={loading}
          style={styles.input}
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          disabled={loading}
          style={styles.input}
        />

        <button
          type="submit"
          disabled={loading}
          style={styles.button}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>

      <p style={styles.demo}>
        Demo: Use any email and password
      </p>
    </div>
  );
}

function Dashboard() {
  const { user, logout } = useContext(AuthContext);

  return (
    <div style={styles.container}>
      <h2>Welcome, {user.name}!</h2>
      <p>Email: {user.email}</p>
      <p>Role: {user.role}</p>

      <button
        onClick={logout}
        style={styles.logoutButton}
      >
        Logout
      </button>
    </div>
  );
}

function AuthApp() {
  const { isAuthenticated, user } = useContext(AuthContext);

  return (
    <div>
      {isAuthenticated ? (
        <Dashboard />
      ) : (
        <LoginPage />
      )}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "400px",
    margin: "40px auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px"
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ddd",
    borderRadius: "4px"
  },
  button: {
    padding: "12px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px"
  },
  logoutButton: {
    padding: "12px 20px",
    backgroundColor: "#dc3545",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
    marginTop: "20px"
  },
  error: {
    color: "#dc3545",
    backgroundColor: "#f8d7da",
    padding: "10px",
    borderRadius: "4px",
    marginBottom: "15px"
  },
  demo: {
    fontSize: "12px",
    color: "#666",
    marginTop: "15px",
    fontStyle: "italic"
  }
};

export default AuthApp;
```

Use in `App.js`:

```javascript
import { AuthProvider } from "./AuthContext";
import AuthApp from "./LoginPage";

function App() {
  return (
    <AuthProvider>
      <AuthApp />
    </AuthProvider>
  );
}

export default App;
```

**Tasks:**
- [ ] Create AuthContext and AuthProvider
- [ ] Build login form
- [ ] Test login functionality
- [ ] Test logout
- [ ] Verify user data persists
- [ ] Test error handling
- [ ] Add loading indicator

**Questions to Ask Copilot:**
- "How do we handle async operations in context?"
- "How do we persist auth state?"
- [ ] "What's the best way to structure auth context?"

---

## Exercise 3: useReducer for Complex State

**Objective:** Manage complex state with useReducer

Create `NotificationContext.js`:

```javascript
import { createContext, useReducer } from 'react';

export const NotificationContext = createContext();

const initialState = {
  notifications: []
};

function notificationReducer(state, action) {
  switch (action.type) {
    case 'ADD_NOTIFICATION':
      return {
        ...state,
        notifications: [
          ...state.notifications,
          {
            id: Date.now(),
            message: action.payload.message,
            type: action.payload.type || 'info',
            timestamp: new Date()
          }
        ]
      };

    case 'REMOVE_NOTIFICATION':
      return {
        ...state,
        notifications: state.notifications.filter(
          n => n.id !== action.payload
        )
      };

    case 'CLEAR_ALL':
      return { notifications: [] };

    default:
      return state;
  }
}

export function NotificationProvider({ children }) {
  const [state, dispatch] = useReducer(
    notificationReducer,
    initialState
  );

  const addNotification = (message, type = 'info') => {
    dispatch({ type: 'ADD_NOTIFICATION', payload: { message, type } });
  };

  const removeNotification = (id) => {
    dispatch({ type: 'REMOVE_NOTIFICATION', payload: id });
  };

  const clearAll = () => {
    dispatch({ type: 'CLEAR_ALL' });
  };

  return (
    <NotificationContext.Provider value={{
      notifications: state.notifications,
      addNotification,
      removeNotification,
      clearAll
    }}>
      {children}
    </NotificationContext.Provider>
  );
}
```

Create `NotificationContainer.js`:

```javascript
import { useContext, useEffect } from 'react';
import { NotificationContext } from "./NotificationContext";

function NotificationContainer() {
  const { notifications, removeNotification } = useContext(NotificationContext);

  return (
    <div style={styles.container}>
      {notifications.map(notification => (
        <Notification
          key={notification.id}
          notification={notification}
          onClose={() => removeNotification(notification.id)}
        />
      ))}
    </div>
  );
}

function Notification({ notification, onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 5000); // Auto-remove after 5s
    return () => clearTimeout(timer);
  }, [onClose]);

  const typeStyles = {
    success: { backgroundColor: "#d4edda", color: "#155724", borderColor: "#28a745" },
    error: { backgroundColor: "#f8d7da", color: "#721c24", borderColor: "#dc3545" },
    warning: { backgroundColor: "#fff3cd", color: "#856404", borderColor: "#ffc107" },
    info: { backgroundColor: "#d1ecf1", color: "#0c5460", borderColor: "#17a2b8" }
  };

  return (
    <div style={{...styles.notification, ...typeStyles[notification.type]}}>
      <p>{notification.message}</p>
      <button onClick={onClose} style={styles.closeBtn}>✕</button>
    </div>
  );
}

const styles = {
  container: {
    position: "fixed",
    top: "20px",
    right: "20px",
    zIndex: 1000,
    display: "flex",
    flexDirection: "column",
    gap: "10px"
  },
  notification: {
    padding: "15px 20px",
    borderRadius: "8px",
    border: "1px solid",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    minWidth: "300px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
  },
  closeBtn: {
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: "18px",
    marginLeft: "20px"
  }
};

export default NotificationContainer;
```

Create `NotificationDemo.js`:

```javascript
import { useContext } from 'react';
import { NotificationContext } from "./NotificationContext";

function NotificationDemo() {
  const { addNotification } = useContext(NotificationContext);

  return (
    <div style={styles.container}>
      <h2>Notification Demo</h2>

      <button
        onClick={() => addNotification("Success!", "success")}
        style={{...styles.button, ...styles.successBtn}}
      >
        Success
      </button>

      <button
        onClick={() => addNotification("Something went wrong!", "error")}
        style={{...styles.button, ...styles.errorBtn}}
      >
        Error
      </button>

      <button
        onClick={() => addNotification("Warning: Check this", "warning")}
        style={{...styles.button, ...styles.warningBtn}}
      >
        Warning
      </button>

      <button
        onClick={() => addNotification("FYI: Information message", "info")}
        style={{...styles.button, ...styles.infoBtn}}
      >
        Info
      </button>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    maxWidth: "600px",
    margin: "20px auto"
  },
  button: {
    padding: "12px 20px",
    margin: "5px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    color: "white",
    fontWeight: "bold"
  },
  successBtn: { backgroundColor: "#28a745" },
  errorBtn: { backgroundColor: "#dc3545" },
  warningBtn: { backgroundColor: "#ffc107", color: "#333" },
  infoBtn: { backgroundColor: "#17a2b8" }
};

export default NotificationDemo;
```

Use in `App.js`:

```javascript
import { NotificationProvider } from "./NotificationContext";
import NotificationContainer from "./NotificationContainer";
import NotificationDemo from "./NotificationDemo";

function App() {
  return (
    <NotificationProvider>
      <NotificationContainer />
      <NotificationDemo />
    </NotificationProvider>
  );
}

export default App;
```

**Tasks:**
- [ ] Create notification context with useReducer
- [ ] Build notification display component
- [ ] Test adding notifications
- [ ] Test auto-dismiss (5 seconds)
- [ ] Test manual close
- [ ] Test different notification types
- [ ] Understand reducer pattern

**Questions to Ask Copilot:**
- "How does useReducer work?"
- "When should I use useReducer vs useState?"
- "How do I handle async in reducers?"

---

## Challenge: Build a Shopping Cart with Context

### Requirements:
1. Cart Context with useReducer:
   - Add item
   - Remove item
   - Update quantity
   - Clear cart

2. Components:
   - Product list (add to cart)
   - Cart display (show items)
   - Cart summary (total price)

3. Features:
   - Calculate total automatically
   - Show item count
   - Prevent negative quantities
   - Local storage persistence

---

## 🎯 Summary

By completing these exercises, you've practiced:
- ✅ Creating and using Context
- ✅ Provider pattern
- ✅ useContext hook
- ✅ useReducer for complex state
- ✅ Global state management
- ✅ Avoiding prop drilling

---

**Next:** Ready for Day 9? Time for React Router! 🚀
