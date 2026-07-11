import Navbar from "../components/Navbar";

function Home() {

  return (
    <div>

      <Navbar />

      <div style={{textAlign:"center"}}>

        <h1>
          Welcome to Cab Booking 🚖
        </h1>

        <h2>
          Fast & Safe Ride Booking
        </h2>

        <p>
          Book your cab easily from anywhere.
        </p>


        <div>

          <h3>
            🚕 Easy Booking
          </h3>

          <p>
            Select pickup, drop location and book your ride.
          </p>

        </div>


        <div>

          <h3>
            💰 Affordable Fare
          </h3>

          <p>
            Get reliable rides at best prices.
          </p>

        </div>


        <div>

          <h3>
            🔒 Secure Login
          </h3>

          <p>
            Your account and bookings are protected.
          </p>

        </div>

      </div>

    </div>
  );
}

export default Home;