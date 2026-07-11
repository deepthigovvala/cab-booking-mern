import { Link, useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  const handleLogout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("userId");

    alert("Logged Out Successfully 👋");

    navigate("/");
  };

  return (
    <div
      style={{
        background: "#333",
        padding: "15px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      <div>
        <Link
          to="/home"
          style={{ color: "white", marginRight: "20px", textDecoration: "none" }}
        >
          Home
        </Link>

        <Link
          to="/book"
          style={{ color: "white", marginRight: "20px", textDecoration: "none" }}
        >
          Book Cab
        </Link>

        <Link
          to="/mybookings"
          style={{ color: "white", marginRight: "20px", textDecoration: "none" }}
        >
          My Bookings
        </Link>

        <Link
          to="/admin"
          style={{ color: "white", textDecoration: "none" }}
        >
          Admin
        </Link>
      </div>

      <button
        onClick={handleLogout}
        style={{
          background: "red",
          color: "white",
          border: "none",
          padding: "8px 15px",
          cursor: "pointer",
          borderRadius: "5px"
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Navbar;