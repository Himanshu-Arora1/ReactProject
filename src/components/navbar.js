import React from 'react';
const Navbar = require('react-bootstrap/lib/Navbar');
const Nav = require('react-bootstrap/lib/Nav');
const NavItem = require('react-bootstrap/lib/NavItem');
const NavDropdown = require('react-bootstrap/lib/NavDropdown');
const MenuItem = require('react-bootstrap/lib/MenuItem');
const SearchBar = require('./searchbar');
const FormGroup = require('react-bootstrap/lib/FormGroup');
const FormControl = require('react-bootstrap/lib/FormControl');
const Glyphicon = require('react-bootstrap/lib/Glyphicon');

const NavigationBar = () => {
    return (
        <Navbar fixedTop fluid inverse>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="#">Lab</a>
                </Navbar.Brand>
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav pullLeft>
                    <Navbar.Form>
                        <SearchBar/>
                    </Navbar.Form>
                </Nav>
                <Nav pullRight>
                    <NavItem eventKey={2} href="#">
                        <Glyphicon glyph="glyphicon glyphicon-question-sign" />
                    </NavItem>
                    <NavItem eventKey={2} href="#">
                        <Glyphicon glyph="glyphicon glyphicon-bell" />
                    </NavItem>
                    <NavItem eventKey={2} href="#">
                        <div>
                            <Glyphicon glyph="glyphicon glyphicon-user" />
                            <span  style={{margin: '10px'}}>Himanshu</span>
                        </div>

                    </NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavigationBar;