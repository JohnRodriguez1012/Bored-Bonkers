const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var userSchema = new Schema({
    userName: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    score: {
      type: Schema.Types.ObjectId,
      ref: "Scores"
    }
  });
  
  // This creates our model 
  var User = mongoose.model("User", userSchema);
  
  // Export the User model
  module.exports = User;
  