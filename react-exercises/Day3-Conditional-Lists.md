# 📝 Day 3 Exercises - Conditional Rendering & Lists

**Difficulty:** ⭐⭐ (Intermediate)
**Time:** 60-120 minutes
**Skills:** Conditional rendering, List rendering, Keys, Filters

------------------------------------------------------------------------

## Exercise 1: Conditional Rendering Patterns

**Objective:** Master different ways to conditionally render content

Create `LoginStatus.js`:

```javascript
import { useState } from 'react';

function LoginStatus() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState("guest");

  // Pattern 1: If-else
  let loginMessage;
  if (isLoggedIn) {
    loginMessage = `Welcome, ${userRole}!`;
  } else {
    loginMessage = "Please log in";
  }

  // Pattern 2: Ternary operator
  const dashboardButton = isLoggedIn ? (
    <button onClick={() => setIsLoggedIn(false)}>Logout</button>
  ) : (
    <button onClick={() => setIsLoggedIn(true)}>Login</button>
  );

  // Pattern 3: Logical AND (&&)
  const adminPanel = isLoggedIn && userRole === "admin" && (
    <div style={styles.adminPanel}>
      <h3>Admin Dashboard</h3>
      <button>Manage Users</button>
      <button>View Reports</button>
    </div>
  );

  return (
    <div style={styles.container}>
      <h1>{loginMessage}</h1>
      {dashboardButton}

      {isLoggedIn && (
        <select onChange={(e) => setUserRole(e.target.value)} value={userRole}>
          <option value="user">User</option>
          <option value="moderator">Moderator</option>
          <option value="admin">Admin</option>
        </select>
      )}

      {adminPanel}

      {!isLoggedIn && (
        <p style={{ color: "#999" }}>Create an account or sign in</p>
      )}
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
  adminPanel: {
    backgroundColor: "#fff3cd",
    padding: "15px",
    marginTop: "15px",
    borderRadius: "8px",
    border: "2px solid #ffc107"
  }
};

export default LoginStatus;
```

Use in `App.js`:
```javascript
import LoginStatus from "./LoginStatus";

function App() {
  return <LoginStatus />;
}

export default App;
```

**Tasks:**
- [ ] Create the LoginStatus component
- [ ] Test login/logout toggle
- [ ] Change user role and see admin panel appear
- [ ] Add more role-based content
- [ ] Test all three conditional patterns

**Questions to Ask Copilot:**
- "When should I use each conditional pattern (if, ternary, &&)?"
- "What is short-circuit evaluation?"
- "How do I prevent rendering undefined?"

---

## Exercise 2: Rendering Lists with .map()

**Objective:** Learn list rendering and the importance of keys

Create `StudentList.js`:

```javascript
import { useState } from 'react';

function StudentList() {
  const [students, setStudents] = useState([
    { id: 1, name: "Alice", grade: "A" },
    { id: 2, name: "Bob", grade: "B" },
    { id: 3, name: "Charlie", grade: "A" },
    { id: 4, name: "Diana", grade: "C" }
  ]);

  const [filter, setFilter] = useState("all");

  // Filter students by grade
  const filteredStudents = filter === "all"
    ? students
    : students.filter(s => s.grade === filter);

  return (
    <div style={styles.container}>
      <h2>Student Grade Report</h2>

      <div style={styles.filterGroup}>
        <button
          onClick={() => setFilter("all")}
          style={filter === "all" ? styles.activeBtn : {}}
        >
          All ({students.length})
        </button>
        <button
          onClick={() => setFilter("A")}
          style={filter === "A" ? styles.activeBtn : {}}
        >
          Grade A
        </button>
        <button
          onClick={() => setFilter("B")}
          style={filter === "B" ? styles.activeBtn : {}}
        >
          Grade B
        </button>
        <button
          onClick={() => setFilter("C")}
          style={filter === "C" ? styles.activeBtn : {}}
        >
          Grade C
        </button>
      </div>

      <ul style={styles.list}>
        {filteredStudents.map(student => (
          <li key={student.id} style={styles.item}>
            <span>{student.name}</span>
            <span style={styles.grade}>Grade {student.grade}</span>
          </li>
        ))}
      </ul>

      {filteredStudents.length === 0 && (
        <p style={{ color: "#999" }}>No students found</p>
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
  filterGroup: {
    marginBottom: "20px",
    display: "flex",
    gap: "10px",
    flexWrap: "wrap"
  },
  activeBtn: {
    backgroundColor: "#007bff",
    color: "white"
  },
  list: {
    listStyle: "none",
    padding: 0
  },
  item: {
    display: "flex",
    justifyContent: "space-between",
    padding: "12px",
    borderBottom: "1px solid #eee",
    alignItems: "center"
  },
  grade: {
    fontWeight: "bold",
    color: "#007bff"
  }
};

export default StudentList;
```

Use in `App.js`:
```javascript
import StudentList from "./StudentList";

function App() {
  return <StudentList />;
}

export default App;
```

**Tasks:**
- [ ] Create the StudentList component
- [ ] Filter by grade using buttons
- [ ] Use `.map()` to render list
- [ ] Check that each item has a unique `key`
- [ ] Add a new student to the list
- [ ] Remove a student (try .filter())
- [ ] Sort students alphabetically

**Questions to Ask Copilot:**
- "Why is the `key` prop important?"
- "What happens if we use `index` as a key?"
- "How does `.filter()` work for removing items?"

