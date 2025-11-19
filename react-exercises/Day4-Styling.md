# 📝 Day 4 Exercises - Styling Approaches

**Difficulty:** ⭐⭐ (Intermediate)
**Time:** 45-90 minutes
**Skills:** Inline styles, CSS files, CSS Modules, className binding

------------------------------------------------------------------------

## Exercise 1: Inline Styles

**Objective:** Master inline style objects in React

Create `ThemedButton.js`:

```javascript
import { useState } from 'react';

function ThemedButton() {
  const [theme, setTheme] = useState("light");

  // Define styles as objects
  const baseButtonStyle = {
    padding: "12px 24px",
    fontSize: "16px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    margin: "5px",
    fontWeight: "bold",
    transition: "background-color 0.3s"
  };

  const lightTheme = {
    background: "#f0f0f0",
    color: "#333",
    border: "2px solid #333"
  };

  const darkTheme = {
    background: "#333",
    color: "#f0f0f0",
    border: "2px solid #f0f0f0"
  };

  const blueTheme = {
    background: "#007bff",
    color: "white",
    border: "none"
  };

  const currentTheme =
    theme === "light" ? lightTheme :
    theme === "dark" ? darkTheme :
    blueTheme;

  const containerStyle = {
    padding: "30px",
    backgroundColor: theme === "dark" ? "#1a1a1a" : "#fff",
    color: theme === "dark" ? "#f0f0f0" : "#333",
    minHeight: "300px",
    fontFamily: "Arial, sans-serif"
  };

  return (
    <div style={containerStyle}>
      <h2>Theme Switcher</h2>
      <p>Current theme: {theme}</p>

      <div>
        <button
          style={{ ...baseButtonStyle, ...lightTheme }}
          onClick={() => setTheme("light")}
        >
          Light
        </button>
        <button
          style={{ ...baseButtonStyle, ...darkTheme }}
          onClick={() => setTheme("dark")}
        >
          Dark
        </button>
        <button
          style={{ ...baseButtonStyle, ...blueTheme }}
          onClick={() => setTheme("blue")}
        >
          Blue
        </button>
      </div>

      <div style={{ marginTop: "20px" }}>
        <p>Button with current theme:</p>
        <button style={{ ...baseButtonStyle, ...currentTheme }}>
          Styled Button
        </button>
      </div>
    </div>
  );
}

export default ThemedButton;
```

**Tasks:**
- [ ] Create the ThemedButton component
- [ ] Test all three themes
- [ ] Add more themes (purple, green, red)
- [ ] Use spread operator to combine styles
- [ ] Add hover effect using state or CSS
- [ ] Notice how inline styles are JS objects

**Questions to Ask Copilot:**
- "What's the spread operator (`...`) and how does it work?"
- "Why do we use camelCase for CSS properties?"
- "How do inline styles in React differ from HTML?"

---

## Exercise 2: CSS File Imports

**Objective:** Use external CSS files for organization

Create `Card.js`:

```javascript
import './Card.css';

function Card({ title, image, description, featured }) {
  return (
    <div className={`card ${featured ? 'featured' : ''}`}>
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <button className="card-button">Learn More</button>
      </div>
    </div>
  );
}

export default Card;
```

Create `Card.css`:

```css
.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  max-width: 300px;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.card.featured {
  border: 3px solid #007bff;
  background: #f9f9f9;
}

.card-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-content {
  padding: 15px;
}

.card-title {
  margin: 0 0 10px 0;
  color: #333;
  font-size: 18px;
}

.card-description {
  color: #666;
  font-size: 14px;
  line-height: 1.5;
  margin: 0 0 15px 0;
}

.card-button {
  background: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background 0.3s;
}

.card-button:hover {
  background: #0056b3;
}
```

Use in `App.js`:

