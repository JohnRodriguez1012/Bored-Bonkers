var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var scoreSchema = new Schema({

    HangmanScore: {type: Number, required: true},
    MemoryScore: {type: Number, required: true},
    TriviaScore: {type: Number, required: true},

});

// This creates our model from the above schema, using mongoose's model method
var Scores = mongoose.model("Scores", scoreSchema);

// Export the Note model
module.exports = Scores;
