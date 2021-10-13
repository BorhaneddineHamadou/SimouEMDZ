import React, {Component, useState} from 'react';
import './repairFormStyles.css';
import { Field, Form, Formik, FormikConfig, FormikValues, ErrorMessage } from 'formik';
import {Step, StepLabel, Stepper} from '@material-ui/core';
import {TextField} from 'formik-material-ui';
import { Col, Row } from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowLeft, faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons';
import populateWilayas from '../wilayas_communes/WilayasCommunes';
import * as Yup from 'yup';
import ReactTimeslotCalendar from 'react-timeslot-calendar';


const validationSchema = new Array("", "", "", "", "");


function Label ({val, breakdownNature , changed }) {
    return(
        <label className={breakdownNature===val ? "active" : ""}>
            <Field type="radio" name="breakdownNature" value={val}
            onChange={(e) => changed(e)} />
            &nbsp; {val}
        </label>
    )
}

class RepairForm extends Component{

    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onRadioChanged = this.onRadioChanged.bind(this);
        this.state = {
            // breakdownNature: "Rien ne s'allume",
            // el : <div>form</div>,
            formEl : {
                breakdownNature : "Rien ne s'allume",
                values : [
                    "Rien ne s'allume",
                    "L'appareil fait un bruit étrange",
                    "L'appareil s'allume mais ne démarre pas",
                    "Le lave-vaisselle ne se vide pas",
                    "La vaisselle est mal-lavée",
                    "Autre"
                ]
            }
        }
    }

    handleSubmit(values){
        alert(JSON.stringify(values));
        this.props.history.push('/home');
    }

    onRadioChanged(e) {
        
        let snapel = {...this.state.formEl};
        snapel.breakdownNature = e.target.attributes.value.nodeValue
         this.setState({
            ...this.state,
            formEl : snapel,
            // [e.target.name]: e.target.attributes.value.nodeValue,
            
        });
    }

   
    
    

    render(){
        return(
            <div className="container repairForm-container">    
            <div className="row">
              <div className="col-md-7">
                    <FormikStepper initialValues={{
                        description: "",
                        phonenum: "",
                        exactAddress: "" 
                    }} 
                    onSubmit={(values) => {this.handleSubmit(values)}} userLocal={this.props.userLocal}>
                        <div label="Panne">
                            <div className="basket-card mb-4">
                                <h3 className="blue-header">Quelle est la nature de votre panne ?</h3>
                                <div className="row mb-1 mt-3">
                                    <div className="col-9 radios-section">
                                        {
                                            this.state.formEl.values.map((val , key)=>{
                                                return(
                                                    <Label key={key} breakdownNature={this.state.formEl.breakdownNature} changed={this.onRadioChanged} val={val} />
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="basket-card mb-4">
                                <h3 className="blue-header mb-3">Donnez des précisions à notre réparateur</h3>
                                <textarea className="form-control" name="description" placeholder="Décrivez votre panne" rows="6"></textarea>
                            </div>
                        </div>

                        <div className="basket-card mb-4" label="Compte">
                            <div className="row login-row">
                                <h1 className="fs-2 blue-header text-center">Connexion à votre compte</h1>
                                <h5 className="colored-span text-center mt-1">Vous devez être connecté à votre compte pour continuer</h5>
                                <div className="text-center text-dark mt-2 fs-5"><span>Veuillez vous connecter à votre compte</span></div>
                            </div>    
                        </div>

                        <div className="basket-card mb-4" label="Appareil">
                              <h3 className="blue-header">Identifiez votre appareil</h3>
                              <Field name="mark" component={TextField} className="form-control mb-2"
                               label="Marque de l'appareil" placeholder="Marque de l'appareil" />
                               <Field name="device_ref" component={TextField} className="form-control"
                               label="Référence de l'appareil" placeholder="Référence de l'appareil" />
                        </div>

                        <div className="mb-4" label="Créneaux">
                          <h3 className="blue-header">Choisissez votre créneau</h3>
                          <div className="time-card mt-3">
                              <div className="blue-section">
                                <div className="row">
                                  <div>
                                     <div className="row">
                                        <div className="col-1">
                                            <FontAwesomeIcon icon={faChevronLeft} style={{color: "#FFF"}} />
                                        </div> 
                                        <div className="col-10">
                                            <h4 className="text-center">Lundi 6 Spet</h4>
                                        </div>
                                        <div className="col-1">
                                           <FontAwesomeIcon icon={faChevronRight} style={{color: "#FFF"}} />
                                        </div>
                                     </div> 
                                  </div>
                                </div>
                              </div>
                              <div className="content-section">
                                  <div className="row">
                                      <div className="col-md-6 mb-2">
                                        <label>
                                            <Field type="radio" name="" value=""
                                             />
                                            &nbsp; 7:00 - 9:00
                                        </label>
                                      </div>
                                      <div className="col-md-6 mb-2">
                                        <label>
                                            <Field type="radio" name="" value=""
                                             />
                                            &nbsp; 10:00 - 12:00
                                        </label>
                                      </div>
                                      <div className="col-md-6 mb-2">
                                        <label>
                                            <Field type="radio" name="" value=""
                                             />
                                            &nbsp; 10:00 - 12:00
                                        </label>
                                      </div>
                                      <div className="col-md-6 mb-2">
                                        <label>
                                            <Field type="radio" name="" value=""
                                             />
                                            &nbsp; 10:00 - 12:00
                                        </label>
                                      </div>
                                      <div className="col-md-6 mb-2">
                                        <label>
                                            <Field type="radio" name="" value=""
                                             />
                                            &nbsp; 10:00 - 12:00
                                        </label>
                                      </div>
                                      <div className="col-md-6 mb-2">
                                        <label>
                                            <Field type="radio" name="" value=""
                                             />
                                            &nbsp; 10:00 - 12:00
                                        </label>
                                      </div>
                                  </div>
                                {/* <ReactTimeslotCalendar
                                    timeslots = {[
                                        ['07', '09'],
                                        ['10', '12'],
                                        ['13', '15'],
                                        ['16', '18'],
                                    ]}

                                    renderDays = {{
                                        'saturdays': false,
                                        'sundays': false,                                  
                                    }}
                                /> */}
                              </div>
                          </div>
                        </div> 

                        <div className="basket-card mb-4" label="Informations">
                              <h3 className="blue-header">Informations personnelles</h3>
                              <p>Nous avons besoin de quelques informations pour préparer la venue du réparateur.</p>
                              <Field name="phonenum" component={TextField} className="form-control mb-2"
                               label="Numéro de téléphone" placeholder="Numéro de téléphone" />
                              <Field component={TextField} type="text" name="exactAddress" className="form-control"
                               label="Adresse: Numéro, Rue et Quartier"
                               placeholder="Adresse: Numéro, Rue et Quartier" />
                        </div>
                        
                    </FormikStepper>
            </div>
            <div className="col-md-5 promo-part mt-5">
                 <div className="row">
                    <h5 className="blue-header">Adresse</h5>
                    <span>{JSON.parse(localStorage.getItem('address'))}</span>
                 </div>
                 <hr />
                 <div className="row">
                    <h5 className="blue-header">Appareil</h5>
                    <span>{JSON.parse(localStorage.getItem('device'))}</span>
                 </div>
                 <hr />
            </div>  
           </div>
          </div>
        );
    }
}

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
              </Step>
              ))}
          </Stepper>
          {currentChild}
          {step > 0 ? <button className="back-button" type="button" onClick={() => {
              setStep(s => s-1);
              if(step === 2 && props.userLocal){
                setStep(s => s-1)
              }
          } }><FontAwesomeIcon icon={faArrowLeft} style={{color: "#1A56A6"}} />&nbsp;Retour</button> : null}
          {step == 0 ? <button className="first-button" type="submit">Choisir mon rendez-vous</button> : null}
          {step == 1 ? <button className="next-button" onClick={() => openLoginPopup()} >Se Connecter</button> : null}
          {step < childrenArray.length && step > 1 ? <button className="next-button text-center" type="submit">{isLastStep() ? 'Soumettre' : 'Continuer'}</button> : null}
      </Form>
    </Formik>  
  );
}

export default RepairForm;