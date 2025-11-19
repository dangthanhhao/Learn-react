# 📝 Days 13-15 Exercises - Final Projects

**Difficulty:** ⭐⭐⭐⭐⭐ (Advanced)
**Time:** 8-12 hours total
**Skills:** Full-stack component integration, API integration, routing, state management, deployment

------------------------------------------------------------------------

## Overview

Days 13-15 are dedicated to building **complete applications** that combine all learned concepts. Choose one or build multiple projects based on your pace.

---

## Project 1: Todo Application with Local Storage

**Difficulty:** ⭐⭐⭐ (Intermediate)
**Time:** 2-3 hours

### Features:
1. **Todo Management**
   - Create todos
   - Mark complete/incomplete
   - Delete todos
   - Edit todo text

2. **Filtering & Sorting**
   - Filter: All, Active, Completed
   - Sort by: Date created, Alphabetical
   - Search todos

3. **Persistence**
   - Save to localStorage
   - Auto-load on page refresh
   - Clear all todos

4. **Styling**
   - Modern UI with CSS
   - Dark/light theme toggle
   - Responsive design

### Tech Stack:
- React Hooks (useState, useEffect)
- localStorage API
- CSS or Tailwind
- Context API (optional)

### Project Structure:
```
src/
├── components/
│   ├── TodoForm.js
│   ├── TodoList.js
│   ├── TodoItem.js
│   ├── FilterBar.js
│   └── ThemeToggle.js
├── hooks/
│   └── useLocalStorage.js
├── App.js
└── App.css
```

### Starter Code:

Create `hooks/useLocalStorage.js`:

```javascript
import { useState, useEffect } from 'react';

export function useLocalStorage(key, initialValue) {
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
```

Create `App.js`:

```javascript
import { useState } from 'react';
import { useLocalStorage } from './hooks/useLocalStorage';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import FilterBar from './components/FilterBar';
import ThemeToggle from './components/ThemeToggle';
import './App.css';

function App() {
  const [todos, setTodos] = useLocalStorage('todos', []);
  const [filter, setFilter] = useState('all');
  const [theme, setTheme] = useState('light');

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
      createdAt: new Date()
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const editTodo = (id, newText) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, text: newText } : todo
    ));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  const completedCount = todos.filter(t => t.completed).length;

  return (
    <div className={`app app-${theme}`}>
      <header>
        <h1>My Todo App</h1>
        <ThemeToggle theme={theme} setTheme={setTheme} />
      </header>

      <main>
        <TodoForm onAdd={addTodo} />

        <div className="stats">
          <p>Total: {todos.length} | Completed: {completedCount}</p>
        </div>

        <FilterBar filter={filter} setFilter={setFilter} />

        <TodoList
          todos={filteredTodos}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
          onEdit={editTodo}
        />
      </main>
    </div>
  );
}

export default App;
```

### Challenge Extensions:
- [ ] Add due dates to todos
- [ ] Priority levels (High, Medium, Low)
- [ ] Categories/tags
- [ ] Recurring todos
- [ ] Export/import functionality

---

## Project 2: Weather App with API Integration

**Difficulty:** ⭐⭐⭐⭐ (Advanced)
**Time:** 3-4 hours

### Features:
1. **Weather Display**
   - Current weather
   - 5-day forecast
   - Temperature, humidity, wind
   - Weather icons

2. **Location Management**
   - Search by city
   - Geolocation
   - Saved locations
   - Current location default

3. **Additional Features**
   - Unit toggle (F/C)
   - Time-based backgrounds
   - Hourly forecast
   - Air quality data

### Tech Stack:
- React Hooks
- Free API (Open-Meteo, WeatherAPI)
- Axios or fetch
- Context API (location state)

### API Options (Free):
```
Open-Meteo: https://open-meteo.com/
WeatherAPI: https://www.weatherapi.com/
OpenWeatherMap: https://openweathermap.org/api
```

### Project Structure:
```
src/
├── components/
│   ├── SearchBar.js
│   ├── CurrentWeather.js
│   ├── Forecast.js
│   ├── LocationList.js
│   └── UnitToggle.js
├── context/
│   └── WeatherContext.js
├── services/
│   └── weatherApi.js
├── App.js
└── App.css
```

### Starter Code:

Create `services/weatherApi.js`:

```javascript
// Example using Open-Meteo (free, no API key needed)
export async function getWeather(latitude, longitude) {
  const response = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code,wind_speed_10m&daily=temperature_2m_max,temperature_2m_min,weather_code&timezone=auto`
  );

  if (!response.ok) throw new Error('Weather fetch failed');
  return response.json();
}

