import React, {Component} from 'react';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';
import { Row, Button, Col } from 'reactstrap';
import { Loading } from '../loading/LoadingComponent';
import populateWilayas from '../wilayas_communes/WilayasCommunes';
import './signupStyles.css';
import {onAuthStateChanged} from 'firebase/auth';
import { auth } from '../../firebase';


const required = (val) => (val) && val.length;
const validEmail = (val) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val);
const validPhone = (val) => /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g.test(val);
const minLength = (len) => (val) => !(val) || val.length >= len;
const validName = (val) => /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g.test(val);
const matchPassword = (val) => (val === document.getElementById('password').value);

class Signup extends Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = async (values, e) =>{
        e.preventDefault();
        await this.props.registerInitiate(values.firstname, values.lastname, values.email, values.phonenum, values.wilaya, values.commune, values.password);
        if(this.props.userLocal){
            this.props.history.push('/home');
        }
    }

    componentDidMount(){
        populateWilayas('wilaya', 'commune');
    }

    render(){
        if(this.props.userLocal){
            this.props.history.push('/home');
        }
        return(
           <div className="signup-wrapper">
               <div className="container">
                   <div className="row col-sm-8 col-lg-5 offset-lg-7 primary-row">
                        <h1 className="fs-2 text-center">Créez votre compte</h1>
                        <span className="colored-span text-center">Renseignez les champs ci-dessous</span>
                        <LocalForm id='registration-form' className="mt-5" onSubmit={(values, e)=>this.handleSubmit(values, e)}>
                            <Row className="two-control-forms-wrapper form-group mb-3 no-padding">
                                <Col xs="6" className="first-form-control">
                                    <Control.text model=".firstname" id="firstname" name="firstname" className="form-control"
                                    placeholder="Votre Prénom"
                                    validators={{
                                        required,
                                        minLength: minLength(3),
                                        validName
                                    }} />
                                    <Errors className="text-danger ms-2" model=".firstname" show="touched" messages={{
                                    required: " | Obligatoire",
                                    minLength: " | Le prénom doit comporter au moins trois caractères",
                                    validName: " | Prénom invalid"
                                    }} />
                                </Col>
                                <Col xs="6" className="second-form-control">
                                    <Control.text model=".lastname" id="lastname" name="lastname" className="form-control"
                                    placeholder="Votre Nom"
                                    validators={{
                                        required,
                                        minLength: minLength(3),
                                        validName
                                    }} />
                                    <Errors className="text-danger ms-3" model=".lastname" show="touched" messages={{
                                    required: " | Obligatoire",
                                    minLength: " | Le nom doit comporter au moins trois caractères",
                                    validName: " | Nom invalid"
                                    }} />
                                </Col>
                            </Row>
                            <Row className="form-group mb-3">
                                <Control.text model=".email" id="email" name="email" className="form-control"
                                placeholder="Adresse email"
                                validators={{
                                    required,
                                    validEmail
                                }} />
                                <Errors className="text-danger" model=".email" show="touched" messages={{
                                    required: " | Obligatoire",
                                    validEmail: " | Email invalid"
                                }} />
                            </Row>
                            <Row className="form-group mb-3">
                                <Control.text model=".phonenum" id="phonenum" name="phonenum" className="form-control"
                                placeholder="Numéro de téléphone"
                                validators={{
                                    required,
                                    validPhone
                                }} />
                                <Errors className="text-danger" model=".phonenum" show="touched" messages={{
                                    required: " | Obligatoire",
                                    validPhone: " | Numéro de téléphone invalid"
                                }} />
                            </Row>
                            <Row className="form-group mb-3 no-padding">
                                <Col xs="6" className="first-form-control">
                                    <Control.select model=".wilaya" id="wilaya" name="wilaya" className="form-control"
                                    placeholder="Votre Wilaya"
                                    validators={{
                                        required
                                    }} >
                                     </Control.select>
                                     <Errors className="text-danger ms-2" model=".wilaya" show="touched" messages={{
                                     required: " | Obligatoire"
                                     }} />   
                                </Col>
                                <Col xs="6" className="second-form-control">
                                    <Control.select model=".commune" id="commune" name="commune" className="form-control"
                                    placeholder="Votre Commune"
                                    validators={{
                                        required
                                    }} >
                                    </Control.select>
                                    <Errors className="text-danger ms-3" model=".commune" show="touched" messages={{
                                     required: " | Obligatoire"
                                     }} />
                                </Col>
                            </Row>
                            <Row className="form-group mb-3">
                                <Control type="password" model=".password" name="password" id="password"
                                className="form-control" placeholder="Mot de passe"
                                validators={{
                                    required,
                                    minLength: minLength(6)
                                }} />
                                <Errors className="text-danger" model=".password" show="touched" messages={{
                                     required: " | Obligatoire",
                                     minLength: "Le mot de passe doit comporter au moins six caractères"
                                }} />
                            </Row>
                            <Row className="form-group mb-3">
                                <Control type="password" model=".conpassword" name="conpassword" id="conpassword"
                                className="form-control" placeholder="Confirmer Votre Mot de passe"
                                validators={{
                                    required,
                                    matchPassword
                                }} />
                                <Errors className="text-danger" model=".conpassword" show="touched" messages={{
                                     required: " | Obligatoire",
                                     matchPassword: " | Les mots de passe ne correspondent pas"
                                }} />
                                
                            </Row>
                            <Row className="form-group mb-3">
                                <div className="connect-div">
                                   <Button type="submit" className="btn primary-button">S'inscrire</Button>
                                   {(this.props.currentUser.isLoading) ? <p className="text-dark"><Loading /></p> : <p className="text-danger">{this.props.currentUser.error}</p>}
                                </div>
                            </Row>
                       </LocalForm>
                       <span className="colored-span mb-3">Déjà inscrit ?  &nbsp;&nbsp;
                         <Link to='/login'> <span className="orange-colored-span">Connectez-vous</span></Link>
                       </span>
                   </div>
               </div>
           </div>
        );
    }
}

export default Signup;