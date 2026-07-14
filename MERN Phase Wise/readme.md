#🚖 UCAB - Cab Booking System (Frontend)

UCAB is a modern and user-friendly cab booking application built using **React.js**. It enables users to register, log in, book cabs, view available rides, track bookings, and manage their profile through a responsive and intuitive interface.

---

## 🌐 Live Demo

**Frontend (Live Application):**  
https://cab-booking-mern-5.onrender.com

**Backend API:**  
https://cab-booking-mern-1.onrender.com

**GitHub Repository:**  
https://github.com/deepthigovvala/cab-booking-mern

**Deployed URL:**
https://cab-booking-mern-5.onrender.com

---

## 📌 Features

- 🔐 User Registration & Login
- 🚖 Book a Cab
- 📍 Select Pickup & Drop Locations
- 🚘 View Available Cabs
- 💰 Fare Estimation
- 📋 View Booking History
- 👤 User Dashboard
- 🛡️ Secure Authentication
- 📱 Responsive User Interface
- ⚡ Fast and Interactive Experience

---

## 🛠️ Tech Stack

- React.js
- JavaScript (ES6+)
- HTML5
- CSS3
- Axios
- React Router DOM
- Vite

---

## 📂 Project Structure

```
client/
│── public/
│── src/
│   ├── api/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│── package.json
│── vite.config.js
└── README.md
```

---

## ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/deepthigovvala/cab-booking-mern.git
```

Navigate to the client folder

```bash
cd cab-booking-mern/client
```

Install dependencies

```bash
npm install
```

Start the development server

```bash
npm run dev
```

The application will run at:

```
http://localhost:5173
```

---

## 🔗 API Configuration

Update the API URL in:

```
src/services/api.js
```

Example:

```javascript
import axios from "axios";

const api = axios.create({
  baseURL: "https://cab-booking-mern-1.onrender.com/api",
});

export default api;
```


---

## 👥 Team Members

- **Pavan Sri Ambikesh Pilli** – Team Lead
- **Govvala Harika Deepthi**
- **Sayan Kar**
- **Vamsi Meesala**
- **Suvarna Ratnam Naradala**

---

## 📄 License

This project was developed for academic purposes as part of the **UCAB – MERN Stack Cab Booking System**.

---
⭐ If you found this project useful, please consider giving it a star on GitHub.
