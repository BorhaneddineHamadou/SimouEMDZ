import React, {Component} from 'react';
import { Control, LocalForm } from 'react-redux-form';
import { Row } from 'reactstrap';
import './headerStyles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCoins, faClock, faHandHoldingUsd} from '@fortawesome/free-solid-svg-icons';

const RenderPropertie = ({icon, title, description, key}) =>{
    return(
        <div className="col-md card-wrapper" key={key}>
            <div className="shadow">
                <FontAwesomeIcon icon={icon} color="#1A56A6" className="fs-1 mb-2" />
                <h2 className="fs-md-3">{title}</h2>
                <p>{description}</p>  
            </div>
        </div>
    );
}

class Header extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
           <> 
                <div className="header-wrapper">
                    <div className="container">
                        <h1 className="text-light">Prolongez la durée de vie de vos appareils</h1>
                        <p className="text-light">Prenez rendez-vous en ligne et nous intervenons chez vous en moins de 48h</p>
                        <div className="row mt-4">
                            <div className="col-md-10 search-wrapper mb-5">
                                    <LocalForm>
                                        <Row className="form-group">
                                                <div className="col-lg-3 col-sm-5">
                                                    <Control.select model=".device_one" name="deviceone" className="form-control">
                                                        <option>Appareil à réparer</option>
                                                        <option>Climatiseur</option>
                                                        <option>Machine à laver</option>
                                                        <option>Réfrigérateur</option>
                                                    </Control.select>  
                                                </div> 
                                                <div className="col-lg-5 col-sm-7 mt-3 mt-sm-0">
                                                    <Control.text model=".address_one" name="address_one" className="form-control address-input"
                                                    placeholder="Saisissez votre adresse" />
                                                </div>
                                                <div className="col-12 col-lg-4 mt-3 mt-lg-0">
                                                    <button type="submit" className="btn primary-button">Prenez un rendez-vous</button>
                                                </div>
                                        </Row> 
                                    </LocalForm>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-11 col-md-9 m-auto orange-col">
                                <div className="row text-center">
                                    <div className="col-6 borderd d-flex align-items-center justify-content-center">
                                        <p className="text-light fs-6">Solution pour 100% des pannes</p>
                                    </div>
                                    <div className="col-6 d-flex align-items-center justify-content-center">
                                        <p className="text-light fs-6">Réparateurs recrutés et formés 100% </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-content">
                     <h1 className="text-center">Une réparation efficace, économique et écologique</h1> 
                     <div className="simou shadow mb-5">
                         <div className="container">
                             <div className="row">
                                 <div className="col-md-3">
                                      <img className="logo" src="assets/images/full_logo.svg" alt="Simou Eléctroménager DZ | LOGO" />
                                 </div>
                                 <div className="col-md-9">
                                    <LocalForm>
                                            <Row className="form-group">
                                                    <div className="col-lg-3 col-sm-5">
                                                        <Control.select model=".device_two" name="device_two" className="form-control">
                                                            <option>Appareil à réparer</option>
                                                            <option>Climatiseur</option>
                                                            <option>Machine à laver</option>
                                                            <option>Réfrigérateur</option>
                                                        </Control.select>  
                                                    </div> 
                                                    <div className="col-lg-5 col-sm-7 mt-3 mt-sm-0">
                                                        <Control.text model=".address_two" name="address_two" className="form-control address-input"
                                                        placeholder="Saisissez votre adresse" />
                                                    </div>
                                                    <div className="col-12 col-lg-4 mt-3 mt-lg-0">
                                                        <button type="submit" className="btn primary-button">Prenez un rendez-vous</button>
                                                    </div>
                                            </Row> 
                                        </LocalForm>
                                 </div>
                             </div>
                         </div>
                     </div>
                     <div className="container">
                        <div className="row">
                            <RenderPropertie icon={faCoins} title="Payez après l'intervention" key="d-1" 
                            description="Vous pouvez choisir d'être débité après le passage de notre réparateur" />
                            <RenderPropertie icon={faClock} title="Créneau de 2H" key="d-2" 
                            description="Choisissez le jour et l'heure de votre Intervention en quelques clics" />
                            <RenderPropertie icon={faHandHoldingUsd} title="Annulation gratuite" key="d-3" 
                            description="Annulation gratuite jusqu'à 24h avant l'intervention avec un remboursement intégral" />
                        </div>
                        <div className="row regions d-flex align-items-center">
                            <div className="col-md-5">
                               <div>
                                   <img src="assets/images/algerie.png" alt="Algerie" />
                               </div>
                            </div>
                            <div className="col-md-6 offset-md-1 blue-div-wrapper">
                                <div className="blue-div">
                                     <h1 className="text-dark">Nous intervenons dans de nombreuses régions partout en Algérie</h1>
                                     <p>Saisissez votre adresse pour savoir si nos réparateurs interviennent chez vous.</p>
                                     <LocalForm>
                                            <Row className="form-group"> 
                                                    <div className="col-10">
                                                        <Control.text model=".address_three" name="address_three" className="form-control address-input"
                                                        placeholder="Saisissez votre adresse" />
                                                    </div>
                                                    <div className="col-3 mt-3">
                                                        <button type="submit" className="btn primary-button ps-4 pe-4">Voir</button>
                                                    </div>
                                            </Row> 
                                        </LocalForm>
                                </div>
                            </div>
                        </div>
                     </div>
                </div>
                <div className="exhibition-wrapper">
                    <div className="container">
                        <div className="row d-flex align-items-center">
                            <div className="col-md-6">
                                <h1>Achetez des appareils neufs</h1>
                                <p className="fs-4">Vous pouvez également acheter des appareils éléctroménagers
                                neufs ou comme neufs !</p>
                                <div className="mt-3">
                                    <button type="submit" className="btn primary-button">Découvrir nos produits</button>
                                </div>
                            </div>
                            <div className="col-md-6">
                                 <img src="assets/images/exhibition.png" alt="EXHIBITION" className="exhibition-image" />    
                            </div>
                        </div>
                    </div>
                </div>
           </>
        );
    }
}

export default Header;