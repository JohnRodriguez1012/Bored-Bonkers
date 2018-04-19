import React from 'react';
import './Modal.css';
import {Button, Popover, Modal, OverlayTrigger, ModalBody} from "react-bootstrap";



class MemoryInstructions extends React.Component {
    
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
                    <ul>
                        <li>Enter your guess in the box below</li>
                        <li>All of you choices will display.</li>
                        <li>If you guess incorrectly 5 times...You Lose!</li>
                        <li>Guess the word correctly and you win!</li>
                    </ul>        
                </Modal.Body>
            
                <Modal.Footer>
                    <div className="modal-footer white-text center">

                        <a className="waves-effect waves-light btn" onClick={() => {
                            document.getElementsByClassName('instructionsModal')[0].classList.add('hide');}} >
                            Let's Get Guessin!
                        </a>
                    </div>
                </Modal.Footer>
            </Modal.Dialog>
      </div>

    )};
}


export default MemoryInstructions;