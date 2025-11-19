# 📝 Day 5 Exercises - useEffect & Data Fetching

**Difficulty:** ⭐⭐⭐ (Intermediate to Advanced)
**Time:** 90-150 minutes
**Skills:** useEffect, API calls, loading/error states, dependencies

------------------------------------------------------------------------

## Exercise 1: Basic useEffect - Side Effects

**Objective:** Understand useEffect and its dependency array

Create `EffectExample.js`:

```javascript
import { useState, useEffect } from 'react';

function EffectExample() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  // Runs after EVERY render
  useEffect(() => {
    console.log("Component rendered or state changed");
    document.title = `Count: ${count}`;
  });

  // Runs only on mount
  useEffect(() => {
    console.log("Component mounted!");
    return () => console.log("Component will unmount");
  }, []);

  // Runs when count changes
  useEffect(() => {
    console.log(`Count is now: ${count}`);
    if (count > 5) {
      setMessage("Count is getting high!");
    } else {
      setMessage("");
    }
  }, [count]);

  return (
    <div style={styles.container}>
      <h2>useEffect Examples</h2>

      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>

      {message && <p style={styles.warning}>{message}</p>}

      <details style={styles.details}>
        <summary>Console output (open DevTools to see)</summary>
        <p>- Check browser console to see useEffect logs</p>
        <p>- Watch the document title change</p>
      </details>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    maxWidth: "400px",
    margin: "20px"
  },
  warning: {
    color: "red",
    fontWeight: "bold",
    marginTop: "10px"
  },
  details: {
    marginTop: "20px",
    padding: "10px",
    backgroundColor: "#f5f5f5"
  }
};

export default EffectExample;
```

**Tasks:**
- [ ] Create the component
- [ ] Open DevTools console
- [ ] Increment count and watch logs
- [ ] Refresh page to see mount/unmount
- [ ] Understand dependency array
- [ ] Test all three useEffect examples
- [ ] Notice document title changes

**Questions to Ask Copilot:**
- "What are dependencies and why do we need them?"
- "What's the difference between `[]`, `[count]`, and no array?"
- "What is cleanup in useEffect?"

---

## Exercise 2: Fetching Data from API

**Objective:** Fetch and display real data

Create `PostList.js`:

```javascript
import { useState, useEffect } from 'react';

function PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data
    const fetchPosts = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          'https://jsonplaceholder.typicode.com/posts?_limit=10'
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError(err.message);
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []); // Empty array = run once on mount

  // Loading state
  if (loading) {
    return <div style={styles.status}>Loading posts...</div>;
  }

  // Error state
  if (error) {
    return <div style={styles.error}>Error: {error}</div>;
  }

  // Success state
  return (
    <div style={styles.container}>
      <h2>Posts from JSONPlaceholder</h2>
      <p>Loaded {posts.length} posts</p>

      <div>
        {posts.map(post => (
          <article key={post.id} style={styles.post}>
            <h3>{post.title}</h3>
            <p>{post.body.substring(0, 100)}...</p>
            <small>Post ID: {post.id}</small>
          </article>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "600px",
    margin: "20px",
    padding: "20px"
  },
  post: {
    border: "1px solid #eee",
    padding: "15px",
    marginBottom: "15px",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9"
  },
  status: {
    padding: "20px",
    textAlign: "center",
    color: "#007bff"
  },
  error: {
    padding: "20px",
    backgroundColor: "#f8d7da",
    color: "#721c24",
    borderRadius: "8px",
    margin: "20px"
  }
};

export default PostList;
```

**Tasks:**
- [ ] Create the PostList component
- [ ] Test loading state
- [ ] Wait for data to load
- [ ] Display posts
- [ ] Open DevTools Network tab to see request
- [ ] Change the URL to get different data
- [ ] Add error handling by changing URL
- [ ] Try fetching different endpoints

**Questions to Ask Copilot:**
- "What is async/await?"
- "How do we handle loading and error states?"
- "What does `.json()` do?"

