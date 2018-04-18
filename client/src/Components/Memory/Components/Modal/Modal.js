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
                    <ol>
                        <li>Click on an Image to start the game.</li>
                        <li>Every time you click an image, the images get rearranged.</li>
                        <li>If you pick the same image twice...You Lose!</li>
                        <li>Click all 20 images without repeating...You Win!</li>
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


export default MemoryInstructions;