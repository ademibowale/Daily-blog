 import  express from "express";
 import mongoose from "mongoose";

 // Connect to MongoDB
 mongoose.connect("mongodb+srv://dailypeopleblog:Akafakosi@40@dailypeopleblog.ajpiiex.mongodb.net/dailypeopleblog?retryWrites=true&w=majority").then(()=>{console.log("Connected is conneted");}

 );

const app = Express();

app.listen(3000, () => {
  console.log("Server is running on port 3000 !");
});