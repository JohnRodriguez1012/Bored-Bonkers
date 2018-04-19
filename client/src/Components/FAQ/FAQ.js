import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './FAQ.css'


const FAQ = () => (
    <div className="container">
        <div className="Header">
            <h1> Questions? </h1>
        

            <h3> Why did you pick a buffalo?</h3>
            <h4>
                Have you tried saying "Bubba the Bored Bonkers Buffalo"?
            </h4>

            <h3> How is this a game site?</h3>
            <h4>
                Well, even though the site only has two games now, there'll be more in the near future!
            </h4>

            <h3> What made you want to make a game site??</h3>
            <h4>
                I thought I'd finally put my "Hangman" skills to good use
            </h4>

            <h3> Learn anything useful from working on this alone? </h3>
            <h4>
                Yeah, I learned that I prefer front-end development much more than back-end just because of how familiar I am with both areas. Also, #TeamSQL 
            </h4>

            <h3> How would you tackle the project differently?</h3>
            <h4>
                Definitely would have worked with a team. 
            </h4>            

            <h3> Why the puppies?</h3>
            <h4>
                Why not?
            </h4>


            

        </div>
    </div>
    
    )

export default FAQ;