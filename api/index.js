 import  express from "express";
 import mongoose from "mongoose";

 
 // Connect to MongoDB
  mongoose.connect("mongodb+srv://daily_people:Akafakosi@mydailypeople.ucwrnzf.mongodb.net/daily_people?retryWrites=true&w=majority")
 .then(()=>{console.log("MongooDb is conneted");})
 .catch((err)=>{console.log(err);});

const app = express();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});