import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
function Home(){
  const navigate = useNavigate();
  return(
    <div
      style={{
        minHeight:"100vh",
        background:"#fff8e7",
        display:"flex",
        flexDirection:"column",
        position:"relative",
        overflow:"hidden"
      }}
    >
        // Test Git Push
      {/* Background Watermark */}

      <div
        style={{
          position:"absolute",
          top:"45%",
          left:"50%",
          transform:"translate(-50%,-50%) rotate(-20deg)",
          fontSize:"120px",
          fontWeight:"900",
          color:"rgba(0,0,0,0.05)",
          whiteSpace:"nowrap",
          zIndex:"0"
        }}
      >
        CAB BOOKING
      </div>
      <div
        style={{
          position:"relative",
          zIndex:"2"
        }}
      >
        <Navbar />
      </div>
      <div
        style={{
          flex:1,
          padding:"40px",
          textAlign:"center",
          position:"relative",
          zIndex:"1"
        }}
      >
        <h1
          style={{
            fontSize:"36px",
            color:"#222",
            fontWeight:"700"
          }}
        >
          🚖 Welcome to Cab Booking
        </h1>
        <p
          style={{
            color:"#666",
            fontSize:"18px",
            marginBottom:"40px"
          }}
        >
          Book your ride safely, quickly and comfortably across the city.
        </p>
        <div
          style={{
            display:"flex",
            justifyContent:"center",
            gap:"30px",
            flexWrap:"wrap"
          }}
        >
          {/* Book Cab */}

          <div
            style={cardStyle}
          >
            <h2>
              🚖 Book Cab
            </h2>
            <p>
              Book your ride in just a few clicks.
            </p>
            <button
              onClick={()=>navigate("/book")}
              style={{
                width:"100%",
                padding:"12px",
                background:"#FFD700",
                color:"#111",
                border:"none",
                borderRadius:"8px",
                cursor:"pointer",
                fontWeight:"bold",
                fontSize:"16px"
              }}
            >
              Book Now
            </button>


          </div>







          {/* My Bookings */}

          <div
            style={cardStyle}
          >

            <h2>
              📋 My Bookings
            </h2>


            <p>
              View your booking history.
            </p>


            <button
              onClick={()=>navigate("/mybookings")}
              style={{
                width:"100%",
                padding:"12px",
                background:"#111",
                color:"#fff",
                border:"none",
                borderRadius:"8px",
                cursor:"pointer",
                fontWeight:"bold",
                fontSize:"16px"
              }}
            >
              View Bookings
            </button>


          </div>




        </div>







        <div
          style={{
            marginTop:"60px",
            display:"flex",
            justifyContent:"center",
            gap:"60px",
            flexWrap:"wrap"
          }}
        >



          <div>

            <h2>
              ⚡ Fast Booking
            </h2>

            <p>
              Book a cab within seconds.
            </p>

          </div>




          <div>

            <h2>
              🛡️ Safe Ride
            </h2>

            <p>
              Trusted and secure travel.
            </p>

          </div>




          <div>

            <h2>
              💰 Affordable
            </h2>

            <p>
              Best prices for every ride.
            </p>

          </div>



        </div>



      </div>





      <div
        style={{
          position:"relative",
          zIndex:"2"
        }}
      >
        <Footer />
      </div>



    </div>

  );

}





const cardStyle = {

  width:"280px",
  background:"#fff",
  borderRadius:"15px",
  padding:"30px",
  boxShadow:"0px 5px 15px rgba(0,0,0,0.2)"

};



export default Home;