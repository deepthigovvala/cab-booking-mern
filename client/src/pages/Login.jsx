import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";


function Login() {

  const navigate = useNavigate();


  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [error,setError] = useState("");



  const handleLogin = async(e)=>{

    e.preventDefault();


    try{


      const response = await api.post(
        "/auth/login",
        {
          email,
          password
        }
      );



      console.log(
        "Login Response:",
        response.data
      );



      // remove old data

      localStorage.removeItem("token");
      localStorage.removeItem("user");




      // save token

      localStorage.setItem(
        "token",
        response.data.token
      );




      // save user details

      localStorage.setItem(
        "user",
        JSON.stringify(
          response.data.user
        )
      );




      navigate("/home");


    }
    catch(error){


      console.log(
        "Login Error:",
        error
      );


      setError(
        "Invalid email or password"
      );


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
            fontSize:"28px",
            color:"#222",
            marginBottom:"8px",
            fontWeight:"700"
          }}
        >
          🚖 Cab Booking
        </h1>




        <p
          style={{
            color:"#666",
            marginBottom:"25px"
          }}
        >
          Your ride, your way
        </p>





        {
          error &&

          <p
            style={{
              color:"red",
              marginBottom:"15px"
            }}
          >
            {error}
          </p>

        }





        <form onSubmit={handleLogin}>


          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e)=>
              setEmail(e.target.value)
            }
            required
            style={inputStyle}
          />



          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e)=>
              setPassword(e.target.value)
            }
            required
            style={inputStyle}
          />




          <button
            type="submit"
            style={buttonStyle}
          >
            Login
          </button>



        </form>






        <p
          style={{
            marginTop:"20px",
            color:"#555"
          }}
        >

          Don't have an account?


          <span
            onClick={()=>
              navigate("/register")
            }
            style={{
              color:"#007bff",
              cursor:"pointer",
              marginLeft:"5px",
              fontWeight:"bold"
            }}
          >
            Register
          </span>


        </p>




      </div>



    </div>

  );

}





const inputStyle={

  width:"100%",
  padding:"12px",
  marginBottom:"15px",
  borderRadius:"8px",
  border:"1px solid #ccc",
  fontSize:"15px",
  boxSizing:"border-box"

};




const buttonStyle={

  width:"100%",
  padding:"12px",
  background:"#FFD700",
  color:"#111",
  border:"none",
  borderRadius:"8px",
  fontWeight:"bold",
  fontSize:"16px",
  cursor:"pointer"

};



export default Login;