export async function searchCity(city) {
  const response = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=10&language=en&format=json`
  );

  if (!response.ok) throw new Error('Search failed');
  return response.json();
}
```

### Challenge Extensions:
- [ ] Multiple weather providers
- [ ] Severe weather alerts
- [ ] UV index data
- [ ] Pollen forecast
- [ ] Air quality index
- [ ] Share weather on social media

---

## Project 3: E-Commerce Store with Cart

**Difficulty:** ⭐⭐⭐⭐⭐ (Advanced)
**Time:** 4-5 hours

### Features:
1. **Product Management**
   - Product list with filters
   - Product details
   - Image gallery
   - Ratings and reviews

2. **Shopping Cart**
   - Add/remove items
   - Update quantities
   - Cart summary
   - Checkout flow

3. **Checkout Process**
   - Shipping address
   - Payment method
   - Order summary
   - Confirmation

4. **User Features**
   - Wishlist
   - Order history
   - User profile
   - Search and filters

### Tech Stack:
- React + Hooks
- React Router (multi-page)
- State Management (Redux/Zustand)
- localStorage (cart persistence)
- Axios (API calls)

### Project Structure:
```
src/
├── pages/
│   ├── Home.js
│   ├── Products.js
│   ├── ProductDetail.js
│   ├── Cart.js
│   ├── Checkout.js
│   └── OrderConfirmation.js
├── components/
│   ├── ProductCard.js
│   ├── CartItem.js
│   ├── Header.js
│   └── Footer.js
├── store/
│   └── cartStore.js (Zustand/Redux)
├── services/
│   └── api.js
├── App.js
└── App.css
```

### Sample Products (mock data):

```javascript
const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 79.99,
    image: "https://via.placeholder.com/300x300?text=Headphones",
    rating: 4.5,
    reviews: 128,
    inStock: true
  },
  {
    id: 2,
    name: "USB-C Cable",
    price: 12.99,
    image: "https://via.placeholder.com/300x300?text=Cable",
    rating: 4.8,
    reviews: 456,
    inStock: true
  },
  // ... more products
];
```

### Challenge Extensions:
- [ ] Product recommendations
- [ ] Coupon code support
- [ ] Order tracking
- [ ] Payment processing (Stripe)
- [ ] Inventory management
- [ ] Admin dashboard

---

## Project 4: Blog/Content Management System

**Difficulty:** ⭐⭐⭐⭐ (Advanced)
**Time:** 3-4 hours

### Features:
1. **Blog Functionality**
   - Create/edit/delete posts
   - Rich text editor
   - Tags and categories
   - Comments on posts

2. **Navigation**
   - Home page with featured posts
   - Category pages
   - Search functionality
   - Archive/filtering

3. **User Features**
   - User authentication
   - Author profiles
   - User comments
   - Like/save posts

### Tech Stack:
- React Router (multi-page)
- React Hooks
- localStorage (mock backend)
- Context API (auth)
- Markdown rendering (optional)

### Project Structure:
```
src/
├── pages/
│   ├── Home.js
│   ├── Blog.js
│   ├── PostDetail.js
│   ├── CreatePost.js
│   └── Profile.js
├── components/
│   ├── PostCard.js
│   ├── CommentSection.js
│   ├── Navigation.js
│   └── Sidebar.js
├── context/
│   └── AuthContext.js
├── App.js
└── App.css
```

### Challenge Extensions:
- [ ] Rich text editor (Draft.js, Slate)
- [ ] Image uploads
- [ ] SEO optimization
- [ ] RSS feed
- [ ] Social sharing
- [ ] Analytics

---

## Project 5: Collaborative Todo/Kanban Board

**Difficulty:** ⭐⭐⭐⭐⭐ (Expert)
**Time:** 5-6 hours

### Features:
1. **Kanban Board**
   - Drag-and-drop columns
   - Multiple boards
   - Task cards with details
   - Progress tracking

2. **Team Features**
   - Task assignment
   - Comments on tasks
   - Activity log
   - Team management

3. **Advanced Features**
   - Recurring tasks
   - Time tracking
   - Notifications
   - Dark mode

### Tech Stack:
- React
- React Beautiful DnD (drag-and-drop)
- Context API / Redux
- localStorage (persistence)

---

## Evaluation Checklist for All Projects

### Code Quality
- [ ] Clean, readable code
- [ ] Proper component structure
- [ ] Reusable components
- [ ] Good naming conventions
- [ ] Comments where needed

### Functionality
- [ ] All features working
- [ ] Proper error handling
- [ ] Input validation
- [ ] Edge cases handled
- [ ] Responsive design

### Best Practices
- [ ] No console errors
- [ ] Proper PropTypes or TypeScript
- [ ] Optimized re-renders
- [ ] Good performance
- [ ] Accessibility considerations

### Testing
- [ ] Unit tests written
- [ ] Happy path tested
- [ ] Edge cases covered
- [ ] Manual testing completed

### Deployment
- [ ] Code committed to Git
- [ ] Deployed to Vercel/Netlify
- [ ] Live URL accessible
- [ ] No sensitive data exposed

---

## Submission Guidelines

For each project:
1. Create GitHub repository
2. Write comprehensive README
3. Include setup instructions
4. Add feature list
5. Deploy to Vercel/Netlify
6. Share live link

**README Template:**
```markdown
# Project Name

## Overview
Brief description of the application

## Features
- Feature 1
- Feature 2
- Feature 3

## Tech Stack
- React
- React Router
- [Other technologies]

## Getting Started

### Prerequisites
- Node.js 14+
- npm or yarn

### Installation
\`\`\`bash
git clone [repo-url]
cd project-name
npm install
npm start
\`\`\`

## Live Demo
[Link to deployed app]

## Screenshots
[Add screenshots]

## Future Improvements
- [ ] Feature idea 1
- [ ] Feature idea 2

## License
MIT
```

---

## 🎯 Project Completion Tips

✅ Start with the simplest features
✅ Build incrementally
✅ Test frequently
✅ Commit to Git regularly
✅ Ask for feedback early
✅ Deploy early and often
✅ Document as you go
✅ Don't over-engineer initially
✅ Refactor after functionality works
✅ Add polish at the end

---

## 🚀 After Completing Projects

1. **Showcase your work:**
   - Portfolio website
   - GitHub profile
   - LinkedIn projects
   - Dev.to articles

2. **Next steps:**
   - Explore Next.js (Day 14+ in curriculum)
   - Learn backend (NestJS, Node.js)
   - Explore advanced patterns
   - Contribute to open source

3. **Continue learning:**
   - Web performance
   - TypeScript
   - Testing (Jest, Cypress)
   - CSS frameworks

---

**Congratulations on reaching Day 15!** 🎉

You've learned the full React fundamentals. These final projects consolidate everything. Build with confidence and deploy with pride!

**Next:** Continue to Next.js curriculum or explore specialized React topics! 🚀
