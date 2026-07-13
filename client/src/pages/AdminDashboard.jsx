import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import api from "../services/api";


function AdminDashboard(){

  const [bookings,setBookings] = useState([]);



  useEffect(()=>{

    getBookings();


    const interval = setInterval(()=>{

      getBookings();

    },5000);


    return ()=>clearInterval(interval);


  },[]);




  const getBookings = async()=>{

    try{

      const response = await api.get(
        "/booking/all"
      );


      setBookings(response.data);


    }
    catch(error){

      console.log(error);

    }

  };






  const updateStatus = async(id,status)=>{

    try{


      await api.put(
        `/booking/${status}/${id}`
      );


      getBookings();


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
          👨‍💼 Admin Dashboard
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
            No Bookings Available 🚕
          </p>



          :



          <div
            style={{
              display:"flex",
              justifyContent:"center",
              flexWrap:"wrap",
              gap:"25px",
              marginTop:"40px"
            }}
          >



          {
            bookings.map((booking)=>(


              <div
                key={booking._id}
                style={{
                  width:"320px",
                  background:"#fff",
                  padding:"25px",
                  borderRadius:"15px",
                  boxShadow:"0 5px 15px rgba(0,0,0,0.2)"
                }}
              >


                <p>
                  📍 From:
                  <b> {booking.pickupCity}</b>
                </p>


                <p>
                  📍 To:
                  <b> {booking.dropCity}</b>
                </p>


                <p>
                  💰 Fare:
                  <b> ₹{booking.fare}</b>
                </p>


                <p>
                  Status:
                  <b> {booking.status}</b>
                </p>





                {
                  booking.status === "Pending" &&

                  <div
                    style={{
                      display:"flex",
                      gap:"10px"
                    }}
                  >

                    <button
                      onClick={()=>
                        updateStatus(
                          booking._id,
                          "accept"
                        )
                      }
                      style={{
                        flex:1,
                        padding:"10px",
                        background:"#28a745",
                        color:"#fff",
                        border:"none",
                        borderRadius:"8px",
                        cursor:"pointer"
                      }}
                    >
                      Accept
                    </button>




                    <button
                      onClick={()=>
                        updateStatus(
                          booking._id,
                          "reject"
                        )
                      }
                      style={{
                        flex:1,
                        padding:"10px",
                        background:"#dc3545",
                        color:"#fff",
                        border:"none",
                        borderRadius:"8px",
                        cursor:"pointer"
                      }}
                    >
                      Reject
                    </button>


                  </div>

                }



              </div>


            ))

          }


          </div>


        }



      </div>





      <Footer />


    </div>

  );

}



export default AdminDashboard;