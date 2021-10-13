import React, {Component} from 'react';
import { Control, Errors, LocalForm } from 'react-redux-form';
import { Link } from 'react-router-dom';
import { Row, Button } from 'reactstrap';
import { Loading } from '../loading/LoadingComponent';
import './loginStyles.css';
import {onAuthStateChanged} from 'firebase/auth';
import { auth } from '../../firebase';

const required = (val) => (val) && val.length;
const validEmail = (val) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val);

const authDone = (history) => {
    
}

class Login extends Component{
    _isMounted=false;
    constructor(props){
        super(props);

        this.state={
            password_hidden : true,
            store: ""
        }
        this.toggle_hide_password = this.toggle_hide_password.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleGoogleSignIn = this.handleGoogleSignIn.bind(this);
        this.handleFacebookSignIn = this.handleFacebookSignIn.bind(this);
    }

    handleSubmit = async (values, e) => {
        e.preventDefault();
        await this.props.loginInitiate(values.email, values.password);
        if(this.props.userLocal){
            if(document.referrer.includes('/buyForm') || document.referrer.includes('/repairForm') || this.props.historyForm){
                window.close()
            }else{
                this.props.history.push('/home');
            }
        }
    }

    handleFacebookSignIn(){
        this.props.facebookSignInInitiate();
    }

    handleGoogleSignIn(){
       this.props.googleSignInInitiate();
    }

    toggle_hide_password(e){
        e.preventDefault();
        this.setState({
           password_hidden: !this.state.password_hidden     
        });
    }

    componentDidMount(){
        this._isMounted=true;
        window.addEventListener("storage", e => {
            if(this._isMounted){
                this.setState({
                    store: "New Value : " + e.newValue
                 })
            }
        }) 
    }

    componentWillUnmount() {
        this._isMounted = false;
      }

    render(){
        if(this.props.userLocal){
            if(document.referrer.includes('/buyForm') || document.referrer.includes('/repairForm') || this.props.historyForm){
                window.close()
            }else{
                this.props.history.push('/home');
            }
        }
        return(
           <div className="login-wrapper">
               <div className="container">
                   <div className="row col-sm-8 col-lg-5 offset-lg-7 primary-row">
                        <h1 className="fs-2 text-center">Connexion à votre compte</h1>
                        <span className="colored-span text-center">Renseignez les champs ci-dessous</span>
                        <LocalForm className="mt-5" onSubmit={(values, e) => this.handleSubmit(values, e)}>
                            <Row className="form-group mb-3">
                                <Control.text model=".email" id="email" name="email" className="form-control"
                                placeholder="Adresse email"
                                validators={{
                                    required,
                                    validEmail
                                }} />
                                <Errors className="text-danger" model=".email" show="touched" messages={{
                                    required: " | Obligatoire",
                                    validEmail: " | Adresse Email incorrecte"
                                }} />
                            </Row>
                            <Row className="form-group mb-3">
                                <Control type={this.state.password_hidden ? "password" : "text"} model=".password" name="password" id="password"
                                className="form-control" placeholder="Mot de passe" 
                                validators={{
                                    required
                                }} />
                                <span className="input-group-text" id="show_hide_password">
                                    <a href="" onClick={this.toggle_hide_password}><i class={this.state.password_hidden ? "fa fa-eye-slash fa-lg" : "fa fa-eye fa-lg"}></i></a>
                                </span>
                                <Errors className="text-danger" model=".password" show="touched" messages={{
                                    required: " | Obligatoire"
                                }}/>
                            </Row>
                            <Row className="ml-0 text-start mb-3">
                               <span className="colored-span">Mot de passe oublié ?</span> 
                            </Row>
                            <Row className="form-group mb-3">
                                <div className="connect-div">
                                   <Button type="submit" className="btn primary-button">Se Connecter</Button>
                                   {(this.props.currentUser.isLoading) ? <p className="text-dark"><Loading /></p> : <p className="text-danger">{this.props.currentUser.error}</p>}
                                </div>
                            </Row>
                       </LocalForm>
                       <span className="colored-span mb-3">Vous n'avez pas un compte ? &nbsp;&nbsp;
                          {(document.referrer.includes('/buyForm')) ? <Link to='/signup/buyForm'> <span className="orange-colored-span">Inscrivez-vous</span></Link> : 
                          <Link to='/signup'> <span className="orange-colored-span">Inscrivez-vous</span></Link>}
                          
                       </span>
                       <hr className="me-auto col-5" /> OU <hr className="ms-auto col-5" />
                       <div className="row mb-3 mt-3">
                          <div className="login-google btn btn-social-icon btn-google align-items-center" onClick={this.handleGoogleSignIn}>
                             <i class="fa fa-google text-start ms-3 align-middle mt-1"></i> <span className="d-inline align-middle">Connecter avec Google</span>
                          </div>
                       </div>
                       <div className="row mb-3">
                          <div className="login-google btn btn-social-icon btn-facebook align-items-center" onClick={this.handleFacebookSignIn}>
                             <i class="fa fa-facebook text-start ms-3 align-middle mt-1"></i> <span className="d-inline align-middle">Connecter avec Facebook</span>
                          </div>
                       </div>
                   </div>
               </div>
           </div>
        );
    }
}

export default Login;