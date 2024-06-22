                             // TO DO APP
                         //CLASS-2 AND CLASS-3


// In this we have created our todo app which consist of four properties
// insert->post,fetch->get,delete->delete,update->put.
// http://localhost:3000/api/v1/{route}/{id if required}
// we can easliy interact with database and do the necessary stuffs.


// we made two changes in script
// "start":"node index.js" and "dev":"nodemon index.js"
// to run use command npm run dev

const express=require("express");
const app=express();

//we have to download dotenv - command npm i dotenv
// best pratice to load anything from env file
//jo bhi hmne .env me likha hoga wo load ho jaegi process object mem
require("dotenv").config();
const PORT=process.env.PORT || 4000;

//middleware to parse json request body
app.use(express.json());

//import all routes here
const todoRoutes=require("./routes/todos");

//mount todo apis=append this after localhost:port 
//here we mapped our server with routes using this prefix / mount
// which ever route we passed in our api that is get replace here with todoRoutes
// now this todoRoutes go in routes and check routes and perform action according to that only.
app.use("/api/v1",todoRoutes);
//afterlocal host this should be written and mapped with todoRoutes


// start server
app.listen(PORT,()=>{
    console.log(`Server started at ${PORT} successfully.`);
})

// connect to db
const dbconnect=require("./config/database");
dbconnect();

//default route
//here we use .get means it is get request
// this complete is a router handler
app.get("/",(req,res)=>{
    res.send(`<h1>This is homepage</h1>`);
})

