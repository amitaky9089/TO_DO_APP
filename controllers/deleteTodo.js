
const Todo=require("../models/todo");

exports.deleteTodo = async (req,res) =>{
     try{
           const{id}=req.params;
           await Todo.findByIdAndDelete(id);
           res.json({
            success:true,
            message:"deleted successfully",
           })

     }
     catch(err){
              console.error(err),
              res.status(500).json(
                 {
                    success:false,
                    error:err.message,
                    message:"Server error in deletion.",
                 }
              )
     }
}