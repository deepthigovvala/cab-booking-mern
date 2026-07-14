import axios from "axios";

const api = axios.create({
  baseURL: "https://cab-booking-mern-1.onrender.com/api",
});

export default api;
