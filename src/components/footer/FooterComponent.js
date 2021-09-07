import React, {Component} from 'react';
import './footerStyles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPhoneAlt, faMapMarkerAlt, faEnvelope} from '@fortawesome/free-solid-svg-icons';

class Footer extends Component{
    render(){
        return(
           <div className="footer-wrapper">
               <div className="container">
                    <div className="row text-light mb-5">
                            <div className="col-md-4">
                                <p><FontAwesomeIcon icon={faMapMarkerAlt} style={{color: "FFF"}} />&nbsp; Cité saidoun mohamed rue I num 13 Alger, Algérie</p>
                                <p><FontAwesomeIcon icon={faPhoneAlt} style={{color: "FFF"}} />&nbsp; (+213) 658 64 27 32</p>
                                <p><FontAwesomeIcon icon={faEnvelope} style={{color: "FFF"}} />&nbsp; kb_hamadou@esi.dz</p>
                            </div>
                            <div className="col-6 col-md-2">
                                <img src="assets/images/logo_white.svg" className="logo" />
                            </div>
                            <div className="col-6 col-md-2">
                                <p><strong>NOS SERVICES</strong></p>
                                <p><a href="">FAIRE RÉPARER</a></p>
                                <p><a href="">ACHETER UN APPAREIL</a></p>
                            </div>
                            <div className="col-md-4 text-md-center">
                                <a className="btn btn-social-icon btn-instagram me-4" target="_blank" href="#">
                                    <i className="fa fa-instagram fa-lg" style={{color: "#FFF"}}></i>
                                </a>
                                <a className="btn btn-social-icon btn-facebook me-4" target="_blank" href="#">
                                    <i className="fa fa-facebook fa-lg" style={{color: "#FFF"}}></i>
                                </a>
                                <a className="btn btn-social-icon btn-google" target="_blank" href="#">
                                    <i className="fa fa-youtube fa-lg" style={{color: "#FFF"}}></i>
                                </a>
                            </div>
                        </div>
                        <div className="row text-light text-center fs-6 font-weight-light">
                            <span>COPYRIGHT &#9400; 2021 SIMOU ELECTROMENAGER DZ | ALL RIGHTS RESERVED </span>
                        </div>
               </div>
           </div>
        );
    }
}

export default Footer;