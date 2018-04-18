import React from 'react';

function Navbar(props) {
    return (
        <div className="navbar-fixed">
            <nav>
                <div className="nav-wrapper container">
                    <div className='brand-logo center' style={{ textAlign: "middle" }}>
                            <h3>Memory Game</h3>
                    </div>
                    
                    <a style={{ cursor: 'pointer' }} className='left' onClick={() => {
                        document.getElementsByClassName('instructionsModal')[0].classList.remove('hide');
                    }}>Instructions</a>

                    <ul className='right'>
                        <li style={{ float: "right" }}><h6>Score: </h6>{props.score}</li>
                        <li style={{ float: "left" }}><h6>Top Score: </h6>{props.topScore}</li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}



export default Navbar;