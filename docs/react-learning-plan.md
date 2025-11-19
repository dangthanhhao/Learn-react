# 🧩 React Learning Plan (15 Days)

**Goal:** Learn React fundamentals with GitHub Copilot as your assistant
--- *not* as an auto-coder.\
You will build small, interactive examples and use Copilot Chat to
explain, not just generate.

## 📋 Prerequisites

Before starting, ensure you have:

- [ ] **Node.js 16+** installed ([nodejs.org](https://nodejs.org))
- [ ] **Git** basics (clone, commit, push)
- [ ] **VS Code** with **GitHub Copilot** and **Copilot Chat** extensions
- [ ] Terminal/Command line comfort (bash or PowerShell)
- [ ] Basic JavaScript knowledge (variables, functions, arrays)

## 📖 Resources

- **Official Docs:** [react.dev](https://react.dev)
- **React DevTools:** Browser extension for debugging
- **API Reference:** [React API](https://react.dev/reference)
- **Cheat Sheet:** [React Cheat Sheet](https://devhints.io/react)

------------------------------------------------------------------------

## 🎯 Learning Approach

Each day includes:
- ✅ **Hands-on tasks** (build something immediately)
- 💬 **Copilot prompts** (understand concepts deeply)
- 🧪 **Optional:** Write tests for your code
- 🐛 **Debugging:** Use React DevTools to inspect

------------------------------------------------------------------------

## 📅 Day 1 -- React Basics & Environment Setup

**Objective:** Understand React's purpose, JSX, and project structure.

### ✅ Tasks

-  [x] Install Node.js, npm, VS Code.

-  [x] Install **GitHub Copilot** and **Copilot Chat** extensions.

-   [x] Create your first project:

    ``` bash
    npx create-react-app my-react-learning
    cd my-react-learning
    npm start
    ```

-   [x] Explore `App.js` and `index.js` structure.

-   [x] Write a simple "Hello React!" component.

### 💬 Copilot Prompts

-   "Explain what JSX is and how it differs from HTML."
-   "What happens inside ReactDOM.render()?"
-   "Why do we import React in every component?"

### 📝 Exercises

[**📝 View Day 1 Exercises**](../react-exercises/Day1-Basics.md) - DynamicGreeting, WelcomeCard, UserProfile components

------------------------------------------------------------------------

## 🎣 Day 1.5 -- React Hooks Introduction

**Objective:** Understand why hooks exist and how they simplify React development.

### ✅ Tasks

-   [ ] Read: ["Hooks at a Glance"](https://react.dev/reference/react) from React docs.
-   [ ] Understand the difference between Hooks and Class Components.
-   [ ] Compare Functional components (with hooks) vs Class components.
-   [ ] Identify when to use hooks.

### 💬 Copilot Prompts

-   "Why did React introduce hooks? What problem do they solve?"
-   "Can I use hooks inside class components or nested functions?"
-   "What's the difference between useState and this.state in class components?"
-   "What are the rules of hooks?"

### 📝 Exercises

[**📝 View Day 1.5 Exercises**](../react-exercises/Day1.5-Hooks-Introduction.md) - useState basics, multiple state variables, hook rules, TodoItem component

------------------------------------------------------------------------

## ⚙️ Day 2 -- Components, Props, and State

**Objective:** Understand the building blocks of React apps.

### ✅ Tasks

-   [ ] Create a reusable `<Greeting name="Barry" />` component.
-   [ ] Add a button that toggles a message using `useState`.
-   [ ] Create a counter component with increment/decrement buttons.
-   [ ] Learn how props and state differ and when to use each.
-   [ ] Pass multiple props and use prop destructuring.

### 💬 Copilot Prompts

-   "Explain the difference between props and state with examples."
-   "Why should we never mutate state directly?"
-   "Show me how useState works under the hood."
-   "What happens when a parent passes a prop that changes?"

### 📝 Exercises

[**📝 View Day 2 Exercises**](../react-exercises/Day2-Props-State.md) - Props destructuring, useState hook, input handling

------------------------------------------------------------------------

## ⚡ Day 3 -- Event Handling & Conditional Rendering

**Objective:** Learn user interaction and conditional UI logic.

### ✅ Tasks

-   [ ] Create a counter or show/hide text component with event handlers.
-   [ ] Use `onClick`, `onChange`, `onSubmit` event handlers.
-   [ ] Implement ternary operator `? :` and `&&` for conditional rendering.
-   [ ] Build a toggle component that shows/hides content.
-   [ ] Create a simple login/logout view switcher.

### 💬 Copilot Prompts

-   "What is a synthetic event in React and how does it differ from HTML events?"
-   "How do I prevent form submission with e.preventDefault()?"
-   "Explain controlled vs uncontrolled inputs with examples."
-   "What's the performance impact of arrow functions in event handlers?"

### 📝 Exercises

[**📝 View Day 3 Exercises**](../react-exercises/Day3-Conditional-Lists.md) - Conditional rendering, list rendering with .map(), product inventory

------------------------------------------------------------------------

## 🎨 Day 3.5 -- Styling in React

**Objective:** Learn different approaches to style React components.

### ✅ Tasks

-   [ ] Use **inline styles**: `style={{ color: 'red', fontSize: '16px' }}`
-   [ ] Import and use **CSS files**: `import './App.css'`
-   [ ] Explore **CSS Modules**: `import styles from './App.module.css'`
-   [ ] Conditionally apply styles based on state.
-   [ ] Optional: Try **Tailwind CSS** or **styled-components**.

### 💬 Copilot Prompts

-   "What's the best way to style React components?"
-   "Explain CSS Modules and why they're useful for large projects."
-   "When should I use inline styles vs CSS files vs Tailwind?"
-   "How do I apply dynamic classes based on state?"

### 📝 Exercises

[**📝 View Day 4 Exercises**](../react-exercises/Day4-Styling.md) - Inline styles, CSS files, responsive design patterns

------------------------------------------------------------------------

## 🧠 Day 4 -- Lists and Keys

**Objective:** Display arrays of data and learn why keys matter.

### ✅ Tasks

-   [ ] Render a list of users or todos with `.map()`.
-   [ ] Understand and use **unique keys** (not array indices).
-   [ ] Experiment with missing or duplicate keys and observe behavior.
-   [ ] Build a dynamic todo list with add/delete functionality.
-   [ ] Watch console warnings when keys are missing.

### 💬 Copilot Prompts

-   "Why does React require keys in lists?"
-   "What happens if I use array index as a key?"
-   "Show an example of bad key usage and its effects."
-   "How does React use keys to match old elements with new ones?"

### 📝 Exercises

[**📝 View Day 3 Exercises**](../react-exercises/Day3-Conditional-Lists.md) - Conditional rendering, list rendering with .map(), product inventory

------------------------------------------------------------------------

## 🔁 Day 5 -- useEffect and Lifecycle

**Objective:** Understand component lifecycle with `useEffect`.

### ✅ Tasks

-   [ ] Fetch data from `https://jsonplaceholder.typicode.com/users`.
-   [ ] Use `useEffect` hook with proper dependency array.
-   [ ] Implement cleanup function to prevent memory leaks.
-   [ ] Handle loading and error states during fetch.
-   [ ] Log component mount and unmount events.

### 💬 Copilot Prompts

-   "When does useEffect run and how do dependency arrays work?"
-   "What is the cleanup function and when should I use it?"
-   "How do I prevent infinite loops in useEffect?"
-   "What's the difference between running once, on change, or every render?"

### 📝 Exercises

[**📝 View Day 5 Exercises**](../react-exercises/Day5-useEffect-API.md) - useEffect lifecycle, API fetching, refetchable data

------------------------------------------------------------------------

------------------------------------------------------------------------

## 🧩 Day 6 -- Forms and Two-Way Binding

**Objective:** Handle input and form submission.

### ✅ Tasks

-   [ ] Create a form with text, email, and checkbox fields.
-   [ ] Manage all input values with `useState` (controlled components).
-   [ ] Validate form data and display errors.
-   [ ] Submit form and display result.
-   [ ] Reset form after submission.

### 💬 Copilot Prompts

-   "Explain two-way data binding in React."
-   "What happens if I don't set value or onChange on an input?"
-   "How can I manage multiple input fields efficiently?"
-   "What's the difference between form libraries and manual state?"

### 📝 Exercises

[**📝 View Day 6 Exercises**](../react-exercises/Day6-Forms.md) - Form handling, validation, dynamic form fields

------------------------------------------------------------------------

## 📦 Day 7 -- Component Composition & Props Drilling

**Objective:** Organize components and understand prop passing.

### ✅ Tasks

-   [ ] Create a `TodoList` and `TodoItem` component hierarchy.
-   [ ] Pass data and actions through multiple levels of props.
-   [ ] Identify prop drilling issues (passing props 3+ levels deep).
-   [ ] Learn when to refactor using Context API instead.
-   [ ] Build a nested component structure (Parent → Child → Grandchild).

### 💬 Copilot Prompts

-   "What's prop drilling and when does it become a problem?"
-   "How can I lift state up to the parent component?"
-   "Explain how composition improves reusability."
-   "When should I consider using Context instead of props?"

### 📝 Exercises

[**📝 View Day 7 Exercises**](../react-exercises/Day7-Composition.md) - Component hierarchy, prop drilling, container/presentational patterns

------------------------------------------------------------------------

## 🎣 Day 7.5 -- Custom Hooks & Code Reuse

**Objective:** Extract reusable logic into custom hooks.

### ✅ Tasks

-   [ ] Create `useLocalStorage` hook to persist data to browser storage.
-   [ ] Create `useWindowSize` hook to track window dimensions.
-   [ ] Create `useFetch` hook to reuse fetch logic across components.
-   [ ] Reuse custom hooks in multiple components.
-   [ ] Understand hook naming convention (`use` prefix).

### 💬 Copilot Prompts

-   "What makes a valid custom hook?"
-   "How do I share logic between components with custom hooks?"
-   "Show me how to build a reusable useFetch hook."
-   "Can custom hooks return JSX or only values?"

------------------------------------------------------------------------

## ⚡ Day 8 -- Context API

**Objective:** Share state globally without prop drilling.

### ✅ Tasks

-   [ ] Create a `ThemeContext` (light/dark mode).
-   [ ] Create a `UserContext` (logged-in user data).
-   [ ] Provide context at the app root with `<Provider>`.
-   [ ] Consume it with `useContext()` inside child components.
-   [ ] Build a theme toggle that affects all components globally.

### 💬 Copilot Prompts

-   "Explain how Context works in React."
-   "When should I use Context over props?"
-   "Show an example of combining multiple contexts."
-   "How do I avoid unnecessary re-renders with Context?"

### 📝 Exercises

[**📝 View Day 8 Exercises**](../react-exercises/Day8-Context-API.md) - Context API, useReducer, global state management

------------------------------------------------------------------------

## ⚡ Day 8.5 -- Performance Optimization

**Objective:** Learn to optimize React apps for performance.

### ✅ Tasks

-   [ ] Use `React.memo()` to prevent unnecessary re-renders.
-   [ ] Explore `useMemo` hook to memoize expensive calculations.
-   [ ] Explore `useCallback` hook to memoize function callbacks.
-   [ ] Check performance with React DevTools Profiler.
-   [ ] Identify and fix unnecessary renders.

### 💬 Copilot Prompts

-   "When should I use React.memo and what are its limitations?"
-   "What's the difference between useMemo and useCallback?"
-   "How do I profile React app performance?"
-   "What causes unnecessary re-renders and how do I fix them?"

------------------------------------------------------------------------

## 🧭 Day 9 -- React Router

**Objective:** Implement multiple pages using React Router.

### ✅ Tasks

-   [ ] Install React Router:
    ``` bash
    npm install react-router-dom
    ```

-   [ ] Create pages: `Home.js`, `About.js`, `Contact.js`.
-   [ ] Set up `<BrowserRouter>`, `<Routes>`, and `<Route>` components.
-   [ ] Link between pages with `<Link>` and `<NavLink>`.
-   [ ] Create dynamic routes with URL parameters (e.g., `/user/:id`).

### 💬 Copilot Prompts

-   "Explain BrowserRouter, Routes, and Route components."
-   "How do I navigate programmatically with useNavigate?"
-   "Can I pass data between routes and how?"
-   "What's the difference between <Link> and <NavLink>?"

### 📝 Exercises

[**📝 View Day 9 Exercises**](../react-exercises/Day9-React-Router.md) - Routing, dynamic routes, query parameters

------------------------------------------------------------------------

## 🚀 Day 10 -- Testing React Components

**Objective:** Write tests to ensure components work correctly.

### ✅ Tasks

-   [ ] Install testing library: `npm install @testing-library/react`
-   [ ] Write tests for your counter component.
-   [ ] Test user interactions (clicks, input changes).
-   [ ] Test conditional rendering.
-   [ ] Understand test coverage.

### 💬 Copilot Prompts

-   "How do I test React components?"
-   "What is React Testing Library and why use it over Enzyme?"

### 📝 Exercises

[**📝 View Day 10 Exercises**](../react-exercises/Day10-Testing.md) - React Testing Library, component testing, form testing, API mocking

------------------------------------------------------------------------
-   "How do I test useState and useEffect?"
-   "What should I test and what should I avoid?"

------------------------------------------------------------------------

## 🎯 Day 11 -- Advanced Hooks Deep Dive

**Objective:** Master less common but powerful hooks.

### ✅ Tasks

-   [ ] Understand `useReducer` for complex state management.
-   [ ] Build a todo app with `useReducer`.
-   [ ] Explore `useRef` for accessing DOM elements directly.
-   [ ] Create a focus-on-input example with `useRef`.
-   [ ] Compare when to use `useState` vs `useReducer`.

### 💬 Copilot Prompts

-   "What's the difference between useState and useReducer?"
-   "When should I use useRef and what are its use cases?"
-   "How do I combine multiple hooks effectively?"

### 📝 Exercises

[**📝 View Day 11 Exercises**](../react-exercises/Day11-Advanced-Hooks.md) - useReducer, useRef, useCallback, useMemo

------------------------------------------------------------------------

## 💾 Day 12 -- State Management Alternatives

**Objective:** Explore alternatives to Context API for large apps.

### ✅ Tasks

-   [ ] Learn about **Redux** or **Zustand** (choose one).
-   [ ] Set up a basic store with Redux Toolkit.
-   [ ] Dispatch actions and subscribe to state changes.
-   [ ] Compare Redux vs Context API vs Zustand.
-   [ ] Refactor a previous project to use Redux.

### 💬 Copilot Prompts

-   "What is Redux and why use it over Context?"
-   "What's the Redux flow: actions → reducers → store?"
-   "How do I debug Redux with DevTools?"

### 📝 Exercises

[**📝 View Day 12 Exercises**](../react-exercises/Day12-State-Management.md) - Redux, Zustand, state management comparison

------------------------------------------------------------------------

## 🚀 Day 13 -- Final Project Part 1

**Objective:** Build a substantial project combining all learned concepts.

### ✅ Tasks

Choose one project idea:
- [ ] **Todo App**: Add/edit/delete todos, filters, localStorage persistence
- [ ] **Weather App**: Fetch API data, display weather, search cities
- [ ] **Notes App**: Create/edit/delete notes, categories, localStorage
- [ ] **Blog**: Multiple pages (React Router), fetch posts, comment section

### 💬 Copilot Prompts

-   "Help me structure this project efficiently."

### 📝 Exercises & Projects

[**📝 View Final Projects (Days 13-15)**](../react-exercises/Day13-15-Final-Projects.md) - Complete project specifications including Todo App, Weather App, E-Commerce Store, Blog, and Kanban Board

------------------------------------------------------------------------
-   "What folder structure should I use?"
-   "How do I handle API errors gracefully?"

------------------------------------------------------------------------

## 🎨 Day 14 -- Final Project Part 2 & Styling

**Objective:** Polish your project with professional styling and UX.

### ✅ Tasks

-   [ ] Implement responsive design (mobile-first).
-   [ ] Add loading states and error boundaries.
-   [ ] Improve UI with Tailwind CSS or styled-components.
-   [ ] Add animations or transitions.
-   [ ] Test the entire app manually.

### 💬 Copilot Prompts

-   "What's an error boundary and how do I implement it?"
-   "How do I add animations to React components?"
-   "What makes a good user experience?"

------------------------------------------------------------------------

## 🌟 Day 15 -- Deployment & Next Steps

**Objective:** Deploy your project and plan advanced learning.
