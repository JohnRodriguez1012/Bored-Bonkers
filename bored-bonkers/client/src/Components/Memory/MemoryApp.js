import React, { Component } from 'react';
import Navbar from './Components/Nav/Nav.js';
import Modal from './Components/Modal/Modal.js';
import ClickCard from './Components/ClickCard/ClickCard.js';
// import Footer from './Components/Footer/Footer.js';
import cards from './card.json';
import {Grid, Row, Col} from "react-bootstrap";

/*CSS file*/
import "./MemoryApp.css"

class MemoryApp extends Component {
    state = {
        cards: cards,
        score: 0,
        topScore: 0,
        cardClicks: [],
        textFooter: ""
    }

    characterClick = id => {
        const [pageBody] = document.getElementsByTagName('body');

        if (this.state.cardClicks.includes(id)) {
            this.setState({ score: 0, cardClicks: [] })

            pageBody.classList.add('shakeWrapper')
            this.setState({ footerText: 'Oh no! Start Over.' })
            setTimeout(() => {
                pageBody.classList.remove('shakeWrapper');
            }, 500);
            setTimeout(() => {
                this.setState({ footerText: "" })
            }, 1800)

        } else {
            this.setState({ cardClicks: [...this.state.cardClicks, id] })
            this.setState({ score: this.state.score + 1 })
            if (this.state.score >= this.state.topScore) {
                this.setState({ topScore: this.state.score + 1 })

            }
            if (this.state.score === 20) {
                this.setState({ footerText: 'You Won! Play again?' })
                this.setState({ score: 0, cardClicks: [], cards: cards })
                setTimeout(() => {
                    this.setState({ footerText: '' })
                }, 1800)
            }
        }
        console.log(id);
    }

    reArrangeCards = (array) => {
        let currentIndex = array.length;

        while (0 !== currentIndex) {
            
            let randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            let temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        this.setState({ cards: cards });
    }

    renderCards = (array) => {
        console.log(array[0]);
     
        return(
        <Grid>
            <Row className = 'show-grid'>
                {this.state.cards.map(card => (
                    <Col sm={4} md={3} lg={3}  id={card.id} key={card.id} >
                        <ClickCard
                        name={card.name}
                        image={card.image}
                        id={card.id}
                        key={card.id}
                        reArrangeCards={() => { this.reArrangeCards(this.state.cards) }}
                        characterClick={this.characterClick} 
                        />   
                    </Col>
                ))}
            </Row>
        </Grid>)
    }


    render() {
        return (
            <div className="container-fluid">
                <Navbar score={this.state.score} topScore={this.state.topScore} />
                <Modal />
                <br />
                <div className="container row cardWrapper">
                    {this.renderCards(this.state.cards)}
                </div>
                {/* <Footer text={this.state.footerText} /> */}
            </div>
        );
    }
}


    


export default MemoryApp;
