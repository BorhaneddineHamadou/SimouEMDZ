import React, {Component} from "react";
import './navigationStyles.css';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarText, NavbarToggler, NavItem, NavLink } from "reactstrap";

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
                    <NavbarBrand href="#"> <img src="assets/images/logo_orange.svg" alt="Simou Eléctroménager DZ | LOGO" className="logo" /> </NavbarBrand>
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
                        <NavbarText>Se connecter</NavbarText>
                    </Collapse>
                </div>
            </Navbar>
        );
    }
}

export default Navigation;