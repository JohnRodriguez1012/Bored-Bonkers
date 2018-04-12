import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import NavTabs from "./Components/Navbar/NavTabs.js"
import CustomFooter from "./Components/Footer/Footer.js"
import Memory from "./Components/Memory/MemoryApp.js";
// import Trivia from "../Trivia/App.js";
// import Hangman from "../Hangman/Hangman.js"

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <NavTabs/>
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//         {/* <CustomFooter/> */}
//       </div>
//     );
//   }
// }
const App = () => (

  <Router>

   <div>
      <NavTabs />
      <Switch>
        {/* <Route exact path="/" component={Memory} /> */}
        <Route exact path="/Memory" component={Memory} />
        {/* <Route exact path="/Trivia" component={Trivia} />
        <Route exact path="/Hangman" component={Hangman} />
        <Route component={NoMatch} /> */}
      </Switch>
    </div>
  </Router>
)
export default App;
