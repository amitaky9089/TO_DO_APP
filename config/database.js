const mongoose=require("mongoose");

//this function will establish connection between application and database
// for connection we need database url and connection configuration.
// to feed our database url in process object we have to feed it in process.
// and to feed it we have to use dotenv library 
// for that we have to download dotenv libraray
// command npm i dotenv

require("dotenv").config();
//by writing this line all code that we already written in .env file get load/upload to process object.
const dbconnect =()=>{
    // here first parameter is database url and second is object having some configuration
   mongoose.connect(process.env.DATABASE_URL)
   .then(()=>console.log("successfully connection is established b/w database and server"))
   .catch((error)=>{
     console.log("issue in database connection");
     console.error(error.message);
     process.exit(1);
   });
}

module.exports=dbconnect;