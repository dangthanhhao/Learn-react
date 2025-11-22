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

### ✅ Prerequisites

Before starting Day 2 tasks, you need to understand `useState`:

-   [ ] Read: ["State: A Component's Memory"](https://react.dev/learn/state-a-components-memory) from React docs.
-   [ ] Read: ["Render and Commit"](https://react.dev/learn/render-and-commit) to understand how React updates state.
-   [ ] Watch: [useState Basics](https://react.dev/reference/react/useState) - Official API reference.
-   [ ] Understand the difference between **props** (read-only) and **state** (mutable).
-   [ ] Know the rules of hooks (especially `useState`).

### 💬 Copilot Prompts (Learn First)

-   "Explain useState and how it works. Show me a simple counter example."
-   "Why can't I mutate state directly? What happens if I do?"
-   "What's the difference between props and state with real-world examples?"
-   "How does React know when to re-render after state changes?"
-   "Can I use useState multiple times in one component?"

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

### ✅ Prerequisites

Before starting Day 3 tasks, understand event handling and conditional rendering:

-   [ ] Read: ["Responding to Events"](https://react.dev/learn/responding-to-events) from React docs.
-   [ ] Read: ["Conditional Rendering"](https://react.dev/learn/conditional-rendering) - Learn all patterns.
-   [ ] Understand synthetic events vs native HTML events.
-   [ ] Know the difference between ternary operator `? :` and `&&` for rendering.
-   [ ] Understand event.preventDefault() and event.stopPropagation().

### 💬 Copilot Prompts (Learn First)

-   "What is a synthetic event in React and how does it differ from HTML events?"
-   "How do I prevent form submission with e.preventDefault()?"
-   "Show me all ways to do conditional rendering in React."
-   "Explain ternary operators and && patterns with examples."

### ✅ Tasks

-   [ ] Create a counter or show/hide text component with event handlers.
-   [ ] Use `onClick`, `onChange`, `onSubmit` event handlers.
-   [ ] Implement ternary operator `? :` and `&&` for conditional rendering.
-   [ ] Build a toggle component that shows/hides content.
-   [ ] Create a simple login/logout view switcher.

### 💬 Copilot Prompts

-   "Explain controlled vs uncontrolled inputs with examples."
-   "What's the performance impact of arrow functions in event handlers?"
-   "How do I handle multiple event handlers in one component?"

### 📝 Exercises

[**📝 View Day 3 Exercises**](../react-exercises/Day3-Conditional-Lists.md) - Conditional rendering, list rendering with .map(), product inventory

------------------------------------------------------------------------

## 🎨 Day 3.5 -- Styling in React

**Objective:** Learn different approaches to style React components.

### ✅ Prerequisites

Before starting Day 3.5 tasks, understand styling approaches:

-   [ ] Review: Inline styles in React (camelCase, object syntax).
-   [ ] Read: ["CSS Modules"](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/) - Scoped styling.
-   [ ] Optional: Explore [Tailwind CSS](https://tailwindcss.com/) for utility-first styling.
-   [ ] Optional: Review [styled-components](https://styled-components.com/) for CSS-in-JS.
-   [ ] Understand when to use each approach.

### 💬 Copilot Prompts (Learn First)

-   "What's the best way to style React components?"
-   "Explain CSS Modules and why they're useful for large projects."
-   "What are the pros and cons of inline styles vs CSS files vs Tailwind?"
-   "Show me how to apply dynamic classes based on state."

### ✅ Tasks

-   [ ] Use **inline styles**: `style={{ color: 'red', fontSize: '16px' }}`
-   [ ] Import and use **CSS files**: `import './App.css'`
-   [ ] Explore **CSS Modules**: `import styles from './App.module.css'`
-   [ ] Conditionally apply styles based on state.
-   [ ] Optional: Try **Tailwind CSS** or **styled-components**.

### 💬 Copilot Prompts

-   "How do I transition between styles based on state changes?"
-   "What's the performance impact of inline styles vs CSS files?"

### 📝 Exercises

[**📝 View Day 4 Exercises**](../react-exercises/Day4-Styling.md) - Inline styles, CSS files, responsive design patterns

------------------------------------------------------------------------

## 🧠 Day 4 -- Lists and Keys

**Objective:** Display arrays of data and learn why keys matter.

### ✅ Prerequisites

Before starting Day 4 tasks, understand list rendering and keys:

-   [ ] Read: ["Rendering Lists"](https://react.dev/learn/rendering-lists) from React docs.
-   [ ] Understand `.map()` function for rendering arrays.
-   [ ] Learn why **keys** are essential for React's reconciliation.
-   [ ] Know the difference between unique IDs and array indices as keys.
-   [ ] Understand list reordering and why indices fail in dynamic lists.

### 💬 Copilot Prompts (Learn First)

-   "Why does React require keys in lists and what do they do?"
-   "Show me why using array indices as keys is bad with an example."
-   "How does React use keys to match old elements with new ones?"
-   "What makes a good key in a React list?"

### ✅ Tasks

-   [ ] Render a list of users or todos with `.map()`.
-   [ ] Understand and use **unique keys** (not array indices).
-   [ ] Experiment with missing or duplicate keys and observe behavior.
-   [ ] Build a dynamic todo list with add/delete functionality.
-   [ ] Watch console warnings when keys are missing.

### 💬 Copilot Prompts

-   "How do I generate unique IDs for list items?"
-   "Can I use object properties as keys safely?"

### 📝 Exercises

[**📝 View Day 3 Exercises**](../react-exercises/Day3-Conditional-Lists.md) - Conditional rendering, list rendering with .map(), product inventory

------------------------------------------------------------------------

## 🔁 Day 5 -- useEffect and Lifecycle

**Objective:** Understand component lifecycle with `useEffect`.

### ✅ Prerequisites

Before starting Day 5 tasks, understand useEffect and lifecycle:

-   [ ] Read: ["Synchronizing with Effects"](https://react.dev/learn/synchronizing-with-effects) from React docs.
-   [ ] Read: ["useEffect"](https://react.dev/reference/react/useEffect) - Complete API reference.
-   [ ] Understand component lifecycle: mount → update → unmount.
-   [ ] Learn how dependency arrays control effect timing.
-   [ ] Know when to use cleanup functions (for subscriptions, timers, etc.).
-   [ ] Understand common pitfalls (infinite loops, race conditions).

### 💬 Copilot Prompts (Learn First)

-   "Explain component lifecycle and how useEffect fits in."
-   "When does useEffect run and how do dependency arrays work?"
-   "Show me examples of dependency arrays: [], [a], [a, b]."
-   "What is the cleanup function and when should I use it?"

### ✅ Tasks

-   [ ] Fetch data from `https://jsonplaceholder.typicode.com/users`.
-   [ ] Use `useEffect` hook with proper dependency array.
-   [ ] Implement cleanup function to prevent memory leaks.
-   [ ] Handle loading and error states during fetch.
-   [ ] Log component mount and unmount events.

### 💬 Copilot Prompts

-   "How do I prevent infinite loops in useEffect?"
-   "What's the difference between running once, on change, or every render?"
-   "How do I handle race conditions in async useEffect?"

### 📝 Exercises

[**📝 View Day 5 Exercises**](../react-exercises/Day5-useEffect-API.md) - useEffect lifecycle, API fetching, refetchable data

------------------------------------------------------------------------

------------------------------------------------------------------------

## 🧩 Day 6 -- Forms and Two-Way Binding

**Objective:** Handle input and form submission.

### ✅ Prerequisites

Before starting Day 6 tasks, understand form handling:

-   [ ] Read: ["Handling Form Inputs"](https://react.dev/reference/react-dom/components/input) from React docs.
-   [ ] Understand **controlled components** (value + onChange).
-   [ ] Learn the difference from **uncontrolled components** (useRef).
-   [ ] Know form validation patterns.
-   [ ] Understand form reset and submission.

### 💬 Copilot Prompts (Learn First)

-   "Explain controlled vs uncontrolled components in forms."
-   "What's two-way data binding and why do we use it?"
-   "Show me how to manage multiple input fields efficiently."
-   "What happens if I don't set value or onChange on an input?"

### ✅ Tasks

-   [ ] Create a form with text, email, and checkbox fields.
-   [ ] Manage all input values with `useState` (controlled components).
-   [ ] Validate form data and display errors.
-   [ ] Submit form and display result.
-   [ ] Reset form after submission.

### 💬 Copilot Prompts

-   "What's the difference between form libraries and manual state?"
-   "How do I handle file uploads in React forms?"

### 📝 Exercises

[**📝 View Day 6 Exercises**](../react-exercises/Day6-Forms.md) - Form handling, validation, dynamic form fields

------------------------------------------------------------------------

## 📦 Day 7 -- Component Composition & Props Drilling

**Objective:** Organize components and understand prop passing.

### ✅ Prerequisites

Before starting Day 7 tasks, understand component composition:

-   [ ] Read: ["Passing Props to a Component"](https://react.dev/learn/passing-props-to-a-component) from React docs.
-   [ ] Read: ["Extracting Components"](https://react.dev/learn/extracting-components) - Breaking down components.
-   [ ] Understand prop drilling and its limitations.
-   [ ] Learn about lifting state up patterns.
-   [ ] Know when to introduce Context API.

### 💬 Copilot Prompts (Learn First)

-   "What's prop drilling and when does it become a problem?"
-   "Explain how to lift state up to the parent component."
-   "Show me how composition improves reusability."
-   "When should I consider using Context instead of props?"

### ✅ Tasks

-   [ ] Create a `TodoList` and `TodoItem` component hierarchy.
-   [ ] Pass data and actions through multiple levels of props.
-   [ ] Identify prop drilling issues (passing props 3+ levels deep).
-   [ ] Learn when to refactor using Context API instead.
-   [ ] Build a nested component structure (Parent → Child → Grandchild).

### 💬 Copilot Prompts

-   "What are presentational vs container components?"
-   "How do I create reusable component patterns?"

### 📝 Exercises

[**📝 View Day 7 Exercises**](../react-exercises/Day7-Composition.md) - Component hierarchy, prop drilling, container/presentational patterns

------------------------------------------------------------------------

## 🎣 Day 7.5 -- Custom Hooks & Code Reuse

**Objective:** Extract reusable logic into custom hooks.

### ✅ Prerequisites

Before starting Day 7.5 tasks, understand custom hooks:

-   [ ] Read: ["Reusing Logic with Custom Hooks"](https://react.dev/learn/reusing-logic-with-custom-hooks) from React docs.
-   [ ] Understand custom hook rules and patterns.
-   [ ] Know the `use` prefix naming convention.
-   [ ] Learn how to extract common patterns into hooks.
-   [ ] Understand hook composition (hooks calling other hooks).

### 💬 Copilot Prompts (Learn First)

-   "What makes a valid custom hook and what are the rules?"
-   "Explain how to share logic between components with custom hooks."
-   "Show me how to build a reusable useFetch hook."
-   "Can custom hooks return JSX or only values?"

### ✅ Tasks

-   [ ] Create `useLocalStorage` hook to persist data to browser storage.
-   [ ] Create `useWindowSize` hook to track window dimensions.
-   [ ] Create `useFetch` hook to reuse fetch logic across components.
-   [ ] Reuse custom hooks in multiple components.
-   [ ] Understand hook naming convention (`use` prefix).

### 💬 Copilot Prompts

-   "How do I debug custom hooks?"
-   "What's the best way to structure complex custom hook logic?"

------------------------------------------------------------------------

## ⚡ Day 8 -- Context API

**Objective:** Share state globally without prop drilling.

### ✅ Prerequisites

Before starting Day 8 tasks, understand Context API:

-   [ ] Read: ["Context API"](https://react.dev/learn/passing-data-deeply-with-context) from React docs.
-   [ ] Read: ["useContext Hook"](https://react.dev/reference/react/useContext) - Complete API reference.
-   [ ] Understand when Context is better than props.
-   [ ] Know how to create and provide context.
-   [ ] Learn about Context performance optimization.

### 💬 Copilot Prompts (Learn First)

-   "Explain how Context works and when to use it instead of props."
-   "Show me how to create and provide a Context."
-   "Can I combine multiple contexts? Show an example."
-   "How do I avoid unnecessary re-renders with Context?"

### ✅ Tasks

-   [ ] Create a `ThemeContext` (light/dark mode).
-   [ ] Create a `UserContext` (logged-in user data).
-   [ ] Provide context at the app root with `<Provider>`.
-   [ ] Consume it with `useContext()` inside child components.
-   [ ] Build a theme toggle that affects all components globally.

### 💬 Copilot Prompts

-   "How do I split Context for better performance?"
-   "What's the difference between Context and Redux?"

### 📝 Exercises

[**📝 View Day 8 Exercises**](../react-exercises/Day8-Context-API.md) - Context API, useReducer, global state management

------------------------------------------------------------------------

## ⚡ Day 8.5 -- Performance Optimization

**Objective:** Learn to optimize React apps for performance.

### ✅ Prerequisites

Before starting Day 8.5 tasks, understand performance optimization:

-   [ ] Read: ["React.memo"](https://react.dev/reference/react/memo) - Preventing unnecessary re-renders.
-   [ ] Read: ["useMemo"](https://react.dev/reference/react/useMemo) - Memoizing expensive calculations.
-   [ ] Read: ["useCallback"](https://react.dev/reference/react/useCallback) - Memoizing callbacks.
-   [ ] Understand when optimization is necessary vs premature optimization.
-   [ ] Know how to measure performance with React DevTools Profiler.

### 💬 Copilot Prompts (Learn First)

-   "When should I use React.memo and what are its limitations?"
-   "What's the difference between useMemo and useCallback?"
-   "Explain common causes of unnecessary re-renders."
-   "How do I profile React app performance with DevTools?"

### ✅ Tasks

-   [ ] Use `React.memo()` to prevent unnecessary re-renders.
-   [ ] Explore `useMemo` hook to memoize expensive calculations.
-   [ ] Explore `useCallback` hook to memoize function callbacks.
-   [ ] Check performance with React DevTools Profiler.
-   [ ] Identify and fix unnecessary renders.

### 💬 Copilot Prompts

-   "What's the performance cost of optimization itself?"
-   "How do I balance code readability with performance?"

------------------------------------------------------------------------

## 🧭 Day 9 -- React Router

**Objective:** Implement multiple pages using React Router.

### ✅ Prerequisites

Before starting Day 9 tasks, understand React Router:

-   [ ] Read: ["React Router"](https://reactrouter.com/) - Official documentation.
-   [ ] Understand routing concepts: BrowserRouter, Routes, Route.
-   [ ] Learn the difference between `<Link>` and `<NavLink>`.
-   [ ] Know how to create dynamic routes with URL parameters (`:id`).
-   [ ] Understand programmatic navigation with `useNavigate()`.

### 💬 Copilot Prompts (Learn First)

-   "Explain how routing works in React Router."
-   "What's the difference between <Link>, <NavLink>, and useNavigate?"
-   "Show me how to create dynamic routes with URL parameters."
-   "How do I pass data between routes?"

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

-   "How do I handle nested routes?"
-   "What's the difference between hash routes and browser history?"

### 📝 Exercises

[**📝 View Day 9 Exercises**](../react-exercises/Day9-React-Router.md) - Routing, dynamic routes, query parameters

------------------------------------------------------------------------

## 🚀 Day 10 -- Testing React Components

**Objective:** Write tests to ensure components work correctly.

### ✅ Prerequisites

Before starting Day 10 tasks, understand React testing:

-   [ ] Read: ["React Testing Library"](https://testing-library.com/react) - Official guide.
-   [ ] Understand testing principles: what to test, what not to test.
-   [ ] Learn query selectors: getByRole, getByText, getByTestId.
-   [ ] Know how to test user interactions (fireEvent, userEvent).
-   [ ] Understand async queries and waitFor().

### 💬 Copilot Prompts (Learn First)

-   "What is React Testing Library and why use it over Enzyme?"
-   "Explain how to test React components effectively."
-   "Show me how to test useState and useEffect."
-   "What should I test and what should I avoid?"

### ✅ Tasks

-   [ ] Install testing library: `npm install @testing-library/react`
-   [ ] Write tests for your counter component.
-   [ ] Test user interactions (clicks, input changes).
-   [ ] Test conditional rendering.
-   [ ] Understand test coverage.

### 💬 Copilot Prompts

-   "How do I mock API calls in React tests?"
-   "What's the difference between fireEvent and userEvent?"

### 📝 Exercises

[**📝 View Day 10 Exercises**](../react-exercises/Day10-Testing.md) - React Testing Library, component testing, form testing, API mocking

------------------------------------------------------------------------

## 🎯 Day 11 -- Advanced Hooks Deep Dive

**Objective:** Master less common but powerful hooks.

### ✅ Prerequisites

Before starting Day 11 tasks, understand advanced hooks:

-   [ ] Read: ["useReducer"](https://react.dev/reference/react/useReducer) - Complex state management.
-   [ ] Read: ["useRef"](https://react.dev/reference/react/useRef) - Accessing DOM directly.
-   [ ] Understand when useState is insufficient (complex state logic).
-   [ ] Know useRef use cases: form focus, timers, animations.
-   [ ] Learn imperative vs declarative patterns.

### 💬 Copilot Prompts (Learn First)

-   "Explain the difference between useState and useReducer."
-   "Show me a useReducer example with complex state logic."
-   "When should I use useRef and what are its use cases?"
-   "How do I access DOM elements directly with useRef?"

### ✅ Tasks

-   [ ] Understand `useReducer` for complex state management.
-   [ ] Build a todo app with `useReducer`.
-   [ ] Explore `useRef` for accessing DOM elements directly.
-   [ ] Create a focus-on-input example with `useRef`.
-   [ ] Compare when to use `useState` vs `useReducer`.

### 💬 Copilot Prompts

-   "How do I combine multiple hooks effectively?"
-   "What are uncontrolled components and when should I use them?"

### 📝 Exercises

[**📝 View Day 11 Exercises**](../react-exercises/Day11-Advanced-Hooks.md) - useReducer, useRef, useCallback, useMemo

------------------------------------------------------------------------

## 💾 Day 12 -- State Management Alternatives

**Objective:** Explore alternatives to Context API for large apps.

### ✅ Prerequisites

Before starting Day 12 tasks, understand state management solutions:

-   [ ] Read: ["Redux Fundamentals"](https://redux.js.org/fundamentals/getting-started) or ["Zustand"](https://github.com/pmndrs/zustand).
-   [ ] Understand Redux architecture: actions, reducers, store, dispatch.
-   [ ] Know when to use Redux vs Context API vs Zustand.
-   [ ] Learn middleware and thunks for async actions.
-   [ ] Understand Redux DevTools for debugging.

### 💬 Copilot Prompts (Learn First)

-   "Explain the Redux flow: actions → reducers → store."
-   "When should I use Redux instead of Context API?"
-   "Show me how to handle async actions with Redux."
-   "What are the pros and cons of Redux vs Zustand?"

### ✅ Tasks

-   [ ] Learn about **Redux** or **Zustand** (choose one).
-   [ ] Set up a basic store with Redux Toolkit.
-   [ ] Dispatch actions and subscribe to state changes.
-   [ ] Compare Redux vs Context API vs Zustand.
-   [ ] Refactor a previous project to use Redux.

### 💬 Copilot Prompts

-   "How do I debug Redux with DevTools?"
-   "What's the performance impact of Redux vs Context?"

### 📝 Exercises

[**📝 View Day 12 Exercises**](../react-exercises/Day12-State-Management.md) - Redux, Zustand, state management comparison

------------------------------------------------------------------------

## 🚀 Day 13 -- Final Project Part 1

**Objective:** Build a substantial project combining all learned concepts.

### ✅ Prerequisites

Before starting Day 13 tasks, review project planning:

-   [ ] Review all React concepts from Days 1-12.
-   [ ] Read: ["Thinking in React"](https://react.dev/learn/thinking-in-react) - Project planning approach.
-   [ ] Understand component structure and state management for your project.
-   [ ] Plan your project architecture before coding.

### 💬 Copilot Prompts (Learn First)

-   "Help me structure this project efficiently."
-   "What folder structure should I use for a React app?"
-   "What state management approach should I use for this project?"

### ✅ Tasks

Choose one project idea:
- [ ] **Todo App**: Add/edit/delete todos, filters, localStorage persistence
- [ ] **Weather App**: Fetch API data, display weather, search cities
- [ ] **Notes App**: Create/edit/delete notes, categories, localStorage
- [ ] **Blog**: Multiple pages (React Router), fetch posts, comment section

### 💬 Copilot Prompts

-   "How do I handle API errors gracefully?"
-   "What best practices should I follow in this project?"

### 📝 Exercises & Projects

[**📝 View Final Projects (Days 13-15)**](../react-exercises/Day13-15-Final-Projects.md) - Complete project specifications including Todo App, Weather App, E-Commerce Store, Blog, and Kanban Board

------------------------------------------------------------------------

## 🎨 Day 14 -- Final Project Part 2 & Styling

**Objective:** Polish your project with professional styling and UX.

### ✅ Prerequisites

Before starting Day 14 tasks, understand advanced styling and UX:

-   [ ] Read: ["Error Boundaries"](https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary) - Error handling UI.
-   [ ] Review responsive design principles (mobile-first).
-   [ ] Learn about loading states and skeleton screens.
-   [ ] Understand accessibility (a11y) best practices.

### 💬 Copilot Prompts (Learn First)

-   "What's an error boundary and how do I implement it?"
-   "How do I add animations and transitions to React components?"
-   "What makes a good user experience in web apps?"
-   "How do I make my React app accessible (a11y)?"

### ✅ Tasks

-   [ ] Implement responsive design (mobile-first).
-   [ ] Add loading states and error boundaries.
-   [ ] Improve UI with Tailwind CSS or styled-components.
-   [ ] Add animations or transitions.
-   [ ] Test the entire app manually.

### 💬 Copilot Prompts

-   "How do I optimize images and assets for performance?"
-   "What SEO considerations exist for React apps?"

------------------------------------------------------------------------

## 🌟 Day 15 -- Deployment & Next Steps

**Objective:** Deploy your project and plan advanced learning.

### ✅ Prerequisites

Before starting Day 15 tasks, understand deployment:

-   [ ] Read: ["Building & Deploying"](https://create-react-app.dev/docs/deployment/) - Create React App guide.
-   [ ] Explore [Vercel](https://vercel.com/), [Netlify](https://netlify.com/), or [GitHub Pages](https://pages.github.com/).
-   [ ] Understand environment variables and secrets management.
-   [ ] Learn about CI/CD pipelines.

### 💬 Copilot Prompts (Learn First)

-   "What are the best ways to deploy a React app?"
-   "How do I set up environment variables for production?"
-   "What's a CI/CD pipeline and why is it useful?"

### ✅ Tasks
