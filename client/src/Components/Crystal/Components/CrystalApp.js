import React, { Component } from 'react';
import Crystals from "./Crystals"
import ClickCrystal from './ClickCrystal/ClickCrystal';
import Navbar from './Nav/Nav.js';
import Modal from './Modal/Modal.js';
import {Grid, Row, Col, Button} from "react-bootstrap";
import './CrystalApp.css'


export default class CrystalApp extends Component {

    state = {
        wins: 0,
        losses: 0,
        targetNumber: 0,
        currentScore: 0,
        redCrys: Math.floor(Math.random() * (12 - 1 +1))+ 1,
        blueCrys: Math.floor(Math.random() * (12 - 1 +1))+ 1,
        yellowCrys: Math.floor(Math.random() * (12 - 1 +1))+ 1,
        whiteCrys: Math.floor(Math.random() * (12 - 1 +1))+ 1,
        Crystals: Crystals

        }
    //Crystal Variables



    //Where random number is generated
    genNum (min, max) {
        return Math.floor(Math.random() * (max - min +1))+ min;
    }
    // redCrys.value = this.genNum(1,12);

    genMinNum () {
        return Math.floor(Math.random() * (12 - 1 +1))+ 1;
    }
    handleRedCrys = onload => {
        this.setState({redCrys: this.genNum(1,12)});
        console.log(this.state.redCrys)
     }
     handleBlueCrys = onload =>{
        this.setState({blueCrys: this.genNum(1,12)});
     }
     handleYellowCrys = onload => {
        this.setState({yellowCrys: this.genNum(1,12)});
     }

     handlWhiteCrys = onload => {
        this.setState({whiteCrys: this.genNum(1,12)});
     }
     handleTargetNumber = event => {
        this.setState({targetNumber: this.genNum(19,120)});
     }
   
     genMaxNum () {
        return Math.floor(Math.random() * (120 - 13 +1))+ 13;
    }



    //Begin Game
    initGame (){
        
    //reset current score
        this.currentScore = 0;
        this.handleBlueCrys();
        this.handleRedCrys();
        this.handleTargetNumber();
        this.handleYellowCrys();
        this.handlWhiteCrys();

    };

    winStatus () {
        const info={
            currentScore: this.state.currentScore,
            targetNumber: this.state.targetNumber,
            losses: this.state.losses,
            wins: this.state.wins
        }
        if (info.currentScore > info.targetNumber){
            alert("Sorry! You Lost!");
            
            info.losses++;
            
            this.initGame();
            
        }else if( info.currentScore === info.targetNumber) {
            alert("Swit Bitly! You Won!");
            
            info.wins++;
            
            this.initGame();
        }
    };

    addVals (clickedCrystal) {
        const info = {
            currentScore: this.state.currentScore,
        }


    info.currentScore += ClickCrystal.value;

    this.winStatus();
    };

    renderCrystals = (array) => {

        return(
            <Grid>
            <Row className = 'show-grid'>
                {this.state.Crystals.map(Crystals => (

                    <Col sm={4} md={3} lg={3}  key={Crystals.id} image={Crystals.image} name={Crystals.name}  className="crystalsLocal">
                        <ClickCrystal
                            name={Crystals.name}
                            image={Crystals.image}
                            key={Crystals.id}
                            value={this.genMinNum()}
                        />
                    </Col>
                ) )}
            </Row>
        </Grid>
        )
    }
    render(){
        return(
            <div className="container-fluid">
                <div className="header"> score ={this.state.currentScore} targetNumber={this.genMaxNum()}
                </div>
                <Modal/>
                <br />
                <div className="container row cardWrapper" id="charPics">
                    <div className="playingField">
                        {this.renderCrystals(this.state.Crystals)}
                    </div>
                </div>

            </div>
        )
    }

} 