---

## Exercise 3: Dynamic Lists with Add/Remove

**Objective:** Build interactive list management

Create `ProductInventory.js`:

```javascript
import { useState } from 'react';

function ProductInventory() {
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", price: 999, inStock: true },
    { id: 2, name: "Mouse", price: 29, inStock: true },
    { id: 3, name: "Keyboard", price: 79, inStock: false }
  ]);

  const [newProduct, setNewProduct] = useState("");
  const [newPrice, setNewPrice] = useState("");

  const addProduct = () => {
    if (newProduct.trim() && newPrice) {
      const product = {
        id: Date.now(),  // Simple unique ID
        name: newProduct,
        price: parseFloat(newPrice),
        inStock: true
      };
      setProducts([...products, product]);
      setNewProduct("");
      setNewPrice("");
    }
  };

  const removeProduct = (id) => {
    setProducts(products.filter(p => p.id !== id));
  };

  const toggleStock = (id) => {
    setProducts(products.map(p =>
      p.id === id ? { ...p, inStock: !p.inStock } : p
    ));
  };

  const totalValue = products.reduce((sum, p) => sum + p.price, 0);
  const inStockCount = products.filter(p => p.inStock).length;

  return (
    <div style={styles.container}>
      <h2>Product Inventory</h2>

      <div style={styles.stats}>
        <p>Total Products: {products.length}</p>
        <p>In Stock: {inStockCount}</p>
        <p>Total Value: ${totalValue.toFixed(2)}</p>
      </div>

      <div style={styles.addForm}>
        <input
          value={newProduct}
          onChange={(e) => setNewProduct(e.target.value)}
          placeholder="Product name"
        />
        <input
          type="number"
          value={newPrice}
          onChange={(e) => setNewPrice(e.target.value)}
          placeholder="Price"
        />
        <button onClick={addProduct}>Add Product</button>
      </div>

      <div style={styles.productList}>
        {products.length === 0 ? (
          <p>No products. Add one above!</p>
        ) : (
          products.map(product => (
            <div key={product.id} style={styles.productCard}>
              <div>
                <h4>{product.name}</h4>
                <p>${product.price.toFixed(2)}</p>
                <p>
                  <button
                    onClick={() => toggleStock(product.id)}
                    style={{
                      background: product.inStock ? "#28a745" : "#dc3545",
                      color: "white",
                      border: "none",
                      padding: "5px 10px",
                      borderRadius: "4px",
                      cursor: "pointer"
                    }}
                  >
                    {product.inStock ? "In Stock ✓" : "Out of Stock ✕"}
                  </button>
                </p>
              </div>
              <button
                onClick={() => removeProduct(product.id)}
                style={styles.deleteBtn}
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "600px",
    margin: "20px auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px"
  },
  stats: {
    backgroundColor: "#f0f0f0",
    padding: "15px",
    borderRadius: "8px",
    marginBottom: "15px"
  },
  addForm: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px"
  },
  productList: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "15px"
  },
  productCard: {
    border: "1px solid #e0e0e0",
    padding: "15px",
    borderRadius: "8px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  deleteBtn: {
    backgroundColor: "#dc3545",
    color: "white",
    border: "none",
    padding: "5px 10px",
    borderRadius: "4px",
    cursor: "pointer"
  }
};

export default ProductInventory;
```

Use in `App.js`:
```javascript
import ProductInventory from "./ProductInventory";

function App() {
  return <ProductInventory />;
}

export default App;
```

**Tasks:**
- [ ] Create the ProductInventory component
- [ ] Add new products
- [ ] Remove products
- [ ] Toggle in-stock status
- [ ] Calculate total inventory value
- [ ] Count in-stock items
- [ ] Verify unique IDs with React DevTools

**Questions to Ask Copilot:**
- "How does `.reduce()` work?"
- "What's the difference between `.map()` and `.filter()`?"
- "How do we update a nested property in state?"

---

## Challenge: Build a Grocery Shopping List

### Requirements:
1. Display list of grocery items with:
   - Name
   - Quantity (number)
   - Price per item
   - Checkbox for "purchased"

2. Features:
   - Add new items
   - Remove items
   - Update quantity
   - Mark as purchased (strikethrough)
   - Show total price
   - Filter: All, Purchased, Not Purchased

3. Styling:
   - Purchased items should have strikethrough
   - Show count of each category
   - Nice card layout

**Example:**
```
🛒 Shopping List

Total Items: 5 | Purchased: 2 | Total: $45.99

[☑] Apples (qty: 3) - $3.99
[☐] Milk (qty: 1) - $4.50
[☑] Bread (qty: 2) - $5.98

[Filter: All] [Purchased] [Not Purchased]
```

---

## 🎯 Summary

By completing these exercises, you've practiced:
- ✅ Conditional rendering patterns (if, ternary, &&)
- ✅ Rendering lists with .map()
- ✅ Using keys properly
- ✅ Filtering lists
- ✅ Mapping to transform data
- ✅ Reducing arrays to single values

---

## 💡 Tips

✅ Always use unique, stable keys (not index!)
✅ Use `.filter()` to remove, `.map()` to transform
✅ Use `.reduce()` for totals and aggregations
✅ Remember: Don't mutate state directly
✅ Test with React DevTools to see re-renders

---

**Next:** Ready for Day 4? Time for Advanced Lists & Styling! 🚀
