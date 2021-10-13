import { Field, Form, Formik, FormikConfig, FormikValues, ErrorMessage } from 'formik';
import React, {Component, useState} from 'react';
import './buyFormStyles.css';
import {Step, StepLabel, Stepper} from '@material-ui/core';
import {TextField} from 'formik-material-ui';
import { Col, Row } from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import populateWilayas from '../wilayas_communes/WilayasCommunes';
import * as Yup from 'yup';


const validationSchema = new Array("", "", Yup.object().shape({
    phonenum: Yup.string()
    .required("Veuillez entrer votre numéro de téléphone")
    .matches(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g, "Numéro de téléphone invalid"),
    wilaya: Yup.string()
    .required("Veuillez sélectionner votre Wilaya"),
    commune: Yup.string()
    .required("Veuillez sélectionner votre Commune"),
    exactAddress: Yup.string()
    .required("Veuillez entrer votre adresse")
}), "");
 

const TextError = (props) => {
    console.log(props.children);
    return(
      <span className="text-danger warning-span">{props.children}</span>
    )
} 

class AdresseBasketCard extends Component{
    componentDidMount(){
        populateWilayas('wilaya', 'commune');
    }
    render() {
        return ( 
        <div className="basket-card mb-4">
            <div className="row login-row">
                <h1 className="fs-2 blue-header text-center">Adresse de livraison</h1>
                <Row className="form-group mb-3 mt-3 special-row">
                    <Field name="phonenum" component={TextField} className="form-control"
                    label="Numéro de téléphone" placeholder="Numéro de téléphone" />
                </Row>
                <Row className="form-group mb-3 special-row">
                    <Col xs="6" className="special-row first-form-control">
                        <Field as="select" name="wilaya" id="wilaya" className="form-control col-xs-6"
                        ></Field>
                        <ErrorMessage name="wilaya" component={TextError} />
                    </Col>
                    <Col xs="6" className="special-row second-form-control">
                        <Field as="select" name="commune" id="commune" className="form-control"
                        ></Field>
                        <ErrorMessage name="commune" component={TextError} />
                    </Col>
                </Row>
                <Row className="form-group mb-3 special-row">
                    <Field component={TextField} type="text" name="exactAddress" className="form-control"
                    label="Adresse: Numéro, Rue et Quartier"
                    placeholder="Adresse: Numéro, Rue et Quartier" />
                </Row>
            </div>
        </div>
        )
    }
}

