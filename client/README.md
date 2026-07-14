# 💻 Client Module

This directory contains the frontend implementation of the **UCAB – MERN Stack Cab Booking System**. The client is built using **React.js** and **Vite**, providing a responsive and interactive interface for users and administrators.

---

## 📁 Folder Purpose

The client module is responsible for:

- Rendering the user interface
- Managing application routing
- Communicating with the backend APIs
- Handling user authentication
- Managing cab booking operations
- Displaying booking history and admin views

---

## 📂 Directory Structure

```
client/
├── public/
├── src/
│   ├── api/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── App.jsx
│   ├── main.jsx
│   └── style.css
├── package.json
└── vite.config.js
```

---

## ⚙️ Frontend Technologies

- React.js
- Vite
- JavaScript (ES6)
- HTML5
- CSS3
- Axios
- React Router DOM

---

## 🚀 Running the Client

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application will be available at:

```
http://localhost:5173
```

---

## 🔗 Backend Connection

The frontend communicates with the backend through Axios.

Default API:

```
https://cab-booking-mern-1.onrender.com/api
```

---

## 📄 Key Pages

- Home
- Register
- Login
- Dashboard
- Book Cab
- My Bookings
- Admin Dashboard

---

## 📌 Note

This folder contains only the frontend source code. Backend services, database configuration, and REST APIs are maintained in the **server** module of this repository.