```javascript
import Card from "./Card";

function App() {
  const products = [
    {
      title: "React Basics",
      image: "https://via.placeholder.com/300x200?text=React",
      description: "Learn React fundamentals and hooks",
      featured: true
    },
    {
      title: "Advanced React",
      image: "https://via.placeholder.com/300x200?text=Advanced",
      description: "Master context, performance, and patterns",
      featured: false
    },
    {
      title: "Next.js",
      image: "https://via.placeholder.com/300x200?text=NextJS",
      description: "Build full-stack applications",
      featured: false
    }
  ];

  return (
    <div style={{ padding: "20px", backgroundColor: "#f5f5f5" }}>
      <h1>Learning Courses</h1>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {products.map((product, index) => (
          <Card key={index} {...product} />
        ))}
      </div>
    </div>
  );
}

export default App;
```

**Tasks:**
- [ ] Create Card.js and Card.css
- [ ] Test featured class toggle
- [ ] Test hover effects
- [ ] Import CSS file
- [ ] Use className instead of class
- [ ] Add more cards
- [ ] Modify colors and spacing

**Questions to Ask Copilot:**
- "Why do we use `className` instead of `class` in React?"
- "How do I use CSS classes conditionally?"
- "What's the difference between inline styles and CSS files?"

---

## Exercise 3: Responsive Design & Flexbox

**Objective:** Build responsive layouts

Create `ResponsiveGrid.js`:

```javascript
import './ResponsiveGrid.css';

function ResponsiveGrid() {
  const items = [
    { id: 1, title: "Item 1", color: "#FF6B6B" },
    { id: 2, title: "Item 2", color: "#4ECDC4" },
    { id: 3, title: "Item 3", color: "#45B7D1" },
    { id: 4, title: "Item 4", color: "#96CEB4" },
    { id: 5, title: "Item 5", color: "#FFEAA7" },
    { id: 6, title: "Item 6", color: "#DDA15E" }
  ];

  return (
    <div className="container">
      <h1>Responsive Grid</h1>
      <p>Resize the window to see responsive behavior</p>

      <div className="grid">
        {items.map(item => (
          <div
            key={item.id}
            className="grid-item"
            style={{ backgroundColor: item.color }}
          >
            <h3>{item.title}</h3>
            <p>Responsive item</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ResponsiveGrid;
```

Create `ResponsiveGrid.css`:

```css
.container {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.grid-item {
  padding: 30px;
  border-radius: 8px;
  color: white;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}

.grid-item:hover {
  transform: scale(1.05);
}

.grid-item h3 {
  margin: 0 0 10px 0;
  font-size: 18px;
}

.grid-item p {
  margin: 0;
  font-size: 14px;
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .grid {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 15px;
  }

  .grid-item {
    padding: 20px;
  }
}

@media (max-width: 480px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
```

**Tasks:**
- [ ] Create responsive grid
- [ ] Test on different screen sizes
- [ ] Use grid layout
- [ ] Add media queries
- [ ] Test hover effects
- [ ] Add more grid items
- [ ] Change colors and spacing

**Questions to Ask Copilot:**
- "How does CSS Grid work?"
- "What are media queries?"
- "What does `auto-fit` and `minmax()` do?"

---

## Challenge: Build a Beautiful Dashboard Card

### Requirements:
1. Create a dashboard card showing:
   - Header with icon and title
   - Main metric/number (large)
   - Description text
   - Footer with timestamp
   - Color theme customizable

2. Styles:
   - Gradient background
   - Shadow effects
   - Smooth transitions
   - Responsive design
   - Hover effects

**Example:**
```
┌─────────────────────────┐
│ 📈 Revenue              │
│                         │
│      $45,230            │
│                         │
│ +12% from last month    │
│ Updated: 2 min ago      │
└─────────────────────────┘
```

---

## 🎯 Summary

By completing these exercises, you've practiced:
- ✅ Inline style objects
- ✅ Spreading and merging styles
- ✅ External CSS files
- ✅ className conditional binding
- ✅ CSS Grid and Flexbox
- ✅ Media queries and responsive design

---

**Next:** Ready for Day 5? Time for useEffect & Data Fetching! 🚀
