import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        min: 3,
        max: 20,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        min: 6
    },

  profilePictures:{
    type:string,
    default:'https://previews.123rf.com/images/gmast3r/gmast3r1411/gmast3r141100350/33865095-businessman-profile-icon-male-portrait-flat.jpg'
  }


},

({timestamps: true}));

const User = mongoose.model("User", userSchema);


export default User;

