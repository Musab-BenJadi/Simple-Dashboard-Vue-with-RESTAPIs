# 🚀 Vue 3 Admin Dashboard

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
├── router