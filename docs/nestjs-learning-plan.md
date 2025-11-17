# 🧩 NestJS Learning Plan (16 Days)

**Goal:** Learn NestJS (Node.js backend framework) with Dependency Injection, Modules, Controllers, Services, Databases, and Authentication.\
Build scalable, maintainable backend APIs.

## 📋 Prerequisites

Before starting, ensure you have:

- [ ] **Node.js 16+** and **npm** installed
- [ ] Basic **JavaScript/TypeScript** knowledge
- [ ] Understanding of **REST APIs** and HTTP methods
- [ ] **Database basics** (relational or NoSQL)
- [ ] **Git** for version control
- [ ] VS Code with TypeScript support

## 📖 Resources

- **NestJS Official Docs:** [docs.nestjs.com](https://docs.nestjs.com)
- **NestJS GitHub:** [github.com/nestjs/nest](https://github.com/nestjs/nest)
- **Prisma Docs:** [prisma.io/docs](https://prisma.io/docs)
- **TypeORM Docs:** [typeorm.io](https://typeorm.io)
- **JWT Guide:** [jwt.io](https://jwt.io)

------------------------------------------------------------------------

## 🎯 Learning Approach

Each day includes:
- ✅ **Hands-on implementation** (build working APIs)
- 💬 **Copilot prompts** (understand architecture deeply)
- 🧪 **Testing focus** (test-driven development)
- 🐛 **Debugging:** Use NestJS logger and Postman

------------------------------------------------------------------------

## 📅 Day 1 -- What is NestJS & Project Setup

**Objective:** Understand NestJS and create your first backend project.

### ✅ Tasks

-   [ ] Install NestJS CLI globally:
    ``` bash
    npm install -g @nestjs/cli
    ```

-   [ ] Create a new project:
    ``` bash
    nest new my-nestjs-learning
    cd my-nestjs-learning
    npm run start:dev
    ```

-   [ ] Explore the project structure: `src/`, `main.ts`, `app.module.ts`.
-   [ ] Understand modules, controllers, and providers.
-   [ ] Start the dev server and access `http://localhost:3000`.

### 💬 Copilot Prompts

-   "Explain the NestJS architecture and how it's structured."
-   "What are controllers, services, and modules in NestJS?"
-   "Why does NestJS use decorators like @Controller and @Injectable?"
-   "How is NestJS different from Express.js?"

------------------------------------------------------------------------

## ⚙️ Day 2 -- Controllers & Routing

**Objective:** Build REST endpoints with controllers.

### ✅ Tasks

-   [ ] Create a `@Controller('users')` decorator.
-   [ ] Implement GET route: `@Get()` to fetch all users.
-   [ ] Implement GET by ID: `@Get(':id')` with params.
-   [ ] Implement POST route: `@Post()` to create user.
-   [ ] Test endpoints with Postman or curl.

### 💬 Copilot Prompts

-   "What is a controller in NestJS and what does it do?"
-   "Explain the decorator syntax: @Controller, @Get, @Post, etc."
-   "How do I extract path parameters and query strings?"
-   "What's the difference between @Body, @Param, and @Query?"

------------------------------------------------------------------------

## 🧠 Day 3 -- Services & Dependency Injection

**Objective:** Learn NestJS core design pattern: Dependency Injection.

### ✅ Tasks

-   [ ] Generate a service:
    ``` bash
    nest generate service users
    ```

-   [ ] Move business logic from controller to service.
-   [ ] Inject service into controller using constructor.
-   [ ] Understand the `@Injectable()` decorator.
-   [ ] Create multiple services and inject them.

### 💬 Copilot Prompts

-   "Explain Dependency Injection and why NestJS uses it."
-   "Why does NestJS use constructor injection?"
-   "What's the @Injectable() decorator and why do we need it?"
-   "How does NestJS manage the service lifecycle?"

------------------------------------------------------------------------

## 📦 Day 4 -- Modules & App Architecture

**Objective:** Structure large applications with modular architecture.

### ✅ Tasks

-   [ ] Create a feature module: `nest generate module users`.
-   [ ] Generate controller and service in the module.
-   [ ] Understand module imports, exports, and providers.
-   [ ] Create separate modules (Users, Products, Orders).
-   [ ] Import modules in the root AppModule.

### 💬 Copilot Prompts

-   "How do modules encapsulate features in NestJS?"
-   "What's the difference between imports, providers, and exports?"
-   "Explain the architecture for scaling large applications."
-   "How do I share services between modules?"

------------------------------------------------------------------------

## ✅ Day 5 -- DTOs & Validation

**Objective:** Validate incoming request data with Data Transfer Objects.

### ✅ Tasks

-   [ ] Install validation packages:
    ``` bash
    npm install class-validator class-transformer
    ```

-   [ ] Create a DTO file: `create-user.dto.ts`.
-   [ ] Use decorators: `@IsString()`, `@IsEmail()`, `@MinLength()`.
-   [ ] Apply `@UsePipes(ValidationPipe)` to validate.
-   [ ] Test with invalid and valid data.

### 💬 Copilot Prompts

-   "What is a DTO and why use it?"
-   "Explain how ValidationPipe works in NestJS."
-   "How do I create custom validation decorators?"
-   "What are the best practices for DTO design?"

------------------------------------------------------------------------

## 🗄️ Day 6 -- Database Integration (Prisma)

**Objective:** Connect NestJS to a real database using Prisma ORM.

### ✅ Tasks

-   [ ] Install Prisma:
    ``` bash
    npm install @prisma/client
    npm install -D prisma
    npx prisma init
    ```

-   [ ] Set up database (PostgreSQL free tier on Railway or Supabase).
-   [ ] Create a `.env` file with DATABASE_URL.
-   [ ] Design schema in `prisma/schema.prisma`.
-   [ ] Run migrations: `npx prisma migrate dev --name init`.
-   [ ] Create Prisma service to use in controllers.

### 💬 Copilot Prompts

-   "What is Prisma and how does it differ from TypeORM?"
-   "How do I set up Prisma with NestJS?"
-   "Explain database migrations and why they're important."
-   "How do I create relationships (one-to-many, many-to-many)?"

------------------------------------------------------------------------

## 💾 Day 7 -- CRUD Operations & Error Handling

**Objective:** Implement complete CRUD operations with proper error handling.

### ✅ Tasks

-   [ ] Implement GET all users with filtering and pagination.
-   [ ] Implement GET by ID with proper error handling.
-   [ ] Implement POST (Create) with validation.
-   [ ] Implement PATCH (Update) with validation.
-   [ ] Implement DELETE with cascade options.
-   [ ] Use `@HttpException` for proper error responses.

### 💬 Copilot Prompts

-   "How do I handle errors gracefully in NestJS?"
-   "What's the difference between throw and @HttpException?"
-   "How do I implement pagination?"
-   "What's the best practice for error response format?"

------------------------------------------------------------------------

## 🔐 Day 8 -- Authentication (JWT & Passport)

**Objective:** Secure your API with JWT authentication.

### ✅ Tasks

-   [ ] Install authentication packages:
    ``` bash
    npm install @nestjs/passport @nestjs/jwt passport passport-jwt
    ```

-   [ ] Create AuthModule and AuthService.
-   [ ] Implement signup endpoint with password hashing (bcrypt).
-   [ ] Implement login endpoint that returns JWT token.
-   [ ] Create JWT strategy using Passport.
-   [ ] Test with Postman (send token in Authorization header).

### 💬 Copilot Prompts

-   "Explain how JWT authentication works."
-   "What's the difference between access token and refresh token?"
-   "How do I hash passwords securely with bcrypt?"
-   "What's Passport.js and why use it?"

------------------------------------------------------------------------

## 🛡️ Day 9 -- Guards, Interceptors & Decorators

**Objective:** Protect routes and intercept requests/responses.

### ✅ Tasks

-   [ ] Create `JwtAuthGuard` to protect routes.
-   [ ] Use `@UseGuards(JwtAuthGuard)` on protected endpoints.
-   [ ] Create a custom `LoggingInterceptor` to log requests.
-   [ ] Create custom decorator: `@CurrentUser()` to get logged-in user.
-   [ ] Implement role-based access control (RBAC).

### 💬 Copilot Prompts

-   "What's the responsibility of a Guard vs Interceptor?"
-   "How do I create custom decorators?"
-   "Explain the execution order: Middleware → Guard → Interceptor."
-   "How do I implement role-based access control?"

------------------------------------------------------------------------

## 🧪 Day 10 -- Testing (Unit & Integration)

**Objective:** Write tests for your NestJS application.

### ✅ Tasks

-   [ ] Write unit tests for services with Jest.
-   [ ] Mock dependencies using `jest.mock()`.
-   [ ] Write integration tests for API endpoints.
-   [ ] Use Supertest for HTTP testing.
-   [ ] Achieve >80% code coverage.

### 💬 Copilot Prompts

-   "How do I set up Jest testing in NestJS?"
-   "What's the difference between unit and integration tests?"
-   "How do I mock services and database calls?"
-   "What should I test and what can I skip?"

------------------------------------------------------------------------

## 📝 Day 11 -- Advanced Features: Pagination, Filtering, Sorting

**Objective:** Build production-ready endpoints with advanced query capabilities.

### ✅ Tasks

-   [ ] Implement pagination: `?page=1&limit=10`.
-   [ ] Implement filtering: `?status=active&role=admin`.
-   [ ] Implement sorting: `?sort=createdAt:desc`.
-   [ ] Create a reusable query builder/formatter.
-   [ ] Add input validation for query parameters.

### 💬 Copilot Prompts

-   "What's the best way to implement pagination?"
-   "How do I handle complex filtering efficiently?"
-   "What are common pitfalls with pagination?"

------------------------------------------------------------------------

## 🔄 Day 12 -- Middleware, Pipes & Filters

**Objective:** Understand the complete request/response pipeline.

### ✅ Tasks

-   [ ] Create custom middleware (logging, rate limiting).
-   [ ] Create custom pipes for data transformation.
-   [ ] Create exception filters for consistent error handling.
-   [ ] Implement rate limiting middleware.
-   [ ] Order middleware correctly in `main.ts`.

### 💬 Copilot Prompts

-   "Explain the execution order of Middleware → Pipes → Guards."
-   "When should I use middleware vs guards vs interceptors?"
-   "How do I create custom exception filters?"

------------------------------------------------------------------------

## 📊 Day 13 -- Real-World: File Uploads & Webhooks

**Objective:** Implement practical features needed in production.

### ✅ Tasks

-   [ ] Implement file upload endpoint with validation.
-   [ ] Store files in AWS S3 or local storage.
-   [ ] Create webhook receiver for external services.
-   [ ] Validate webhook signatures.
-   [ ] Handle async operations with Bull queue.

### 💬 Copilot Prompts

-   "How do I handle file uploads in NestJS?"
-   "What's the best way to store files (S3 vs local)?"
-   "How do I implement webhooks securely?"

------------------------------------------------------------------------

## 🚀 Day 14 -- Deployment & DevOps

**Objective:** Deploy your NestJS API to production.

### ✅ Tasks

-   [ ] Create Docker image with `Dockerfile`.
-   [ ] Set up GitHub Actions for CI/CD.
-   [ ] Deploy to Heroku, Railway, or AWS EC2.
-   [ ] Configure environment variables.
-   [ ] Set up monitoring and logging (Winston, Sentry).

### 💬 Copilot Prompts

-   "How do I Dockerize a NestJS application?"
-   "What's the best way to deploy Node.js apps?"
-   "How do I set up CI/CD for NestJS?"

------------------------------------------------------------------------

## 🎯 Day 15 -- Performance & Optimization

**Objective:** Build fast, scalable APIs.

### ✅ Tasks

-   [ ] Implement caching with Redis.
-   [ ] Use database query optimization (indexes, eager loading).
-   [ ] Implement rate limiting and throttling.
-   [ ] Profile application with clinic.js.
-   [ ] Monitor performance with APM tools.

### 💬 Copilot Prompts

-   "How do I implement caching in NestJS?"
-   "What are N+1 query problems and how do I fix them?"
-   "How do I monitor API performance?"

------------------------------------------------------------------------

## 🎓 Day 16 -- Final Project & Advanced Topics

**Objective:** Build a production-ready backend API.

### ✅ Tasks

Choose one project:
- [ ] **Multi-tenant SaaS API**: User management, subscriptions, billing
- [ ] **Social Media Backend**: Posts, comments, likes, notifications, feed
- [ ] **E-Commerce API**: Products, cart, orders, payments, reviews
- [ ] **Project Management Tool**: Teams, projects, tasks, invites, permissions

Build with:
- [ ] Database design (Prisma/TypeORM)
- [ ] JWT authentication + refresh tokens
- [ ] Proper error handling and logging
- [ ] Pagination, filtering, and sorting
- [ ] Comprehensive tests (unit + integration)
- [ ] Docker containerization
- [ ] Deployed and live endpoint

### 💬 Copilot Prompts

-   "Help me structure this NestJS project."
-   "What's the best architecture for this feature?"
-   "How do I handle complex business logic?"

------------------------------------------------------------------------

## 🌟 Advanced Topics (After Day 16)

-   [ ] **GraphQL**: Implement GraphQL API instead of REST
-   [ ] **Microservices**: Build distributed NestJS applications
-   [ ] **Event-Driven**: Use message queues (RabbitMQ, Kafka)
-   [ ] **WebSockets**: Real-time communication
-   [ ] **CQRS**: Command Query Responsibility Segregation pattern
-   [ ] **Event Sourcing**: Event-driven architecture
-   [ ] **API Gateway**: Kong, AWS API Gateway
-   [ ] **Advanced Security**: OAuth2, API keys, rate limiting

------------------------------------------------------------------------

## ⚠️ Common Pitfalls

-   [ ] Not validating user input properly
-   [ ] Storing sensitive data in environment variables incorrectly
-   [ ] Not implementing proper error handling
-   [ ] N+1 query problems with databases
-   [ ] Forgetting to hash passwords
-   [ ] Not testing critical flows
-   [ ] Poorly designed database schemas
-   [ ] Missing CORS configuration

------------------------------------------------------------------------

## 📚 Recommended Resources

- **NestJS Official Docs:** https://docs.nestjs.com
- **TypeORM Docs:** https://typeorm.io
- **Prisma Docs:** https://prisma.io/docs
- **NestJS Discord:** https://discord.gg/G7Qnnhy
- **Security Best Practices:** https://owasp.org

------------------------------------------------------------------------

**Congratulations! You're building enterprise-grade backend APIs with NestJS!** 🚀
