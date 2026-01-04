# ShopMate AI-Powered E-commerce Store Admin Dashboard

**Live Site:** [https://shopmate-ai-dashboard.netlify.app/](https://shopmate-ai-dashboard.netlify.app/)

## Overview

This is the Admin Dashboard for ShopMate, an AI-powered e-commerce platform. Built with React, Vite, Redux, and Tailwind CSS, it allows administrators to manage products, users, orders, and view analytics. The dashboard provides a modern interface for monitoring the store and performing administrative actions securely and efficiently.

**GitHub Repository Description:**
A React-based admin dashboard for managing an AI-powered e-commerce store, featuring Redux for state management, charts with Recharts, and Tailwind CSS for a modern, responsive UI.

---

## Features

- **Admin Authentication**
  - Secure login and role-based access
- **Product Management**
  - Add, update, delete, and view products
- **Order & User Management**
  - Monitor orders, user activity, and manage accounts
- **Analytics & Dashboard**
  - Visual charts and stats using Recharts
- **Notifications**
  - Toast notifications for actions and alerts
- **Responsive Design**
  - Mobile-friendly and modern UI with Tailwind CSS

---

## Admin Test Credentials

Use the following credentials to log in and test the dashboard:

- **Email:** admin@gmail.com
- **Password:** 111111

---

## Technology Stack

- **Frontend:** React, Vite  
- **State Management:** Redux Toolkit, React-Redux  
- **Routing:** React Router DOM  
- **Styling:** Tailwind CSS  
- **Charts & Analytics:** Recharts  
- **HTTP Requests:** Axios  
- **Notifications:** React Toastify  
- **Linting:** ESLint, eslint-plugin-react-hooks  

---

## Installation

1. **Clone the repository**

```bash
git clone https://github.com/lukmanxpert/shopmate-ai-powered-ecommerce-store-dashboard.git
cd shopmate-ai-powered-ecommerce-store-dashboard
```

2. **Install dependencies**

```bash
npm install
```

3. **Create a `.env` file** (if needed) for backend API URL:

```env
VITE_BACKEND_URL=https://shopmate-server.onrender.com/
```

4. **Start development server**

```bash
npm run dev
```

5. **Build for production**

```bash
npm run build
```

6. **Preview production build**

```bash
npm run preview
```

---

## Folder Structure

```
dashboard/
│
├── src/
│   ├── components/      # Reusable UI components
│   ├── pages/           # Dashboard pages (products, users, orders, analytics)
│   ├── redux/           # Redux slices and store
│   ├── routes/          # React Router routes
│   ├── utils/           # Helper functions (API requests, notifications)
│   ├── App.jsx          # Main app component
│   └── main.jsx         # Entry point
├── public/              # Static assets
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## Contribution

1. Fork the repository  
2. Create a new branch (`git checkout -b feature/your-feature`)  
3. Make your changes and commit (`git commit -m 'Add new feature'`)  
4. Push to the branch (`git push origin feature/your-feature`)  
5. Create a Pull Request

---

## License

This project is licensed under the **ISC License**.

---

## Contact

**Author:** Sheikh Lukman  
**GitHub:** [https://github.com/lukmanxpert](https://github.com/lukmanxpert)

