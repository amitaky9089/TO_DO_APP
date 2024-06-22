// as we want to map our route to controller therefore we have to import controller here.
const express=require("express");
const router=express.Router();
//import controller.
const {createTodo}=require("../controllers/createTodo");
const {getTodo,getTodoById}=require("../controllers/getTodo");
const {updateTodo}=require("../controllers/updateTodo");
const {deleteTodo}=require("../controllers/deleteTodo");
router.post("/createTodo",createTodo);
router.get("/getTodos",getTodo);
//in this case after writing the complete url we have to give id of object we want to fetch.
router.get("/getTodos/:id",getTodoById);
//to update something we have to use put type request along with id in which we want to update.
router.put("/updateTodo/:id",updateTodo);
//to delete something we have to use delete type request along with id which we want to delete.
router.delete("/deleteTodo/:id",deleteTodo);
module.exports=router;