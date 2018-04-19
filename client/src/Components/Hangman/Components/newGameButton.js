import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import newGame from '../actions/newGame';
import {Button} from "react-bootstrap"

class NewGameButton extends PureComponent {

  reset() {
    this.props.newGame()
  }

  render() {
    return(
      <Button className="primary" onClick={this.reset.bind(this)}>New Game</Button>
    )
  }
}


export default connect(null, { newGame })(NewGameButton)
