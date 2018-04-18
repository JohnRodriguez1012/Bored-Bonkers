const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const SALT_WORK_FACTOR = 10;
const bcrypt = require("bcryptjs");

var userSchema = new Schema({
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },
    password: {
      type: String,
      required: true,
      trim: true,
      validate: [
        function(input) {
          var hasNumber = false;
          for (var i = 0; i < input.length; i++){
            if(!isNaN(Number(input[i]))){
              hasNumber = true;
            }
          }
          return hasNumber;
        },
        "Password must have at least one number!",
      ]
    },
    score: {
      type: Schema.Types.ObjectId,
      ref: "Scores"
    }
  });

  userSchema.pre('save', function(next){
    let user = this;

      if(!user.isModified('password')) return next();
        bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt){
    
          if (err) return next(err);
          bcrypt.hash(user.password, salt, function(err, hash){
    
            if (err) return next(err);
            user.password = hash;
            next();
          });
        });
      });

userSchema.methods.comparePassword = function(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch){
    if (err) return cb(err);
    cb(null, isMatch)
  });
}  ;
  
  // This creates our model 
  var User = mongoose.model("User", userSchema);
  
  // Export the User model
  module.exports = User;
  