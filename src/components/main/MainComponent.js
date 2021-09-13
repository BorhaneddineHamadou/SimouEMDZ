import React, {Component} from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router';
import Footer from '../footer/FooterComponent';
import Header from '../header/HeaderComponent';
import Login from '../login/LoginComponent';
import Navigation from '../navigation/NavigationComponent';
import Signup from '../signUp/SignupComponent';
import { connect } from 'react-redux';
import { registerInitiate, loginInitiate, logoutInitiate, googleSignInInitiate, facebookSignInInitiate } from '../../redux/actionCreators';


const mapDispatchToProps = (dispatch) => ({
    registerInitiate: (firstname, lastname, email, phonenum, wilaya, commune, password) => dispatch(registerInitiate(
        firstname, lastname, email, phonenum, wilaya, commune, password
    )),
    loginInitiate: (email, password) => dispatch(loginInitiate(email, password)),
    logoutInitiate: () => dispatch(logoutInitiate()),
    googleSignInInitiate: () => dispatch(googleSignInInitiate()),
    facebookSignInInitiate: () => dispatch(facebookSignInInitiate())
});

const mapStateToProps = (state) => ({
  user: state.user
})

class Main extends Component{
    constructor(props){
        super(props);
        this.state={
           
        }
    }
    render(){
        const {history} = this.props;
        const userLocal = JSON.parse(localStorage.getItem('user'));
        const userName = JSON.parse(localStorage.getItem('userName'));
        const userEmail = JSON.parse(localStorage.getItem('userEmail'));
        return(
            <Switch>
                <Route exact path='/login' component={()=> <Login history={history}
                userLocal={userLocal} 
                facebookSignInInitiate={this.props.facebookSignInInitiate} 
                googleSignInInitiate={this.props.googleSignInInitiate} loginInitiate={this.props.loginInitiate} 
                currentUser={this.props.user} />} />
                <Route exact path='/signup' component={()=> <Signup userLocal={userLocal} history={history} 
                registerInitiate={this.props.registerInitiate} currentUser={this.props.user} />} />
                <div>
                    <Navigation userLocal={userLocal} userName={userName} userEmail={userEmail} logoutInitiate={()=>this.props.logoutInitiate()} currentUser={this.props.user.currentUser} />
                    <Route path='/home' component={()=> <Header />} />
                    <Redirect to='/home' />
                    <Footer />
                </div>
            </Switch>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main)) ;