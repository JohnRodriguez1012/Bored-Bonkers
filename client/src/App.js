import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import NavTabs from "./Components/Navbar/NavTabs.js"
import CustomFooter from "./Components/Footer/Footer.js"
import Memory from "./Components/Memory/MemoryApp.js";
// import Trivia from "./Components/Trivia/Trivia.js";
import Hangman from "./Components/Hangman/HangmanApp"
import MyProfile from "./Components/MyProfile/MyProfile.js";
import Landing from "./Components/Landing/Landing.js"

const App = () => (
  <Router>

   <div>
      <NavTabs />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/Memory" component={Memory} />
        {/* <Route exact path="/Trivia" component={Trivia} /> */}
        <Route exact path="/Hangman" component={Hangman} />
        {/* <Route component={NoMatch} /> */}
        <Route path="/MyProfile" component={MyProfile} />
        {/* <Route exact path="MyProfile/Login" component={Login} />
        <Route exact path="MyProfile/SignUp" component={SignUp} /> */}

      </Switch>
    </div>
  </Router>


    )

export default App;
