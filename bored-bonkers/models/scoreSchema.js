var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var scoreSchema = new Schema({

    HangmanScore: integer,
    MemoryScore: integer,
    TriviaScore: integer,

});

// This creates our model from the above schema, using mongoose's model method
var Scores = mongoose.model("Scores", scoreSchema);

// Export the Note model
module.exports = Scores;
