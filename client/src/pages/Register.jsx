import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    setError("");
    setMessage("");

    try {
      const response = await api.post("/auth/register", {
        name,
        email,
        password,
      });

      console.log("Register Success:", response.data);

      setMessage("Registration Successful! Redirecting to Login...");

      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (err) {
      console.log("Register Error:", err);

      if (err.response) {
        console.log("Backend Response:", err.response.data);

        setError(
          err.response.data.message || "Registration failed"
        );
      } else if (err.request) {
        setError("Cannot connect to server. Please start the backend.");
      } else {
        setError("Something went wrong.");
      }
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#fff8e7",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "360px",
          background: "#fff",
          padding: "30px",
          borderRadius: "15px",
          boxShadow: "0 5px 20px rgba(0,0,0,0.2)",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "24px",
            marginBottom: "10px",
          }}
        >
          🚕 Create Account
        </h1>

        <p
          style={{
            color: "#666",
            marginBottom: "20px",
          }}
        >
          Register to book your cab
        </p>

        {error && (
          <p
            style={{
              color: "red",
              marginBottom: "15px",
            }}
          >
            {error}
          </p>
        )}

        {message && (
          <p
            style={{
              color: "green",
              marginBottom: "15px",
            }}
          >
            {message}
          </p>
        )}

        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={inputStyle}
            required
          />

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
            required
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
            required
          />

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              background: "#28a745",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Register
          </button>
        </form>

        <p
          style={{
            marginTop: "20px",
            color: "#555",
          }}
        >
          Already have an account?
          <span
            onClick={() => navigate("/login")}
            style={{
              color: "#007bff",
              cursor: "pointer",
              fontWeight: "bold",
              marginLeft: "5px",
            }}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  fontSize: "15px",
  boxSizing: "border-box",
};

export default Register;