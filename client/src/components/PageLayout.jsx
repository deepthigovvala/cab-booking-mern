import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";


function PageLayout({children}){


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


      {/* Background Watermark */}

      <div
        style={{
          position:"fixed",
          top:"50%",
          left:"50%",
          transform:"translate(-50%,-50%) rotate(-20deg)",
          fontSize:"120px",
          fontWeight:"900",
          color:"rgba(0,0,0,0.06)",
          whiteSpace:"nowrap",
          zIndex:"0",
          pointerEvents:"none"
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
          position:"relative",
          zIndex:"1"
        }}
      >

        {children}

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


export default PageLayout;