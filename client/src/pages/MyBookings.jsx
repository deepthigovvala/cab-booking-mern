import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import api from "../services/api";


function MyBookings(){

  const [bookings,setBookings] = useState([]);


  useEffect(()=>{

    fetchBookings();

  },[]);



  const fetchBookings = async()=>{

    try{

      const user = JSON.parse(
        localStorage.getItem("user")
      );


      if(!user){
        return;
      }


      const response = await api.get(
        `/booking/my/${user._id}`
      );


      setBookings(response.data);


    }
    catch(error){

      console.log(error);

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
          padding:"40px",
          textAlign:"center"
        }}
      >


        <h1
          style={{
            fontSize:"32px",
            color:"#222"
          }}
        >
          📋 My Bookings
        </h1>





        {
          bookings.length === 0 ?


          <p
            style={{
              marginTop:"50px",
              fontSize:"20px",
              color:"#777"
            }}
          >
            No Bookings Yet 🚕
          </p>



          :



          bookings.map((booking)=>(

            <div
              key={booking._id}
              style={{
                width:"320px",
                margin:"30px auto",
                background:"#fff",
                padding:"25px",
                borderRadius:"15px",
                boxShadow:"0 5px 15px rgba(0,0,0,0.2)"
              }}
            >


              <h2>
                🚖 Cab Ride
              </h2>


              <p>
                From: <b>{booking.pickupCity}</b>
              </p>


              <p>
                To: <b>{booking.dropCity}</b>
              </p>


              <p>
                Fare: <b>₹{booking.fare}</b>
              </p>


              <p>
                Status: <b>{booking.status}</b>
              </p>



            </div>


          ))


        }



      </div>




      <Footer />


    </div>

  );

}


export default MyBookings;