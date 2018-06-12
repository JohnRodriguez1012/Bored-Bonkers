import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
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
            <NavItem eventKey={4} href="../Crystal">
                Crystals
            </NavItem>
            <NavItem eventKey={5} href="../FAQ">
                FAQ
            </NavItem>
            </Nav>
            <Nav pullRight>
            <NavItem eventKey={1} href="https://github.com/JohnRodriguez1012/Bored-Bonkers" target="blank">
                Check Out the Code!
            </NavItem>
            </Nav>
>
        </Navbar.Collapse>
        </Navbar>
</div>
)

export default NavTabs;
