# 🚀 Simple-Dashboard-Vue-with-RESTAPIs

A modern, responsive Admin Dashboard built with **Vue 3, Vite, Tailwind CSS v4, and Vue Router**. This project is a hands-on learning experience focused on building a real-world dashboard using Vue.js and modern frontend technologies.

## 📸 Project Overview

The dashboard provides a clean, modern interface for managing users, products, orders, analytics, and application settings.

## ✨ Features

- 📊 **Dashboard Overview** – Statistics cards and data visualization charts.
- 👥 **Users Management** – View and manage users.
- 🔍 **Search Users** – Search users by name or email.
- 🏷️ **Filter Users** – Filter users by account status.
- ➕ **Add Users** – Add new users through a modal form.
- ✏️ **Edit Users** – Update existing user information.
- 🗑️ **Delete Users** – Remove users from the table.
- 🌐 **REST API Integration** – Fetch user data from DummyJSON.
- 📱 **Responsive Design** – Mobile, tablet, and desktop layouts.
- 🧭 **Navigation** – Multi-page navigation using Vue Router.
- 🎨 **Modern UI** – Clean light theme with Tailwind CSS.

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| Vue 3 | Frontend framework |
| Vite | Development server and build tool |
| Tailwind CSS v4 | Styling and responsive design |
| Vue Router | Application navigation |
| Chart.js | Data visualization |
| Vue Chart.js | Vue chart components |
| Lucide Vue Next | Icons |
| Fetch API | HTTP requests |
| DummyJSON | Sample REST API |

## 📂 Project Structure

```text
src/
├── assets/
├── components/
│   ├── layout/
│   │   ├── Sidebar.vue
│   │   └── Navbar.vue
│   └── dashboard/
│       ├── StatCard.vue
│       ├── RevenueChart.vue
│       ├── SalesChart.vue
│       └── RecentOrders.vue
├── layouts/
│   └── DashboardLayout.vue
├── router/
│   └── index.js
├── views/
│   ├── Dashboard.vue
│   ├── Users.vue
│   ├── Products.vue
│   ├── Orders.vue
│   ├── Analytics.vue
│   └── Settings.vue
├── App.vue
├── main.js
└── style.css
```

## ⚙️ Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/Musab-BenJadi/Simple-Dashboard-Vue-with-RESTAPIs.git
```

### 2. Navigate to the project folder

```bash
cd Simple-Dashboard-Vue-with-RESTAPIs
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Open in your browser

Visit the local URL provided by Vite, usually:

```text
http://localhost:5173
```

## 🌐 API Integration

This project uses the DummyJSON Users API to retrieve sample user data.

**API Endpoint:**

```text
https://dummyjson.com/users
```

Example:

```javascript
fetch('https://dummyjson.com/users')
  .then(res => res.json())
  .then(data => console.log(data.users))
  .catch(error => console.error(error))
```

The project also uses Vue's Composition API and `onMounted()` to fetch data when the Users page loads.

**Note:** DummyJSON is a demonstration API. Create, update, and delete operations are not permanently saved to its database.

## 📚 Learning Objectives

This project helps practice:

- Vue 3 Composition API
- Reactive state with `ref()`
- Computed properties with `computed()`
- Lifecycle hooks with `onMounted()`
- Component creation and reuse
- Props and component events
- Vue Router navigation
- Conditional rendering with `v-if`
- List rendering with `v-for`
- Form handling with `v-model`
- API integration using Fetch
- Responsive layouts using Tailwind CSS

## 🚧 Future Improvements

- [ ] Complete Products Management
- [ ] Complete Orders Management
- [ ] Complete Analytics page
- [ ] Add pagination to the Users page
- [ ] Add user form validation
- [ ] Add authentication and authorization
- [ ] Integrate a real backend API
- [ ] Add dark mode
- [ ] Add persistent data storage

## 🎯 Project Purpose

This project was created as a practical learning journey to understand Vue 3 by building a modern admin dashboard step by step.

It is intended for beginners and developers who want to improve their Vue.js skills through hands-on development.


---

⭐ If you find this project useful, consider giving it a star!