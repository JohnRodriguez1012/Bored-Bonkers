import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Memory from "../Memory/App.js";
// import Trivia from "../Trivia/App.js";
// import Hangman from "../Hangman/Hangman.js"
// import Nav from "./components/Nav";
import {Navbar, NavItem, Nav} from "react-bootstrap"


const NavTabs = () => (
    <div>
        <Navbar inverse collapseOnSelect>
        <Navbar.Header>
            <Navbar.Brand>
            <a href="/">Bored Bonkers</a>
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav>
            <NavItem eventKey={1} href="../Hangman">
                Hangman
            </NavItem>
            <NavItem eventKey={2} href="../Memory">
                Memory
            </NavItem>
            <NavItem eventKey={3} href="../Trivia">
                Trivia
            </NavItem>
            </Nav>
            <Nav pullRight>
            <NavItem eventKey={1} href="#">
                Wanna Login?
            </NavItem>
            <NavItem eventKey={2} href="#">
                Stats!
            </NavItem>
            </Nav>
        </Navbar.Collapse>
        </Navbar>;
</div>
)

export default NavTabs;
