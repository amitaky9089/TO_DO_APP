// here we are creating objects and for creating object we need schema and schema is preset in models
// import todo from models
const Todo=require("../models/todo");
//define routehandler for rotues

//we want that our database interaction also should go in async form so that there no 
// blockage on main thread and rest code flow exectuion should execute as the previoulsy do.

exports.createTodo = async (req,res) =>{
     try{
           //extract title and description from request body
           const {title,description}=req.body;
           //create a new todo object and insert in db
           const response=await Todo.create({title,description});
           //send a json response with a success flag
           // here we are setting our response status as 200 and in its json body
           // we added this configuration.
           res.status(200).json(
              {
                success:true,
                data:response,
                message:'Entry created successfully'
              }
           );
     }
     catch(err){
              console.error(err);
              console.log(err);
              res.status(500).json(
                {
                    success:false,
                    data:"internal server error",
                    message:err.message,
                }
              )
     }
}