**API Endpoints to try:**
```
https://jsonplaceholder.typicode.com/posts
https://jsonplaceholder.typicode.com/users
https://jsonplaceholder.typicode.com/comments
https://jsonplaceholder.typicode.com/todos
```

---

## Exercise 3: Refetchable API with Button

**Objective:** Learn to refetch data on demand

Create `UserSearch.js`:

```javascript
import { useState, useEffect } from 'react';

function UserSearch() {
  const [userId, setUserId] = useState(1);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}`
        );

        if (!response.ok) {
          throw new Error("User not found");
        }

        const data = await response.json();
        setUser(data);
      } catch (err) {
        setError(err.message);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]); // Refetch when userId changes

  const handleNext = () => {
    if (userId < 10) setUserId(userId + 1);
  };

  const handlePrevious = () => {
    if (userId > 1) setUserId(userId - 1);
  };

  return (
    <div style={styles.container}>
      <h2>User Search (ID: {userId})</h2>

      <div style={styles.controls}>
        <button onClick={handlePrevious} disabled={userId === 1}>
          ← Previous
        </button>
        <input
          type="number"
          min="1"
          max="10"
          value={userId}
          onChange={(e) => setUserId(parseInt(e.target.value))}
          style={styles.input}
        />
        <button onClick={handleNext} disabled={userId === 10}>
          Next →
        </button>
      </div>

      {loading && <p style={styles.status}>Loading...</p>}

      {error && <p style={styles.error}>Error: {error}</p>}

      {user && !loading && (
        <div style={styles.userCard}>
          <h3>{user.name}</h3>
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Website:</strong> {user.website}</p>
          <p><strong>Company:</strong> {user.company.name}</p>
        </div>
      )}
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
  controls: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
    alignItems: "center"
  },
  input: {
    padding: "8px",
    fontSize: "16px",
    width: "60px"
  },
  userCard: {
    backgroundColor: "#f9f9f9",
    padding: "20px",
    borderRadius: "8px",
    border: "1px solid #eee"
  },
  status: {
    color: "#007bff",
    textAlign: "center"
  },
  error: {
    color: "#dc3545",
    backgroundColor: "#f8d7da",
    padding: "10px",
    borderRadius: "4px"
  }
};

export default UserSearch;
```

**Tasks:**
- [ ] Create the UserSearch component
- [ ] Test previous/next buttons
- [ ] Test typing user ID
- [ ] Watch Network tab during fetch
- [ ] Test error state (ID 11+)
- [ ] Verify dependency on userId triggers refetch
- [ ] Add more user details

**Questions to Ask Copilot:**
- "How do dependencies trigger re-fetching?"
- "How can I cancel a fetch request?"
- "What is AbortController?"

---

## Challenge: Build a Weather Fetcher

### Requirements:
1. Input field for city name
2. Fetch weather data using free API (e.g., Open-Meteo)
3. Display:
   - Current temperature
   - Weather description
   - Humidity
   - Wind speed
   - Location info

4. States:
   - Loading indicator
   - Error messages
   - Success display

**Free API Option:**
```javascript
// Open-Meteo (no API key needed)
fetch('https://geocoding-api.open-meteo.com/v1/search?name=London&count=1&language=en&format=json')
```

**Example Output:**
```
🌤️ London, UK
Temperature: 15°C
Humidity: 65%
Wind: 12 km/h
Last updated: 2 min ago
```

---

## 🎯 Summary

By completing these exercises, you've practiced:
- ✅ useEffect hook and lifecycle
- ✅ Dependency array patterns
- ✅ Async/await and fetch API
- ✅ Loading and error states
- ✅ Conditional rendering based on state
- ✅ Refetching on prop/state changes

---

## 💡 Tips

✅ Always handle loading and error states
✅ Use try-catch for robust error handling
✅ Keep dependency arrays accurate
✅ Open Network tab to debug API calls
✅ Use console logs to understand flow

---

**Next:** Ready for Day 6? Time for Forms & Validation! 🚀
