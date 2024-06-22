
const Todo=require("../models/todo");

exports.getTodo = async (req,res) =>{
     try{
        //.find({})-used to find all entries in database.
        const todos=await Todo.find({});
        res.status(200).json({
            success:true,
            data:todos,
            message:"Entire data fetched Successfully.",
        });
     }
     catch(err){
              console.error(err);
              console.log(err);
              res.status(500).json(
                {
                    success:false,
                    error:err.message,
                    message:"Server Error",
                }
              );
     }
}

// now we want to export data/todo by id 

exports.getTodoById = async(req,res)=>{
    try{
       //first we need id
       const id=req.params.id;
       const todo=await Todo.findById({_id:id})
       // if data not found

// The catch block is meant to handle exceptions or errors that occur during execution (e.g., database connection issues, unexpected errors).
// However, not finding data with a specific ID is not necessarily an error; it’s a valid scenario.
       if(!todo){
        return res.status(404).json({
            success:false,
            message:"No data found with given id",
        })
       }
       //if data is found
       res.status(200).json({
        success:true,
        data:todo,
        message:`Todo ${id} data fetched successfully.`,
       })
     }
     catch(err){
              console.error(err);
              console.log(err);
              res.status(500).json(
                {
                    success:false,
                    error:err.message,
                    message:"Server Error",

                }
              );
     }
}


// A status code in the 5xx range indicates a server-side error.
// Specifically, 500 Internal Server Error means that something went wrong on the server while processing the request.
// When a client receives a 500 status, it indicates that the server encountered an unexpected issue and couldn’t fulfill the request.




// A status code in the 2xx range indicates a successful response.
// Specifically, 200 OK means that the request was processed successfully, and the server is returning the expected data.
// When a client receives a 200 status, it knows that everything is working as expected.