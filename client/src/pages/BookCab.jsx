import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function BookCab() {

  const navigate = useNavigate();

  const [pickupCity, setPickupCity] = useState("");
  const [dropCity, setDropCity] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [period, setPeriod] = useState("AM");


  const bookCab = async (e) => {
    e.preventDefault();

    try {

      const token = localStorage.getItem("token");

      if(!token){
        alert("Please Login First");
        navigate("/login");
        return;
      }


      const response = await api.post(
        "/booking/book",
        {
          pickupCity,
          dropCity,
          date,
          time: `${time} ${period}`,
          fare: "500"
        },
        {
          headers:{
            Authorization:`Bearer ${token}`
          }
        }
      );


      console.log(response.data);

      alert("Cab Booked Successfully 🚕");

      navigate("/mybookings");


    } catch(error){

      console.log("Booking Error:",error);
      console.log(error.response);

      alert(
        error.response?.data?.message ||
        "Booking Failed"
      );
    }

  };


  return (

    <div
      style={{
        minHeight:"100vh",
        background:"#fff8e7",
        display:"flex",
        flexDirection:"column"
      }}
    >

      <Navbar/>


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


          <h1 style={{textAlign:"center"}}>
            🚕 Book Cab
          </h1>


          <input
            type="text"
            placeholder="Pickup City"
            value={pickupCity}
            onChange={(e)=>setPickupCity(e.target.value)}
            style={inputStyle}
            required
          />


          <input
            type="text"
            placeholder="Drop City"
            value={dropCity}
            onChange={(e)=>setDropCity(e.target.value)}
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



          <div
            style={{
              display:"flex",
              gap:"10px"
            }}
          >

            <input
              type="time"
              value={time}
              onChange={(e)=>setTime(e.target.value)}
              style={{
                ...inputStyle,
                flex:2,
                marginBottom:"15px"
              }}
              required
            />


            <select
              value={period}
              onChange={(e)=>setPeriod(e.target.value)}
              style={{
                flex:1,
                height:"45px",
                borderRadius:"8px",
                border:"1px solid #ccc"
              }}
            >

              <option value="AM">
                AM
              </option>

              <option value="PM">
                PM
              </option>

            </select>


          </div>




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


      <Footer/>


    </div>

  );
}



const inputStyle = {

  width:"100%",
  padding:"12px",
  marginBottom:"15px",
  borderRadius:"8px",
  border:"1px solid #ccc",
  boxSizing:"border-box"

};


export default BookCab;