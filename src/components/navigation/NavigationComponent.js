import React, {Component} from "react";
import './navigationStyles.css';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarText, NavbarToggler, NavItem, NavLink } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSignInAlt} from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

class Navigation extends Component{
    constructor(props){
        super(props);

        this.state={
            isNavOpen: false
        }
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav(){
        this.setState({
            isNavOpen: ! this.state.isNavOpen
        });
    }

    render(){
        return(
            <Navbar dark expand="md" color="dark">
                <div className="container nav-container">
                    <NavbarBrand href="#"> <img src="assets/images/logo_white.svg" alt="Simou Eléctroménager DZ | LOGO" className="logo" /> </NavbarBrand>
                    <NavbarToggler onClick={this.toggleNav} />
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav className="me-auto" navbar>
                            <NavItem className="ms-md-5">
                                <NavLink href="#" className="active">Accueil</NavLink>
                            </NavItem>
                            <NavItem className="ms-md-5">
                                <NavLink href="#">Faire Réparer</NavLink>
                            </NavItem>
                            <NavItem className="ms-md-5">
                                <NavLink href="#">Acheter un appareil</NavLink>
                            </NavItem>
                        </Nav>
                        <NavbarText className="text-light"> <Link to='/login'> <FontAwesomeIcon icon={faSignInAlt} style={{color: "FFF"}} />&nbsp; Se connecter</Link></NavbarText>
                    </Collapse>
                </div>
            </Navbar>
        );
    }
}

export default Navigation;