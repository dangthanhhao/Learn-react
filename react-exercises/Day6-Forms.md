# 📝 Day 6 Exercises - Forms & Input Handling

**Difficulty:** ⭐⭐⭐ (Intermediate to Advanced)
**Time:** 60-120 minutes
**Skills:** Controlled inputs, form validation, submission handling

------------------------------------------------------------------------

## Exercise 1: Controlled Input Components

**Objective:** Master controlled form inputs

Create `LoginForm.js`:

```javascript
import { useState } from 'react';

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload

    if (!email || !password) {
      alert("Please fill in all fields");
      return;
    }

    console.log("Login attempt:", { email, password });
    setSubmitted(true);

    // Simulate API call
    setTimeout(() => {
      alert(`Welcome, ${email}!`);
      setEmail("");
      setPassword("");
      setSubmitted(false);
    }, 1000);
  };

  const handleReset = () => {
    setEmail("");
    setPassword("");
    setSubmitted(false);
  };

  return (
    <div style={styles.container}>
      <h2>Login Form</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            style={styles.input}
            disabled={submitted}
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="password">Password:</label>
          <div style={styles.passwordGroup}>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              style={styles.input}
              disabled={submitted}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              style={styles.toggleBtn}
              disabled={submitted}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        <div style={styles.buttonGroup}>
          <button
            type="submit"
            style={styles.submitBtn}
            disabled={submitted}
          >
            {submitted ? "Logging in..." : "Login"}
          </button>
          <button
            type="button"
            onClick={handleReset}
            style={styles.resetBtn}
            disabled={submitted}
          >
            Clear
          </button>
        </div>
      </form>

      <div style={styles.debug}>
        <p><strong>Current State:</strong></p>
        <pre>{JSON.stringify({ email, password }, null, 2)}</pre>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "400px",
    margin: "20px",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px"
  },
  form: {
    marginBottom: "20px"
  },
  formGroup: {
    marginBottom: "15px"
  },
  input: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ddd",
    borderRadius: "4px",
    boxSizing: "border-box"
  },
  passwordGroup: {
    display: "flex",
    gap: "10px",
    alignItems: "center"
  },
  toggleBtn: {
    padding: "10px 15px",
    fontSize: "14px"
  },
  buttonGroup: {
    display: "flex",
    gap: "10px"
  },
  submitBtn: {
    flex: 1,
    padding: "10px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer"
  },
  resetBtn: {
    flex: 1,
    padding: "10px",
    backgroundColor: "#6c757d",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer"
  },
  debug: {
    backgroundColor: "#f5f5f5",
    padding: "10px",
    borderRadius: "4px",
    fontSize: "12px"
  }
};

export default LoginForm;
```

**Tasks:**
- [ ] Create the LoginForm component
- [ ] Test typing in email and password
- [ ] Test show/hide password
- [ ] Test form submission
- [ ] Test reset button
- [ ] Watch the state debug output
- [ ] Try submitting with empty fields

**Questions to Ask Copilot:**
- "What does `e.preventDefault()` do?"
- "Why do we need controlled inputs?"
- "What's the difference between controlled and uncontrolled components?"

---

## Exercise 2: Form Validation

**Objective:** Add form validation logic

Create `RegistrationForm.js`:

```javascript
import { useState } from 'react';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    age: "",
    termsAccepted: false
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    // Username validation
    if (formData.username.length < 3) {
      newErrors.username = "Username must be at least 3 characters";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    // Password validation
    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    // Confirm password
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    // Age validation
    if (formData.age < 18) {
      newErrors.age = "You must be 18 or older";
    }

    // Terms validation
    if (!formData.termsAccepted) {
      newErrors.termsAccepted = "You must accept the terms";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      console.log("Form submitted:", formData);
      // Reset form
      setTimeout(() => {
        setFormData({
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
          age: "",
          termsAccepted: false
        });
        setSubmitted(false);
      }, 2000);
    } else {
      setErrors(newErrors);
    }
  };

  if (submitted) {
    return (
      <div style={styles.successMessage}>
        <h2>✓ Registration Successful!</h2>
        <p>Welcome, {formData.username}!</p>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h2>Registration Form</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        {/* Username */}
        <div style={styles.formGroup}>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            style={errors.username ? styles.inputError : styles.input}
          />
          {errors.username && (
            <p style={styles.errorText}>{errors.username}</p>
          )}
        </div>

        {/* Email */}
        <div style={styles.formGroup}>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={errors.email ? styles.inputError : styles.input}
          />
          {errors.email && <p style={styles.errorText}>{errors.email}</p>}
        </div>

        {/* Password */}
        <div style={styles.formGroup}>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={errors.password ? styles.inputError : styles.input}
          />
          {errors.password && (
            <p style={styles.errorText}>{errors.password}</p>
          )}
        </div>

        {/* Confirm Password */}
        <div style={styles.formGroup}>
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            style={errors.confirmPassword ? styles.inputError : styles.input}
          />
          {errors.confirmPassword && (
            <p style={styles.errorText}>{errors.confirmPassword}</p>
          )}
        </div>

        {/* Age */}
        <div style={styles.formGroup}>
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            style={errors.age ? styles.inputError : styles.input}
          />
          {errors.age && <p style={styles.errorText}>{errors.age}</p>}
        </div>

        {/* Terms */}
        <div style={styles.formGroup}>
          <label>
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
              style={{ marginRight: "10px" }}
            />
            I accept the terms and conditions
          </label>
          {errors.termsAccepted && (
            <p style={styles.errorText}>{errors.termsAccepted}</p>
          )}
        </div>

        <button type="submit" style={styles.submitBtn}>
          Register
        </button>
      </form>
    </div>
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
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px"
  },
  formGroup: {
    display: "flex",
    flexDirection: "column"
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ddd",
    borderRadius: "4px"
  },
  inputError: {
    padding: "10px",
    fontSize: "16px",
    border: "2px solid #dc3545",
    borderRadius: "4px",
    backgroundColor: "#f8f9fa"
  },
  errorText: {
    color: "#dc3545",
    fontSize: "12px",
    marginTop: "5px"
  },
  submitBtn: {
    padding: "12px",
    backgroundColor: "#28a745",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold"
  },
  successMessage: {
    maxWidth: "500px",
    margin: "20px",
    padding: "30px",
    backgroundColor: "#d4edda",
    border: "2px solid #28a745",
    borderRadius: "8px",
    textAlign: "center",
    color: "#155724"
  }
};

export default RegistrationForm;
```