class BuyForm extends Component{
    constructor(props){
        super(props);

        this.state={
            reload: false,
            password_hidden : true,
            guarantee: "false",
            paiment: 'HandToHand',
            commissioning: "false"
        }
        this.onRadioChanged = this.onRadioChanged.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onRadioChanged(e) {
        this.setState({
            [e.target.name]: e.target.attributes.value.nodeValue
        })
    }

    handleSubmit(values){
        alert(JSON.stringify(values));
        this.props.history.push('/home');
    }

    render(){
        return(
          <div className="container buyForm-container">    
            <div className="row">
              <div className="col-md-7">
                    <FormikStepper initialValues={{
                        guarantee: "false",
                        commissioning: "false",
                        phonenum: "",
                        commune: '',
                        wilaya: '',
                        exactAddress: '',
                        paiment: 'HandToHand'
                    }} onSubmit={(values) => {this.handleSubmit(values)}} userLocal={this.props.userLocal}>
                        <div label="Panier">
                          <div className="basket-card mb-4">
                                <div className="row">
                                    <div className="col-md-3">
                                        <img src='assets/images/productType.png' alt="Product" className="product-image"/>
                                    </div>
                                    <div className="col-md-9">
                                        <h5>Machine à laver lavante séchante ouverture frontale Condor CWD1408-M11B</h5>
                                        <h3 className="blue-header">40,000 DA</h3>
                                        <span className="orange-span fw-bolder">Supprimer</span>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <h4 className="blue-header">Garantie</h4>  
                                        <div className="row mb-1">
                                            <div className="col-6">
                                                <label>
                                                    <Field type="radio" name="guarantee" value="false" checked={this.state.guarantee === "false"}
                                                    onChange={this.onRadioChanged} />
                                                    &nbsp; Garantie 1 an
                                                </label>
                                            </div>
                                            <div className="text-end col-6"><span>Offerte</span></div>
                                        </div>
                                        <div className="row">
                                            <div className="col-6">
                                                <label>
                                                    <Field type="radio" name="guarantee" value="true" checked={this.state.guarantee === "true"}
                                                    onChange={this.onRadioChanged} />
                                                    &nbsp; Garantie 3 ans
                                                </label>
                                            </div>
                                            <div className="text-end col-6"><span>10,000 DA</span></div>
                                        </div>
                                </div>
                            </div>


                            <div className="basket-card mb-4">
                                <div className="row mb-1">
                                    <div className="col-9">
                                        <label>
                                            <Field type="radio" name="commissioning" value="false" checked={this.state.commissioning==="false"}
                                            onChange={this.onRadioChanged} />
                                            &nbsp; Livraison à domicile
                                        </label>
                                    </div>
                                    <div className="text-end col-3"><span>Offerte</span></div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-9">
                                        <label>
                                            <Field type="radio" name="commissioning" value="true" checked={this.state.commissioning==="true"}
                                            onChange={this.onRadioChanged} />
                                            &nbsp; Livraison et mise en service 
                                        </label>
                                    </div>
                                    <div className="text-end col-3"><span>5000 DA</span></div>
                                </div>
                            </div>
                        </div>

                            <div className="basket-card mb-4" label="Compte">
                                <div className="row login-row">
                                    <h1 className="fs-2 blue-header text-center">Connexion à votre compte</h1>
                                    <h5 className="colored-span text-center mt-1">Vous devez être connecté à votre compte pour continuer</h5>
                                    <div className="text-center text-dark mt-2 fs-5"><span>Veuillez vous connecter à votre compte</span></div>
                                </div>    
                            </div>


                            <AdresseBasketCard label="Adresse" />


                            <div className="basket-card mb-4" label="Paiement">
                                <h4 className="blue-header mb-4">Type de Paiement</h4>   
                                <div className="row mb-1">
                                    <label>
                                        <Field type="radio" name="paiment" value="HandToHand" checked={this.state.paiment === "HandToHand"}
                                        onChange={this.onRadioChanged} />
                                        &nbsp; Paiement main à main 
                                    </label>
                                </div>
                                <hr />
                                <div className="row">
                                    <label>
                                        <Field type="radio" name="paiment" value="EbexPay" checked={this.state.paiment === "EbexPay"}
                                        onChange={this.onRadioChanged} />
                                        &nbsp; Paiement avec l'application EbexPay
                                    </label>
                                </div>
                            </div>
                    </FormikStepper>
            </div>
            <div className="col-md-5 promo-part mt-5">
                 <div className="row">
                     <div className="col">
                         <h5 className="blue-header">Total de panier</h5>
                     </div>
                     <div className="col text-end">
                         <span className="pay-sum">40000 DA</span>
                     </div>
                 </div>
                 <hr />
                 <div className="row">
                     <div className="col-8 col-md-9">
                         <input type="text" name="promotionCode" className="form-control" placeholder="Code Promo ?" />
                     </div>
                     <div className="col-4 col-md-3">
                         <button type="submit" className="submit-button">Ajouter</button>
                     </div>
                 </div>
                 <hr />
            </div>  
           </div>
          </div>  
        );
    }
}

// onLoad={populateWilayas('wilaya', 'commune')}

function openLoginPopup(){
    var windowObjectReference;
    var strWindowFeatures = "width=560,height=640,toolbar=0,menubar=0,location=0";
    windowObjectReference = window.open(window.location.origin+"/login", "/login", strWindowFeatures);
}

export function FormikStepper({children, ...props}: FormikConfig<FormikValues>){
  const childrenArray = React.Children.toArray(children);
  const [step, setStep] = useState(0);
  const currentChild = childrenArray[step];  
  function isLastStep(){
      return step === childrenArray.length-1;
  }
  return(
    <Formik {...props} validationSchema={validationSchema[step]} onSubmit={async(values, helpers) => {
        if(isLastStep()){
            await props.onSubmit(values, helpers);
        }else{
            setStep(s => s+1);
            if(step === 0 && props.userLocal){
                setStep(s => s+1)
            }
        }
    }}>  
      <Form>
          <Stepper alternativeLabel activeStep={step}>
              {childrenArray.map((label) => (
              <Step>
                  <StepLabel>{label.props.label}</StepLabel>
                  {console.log(label)}
              </Step>
              ))}
          </Stepper>
          {currentChild}
          {step > 0 ? <button className="back-button" onClick={() => {
              setStep(s => s-1);
              if(step === 2 && props.userLocal){
                setStep(s => s-1)
              }
          } }><FontAwesomeIcon icon={faArrowLeft} style={{color: "#1A56A6"}} />&nbsp;Retour</button> : null}
          {step == 0 ? <button className="first-button" type="submit">Passer la commande</button> : null}
          {step == 1 ? <button className="next-button" onClick={() => openLoginPopup()} >Se Connecter</button> : null}
          {step < childrenArray.length && step > 1 ? <button className="next-button text-center" type="submit">{isLastStep() ? 'Soumettre' : 'Continuer'}</button> : null}
      </Form>
    </Formik>  
  );
}

export default BuyForm;