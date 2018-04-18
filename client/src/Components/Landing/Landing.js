import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './Landing.css'


const Landing = () => (
    <div className="landing">
        <h1>Welcome to Bored Bonkers!</h1>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Emojione_1F403.svg/2000px-Emojione_1F403.svg.png" />


        <div className="intro">
            <h4>
                <strong><em>Quick Heads Up!</em></strong>
            </h4>

            <h6>
            <p>
                    Glad you decided to spend your boredom here! 
                </p>
                <p>
                    To the left, is our unofficial mascot, <strong>Bubba the Bored Bonkers Buffalo!</strong>
                </p>
                <p>
                    As of right now, we have 3 sweet games that you're able to check out and play! Simply click the name of the game and start playing!
                </p>
            </h6>
        </div>
        <br/>
        <div classname="FAQs">
            <h4>
                <strong><em>Questions?</em></strong>
            </h4>

            <h6>
                <p>
                    Now, if you have any questsions, feel free to check out the "FAQs" page and if the answer to your question isn't there, <strong>just ask!</strong>.  
                </p>
            </h6>
        </div>
    </div>

    )

export default Landing;