// import React, { Component } from 'react';
// import Crystals from "./Crystals/Crystals.js"

// let crystal = {
//     red:
//     {
//         name:"Red",
//         value: 0
//     },
//     blue:
//     {
//         name:"Blue",
//         value: 0
//     },
//     yellow:
//     {
//         name:"Yellow",
//         value: 0
//     },
//     pink:
//     {
//         name:"Pink",
//         value: 0
//     },
// };

// class HangmanApp extends Component {

//     state = {
//         wins = 0,
//         losses = 0;
//         targetNumber = 0 ;
//         currentScore = 0 ;
//         }
//     //Crystal Variables



//     //Where random number is generated
//     genNum (min, max) {
//         return Math.floor(Math.random() * (max - min +1))+ min;
//     }

//     //Begin Game
//     initGame (){
        
//     //reset current score
//         currentScore = 0;
        
//     //target number
//         targetNumber = genNum(19, 120);
        
//     //Crystal Values
//         crystal.red.value = genNum(1,12);
//         crystal.blue.value = genNum(1,12);
//         crystal.yellow.value = genNum(1,12);
//         crystal.pink.value = genNum(1,12);
//         console.log(crystal);

//     //Shows the target number and the score
//     $("#scoreHere").text(currentScore);
//     $("#projectedNumber").text(targetNumber);


//     };

//     winStatus () {
//         if (currentScore > targetNumber){
//             alert("Sorry! You Lost!");
            
//             losses++;
            
//             $("#losses").text(losses);
            
//             initGame();
            
//         }else if( currentScore === targetNumber) {
//             alert("Swit Bitly! You Won!");
            
//             wins++;
            
//             $("#wins").text(wins);
            
//             initGame();
//         }
//     };

//     addVals (clickedCrystal) {
//         console.log(clickedCrystal);
//         console.log(crystal[clickedCrystal].value);

//     currentScore += crystal[clickedCrystal].value;

//     $("#scoreHere").text(currentScore);

//     winStatus();

//     console.log("Your Score: " + currentScore);
//     };

//     renderButtons = (array) => {
//         console.log(array[0]);

//         return(
//             <Grid>
//             <Row className = 'show-grid'>
//                 {this.state.cards.map(card => (
//                     <Col sm={4} md={3} lg={3}  id={card.id} key={card.id}  className="charPics">
//                         <ClickCard
//                         name={card.name}
//                         image={card.image}
//                         id={card.id}
//                         key={card.id}
//                         reArrangeCards={() => { this.reArrangeCards(this.state.cards) }}
//                         characterClick={this.characterClick} 
//                         />   
//                     </Col>
//                 ))}
//             </Row>
//         </Grid>
//         )
//     }
//     initGame();

    // $(".crystalBut").click(function(){
    //     addVals($(this).attr("id"));
    // });
}