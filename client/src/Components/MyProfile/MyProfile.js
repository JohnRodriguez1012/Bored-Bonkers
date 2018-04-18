import React, { Component } from 'react';
import axios from 'axios';
// import Navbar from './Components/Nav/Nav.js';
// import Footer from './Components/Footer/Footer.js';
import {Grid, Row, Col, Form, FormControl, FormGroup, ControlLabel, Button, Checkbox} from "react-bootstrap";

/*CSS file*/
// import "./MemoryApp.css"

class MyProfile extends React.Component {

        state = {
            confirmPassword: '',
            password: '',
            email: '',

        };

    handleEmailChange = event => {
        this.setState({email: event.target.value});
        console.log(this.state.email)
     }
     handlePasswordChange = event =>{
        this.setState({password: event.target.value});
     }
     handleConFirmPasswordChange = event => {
        this.setState({confirmPassword: event.target.value});
     }

    getValidationState() {
        const length = this.state.PasswordValue.length;
        if (length > 6) return 'success';
        else if (length > 3) return 'warning';
        else if (length > 0) return 'error';
        return null;
      };

    handleSubmit = event => {
        event.preventDefault();
        const info ={
            email: this.state.email,
            password: this.state.password
        }
        console.log(info);
        axios.post('/SignUp', {
          body: info,
        });
        console.log("Form has submit")
      };

    renderSignUp = () => {    
        return(
        <Grid>
            <Col xs={6} md={3} lg={3} >
                <h2>Sign up here!</h2>
                    <Form onSubmit={this.handleSubmit} horizontal>
                            <FormGroup controlId="NewEmail">
                                <Col componentClass={ControlLabel} sm={2}>
                                    Email
                                </Col>
                                <Col>
                                    <FormControl type="email" placeholder="Email"onChange={this.handleEmailChange} />
                                </Col>
                            </FormGroup>

                            <FormGroup controlId="EnterPassword">
                                <Col componentClass={ControlLabel} sm={2}>
                                    Password
                                </Col>
                                <Col>
                                        <FormControl type="password" placeholder="Password" onChange={this.handlePasswordChange} />
                                </Col>
                            </FormGroup>

                            <FormGroup controlId="ConfirmPassword">
                                <Col componentClass={ControlLabel} sm={2}>
                                    Confirm Password
                                </Col>
                                <Col>
                                    <FormControl type="password" placeholder="Password" onChange={this.handleConfirmPasswordChange}/>
                                </Col>
                            </FormGroup>

                            <FormGroup>
                                    <Col smOffset={2} sm={10}>
                                    <Button type="submit">Sign Up!</Button>
                                    </Col>
                            </FormGroup>
                        </Form>
                  
            </Col>
        </Grid>)
    }

    renderLogin = () => {
     
        return(
        <Grid>
            <Row className = 'show-grid'>
                    <Col sm={12} md={6} lg={6} >     
                        <h2>Sign in here!</h2>      
                            <Form horizontal>
                                <FormGroup controlId="formHorizontalEmail">
                                    <Col componentClass={ControlLabel} sm={2}>
                                    Email
                                    </Col>
                                    <Col sm={10}>
                                    <FormControl type="email" placeholder="Email" />
                                    </Col>
                                </FormGroup>

                                <FormGroup controlId="formHorizontalPassword">
                                    <Col componentClass={ControlLabel} sm={2}>
                                    Password
                                    </Col>
                                    <Col sm={10}>
                                    <FormControl type="password" placeholder="Password" />
                                    </Col>
                                </FormGroup>

                                <FormGroup>
                                    <Col smOffset={2} sm={10}>
                                    <Checkbox>Remember me</Checkbox>
                                    </Col>
                                </FormGroup>

                                <FormGroup>
                                    <Col smOffset={2} sm={10}>
                                    <Button type="submit">Sign in</Button>
                                    </Col>
                                </FormGroup>
                            </Form>;
                    </Col>
            </Row>
        </Grid>)
    }


    render() {
        return (
            <div className="container-fluid">
                <br />
                <div className="container row cardWrapper">
                    <Row className = 'show-grid'>
                        <Col> 
                            {this.renderLogin()}
                       
                            {this.renderSignUp()}
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}


    


export default MyProfile;
