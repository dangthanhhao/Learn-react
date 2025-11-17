# 🚀 Next.js Learning Plan (14 Days)

**Goal:** Learn Next.js fundamentals with React + Server Components +
Routing + APIs.\
Use Copilot as a helper for explanation, not auto‑coding.

## 📋 Prerequisites

Before starting, ensure you have:

- [ ] Completed **React Learning Plan** (or strong React fundamentals)
- [ ] **Node.js 16+** installed
- [ ] **Git** basics
- [ ] **VS Code** with **GitHub Copilot**
- [ ] Understanding of **Components, Hooks, and State**

## 📖 Resources

- **Next.js Official Docs:** [nextjs.org/docs](https://nextjs.org/docs)
- **Vercel Tutorials:** [vercel.com/docs/frameworks/nextjs](https://vercel.com/docs)
- **App Router Guide:** [nextjs.org/docs/app](https://nextjs.org/docs/app)
- **Cheat Sheet:** [Next.js Cheat Sheet](https://www.codecademy.com/resources/cheatsheets/language/nextjs)

------------------------------------------------------------------------

## 🎯 Learning Approach

Each day includes:
- ✅ **Hands-on tasks** (build real features)
- 💬 **Copilot prompts** (understand architecture)
- 🧪 **Optional:** Explore Vercel AI SDK or database integration
- 🐛 **Debugging:** Use Next.js DevTools and Network tab

------------------------------------------------------------------------

## 📅 Day 1 -- What is Next.js & Project Setup

**Objective:** Understand Next.js advantages and set up your first project.

### ✅ Tasks

-   [ ] Install Node.js, VS Code, Copilot extensions.

-   [ ] Create project:
    ``` bash
    npx create-next-app@latest my-nextjs-learning
    npm run dev
    ```

-   [ ] Understand **App Router** vs **Pages Router** (App Router is new default).
-   [ ] Explore folder structure: `app/`, `public/`, `package.json`.
-   [ ] Understand the difference between React and Next.js.

### 💬 Copilot Prompts

-   "Explain the Next.js App Router and how it differs from Pages Router."
-   "What is the difference between React and Next.js?"
-   "Why does Next.js have both server and client components?"
-   "What's a file-based routing system and how does it work?"

------------------------------------------------------------------------

## ⚙️ Day 2 -- File-Based Routing & Navigation

**Objective:** Master Next.js routing system.

### ✅ Tasks

-   [ ] Create pages: `/` (home), `/about`, `/contact`, `/blog`.
-   [ ] Use `<Link>` component for navigation (no page reloads).
-   [ ] Create dynamic routes: `/blog/[id]` and `/users/[username]`.
-   [ ] Create nested routes: `/dashboard/settings/profile`.
-   [ ] Understand folder structure with `page.js`, `layout.js`.

### 💬 Copilot Prompts

-   "How does file‑based routing work in Next.js?"
-   "Explain dynamic segments like `[id]` and `[[...slug]]`."
-   "What's the difference between `<a>` and `<Link>`?"
-   "How do I create nested routes with multiple levels?"

------------------------------------------------------------------------

## 📦 Day 3 -- Server Components vs Client Components

**Objective:** Understand the paradigm shift with React Server Components.

### ✅ Tasks

-   [ ] Create a **Server Component** (default, no `"use client"`).
-   [ ] Create a **Client Component** using `"use client"` directive.
-   [ ] Fetch data in server component vs client component.
-   [ ] Understand when to use each (performance implications).
-   [ ] Build a component hierarchy mixing both types.

### 💬 Copilot Prompts

-   "When should I mark a component as `'use client'`?"
-   "What's the difference between Server Components (RSC) and Client Components (CSR)?"
-   "Can server components use hooks like useState?"
-   "How do I pass data from server to client components?"

------------------------------------------------------------------------

## 🔁 Day 4 -- API Routes & Route Handlers

**Objective:** Build backend API endpoints within Next.js.

### ✅ Tasks

-   [ ] Create `/api/hello` GET endpoint (simple JSON response).
-   [ ] Build CRUD endpoints: GET, POST, PUT, DELETE.
-   [ ] Handle query parameters: `/api/users?id=123`.
-   [ ] Return proper HTTP status codes and error messages.
-   [ ] Test endpoints with Postman or curl.

### 💬 Copilot Prompts

-   "Explain route handlers in Next.js (replacing old API routes)."
-   "What's the difference between route handlers and server actions?"
-   "How do I handle different HTTP methods (GET, POST, etc.)?"
-   "How do I return JSON and handle errors?"

------------------------------------------------------------------------

## 💾 Day 5 -- Data Fetching & Caching

**Objective:** Fetch data efficiently with intelligent caching.

### ✅ Tasks

-   [ ] Fetch data from external API in server component.
-   [ ] Implement `revalidate` for **ISR (Incremental Static Regeneration)**.
-   [ ] Use `cache: 'no-store'` for always-fresh data (SSR).
-   [ ] Understand caching strategies and trade-offs.
-   [ ] Fetch from your own API routes.

### 💬 Copilot Prompts

-   "Explain caching strategies in Next.js: ISR vs SSR vs SSG."
-   "What's the difference between `revalidate` and `cache`?"
-   "How do I keep data fresh without excessive API calls?"
-   "What's `fetch` in Next.js and how does it extend the standard fetch?"

------------------------------------------------------------------------

## 🎨 Day 6 -- Layouts, Templates & Metadata

**Objective:** Create reusable layouts and optimize for SEO.

### ✅ Tasks

-   [ ] Create a root layout with navigation and footer.
-   [ ] Build nested layouts for different sections.
-   [ ] Add metadata for SEO (title, description, og:image).
-   [ ] Create a shared sidebar layout for dashboard pages.
-   [ ] Understand how layouts persist between navigation.

### 💬 Copilot Prompts

-   "How do layouts persist between pages and why is that useful?"
-   "What is the metadata API and how do I use it?"
-   "What's the difference between layout.js and template.js?"
-   "How do I create per-page metadata?"

------------------------------------------------------------------------

## 📐 Day 7 -- Styling & UI Components

**Objective:** Style applications with modern CSS approaches.

### ✅ Tasks

-   [ ] Use **CSS Modules** for scoped styling.
-   [ ] Install and setup **Tailwind CSS**.
-   [ ] Create reusable UI components (Button, Card, Input).
-   [ ] Use CSS-in-JS if desired (Styled Components, Emotion).
-   [ ] Make components responsive.

### 💬 Copilot Prompts

-   "What is the best styling method for Next.js projects?"
-   "How do I set up Tailwind CSS with Next.js?"
-   "CSS Modules vs Tailwind vs Styled Components—when to use each?"
-   "How do I ensure responsive design?"

------------------------------------------------------------------------

## 🗂️ Day 8 -- Forms & Server Actions

**Objective:** Handle forms efficiently with server-side logic.

### ✅ Tasks

-   [ ] Build a form using **server actions** (`"use server"`).
-   [ ] Validate form data on server side.
-   [ ] Handle form submission and errors gracefully.
-   [ ] Store form data to a mock database or MongoDB.
-   [ ] Create multi-step form with progress.

### 💬 Copilot Prompts

-   "Explain server actions and how they work."
-   "What's the difference between server actions and API routes?"
-   "How do I validate form data securely?"
-   "How do I prevent CSRF attacks with server actions?"

------------------------------------------------------------------------

## 📝 Day 9 -- Authentication (NextAuth.js)

**Objective:** Implement secure authentication in your app.

### ✅ Tasks

-   [ ] Install NextAuth.js.
-   [ ] Set up Google or GitHub OAuth provider.
-   [ ] Create login/logout pages.
-   [ ] Protect pages using middleware.
-   [ ] Store user sessions in database.

### 💬 Copilot Prompts

-   "Explain NextAuth workflow and how it works."
-   "How do I create protected routes that require authentication?"
-   "What's the difference between OAuth and credentials authentication?"
-   "How do I use NextAuth with TypeScript?"

------------------------------------------------------------------------

## 💼 Day 10 -- Database Integration

**Objective:** Connect your app to a real database.

### ✅ Tasks

-   [ ] Choose a database (PostgreSQL, MongoDB, or Supabase).
-   [ ] Set up a free database (Supabase, MongoDB Atlas).
-   [ ] Create a schema/models for your app.
-   [ ] Build CRUD operations with your database.
-   [ ] Use an ORM (Prisma, TypeORM) for type safety.

### 💬 Copilot Prompts

-   "What's the best database for Next.js apps?"
-   "Explain how Prisma works with Next.js."
-   "How do I migrate database schemas safely?"
-   "What's the difference between SQL and NoSQL for this project?"

------------------------------------------------------------------------

## 🚀 Day 11 -- Performance & Optimization

**Objective:** Build fast, scalable Next.js applications.

### ✅ Tasks

-   [ ] Use Image Optimization with `next/image` component.
-   [ ] Implement code splitting and lazy loading.
-   [ ] Monitor performance with Lighthouse or Vercel Analytics.
-   [ ] Optimize bundle size and load times.
-   [ ] Use dynamic imports for heavy components.

### 💬 Copilot Prompts

-   "How does Next.js optimize images?"
-   "What's code splitting and why is it important?"
-   "How do I check and improve Core Web Vitals?"
-   "What are best practices for Next.js performance?"

------------------------------------------------------------------------

## 🧪 Day 12 -- Testing & Quality Assurance

**Objective:** Write tests for your Next.js application.

### ✅ Tasks

-   [ ] Set up Jest and React Testing Library.
-   [ ] Write unit tests for API routes.
-   [ ] Write component tests with user interactions.
-   [ ] Write integration tests for full features.
-   [ ] Set up GitHub Actions for CI/CD.

### 💬 Copilot Prompts

-   "How do I test Next.js API routes?"
-   "What's the best way to test server components?"
-   "How do I set up CI/CD for Next.js?"

------------------------------------------------------------------------

## 🌐 Day 13 -- Deployment & DevOps

**Objective:** Deploy your Next.js app to production.

### ✅ Tasks

-   [ ] Deploy to **Vercel** (official Next.js hosting).
-   [ ] Set up environment variables for production.
-   [ ] Configure custom domain.
-   [ ] Set up monitoring and error tracking (Sentry).
-   [ ] Create deployment pipeline with GitHub.

### 💬 Copilot Prompts

-   "What's the easiest way to deploy a Next.js app?"
-   "How do I manage environment variables securely?"
-   "What's the difference between Vercel, Netlify, and self-hosted?"
-   "How do I set up monitoring for production apps?"

------------------------------------------------------------------------

## 🎯 Day 14 -- Final Project & Advanced Topics

**Objective:** Build a complete, production-ready Next.js application.

### ✅ Tasks

Choose one project:
- [ ] **Blog Platform**: Markdown posts, comments, search, dark mode
- [ ] **SaaS Dashboard**: User auth, data tables, charts, export
- [ ] **E-Commerce Store**: Products, cart, checkout, orders
- [ ] **Social Media Clone**: Posts, comments, likes, follow system

Build with:
- [ ] Database integration (Prisma + PostgreSQL/MongoDB)
- [ ] Authentication (NextAuth.js)
- [ ] API routes or server actions
- [ ] Beautiful UI with Tailwind or styled-components
- [ ] Testing and error handling
- [ ] Deployed to Vercel

### 💬 Copilot Prompts

-   "Help me structure this Next.js project."
-   "What's the best architecture for scalability?"
-   "How do I handle complex state management?"
-   "What patterns should I follow for maintainability?"

------------------------------------------------------------------------

## 🌱 Advanced Topics (After Day 14)

-   [ ] **TypeScript**: Full type safety for Next.js
-   [ ] **Middleware**: Request/response interception
-   [ ] **Internationalization**: Multi-language support (i18n)
-   [ ] **Real-time Features**: WebSockets or Pusher
-   [ ] **Advanced Caching**: Redis, Memcached
-   [ ] **Monitoring**: New Relic, DataDog, Vercel Analytics
-   [ ] **Edge Functions**: Cloudflare Workers, Edge Middleware
-   [ ] **Headless CMS**: Sanity, Contentful, Strapi

------------------------------------------------------------------------

## ⚠️ Common Pitfalls

-   [ ] Using client components when server components suffice
-   [ ] Not utilizing Next.js built-in image optimization
-   [ ] Forgetting to handle loading and error states
-   [ ] Over-fetching data on every request
-   [ ] Not securing API routes and endpoints
-   [ ] Ignoring environment variable management
-   [ ] Not testing before deployment

------------------------------------------------------------------------

## 📚 Recommended Resources

- **Next.js Official Docs:** https://nextjs.org/docs
- **Vercel Guides:** https://vercel.com/docs
- **Next.js Discord:** https://discord.gg/bUG7V8zKZh
- **Awesome Next.js:** https://github.com/unicodeveloper/awesome-nextjs

------------------------------------------------------------------------

**You're building full-stack web applications! Congratulations on learning Next.js.** 🚀
