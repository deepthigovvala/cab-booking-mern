const jwt = require("jsonwebtoken");


const protect = (req,res,next)=>{

  try{


    const authHeader = req.headers.authorization;


    if(!authHeader){

      return res.status(401).json({
        message:"No Authorization header"
      });

    }



    const token = authHeader.split(" ")[1];



    if(!token){

      return res.status(401).json({
        message:"Token not found"
      });

    }



    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );



    req.user = decoded;



    next();



  }
  catch(error){

    console.log(error);


    return res.status(401).json({
      message:"Invalid Token"
    });

  }

};



module.exports = {
  protect
};