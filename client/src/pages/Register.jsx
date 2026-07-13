import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";


function Register() {

  const navigate = useNavigate();

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [error,setError] = useState("");
  const [message,setMessage] = useState("");


  const handleRegister = async (e)=>{

    e.preventDefault();

    try{

      await api.post("/auth/register",
      {
        name,
        email,
        password
      });


      setMessage("Registration successful! Please login.");


      setTimeout(()=>{
        navigate("/login");
      },1500);


    }
    catch(error){

      console.log(error);

      setError("Registration failed");

    }

  };


  return (

    <div
      style={{
        minHeight:"100vh",
        background:"#fff8e7",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        padding:"20px"
      }}
    >


      <div
        style={{
          width:"360px",
          background:"#fff",
          padding:"30px",
          borderRadius:"15px",
          boxShadow:"0px 5px 20px rgba(0,0,0,0.2)",
          textAlign:"center"
        }}
      >


        <h1
          style={{
            fontSize:"24px",
            fontWeight:"700",
            color:"#222",
            marginBottom:"10px"
          }}
        >
          🚕 Create Account
        </h1>


        <p
          style={{
            color:"#666",
            marginBottom:"20px",
            fontSize:"15px"
          }}
        >
          Register to book your cab
        </p>



        {
          error &&
          <p
            style={{
              color:"red"
            }}
          >
            {error}
          </p>
        }



        {
          message &&
          <p
            style={{
              color:"green"
            }}
          >
            {message}
          </p>
        }




        <form onSubmit={handleRegister}>


          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            required
            style={inputStyle}
          />



          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required
            style={inputStyle}
          />



          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            required
            style={inputStyle}
          />



          <button
            type="submit"
            style={{
              width:"100%",
              padding:"12px",
              background:"#28a745",
              color:"#fff",
              border:"none",
              borderRadius:"8px",
              fontWeight:"bold",
              fontSize:"16px",
              cursor:"pointer"
            }}
          >
            Register
          </button>


        </form>




        <p
          style={{
            marginTop:"20px",
            color:"#555",
            fontSize:"14px"
          }}
        >

          Already have an account?


          <span
            onClick={()=>navigate("/login")}
            style={{
              color:"#007bff",
              cursor:"pointer",
              marginLeft:"5px",
              fontWeight:"bold"
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

  width:"100%",
  padding:"12px",
  marginBottom:"15px",
  borderRadius:"8px",
  border:"1px solid #ccc",
  fontSize:"15px",
  boxSizing:"border-box"

};


export default Register;