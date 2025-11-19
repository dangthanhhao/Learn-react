# 📝 Day 9 Exercises - React Router

**Difficulty:** ⭐⭐⭐⭐ (Advanced)
**Time:** 90-180 minutes
**Skills:** React Router, Routes, navigation, URL parameters, redirects

------------------------------------------------------------------------

## Exercise 1: Basic Routing Setup

**Objective:** Set up React Router and create multi-page navigation

First, install React Router:
```bash
npm install react-router-dom
```

Create `App.js`:

```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

function NotFound() {
  return (
    <div style={styles.container}>
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
    </div>
  );
}

const styles = {
  container: {
    padding: "40px 20px",
    textAlign: "center"
  }
};

export default App;
```

Create `components/Navigation.js`:

```javascript
import { Link, useLocation } from 'react-router-dom';

function Navigation() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav style={styles.nav}>
      <div style={styles.navContent}>
        <h2 style={styles.logo}>MyApp</h2>
        <ul style={styles.links}>
          <li>
            <Link
              to="/"
              style={isActive('/') ? styles.activeLink : styles.link}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              style={isActive('/about') ? styles.activeLink : styles.link}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              style={isActive('/products') ? styles.activeLink : styles.link}
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              style={isActive('/contact') ? styles.activeLink : styles.link}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    backgroundColor: "#333",
    color: "white",
    padding: "0 20px"
  },
  navContent: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  logo: {
    margin: 0
  },
  links: {
    listStyle: "none",
    display: "flex",
    gap: "30px",
    padding: 0,
    margin: 0
  },
  link: {
    color: "#ccc",
    textDecoration: "none",
    fontSize: "16px",
    transition: "color 0.3s"
  },
  activeLink: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "16px",
    borderBottom: "2px solid #007bff",
    paddingBottom: "8px"
  }
};

export default Navigation;
```

Create `pages/Home.js`:

```javascript
function Home() {
  return (
    <div style={styles.container}>
      <h1>Welcome to MyApp</h1>
      <p>Navigate using the menu above</p>
    </div>
  );
}

const styles = {
  container: {
    padding: "40px 20px",
    maxWidth: "1200px",
    margin: "0 auto"
  }
};

export default Home;
```

Create `pages/About.js`:

```javascript
function About() {
  return (
    <div style={styles.container}>
      <h1>About Us</h1>
      <p>This is a multi-page React application using React Router.</p>
    </div>
  );
}

const styles = {
  container: {
    padding: "40px 20px",
    maxWidth: "1200px",
    margin: "0 auto"
  }
};

export default About;
```

Create `pages/Products.js`:

```javascript
function Products() {
  return (
    <div style={styles.container}>
      <h1>Products</h1>
      <p>Browse our products</p>
    </div>
  );
}

const styles = {
  container: {
    padding: "40px 20px",
    maxWidth: "1200px",
    margin: "0 auto"
  }
};

export default Products;
```

Create `pages/Contact.js`:

```javascript
function Contact() {
  return (
    <div style={styles.container}>
      <h1>Contact Us</h1>
      <p>Get in touch with us</p>
    </div>
  );
}

const styles = {
  container: {
    padding: "40px 20px",
    maxWidth: "1200px",
    margin: "0 auto"
  }
};

export default Contact;
```

**Tasks:**
- [ ] Install react-router-dom
- [ ] Create App.js with Routes
- [ ] Create Navigation component
- [ ] Create page components
- [ ] Test navigation between pages
- [ ] Test active link highlighting
- [ ] Test 404 page

**Questions to Ask Copilot:**
- "How does React Router work?"
- "What's the difference between Link and a tag?"
- "What does useLocation do?"

---

## Exercise 2: Dynamic Routes with Parameters

**Objective:** Create routes with dynamic segments

Create `App.js` (update):

```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

function NotFound() {
  return <div style={{ padding: "40px" }}><h1>404</h1></div>;
}

export default App;
```

Create `pages/ProductDetail.js`:

```javascript
import { useParams, useNavigate } from 'react-router-dom';

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock product data
  const products = {
    1: { name: "Laptop", price: 999, description: "High-performance laptop" },
    2: { name: "Mouse", price: 29, description: "Wireless mouse" },
    3: { name: "Keyboard", price: 79, description: "Mechanical keyboard" }
  };

  const product = products[id];

  if (!product) {
    return (
      <div style={styles.container}>
        <h1>Product not found</h1>
        <button onClick={() => navigate('/products')}>Back to products</button>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <button
        onClick={() => navigate('/products')}
        style={styles.backButton}
      >
        ← Back
      </button>

      <div style={styles.productDetail}>
        <h1>{product.name}</h1>
        <p style={styles.price}>${product.price}</p>
        <p>{product.description}</p>

        <button style={styles.button}>Add to Cart</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "40px 20px"
  },
  backButton: {
    padding: "10px 15px",
    backgroundColor: "#6c757d",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    marginBottom: "20px"
  },
  productDetail: {
    border: "1px solid #ddd",
    padding: "30px",
    borderRadius: "8px"
  },
  price: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#28a745",
    margin: "20px 0"
  },
  button: {
    padding: "12px 30px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer"
  }
};

export default ProductDetail;
```