**Tasks:**
- [ ] Create the RegistrationForm component
- [ ] Test each validation rule
- [ ] Test password matching
- [ ] Test email validation
- [ ] Try submitting with errors
- [ ] Fix errors and submit successfully
- [ ] Add more validation rules

**Questions to Ask Copilot:**
- "What are regular expressions and how do they work?"
- "How do we validate different input types?"
- "What's the best pattern for form validation?"

---

## Exercise 3: Dynamic Form Fields

**Objective:** Add/remove form fields dynamically

Create `DynamicForm.js`:

```javascript
import { useState } from 'react';

function DynamicForm() {
  const [fields, setFields] = useState([
    { id: 1, name: "John", email: "john@example.com" }
  ]);
  const [nextId, setNextId] = useState(2);

  const handleAddField = () => {
    const newField = { id: nextId, name: "", email: "" };
    setFields([...fields, newField]);
    setNextId(nextId + 1);
  };

  const handleRemoveField = (id) => {
    setFields(fields.filter(field => field.id !== id));
  };

  const handleFieldChange = (id, key, value) => {
    setFields(fields.map(field =>
      field.id === id ? { ...field, [key]: value } : field
    ));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", fields);
    alert(`Submitted ${fields.length} entries`);
  };

  return (
    <div style={styles.container}>
      <h2>Dynamic Form - Add Multiple Entries</h2>

      <form onSubmit={handleSubmit}>
        {fields.map((field, index) => (
          <div key={field.id} style={styles.fieldGroup}>
            <h4>Entry {index + 1}</h4>

            <input
              type="text"
              placeholder="Name"
              value={field.name}
              onChange={(e) =>
                handleFieldChange(field.id, "name", e.target.value)
              }
              style={styles.input}
            />

            <input
              type="email"
              placeholder="Email"
              value={field.email}
              onChange={(e) =>
                handleFieldChange(field.id, "email", e.target.value)
              }
              style={styles.input}
            />

            <button
              type="button"
              onClick={() => handleRemoveField(field.id)}
              style={styles.removeBtn}
            >
              Remove Entry
            </button>
          </div>
        ))}

        <button
          type="button"
          onClick={handleAddField}
          style={styles.addBtn}
        >
          + Add New Entry
        </button>

        <button type="submit" style={styles.submitBtn}>
          Submit All ({fields.length})
        </button>
      </form>

      <details style={styles.debug}>
        <summary>View JSON</summary>
        <pre>{JSON.stringify(fields, null, 2)}</pre>
      </details>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "600px",
    margin: "20px",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px"
  },
  fieldGroup: {
    padding: "15px",
    marginBottom: "15px",
    border: "1px solid #eee",
    borderRadius: "6px",
    backgroundColor: "#f9f9f9"
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    fontSize: "14px",
    border: "1px solid #ddd",
    borderRadius: "4px",
    boxSizing: "border-box"
  },
  removeBtn: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#dc3545",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer"
  },
  addBtn: {
    width: "100%",
    padding: "12px",
    marginBottom: "10px",
    backgroundColor: "#17a2b8",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold"
  },
  submitBtn: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#28a745",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold"
  },
  debug: {
    marginTop: "20px",
    padding: "10px",
    backgroundColor: "#f5f5f5",
    borderRadius: "4px"
  }
};

export default DynamicForm;
```

**Tasks:**
- [ ] Create the DynamicForm component
- [ ] Add new form entries
- [ ] Remove entries
- [ ] Edit entries
- [ ] View JSON output
- [ ] Submit form with multiple entries
- [ ] Notice how state updates work

**Questions to Ask Copilot:**
- "How do we update nested objects in state?"
- "What's the best way to manage dynamic arrays?"

---

## Challenge: Build a Survey Form

### Requirements:
1. Create a multi-field survey form with:
   - Text input (name)
   - Email input
   - Radio buttons (rating 1-5)
   - Select dropdown (category)
   - Textarea (comments)
   - Checkbox (newsletter signup)

2. Validation:
   - All fields required
   - Valid email format
   - Comments at least 10 characters

3. Features:
   - Show validation errors
   - Success message on submit
   - Reset form functionality
   - Display progress indicator

---

## 🎯 Summary

By completing these exercises, you've practiced:
- ✅ Controlled inputs
- ✅ Form submission handling
- ✅ Form validation
- ✅ Error messages and display
- ✅ Dynamic form fields
- ✅ Complex state management

---

**Next:** Ready for Day 7? Time for Component Composition! 🚀
