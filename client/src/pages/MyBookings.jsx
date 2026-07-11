import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import api from "../services/api";

function MyBookings() {

  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    getBookings();
  }, []);


  const getBookings = async () => {

    try {

      const userId = localStorage.getItem("userId");

      console.log("User ID:", userId);

      const response = await api.get(`/booking/my/${userId}`);

      console.log(response.data);

      setBookings(response.data);

    } catch (error) {

      console.log(error);
      alert("Failed to load bookings");

    }

  };


  const cancelBooking = async (id) => {

    try {

      await api.put(`/booking/cancel/${id}`);

      alert("Booking Cancelled 🚕");

      getBookings();

    } catch(error) {

      console.log(error);
      alert("Cancel Failed");

    }

  };

return (
  <div>

    <Navbar />

    <h1 style={{textAlign:"center"}}>
      My Bookings 🚕
    </h1>


    {
      bookings.length === 0 ? (

        <h3 style={{textAlign:"center"}}>
          No bookings found
        </h3>

      ) : (

        bookings.map((booking)=>(

          <div
            key={booking._id}
            style={{
              width:"400px",
              margin:"20px auto",
              background:"white",
              padding:"20px",
              borderRadius:"10px",
              boxShadow:"0px 0px 10px gray"
            }}
          >

            <h2>
              {booking.pickupCity} → {booking.dropCity}
            </h2>


            <p>
              💰 Fare: ₹{booking.fare}
            </p>


            <p>
              📌 Status: {booking.status}
            </p>


            {
              booking.status === "Pending" && (

                <button
                  onClick={() => cancelBooking(booking._id)}
                >
                  Cancel Booking
                </button>

              )
            }


          </div>

        ))

      )
    }

  </div>
  );
}

export default MyBookings;