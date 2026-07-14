# ⚙️ Server Module

This directory contains the backend implementation of the **UCAB – MERN Stack Cab Booking System**. The server is built using **Node.js**, **Express.js**, and **MongoDB**, providing RESTful APIs for user authentication, cab booking, and administrative operations.

---

## 📌 Responsibilities

The server module is responsible for:

- User Authentication
- User Registration & Login
- Booking Management
- Admin Operations
- Database Connectivity
- REST API Development
- Request Validation
- Error Handling

---

## 📂 Directory Structure

```
server/
├── config/
├── controllers/
├── middleware/
├── models/
├── routes/
├── .env
├── package.json
├── package-lock.json
├── server.js
└── README.md
```

---

## 🛠️ Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcrypt.js
- CORS
- dotenv

---

## 🚀 Getting Started

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file inside the `server` folder.

Example:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### Start the Server

```bash
npm start
```

or

```bash
node server.js
```

The backend server will start on:

```
http://localhost:5000
```

---

## 🔗 API Base URL

### Local Development

```
http://localhost:5000/api
```

### Production

```
https://cab-booking-mern-1.onrender.com
```

---

## 📡 API Modules

| Module | Purpose |
|---------|---------|
| Authentication | User registration and login |
| Booking | Create, view, and manage cab bookings |
| Admin | Manage booking requests and users |

---

## 📌 Note

This folder contains only the backend source code. The frontend application is located in the **client** directory and communicates with this server through REST APIs.
