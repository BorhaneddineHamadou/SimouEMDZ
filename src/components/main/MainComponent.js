import React, {Component} from 'react';
import Index from '../index/IndexComponent';
import Login from '../login/LoginComponent';
import Signup from '../signUp/SignupComponent';

class Main extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
           <>
             <Index />
           </> 
        );
    }
}

export default Main;