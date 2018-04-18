import React, { Component } from 'react';
// import Navbar from './Components/Nav/Nav.js';
import Modal from './Components/Modal/Modal.js';
import Axios from 'axios';
import Game from './Components/game.js'

class HangmanApp extends Component {
  render() {
    return (
        <div className="container-fluid">
            <Modal />
            <br />
            <div className="container row cardWrapper" id="charPics">
                {Game.setupGame()}
            </div>
            {/* <Footer text={this.state.footerText} /> */}
        </div>
    );
}
}
export default HangmanApp;
