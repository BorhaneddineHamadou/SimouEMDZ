import React, {Component} from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Footer from '../footer/FooterComponent';
import Header from '../header/HeaderComponent';
import Login from '../login/LoginComponent';
import Navigation from '../navigation/NavigationComponent';
import Signup from '../signUp/SignupComponent';


const DefaultContainer = () => {
    return(
        <div>
            <Navigation />
               <Route path='/home' component={()=> <Header />} />
               <Redirect to='/home' />
            <Footer />
        </div>
    );
}

class Main extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Switch>
                <Route path='/login' component={()=> <Login />} />
                <Route path='/signup' component={()=> <Signup />} />
                <Route component={DefaultContainer} />
            </Switch>
        );
    }
}

export default Main;