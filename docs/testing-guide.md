# 📚 Testing Guide for Full-Stack Development

A comprehensive guide to testing React, Next.js, and NestJS applications.

------------------------------------------------------------------------

## Table of Contents

1. [React Testing](#react-testing)
2. [Next.js Testing](#nextjs-testing)
3. [NestJS Testing](#nestjs-testing)
4. [Best Practices](#best-practices)

------------------------------------------------------------------------

## React Testing

### Tools & Setup

```bash
# Install testing dependencies
npm install --save-dev @testing-library/react @testing-library/jest-dom jest
```

### Types of Tests

#### 1. **Component Tests**
```javascript
import { render, screen } from '@testing-library/react';
import Button from './Button';

test('renders button with text', () => {
  render(<Button>Click me</Button>);
  expect(screen.getByText('Click me')).toBeInTheDocument();
});
```

#### 2. **User Interaction Tests**
```javascript
import { render, screen, fireEvent } from '@testing-library/react';

test('increments counter on click', () => {
  render(<Counter />);
  const button = screen.getByRole('button');
  fireEvent.click(button);
  expect(screen.getByText('1')).toBeInTheDocument();
});
```

#### 3. **Hook Tests**
```javascript
import { renderHook, act } from '@testing-library/react';
import { useCounter } from './useCounter';

test('increments count', () => {
  const { result } = renderHook(() => useCounter());
  act(() => result.current.increment());
  expect(result.current.count).toBe(1);
});
```

### Best Practices

- ✅ Test user behavior, not implementation
- ✅ Use `screen` queries instead of `container`
- ✅ Avoid testing implementation details
- ✅ Test accessibility with accessible queries
- ✅ Mock API calls with MSW (Mock Service Worker)

------------------------------------------------------------------------

## Next.js Testing

### Tools & Setup

```bash
npm install --save-dev @testing-library/react jest @testing-library/jest-dom
npm install --save-dev jest-environment-jsdom
```

### API Route Tests

```javascript
// api/users.test.js
import { createMocks } from 'node-mocks-http';
import handler from './users';

test('GET /api/users', async () => {
  const { req, res } = createMocks({
    method: 'GET',
  });

  await handler(req, res);

  expect(res._getStatusCode()).toBe(200);
  const json = JSON.parse(res._getData());
  expect(json).toHaveProperty('users');
});
```

### Server Component Tests

```javascript
// Test async server components
import { render } from '@testing-library/react';
import Page from './page';

test('renders page with data', async () => {
  const component = await Page();
  render(component);
  expect(screen.getByText('Data')).toBeInTheDocument();
});
```

### E2E Testing with Playwright

```bash
npm install --save-dev @playwright/test
```

```javascript
// e2e/homepage.spec.js
import { test, expect } from '@playwright/test';

test('homepage loads', async ({ page }) => {
  await page.goto('http://localhost:3000');
  expect(await page.title()).toContain('Home');
});
```

------------------------------------------------------------------------

## NestJS Testing

### Unit Testing Services

```javascript
// users.service.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { PrismaService } from '../prisma/prisma.service';

describe('UsersService', () => {
  let service: UsersService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: PrismaService,
          useValue: {
            user: {
              findUnique: jest.fn(),
            },
          },
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  it('should find a user by id', async () => {
    const user = { id: 1, name: 'John' };
    jest.spyOn(prisma.user, 'findUnique').mockResolvedValue(user);

    expect(await service.findOne(1)).toEqual(user);
  });
});
```

### Integration Testing Controllers

```javascript
// users.controller.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('UsersController', () => {
  let controller: UsersController;
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
    }).compile();

    controller = module.get<UsersController>(UsersController);
    service = module.get<UsersService>(UsersService);
  });

  it('should return all users', async () => {
    const users = [{ id: 1, name: 'John' }];
    jest.spyOn(service, 'findAll').mockResolvedValue(users);

    expect(await controller.findAll()).toEqual(users);
  });
});
```

### E2E Testing

```javascript
// users.e2e.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('Users (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('GET /users', () => {
    return request(app.getHttpServer())
      .get('/users')
      .expect(200)
      .expect((res) => {
        expect(Array.isArray(res.body)).toBe(true);
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
```

------------------------------------------------------------------------

## Best Practices

### General Testing Principles

1. **AAA Pattern** (Arrange, Act, Assert)
   ```javascript
   test('adds two numbers', () => {
     // Arrange
     const a = 2;
     const b = 3;

     // Act
     const result = add(a, b);

     // Assert
     expect(result).toBe(5);
   });
   ```

2. **Test Naming**
   ```javascript
   // Good
   test('should return 404 when user not found');

   // Bad
   test('returns error');
   ```

3. **Avoid Over-Testing**
   - Don't test implementation details
   - Don't test framework code
   - Don't test trivial getters/setters

4. **Mock External Dependencies**
   ```javascript
   // Mock API calls
   const mockFetch = jest.fn(() => Promise.resolve({
     json: () => Promise.resolve({ id: 1, name: 'John' })
   }));
   global.fetch = mockFetch;
   ```

5. **Test Coverage Goals**
   - Statements: >80%
   - Branches: >75%
   - Functions: >80%
   - Lines: >80%

### Async Testing

```javascript
// React
test('loads user data', async () => {
  render(<UserProfile />);
  const user = await screen.findByText('John');
  expect(user).toBeInTheDocument();
});

// NestJS
test('creates user', async () => {
  const user = await service.create({ name: 'John' });
  expect(user.id).toBeDefined();
});
```

### Testing Errors

```javascript
// React
test('shows error on failed fetch', async () => {
  fetch.mockRejectedValueOnce(new Error('Failed'));
  render(<UserList />);
  const error = await screen.findByText('Error loading users');
  expect(error).toBeInTheDocument();
});

// NestJS
test('throws NotFoundException', async () => {
  await expect(service.findOne(999)).rejects.toThrow(NotFoundException);
});
```

------------------------------------------------------------------------

## Running Tests

```bash
# React
npm test

# Next.js
npm run test

# NestJS
npm run test
npm run test:e2e
npm run test:cov  # With coverage

# Watch mode
npm test -- --watch

# Specific file
npm test users.service.spec.ts

# Coverage report
npm test -- --coverage
```

------------------------------------------------------------------------

## Continuous Integration

### GitHub Actions Example

```yaml
name: Tests

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v2

      - name: Install Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm install

      - name: Run tests
        run: npm test -- --coverage

      - name: Upload coverage
        uses: codecov/codecov-action@v2
```

------------------------------------------------------------------------

**Remember: Good tests make you faster in the long run!** ✅
