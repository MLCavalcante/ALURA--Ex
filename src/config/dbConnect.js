 import mongoose from "mongoose";

 //mongoose.connect("mongodb+srv://Alura:123@cluster0.rvlkdet.mongodb.net/Alura-node")
 mongoose.connect("mongodb+srv://alura:123@cluster0.fxhwxew.mongodb.net/alura-node?retryWrites=true&w=majority");


 let db = mongoose.connection

export default db;


