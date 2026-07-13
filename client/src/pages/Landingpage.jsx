import React from "react";
import { useNavigate } from "react-router-dom";


function LandingPage(){

  const navigate = useNavigate();


  return (

    <div
      style={{
        minHeight:"100vh",
        background:"linear-gradient(135deg,#fff8e7,#ffffff)",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        padding:"20px",
        position:"relative",
        overflow:"hidden"
      }}
    >


      {/* Background Text */}

      <div
        style={{
          position:"absolute",
          fontSize:"110px",
          fontWeight:"900",
          color:"rgba(0,0,0,0.04)",
          letterSpacing:"8px",
          zIndex:"0",
          transform:"rotate(-15deg)"
        }}
      >
     CAB BOOKING
      </div>





      <div
        style={{
          width:"430px",
          padding:"45px",
          borderRadius:"25px",
          background:"#ffffff",
          textAlign:"center",
          boxShadow:"0 15px 40px rgba(0,0,0,0.15)",
          position:"relative",
          zIndex:"1"
        }}
      >




        <div
          style={{
            fontSize:"70px",
            marginBottom:"10px"
          }}
        >
          🚖
        </div>





        <h1
          style={{
            fontSize:"38px",
            margin:"10px 0",
            color:"#222",
            fontWeight:"800"
          }}
        >
          Cab Booking
        </h1>





        <p
          style={{
            fontSize:"16px",
            color:"#777",
            marginBottom:"35px"
          }}
        >
          Your ride, your way
        </p>







        <div
          style={{
            display:"flex",
            justifyContent:"space-between",
            gap:"15px"
          }}
        >



          <div style={boxStyle}>
            <h2>🚗</h2>
            <p>Easy Booking</p>
          </div>



          <div style={boxStyle}>
            <h2>⚡</h2>
            <p>Fast Ride</p>
          </div>



          <div style={boxStyle}>
            <h2>🛡️</h2>
            <p>Safe</p>
          </div>



        </div>







        <button
          onClick={()=>navigate("/login")}
          style={{
            width:"100%",
            marginTop:"35px",
            padding:"14px",
            background:"#FFD700",
            color:"#111",
            border:"none",
            borderRadius:"12px",
            fontSize:"17px",
            fontWeight:"bold",
            cursor:"pointer"
          }}
        >
          Login
        </button>







        <button
          onClick={()=>navigate("/register")}
          style={{
            width:"100%",
            marginTop:"15px",
            padding:"14px",
            background:"#222",
            color:"#fff",
            border:"none",
            borderRadius:"12px",
            fontSize:"17px",
            fontWeight:"bold",
            cursor:"pointer"
          }}
        >
          Register
        </button>







        <p
          style={{
            marginTop:"30px",
            fontSize:"13px",
            color:"#999"
          }}
        >
          Comfortable rides • Affordable fares • Trusted service 🚖
        </p>



      </div>



    </div>

  );

}





const boxStyle = {

  background:"#fff8e7",
  padding:"12px",
  borderRadius:"12px",
  flex:1,
  fontSize:"12px",
  color:"#555"

};



export default LandingPage;