import axios from "axios";

const API = axios.create({
  baseURL: "https://cab-booking-mern-1.onrender.com",
});

export default API;
