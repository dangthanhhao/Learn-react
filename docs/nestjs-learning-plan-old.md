# 🧩 NestJS Learning Plan (10 Days)

**Goal:** Learn backend framework NestJS (Node.js) with Dependency
Injection, Modules, Controllers, Services, Prisma/TypeORM.

------------------------------------------------------------------------

## 📅 Day 1 -- What is NestJS & Project Setup

### ✅ Tasks

-   [ ] Install Nest CLI:

    ``` bash
    npm i -g @nestjs/cli
    nest new my-nest-learning
    ```

-   [ ] Explore modules, controllers, providers.

### 💬 Copilot Prompts

-   "Explain NestJS architecture."
-   "What are controllers and providers?"

------------------------------------------------------------------------

## ⚙️ Day 2 -- Controllers & Routing

### ✅ Tasks

-   [ ] Create controller with `@Controller()`.
-   [ ] Implement GET/POST routes.

### 💬 Copilot Prompts

-   "What is a controller in NestJS?"
-   "How does routing work?"

------------------------------------------------------------------------

## 🧠 Day 3 -- Services & Dependency Injection

### ✅ Tasks

-   [ ] Generate service:

    ``` bash
    nest generate service users
    ```

-   [ ] Inject service into controller.

### 💬 Copilot Prompts

-   "Explain DI in NestJS."
-   "Why does Nest use providers?"

------------------------------------------------------------------------

## 📦 Day 4 -- Modules & App Architecture

### ✅ Tasks

-   [ ] Create feature module.
-   [ ] Learn root module, import/export services.

### 💬 Copilot Prompts

-   "How do modules encapsulate features?"
-   "Explain the architecture for scaling large apps."

------------------------------------------------------------------------

## 🔁 Day 5 -- DTOs & Validation

### ✅ Tasks

-   [ ] Install class-validator & class-transformer.
-   [ ] Create DTO for user creation.
-   [ ] Add validation pipes.

### 💬 Copilot Prompts

-   "What is a DTO?"
-   "Explain ValidationPipe."

------------------------------------------------------------------------

## 🗄️ Day 6 -- Database Integration (Prisma or TypeORM)

Choose one: \### ✅ Tasks - \[ \] Install Prisma or TypeORM. - \[ \]
Create User model/entity. - \[ \] Implement CRUD.

### 💬 Copilot Prompts

-   "Which is better: Prisma vs TypeORM?"
-   "How do I perform migrations?"

------------------------------------------------------------------------

## 🔐 Day 7 -- Authentication (JWT)

### ✅ Tasks

-   [ ] Install Passport + JWT.
-   [ ] Implement login endpoint.
-   [ ] Protect routes with guards.

### 💬 Copilot Prompts

-   "Explain how JWT works."
-   "What is AuthGuard?"

------------------------------------------------------------------------

## 🧭 Day 8 -- Guards, Interceptors, Pipes, Filters

### ✅ Tasks

-   [ ] Create custom guard.
-   [ ] Create logging interceptor.
-   [ ] Create validation pipe.
-   [ ] Add exception filter.

### 💬 Copilot Prompts

-   "What is the responsibility of a guard?"
-   "Difference between middleware and interceptor?"

------------------------------------------------------------------------

## 🧪 Day 9 -- Testing (Unit & E2E)

### ✅ Tasks

-   [ ] Write unit test for service.
-   [ ] Write e2e test for controller.

### 💬 Copilot Prompts

-   "How does testing work in NestJS?"
-   "What is supertest?"

------------------------------------------------------------------------

## 🚀 Day 10 -- Final Project

Choose one: - \[ \] Authentication server - \[ \] REST API for Todo
App - \[ \] Payment/Invoice API - \[ \] Chat backend with WebSockets

### 💬 Copilot Prompts

-   "Help me structure this NestJS project."
-   "How do I improve performance?"
