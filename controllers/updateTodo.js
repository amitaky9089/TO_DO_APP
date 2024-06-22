
const Todo=require("../models/todo");

exports.updateTodo = async (req,res) =>{
     try{
           const {id}=req.params;
           const{title,description}=req.body;
           const todo=await Todo.findByIdAndUpdate(
            //here we find that id object
            {_id:id},
            //here we update the given id by our new values 
            // here in title and description we have new values.
            {title,description,updatedAt:Date.now()},
           )
           res.status(200).json({
            success:true,
            data:todo,
            message:"updated successfully"
           })
     }
     catch(err){
           console.err(err);
           res.status(500).json(
            {
                success:false,
                error:err.message,
                message:"server error",
            }
           )
     }
}