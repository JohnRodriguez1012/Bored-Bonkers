import axios from "axios";

//This will be pulling the questions in for the player
// It accepts an Amount, Category, and Difficulty
export default {
  getQuestions: function(Amount, Category, Difficulty) {
    return axios.get("https://opentdb.com/api.php?amount=" + Amount + "&category=" + Category + "&difficulty=" + Difficulty + "&type=multiple");
  }
};
