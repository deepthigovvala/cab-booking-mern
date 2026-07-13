import { useNavigate } from "react-router-dom";


function Navbar() {

  const navigate = useNavigate();



  const logout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");

  };



  return (

    <nav
      style={{
        background:"#111",
        color:"#fff",
        padding:"15px 40px",
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        boxShadow:"0px 3px 10px rgba(0,0,0,0.2)"
      }}
    >



      {/* Logo */}


      <h2
        onClick={()=>navigate("/home")}
        style={{
          margin:"0",
          cursor:"pointer",
          color:"#FFD700",
          fontSize:"24px"
        }}
      >
        🚖 Cab Booking
      </h2>





      {/* Menu */}


      <div
        style={{
          display:"flex",
          gap:"22px",
          alignItems:"center"
        }}
      >



        <span
          onClick={()=>navigate("/home")}
          style={linkStyle}
        >
          Home
        </span>




        <span
          onClick={()=>navigate("/book")}
          style={linkStyle}
        >
          Book Cab
        </span>




        <span
          onClick={()=>navigate("/mybookings")}
          style={linkStyle}
        >
          My Bookings
        </span>




        <span
          onClick={()=>navigate("/admin")}
          style={linkStyle}
        >
          Admin Dashboard
        </span>





        <button
          onClick={logout}
          style={{
            background:"#FFD700",
            color:"#111",
            border:"none",
            padding:"8px 18px",
            borderRadius:"8px",
            fontWeight:"bold",
            cursor:"pointer"
          }}
        >
          Logout
        </button>



      </div>



    </nav>

  );

}



const linkStyle = {

  cursor:"pointer",
  fontSize:"15px",
  fontWeight:"500"

};



export default Navbar;