import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import api from "../services/api";


function AdminDashboard() {

  const [bookings, setBookings] = useState([]);


  useEffect(() => {
    getAllBookings();
  }, []);


  const getAllBookings = async () => {

    try {

      const response = await api.get("/booking/all");

      setBookings(response.data);

    } catch(error) {

      console.log(error);
      alert("Failed to load bookings");

    }

  };


  const acceptBooking = async (id) => {

    try {

      await api.put(`/booking/accept/${id}`);

      alert("Booking Accepted ✅");

      getAllBookings();

    } catch(error) {

      console.log(error);

    }

  };


  const rejectBooking = async (id) => {

    try {

      await api.put(`/booking/reject/${id}`);

      alert("Booking Rejected ❌");

      getAllBookings();

    } catch(error) {

      console.log(error);

    }

  };


  return (
    <div>

      <Navbar />


      <h1 style={{textAlign:"center"}}>
        Admin Dashboard 🚖
      </h1>


      <table
        border="1"
        style={{
          width:"80%",
          margin:"30px auto",
          background:"white",
          textAlign:"center"
        }}
      >

        <thead>

          <tr>
            <th>Pickup</th>
            <th>Drop</th>
            <th>Fare</th>
            <th>Status</th>
            <th>Action</th>
          </tr>

        </thead>


  <tbody>
  {bookings.map((booking) => (
    <tr key={booking._id}>

      <td>{booking.pickupCity}</td>

      <td>{booking.dropCity}</td>

      <td>₹{booking.fare}</td>

      {/* Status */}
      <td>
        {booking.status === "Pending" && (
          <b style={{ color: "orange" }}>Pending</b>
        )}

        {booking.status === "Accepted" && (
          <b style={{ color: "green" }}>Accepted ✅</b>
        )}

        {booking.status === "Rejected" && (
          <b style={{ color: "red" }}>Rejected ❌</b>
        )}

        {booking.status === "Cancelled" && (
          <b style={{ color: "gray" }}>Cancelled 🚫</b>
        )}
      </td>

      {/* Action */}
      <td>
        {booking.status === "Pending" ? (
          <>
            <button
              style={{ marginRight: "10px" }}
              onClick={() => acceptBooking(booking._id)}
            >
              Accept
            </button>

            <button
              onClick={() => rejectBooking(booking._id)}
            >
              Reject
            </button>
          </>
        ) : (
          <span>-</span>
        )}
      </td>

    </tr>
  ))}
</tbody>
      </table>


    </div>
  );
}


export default AdminDashboard;