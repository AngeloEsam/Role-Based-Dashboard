# 📊 Role-Based Dashboard

A **role-based access control (RBAC) dashboard** built with **React, TypeScript, Vite, and Tailwind CSS**.  
This project demonstrates how to manage authentication, authorization, and role-specific routes inside a modern web application.

---

## 🚀 Features

- 🔐 **Authentication System**: Login with persistent session stored in `localStorage`.
- 👥 **Role-Based Access**: Different roles (`Manager`, `HR`, `Sales`) have access to different pages.
- 🧑‍💼 **User Management**: View and manage users (restricted to `Manager` & `HR`).
- 📇 **Clients Management**: View and manage clients (restricted to `Manager` & `Sales`).
- 💰 **Finance Page**: Manage financial data (restricted to `Manager` & `HR`).
- 🖥️ **Dashboard Overview**: General dashboard page available to all roles.
- 🎨 **Modern UI**: Built with **Tailwind CSS 4** + **Framer Motion** animations.
- ✅ **Form Handling & Validation**: Using `Formik` + `Yup`.

---

## 🛠️ Tech Stack

- ⚛️ **React 18** with **TypeScript**
- ⚡ **Vite 5** for fast development
- 🎨 **Tailwind CSS 4** for styling
- 🌀 **Framer Motion** for animations
- 📝 **Formik** + **Yup** for forms & validation
- 🔗 **React Router v7** for navigation
- 🎯 **Lucide React** icons

---

## 📂 Project Structure

public/
└── data/
├── users.json 
└── clients.json
src/
├── components/
│ ├── Layout.tsx
│ ├── Navbar.tsx
│ ├── Sidebar.tsx
│ ├── ProtectedRoute.tsx
│ └── EditProfileModal.tsx
├── context/
│ └── contextUser.tsx
├── pages/
│ ├── LoginPage.tsx
│ ├── DashboardPage.tsx
│ ├── UsersPage.tsx
│ ├── ClientsPage.tsx
│ └── FinancePage.tsx
├── App.tsx
└── main.tsx

---


## 📌 Available Pages

1. **Login Page** → Authentication entry point.  
2. **Dashboard Page** → Overview of system data.  
3. **Users Management Page** → Restricted to `Manager` & `HR`.  
4. **Clients Page** → Restricted to `Manager` & `Sales`.  
5. **Finance Page** → Restricted to `Manager` & `HR`.  

---

## ⚙️ Getting Started

### 📥 Clone the repository
```bash
git clone https://github.com/your-username/role-based-dashboard.git
cd role-based-dashboard

--

##  Run project
npm install
npm run dev

