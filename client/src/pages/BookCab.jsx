import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import api from "../services/api";


function BookCab(){

  const navigate = useNavigate();


  const [pickupCity,setPickupCity] = useState("");
  const [dropCity,setDropCity] = useState("");
  const [fare,setFare] = useState("");
  const [date,setDate] = useState("");
  const [time,setTime] = useState("");



  const bookCab = async(e)=>{

    e.preventDefault();


    try{


      const response = await api.post(
        "/booking/book",
        {
          pickupCity,
          dropCity,
          fare,
          date,
          time
        },
        {
          headers:{
            Authorization:
            `Bearer ${localStorage.getItem("token")}`
          }
        }
      );



      console.log(response.data);


      alert("Cab Booked Successfully 🚕");


      navigate("/mybookings");


    }
    catch(error){

      console.log(error);

      alert("Booking Failed");

    }

  };





  return(

    <div
      style={{
        minHeight:"100vh",
        background:"#fff8e7",
        display:"flex",
        flexDirection:"column"
      }}
    >


      <Navbar />



      <div
        style={{
          flex:1,
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          padding:"40px"
        }}
      >



        <form
          onSubmit={bookCab}
          style={{
            width:"380px",
            background:"#fff",
            padding:"30px",
            borderRadius:"15px",
            boxShadow:"0 5px 20px rgba(0,0,0,0.2)"
          }}
        >


          <h1
            style={{
              textAlign:"center"
            }}
          >
            🚕 Book Cab
          </h1>



          <input
            placeholder="Pickup City"
            value={pickupCity}
            onChange={(e)=>setPickupCity(e.target.value)}
            style={inputStyle}
            required
          />



          <input
            placeholder="Drop City"
            value={dropCity}
            onChange={(e)=>setDropCity(e.target.value)}
            style={inputStyle}
            required
          />



          <input
            placeholder="Fare"
            value={fare}
            onChange={(e)=>setFare(e.target.value)}
            style={inputStyle}
            required
          />



          <input
            type="date"
            value={date}
            onChange={(e)=>setDate(e.target.value)}
            style={inputStyle}
            required
          />



          <input
            type="time"
            value={time}
            onChange={(e)=>setTime(e.target.value)}
            style={inputStyle}
            required
          />



          <button
            type="submit"
            style={{
              width:"100%",
              padding:"12px",
              background:"#FFD700",
              border:"none",
              borderRadius:"8px",
              fontWeight:"bold",
              cursor:"pointer"
            }}
          >
            Book Now
          </button>



        </form>



      </div>



      <Footer />


    </div>

  );

}



const inputStyle={

  width:"100%",
  padding:"12px",
  marginBottom:"15px",
  borderRadius:"8px",
  border:"1px solid #ccc",
  boxSizing:"border-box"

};



export default BookCab;