import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import NavTabs from "./Components/Navbar/NavTabs.js"
import CustomFooter from "./Components/Footer/Footer.js"
import Memory from "./Components/Memory/MemoryApp.js";
import Trivia from "./Components/Trivia/TriviaApp.js";
import Hangman from "./Components/Hangman/HangmanApp"
import MyProfile from "./Components/MyProfile/MyProfile.js";
import Landing from "./Components/Landing/Landing.js"
import FAQ from "./Components/FAQ/FAQ.js"
// import Crystal from "./Components/Crystal/Components/CrystalApp"

const App = () => (
  // from MyPRofile, setting the state of the app
  <Router>

   <div>
      <NavTabs />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/Memory" component={Memory} />
        <Route exact path="/Trivia" component={Trivia} />
        <Route exact path="/Hangman" component={Hangman} />
        {/* <Route exact path="/Crystal" component={Crystal} /> */}
        {/* <Route component={NoMatch} /> */}
        <Route exact path="/FAQ" component={FAQ} />
        <Route path="/MyProfile" component={MyProfile} />
        {/**Pass function as prop to set this.state.email*/}
        {/* <Route exact path="MyProfile/Login" component={Login} />
        <Route exact path="MyProfile/SignUp" component={SignUp} /> */}

      </Switch>
    </div>
  </Router>


    )

export default App;
