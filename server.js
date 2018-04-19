const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const controller = require("./controllers/controllers");
const app = express();
const PORT = process.env.PORT || 3001;
const db = require("./models");
//swit
// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
// app.use(routes);

// Set up promises with mongoose
// mongoose.Promise = global.Promise;

mongoose.Promise = Promise;
// mongoose.connect("mongodb://localhost/populate", {
//   useMongoClient: true
// });
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://127.0.0.1/boredBonkers",
  {
    useMongoClient: true
  }
);


//create scores
// app.post("/SignUp", function(req, res){
//   db.Scores.create(req.body.body)
//   .then(function(dbUser) {
//     console.log(dbUser);
//   })
//   .catch(function(err) {
//     console.log(err.message);
//   }); 
// })

//create login
app.post("/SignUp", function(req, res) {
  console.log(req.body.body)
  // controller.createUser(req,res)
  // return true;

  db.User.create(req.body.body)
.then(function(dbUser) {
  console.log(dbUser);
})
.catch(function(err) {
  console.log(err.message);
});

  });

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});



  // console.log(controller)

  // When the server starts, create and save a new User document to the db
// The "unique" rule in the User model's schema will prevent duplicate users from being added to the server
