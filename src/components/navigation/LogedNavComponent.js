import React, {Component} from "react";
import { NavbarText ,Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUserAlt} from '@fortawesome/free-solid-svg-icons';

class LogedNav extends Component{
    constructor(props){
        super(props);
        this.toggleDropDown = this.toggleDropDown.bind(this);
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
        this.handleLogOut = this.handleLogOut.bind(this);

        this.state={
            isDropDownOpen: false
        }
    }

    onMouseEnter() {
        this.setState({isDropDownOpen: true});
      }
    
    onMouseLeave() {
       this.setState({isDropDownOpen: false});
    }
    

    toggleDropDown(){
        this.setState({
            isDropDownOpen: !this.state.isDropDownOpen
        });
    }

    handleLogOut = async () => {
        if(this.props.userName){
            await this.props.logoutInitiate();
        }
    }

    render(){
        return(
            <NavbarText className="text-light">
                <Dropdown isOpen={this.state.isDropDownOpen} onMouseOver={this.onMouseEnter} onMouseLeave={this.onMouseLeave} toggle={this.toggleDropDown}>
                    <DropdownToggle caret>
                        <FontAwesomeIcon icon={faUserAlt} style={{color: "FFF"}} />&nbsp; {this.props.userName}
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem>Réparations</DropdownItem>
                        <DropdownItem>Infos Personnelles</DropdownItem>
                        <DropdownItem>Commandes</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem onClick={this.handleLogOut}>Se Déconnecter</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </NavbarText>
        );
    }
}

export default LogedNav;