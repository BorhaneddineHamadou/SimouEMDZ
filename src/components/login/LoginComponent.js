import React, {Component} from 'react';
import { Control, Errors, LocalForm } from 'react-redux-form';
import { Row, Button } from 'reactstrap';
import './loginStyles.css';

const required = (val) => (val) && val.length;
const validEmail = (val) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val);

class Login extends Component{
    constructor(props){
        super(props);

        this.state={
            password_hidden : true
        }
        this.toggle_hide_password = this.toggle_hide_password.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values){
       alert(JSON.stringify(values));
    }

    toggle_hide_password(e){
        e.preventDefault();
        this.setState({
           password_hidden: !this.state.password_hidden     
        });
    }

    render(){
        return(
           <div className="login-wrapper">
               <div className="container">
                   <div className="row col-sm-8 col-lg-5 offset-lg-7 primary-row">
                        <h1 className="fs-2 text-center">Connexion à votre compte</h1>
                        <span className="colored-span text-center">Renseignez les champs ci-dessous</span>
                        <LocalForm className="mt-5" onSubmit={this.handleSubmit}>
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
                                </div>
                            </Row>
                       </LocalForm>
                       <span className="colored-span mb-3">Vous n'avez pas un compte ? &nbsp;&nbsp;
                         <span className="orange-colored-span">Inscrivez-vous</span>
                       </span>
                       <hr className="me-auto col-5" /> OU <hr className="ms-auto col-5" />
                       <div className="row mb-3 mt-3">
                          <div className="login-google btn btn-social-icon btn-google align-items-center">
                             <i class="fa fa-google text-start ms-3 align-middle mt-1"></i> <span className="d-inline align-middle">Connecter avec Google</span>
                          </div>
                       </div>
                       <div className="row mb-3">
                          <div className="login-google btn btn-social-icon btn-facebook align-items-center">
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