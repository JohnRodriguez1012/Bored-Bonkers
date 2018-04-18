import React from 'react';
import './Modal.css';
import {Button, Popover, Modal, OverlayTrigger, ModalBody} from "react-bootstrap";



class HangmanInstructions extends React.Component {
    
  render() {
          
    return (
        <div className="instructionsModal">
            <Modal.Dialog>
                <Modal.Header>
                    <Modal.Title>
                        <div>
                            <h4 className="center">Game Instructions</h4>
                        </div>
                    </Modal.Title>
                </Modal.Header>
            
                <Modal.Body>
                 <h3>It's Hangman!</h3>
                    <ol>
                        <li><h3>It's Hangman!</h3></li>
                        <li>Use your keyboard to guess the chosen word.</li>
                        <li>You have as many guesses as there are letters <strong>PLUS FIVE MORE</strong> </li>
                        <li>Guess the word correctly, before your guesses run out, and your win!</li>
                    </ol>        
                </Modal.Body>
            
                <Modal.Footer>
                    <div className="modal-footer white-text center">

                        <a className="waves-effect waves-light btn" onClick={() => {
                            document.getElementsByClassName('instructionsModal')[0].classList.add('hide');}} >
                            Let's Play Already...
                        </a>
                    </div>
                </Modal.Footer>
            </Modal.Dialog>
      </div>

    )};
}


export default HangmanInstructions;