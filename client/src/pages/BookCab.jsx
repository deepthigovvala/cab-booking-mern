import Navbar from "../components/Navbar";
import { useState } from "react";
import api from "../services/api";

function BookCab() {

  const [pickupCity, setPickupCity] = useState("");
  const [dropCity, setDropCity] = useState("");
  const [fare, setFare] = useState("");


  const handleBooking = async () => {

    try {

      const token = localStorage.getItem("token");

      const response = await api.post(
        "/booking/book",
        {
          pickupCity,
          dropCity,
          fare
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );


      alert("Cab Booked Successfully 🚕");

      console.log(response.data.booking);


      // clear form after booking
      setPickupCity("");
      setDropCity("");
      setFare("");


    } catch (error) {

      console.log(error);

      alert("Booking Failed");

    }

  };


  return (
    <div>

      <Navbar />


      <div
        style={{
          width: "400px",
          margin: "50px auto",
          background: "white",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px gray"
        }}
      >

        <h1>
          Book Your Cab 🚕
        </h1>


        <input
          type="text"
          placeholder="Pickup City"
          value={pickupCity}
          onChange={(e) => setPickupCity(e.target.value)}
        />


        <br /><br />


        <input
          type="text"
          placeholder="Drop City"
          value={dropCity}
          onChange={(e) => setDropCity(e.target.value)}
        />


        <br /><br />


        <input
          type="text"
          placeholder="Fare"
          value={fare}
          onChange={(e) => setFare(e.target.value)}
        />


        <br /><br />


        <button
          onClick={handleBooking}
        >
          🚕 Book Cab
        </button>


      </div>


    </div>
  );
}
export default BookCab;