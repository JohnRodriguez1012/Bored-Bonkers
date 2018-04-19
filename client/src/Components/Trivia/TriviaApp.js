import React from 'react';
import {Grid, Button, Row, Col, Submit} from 'react-bootstrap';
import axios from 'axios'
import "./TriviaApp.css"

class TriviaApp extends React.Component {
    state = { 
        question: 'Go ahead and cure your boredom!', 
        number: " _____ ",
        category: " _____ ",
        difficulty:" _____ ",
        answer:"",
        theQuestions:[]
        }
    

  // This works and displays the question 
  pullQuestions = event => {
    event.preventDefault();
    const info = {
        number: this.state.number,
        category: this.state.category,
        difficulty: this.state.difficulty,
        answer: this.state.answer,
        incorrect: this.state.incorrect,
        theQuestions: this.state.theQuestions
    }
    const URL = "https://opentdb.com/api.php?amount="+info.number+"&category="+info.category+"&difficulty="+info.difficulty+"&type=multiple";

    return axios.get(URL)
    console.log(URL)
  }
  
    getQuestion () {

            
        }
        
    

    handleQuestionChange = event =>{
        this.setState({question: event.target.value});
        console.log(this.state.number)
        console.log(this.state.category)
        console.log(this.state.difficulty)
    }

    handleNumberChange = event =>{
        this.setState({number: event.target.value});
    }

    handleCategoryChange = event =>{
        this.setState({category: event.target.value});
        }
    handleDifficultyChange = event =>{
        this.setState({difficulty: event.target.value});
        }

  render() {
    return (
        <div>
            <Grid>
                <h2>Trivia!</h2>
                <Col>
                    <Row>
                        <div>
                            <h4>How Many Questions? How Bored Are You?</h4>
                        </div>
                        <Button onClick={this.handleNumberChange} value='10'>
                             Pretty Bored
                        </Button>

                        <Button onClick={this.handleNumberChange} value='20'>
                             Bored Tired
                        </Button>

                        <Button onClick={this.handleNumberChange} value='40'>
                             Blasé
                        </Button>                        
                    </Row>
                    <br/>
                    <Row>
                        <div>
                            <h4>How Difficult?</h4>
                        </div>
                        <Button onClick={this.handleDifficultyChange} value='easy'>
                             Walk in the Park
                        </Button>

                        <Button onClick={this.handleDifficultyChange} value='medium'>
                             A decent challenge
                        </Button>

                        <Button onClick={this.handleDifficultyChange} value='hard'>
                             I know everything
                        </Button>                        
                    </Row>
                    <br/>
                    <Row>
                        <div>
                            <h4>What Category?</h4>
                        </div>
                        <Button onClick={this.handleCategoryChange} value='20'>
                             Mythology
                        </Button>

                        <Button onClick={this.handleCategoryChange} value='21'>
                             Sports
                        </Button>

                        <Button onClick={this.handleCategoryChange} value='22'>
                             Geography
                        </Button>   

                        <Button onClick={this.handleCategoryChange} value='23'>
                             History
                        </Button>   

                        <Button onClick={this.handleCategoryChange} value='25'>
                             Art
                        </Button>   

                        <Button onClick={this.handleCategoryChange} value='26'>
                             Celebrities
                        </Button>
                    </Row>
                    <br />
                    <Row>
                        <div className="showChoices">
                            <h4> You've chosen:</h4>
                            
                                <Col xs={4} md={4} lg={3}>
                                    <h5>Questions: {this.state.number}</h5>
                                </Col>

                                <Col xs={4} md={4} lg={3}>   
                                    <h5>Difficulty: {this.state.difficulty}</h5> 
                                </Col>
                            
                                <Col xs={4} md={4} lg={3}>
                                    <h5>Category: {this.state.category} </h5>
                                </Col>
                        </div>
                        
                    </Row>
                    <Row>
                        <Button type='submit' onClick={this.getQuestion}>
                            <a href="https://www.youtube.com/watch?v=VtWm7aZWSi8" target="blank">Let's Play!</a>
                        </Button>
                    </Row>

                    <Row>
                        <div className="gameField">
                        </div>
                    </Row> 
                </Col>
            </Grid>

        </div>
    );
  }
}

export default TriviaApp;