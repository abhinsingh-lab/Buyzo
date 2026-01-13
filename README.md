# Buyzo - E-commerce Starter Boilerplate (Learning Edition)

Welcome to **Buyzo**! This is a starter project designed for learning modern full-stack development. It contains intentional "gaps" and unoptimized code to serve as a base for future lessons on performance, validation, and advanced state management.

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm

### Installation

1. **Clone the repository** (or copy these files).
2. **Setup Backend**:
   ```bash
   cd backend
   npm install
   npm run dev
   ```
   The backend will run on `http://localhost:5001`.

3. **Setup Frontend**:
   ```bash
   cd frontend
   npm install
   npm run dev
   ```
   The frontend will run on `http://localhost:5173`.

## 🛠 Tech Stack
- **Frontend**: React (Vite), TypeScript, Plain CSS (CSS Modules).
- **Backend**: Node.js, Express, TypeScript.
- **State Management**: React Context API.

## 🎓 Intentional "Gaps" for Learning

This boilerplate has several areas that are **intentionally unoptimized** or incomplete. Your goal in future lessons will be to fix these:

### 1. Search Debouncing (Frontend)
- **Current State**: The search bar in `Home.tsx` triggers a backend API call and a console log on **every single keystroke**.
- **Lesson**: We will implement a `useDebounce` hook to limit API calls and improve performance.

### 2. List Virtualization (Frontend)
- **Current State**: The Home page renders **1,000 items** directly into the DOM as a grid. This causes lag when scrolling or searching.
- **Lesson**: We will learn how to use `react-window` or `tanstack-virtual` to render only the visible items.

### 3. Backend Validation & Error Handling (Backend)
- **Current State**: The `/api/orders` endpoint in `index.ts` accepts any JSON body and pushes it to an array without checking if required fields (like shipping address or items) exist.
- **Lesson**: We will implement **Zod** or **Joi** for schema validation and create custom **Express Middleware** for error handling.

### 4. Authentication (Fullstack)
- **Current State**: The "Login" is purely client-side. Clicking "Login" sets a boolean in Context. There is no real JWT or Session management.
- **Lesson**: We will implement real JWT-based authentication with password hashing (bcrypt) and protected routes.

### 5. CSS Scoping (Styling)
- **Current State**: We are using a mix of `global.css` and `.module.css`. 
- **Lesson**: Understand how CSS Modules prevent style leakage compared to global CSS.

## 📂 Folder Structure
```
buyzo/
├── frontend/             # React application
│   ├── src/
│   │   ├── components/   # Reusable UI components
│   │   ├── context/      # State management (Auth, Cart)
│   │   ├── pages/        # Page components (Home, Product, etc.)
│   │   └── styles/       # Global and component styles
├── backend/              # Express API
│   ├── src/
│   │   ├── data/         # Mock database (JSON/Array)
│   │   └── index.ts      # Server entry point
└── README.md
```

Happy coding! 🚀
# Intern task list (frontend)
- Add plus minus buttons on the image itself to add to cart 
- Pagination (10 items should be visible per page).

- tabs for filter

Each TODO is marked inside files under src/.