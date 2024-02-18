 import  express from "express";
 import mongoose from "mongoose";

 
 // Connect to MongoDB
  mongoose.connect("mongodb+srv://dailypeople:Akafakosi@dailypeople.rwxubqy.mongodb.net/dailypeople?retryWrites=true&w=majority")
 .then(()=>{console.log("MongooDb is conneted");})
 .catch((err)=>{console.log(err);});

const app = express();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});