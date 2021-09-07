import React, {Component} from 'react';
import { Control, LocalForm } from 'react-redux-form';
import { Row } from 'reactstrap';
import './headerStyles.css';

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
                                                    <Control.select model=".device" id="device" name="device" className="form-control">
                                                        <option>Appareil à réparer</option>
                                                        <option>Climatiseur</option>
                                                        <option>Machine à laver</option>
                                                        <option>Réfrigérateur</option>
                                                    </Control.select>  
                                                </div> 
                                                <div className="col-lg-5 col-sm-7 mt-3 mt-sm-0">
                                                    <Control.text model=".address" id="address" name="address" className="form-control"
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
                                        <p className="text-light fs-6">Réparateurs recrutés et formés100% </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-content">
                     <h1 className="text-center">Une réparation efficace, économique et écologique</h1> 
                </div>
           </>
        );
    }
}

export default Header;