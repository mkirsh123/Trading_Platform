# 📈 Trading Platform Web App

A full-stack trading platform inspired by Zerodha's dashboard. This project is designed to simulate trading features including **Dashboard, Holdings, Orders, and Positions** with a visually appealing UI and functional backend.

## 🔗 Live Sites

- 🔹 Landing Page: [https://candid-cupcake-537f43.netlify.app](https://candid-cupcake-537f43.netlify.app)
- 🔹 Dashboard: [https://tradingplatformdashboard.netlify.app](https://tradingplatformdashboard.netlify.app)

---

## 📸 Screenshots

### 🔐 Landing Page (Signup/Info Page)
![Landing Page](./screenshots/landing-page.png)

> **Note:** Due to some issues, user authentication is currently not functional. You can still navigate to the dashboard directly using the “Go to Dashboard” button.

---

### 📊 Dashboard Preview
![Dashboard Preview](./screenshots/dashboard-preview.png)

- Summary of equity and commodity balances.
- Holdings breakdown with gain/loss bars.
- Pie chart showing asset allocation.
- Market overview graph and position heatmap.

---

### 🗃️ Orders in MongoDB Atlas
![MongoDB](./screenshots/mongodb-orders.png)

- Integrated with MongoDB Atlas.
- Orders are stored in the `Trading.orders` collection.
- Other collections: `holdings`, `positions`, `users`.

---

### 👤 Dashboard UI for Logged-in Users
![Dashboard Logged In](./screenshots/user-dashboard.png)

- Displays equities and balances per user.
- Sidebar contains live stock listings with percentage change.

---

## 💻 Tech Stack

### 🧩 Frontend
- React.js
- React Router
- Axios
- CSS / Custom styling
- Netlify for deployment

### 🧠 Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- MongoDB Atlas (Cloud database)
- Render for deployment


