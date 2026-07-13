import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import BookCab from "./pages/BookCab";
import MyBookings from "./pages/MyBookings";
import AdminDashboard from "./pages/AdminDashboard";


function App() {

  return (

    <BrowserRouter>

      <Routes>


        {/* Landing Page */}

        <Route
          path="/"
          element={<LandingPage />}
        />



        {/* Login */}

        <Route
          path="/login"
          element={<Login />}
        />



        {/* Register */}

        <Route
          path="/register"
          element={<Register />}
        />



        {/* User Home */}

        <Route
          path="/home"
          element={<Home />}
        />



        {/* Book Cab */}

        <Route
          path="/book"
          element={<BookCab />}
        />



        {/* My Bookings */}

        <Route
          path="/mybookings"
          element={<MyBookings />}
        />



        {/* Admin Dashboard */}

        <Route
          path="/admin"
          element={<AdminDashboard />}
        />


      </Routes>


    </BrowserRouter>

  );

}


export default App;