Update `pages/Products.js`:

```javascript
import { Link } from 'react-router-dom';

function Products() {
  const products = [
    { id: 1, name: "Laptop", price: 999 },
    { id: 2, name: "Mouse", price: 29 },
    { id: 3, name: "Keyboard", price: 79 }
  ];

  return (
    <div style={styles.container}>
      <h1>Products</h1>

      <div style={styles.grid}>
        {products.map(product => (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            style={{ textDecoration: "none" }}
          >
            <div style={styles.card}>
              <h3>{product.name}</h3>
              <p style={styles.price}>${product.price}</p>
              <button>View Details</button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "40px 20px"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    marginTop: "20px"
  },
  card: {
    border: "1px solid #ddd",
    padding: "20px",
    borderRadius: "8px",
    color: "#333",
    transition: "transform 0.3s"
  },
  price: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#007bff"
  }
};

export default Products;
```

**Tasks:**
- [ ] Create dynamic route `/products/:id`
- [ ] Extract parameter with useParams
- [ ] Navigate to detail pages
- [ ] Handle missing products
- [ ] Use useNavigate for back button
- [ ] Test with different product IDs
- [ ] Add more products

**Questions to Ask Copilot:**
- "What are URL parameters?"
- "How do we extract route parameters?"
- "What's the difference between Link and navigate?"

---

## Exercise 3: Query Parameters & Advanced Navigation

**Objective:** Use query parameters for filtering and state

Create `pages/ProductsAdvanced.js`:

```javascript
import { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';

function ProductsAdvanced() {
  const [searchParams, setSearchParams] = useSearchParams();

  const products = [
    { id: 1, name: "Laptop", category: "electronics", price: 999 },
    { id: 2, name: "Mouse", category: "electronics", price: 29 },
    { id: 3, name: "Book", category: "books", price: 15 },
    { id: 4, name: "Keyboard", category: "electronics", price: 79 },
    { id: 5, name: "Novel", category: "books", price: 20 }
  ];

  const category = searchParams.get('category') || 'all';
  const sort = searchParams.get('sort') || 'name';

  let filtered = products;
  if (category !== 'all') {
    filtered = products.filter(p => p.category === category);
  }

  // Sort
  if (sort === 'price') {
    filtered.sort((a, b) => a.price - b.price);
  } else {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  }

  const updateFilter = (newCategory) => {
    setSearchParams({ category: newCategory, sort });
  };

  const updateSort = (newSort) => {
    setSearchParams({ category, sort: newSort });
  };

  return (
    <div style={styles.container}>
      <h1>Products with Filters</h1>

      <div style={styles.filters}>
        <div>
          <label>Category: </label>
          <select
            value={category}
            onChange={(e) => updateFilter(e.target.value)}
            style={styles.select}
          >
            <option value="all">All</option>
            <option value="electronics">Electronics</option>
            <option value="books">Books</option>
          </select>
        </div>

        <div>
          <label>Sort by: </label>
          <select
            value={sort}
            onChange={(e) => updateSort(e.target.value)}
            style={styles.select}
          >
            <option value="name">Name</option>
            <option value="price">Price</option>
          </select>
        </div>
      </div>

      <div style={styles.results}>
        <p>Found {filtered.length} products</p>

        {filtered.map(product => (
          <div key={product.id} style={styles.item}>
            <h3>{product.name}</h3>
            <p>Category: {product.category}</p>
            <p style={styles.price}>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "40px 20px"
  },
  filters: {
    display: "flex",
    gap: "20px",
    marginBottom: "30px"
  },
  select: {
    padding: "8px",
    marginLeft: "10px",
    borderRadius: "4px",
    border: "1px solid #ddd"
  },
  results: {
    display: "flex",
    flexDirection: "column",
    gap: "15px"
  },
  item: {
    border: "1px solid #eee",
    padding: "15px",
    borderRadius: "6px",
    backgroundColor: "#f9f9f9"
  },
  price: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#007bff"
  }
};

export default ProductsAdvanced;
```

**Tasks:**
- [ ] Create products page with filters
- [ ] Use useSearchParams hook
- [ ] Filter by category
- [ ] Sort products
- [ ] Update URL with query params
- [ ] Bookmark filtered results
- [ ] Test browser back/forward

**Questions to Ask Copilot:**
- "What are query parameters?"
- "How do we use useSearchParams?"
- "How do we make URLs bookmarkable?"

---

## Challenge: Build a Multi-Step Wizard

### Requirements:
1. Three-step form/wizard:
   - Step 1: Personal info
   - Step 2: Address info
   - Step 3: Review & confirm

2. Navigation:
   - Next/Previous buttons
   - Skip steps button
   - Progress indicator
   - Save state to URL

3. Features:
   - Form validation
   - Redirect on completion
   - Preserve data if going back

---

## 🎯 Summary

By completing these exercises, you've practiced:
- ✅ React Router setup
- ✅ Route definition
- ✅ Link and navigation
- ✅ Dynamic route parameters
- ✅ Query parameters
- ✅ useNavigate hook
- ✅ Multi-page applications

---

**Next:** Ready for Day 10? Time for Testing! 🚀
