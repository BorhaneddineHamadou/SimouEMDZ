import React, {Component} from 'react';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Row } from 'reactstrap';
import './repairStyles.css';
import PlacesAutocomplete from 'react-places-autocomplete';

const required = (val) => (val) && val.length;

class Repair extends Component{

    constructor(props){
        super(props);
        this.toRepairForm = this.toRepairForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            address : ''
        }
    }

    handleChange = address => {
        this.setState({ address });
    };

    toRepairForm(values, e){
        e.preventDefault();
        localStorage.setItem('device', JSON.stringify(values.device));
        localStorage.setItem('address', JSON.stringify(this.state.address));
        this.props.history.push('/repairForm');
    }

    render(){
        return(
            <div className="repair-wrapper">
                <div className="container">
                    <LocalForm onSubmit={(values, e) => this.toRepairForm(values, e)}>
                        <Row className="form-group">
                                <div className="col-lg-3 col-sm-5">
                                    <Control.select model=".device" name="device" className="form-control" validators={{required}}>
                                        <option>Appareil à réparer</option>
                                        <option>Climatiseur</option>
                                        <option>Machine à laver</option>
                                        <option>Réfrigérateur</option>
                                    </Control.select>  
                                    <Errors className="text-danger" model=".device" show="touched" messages={{
                                        required: "Veuillez sélectionner l'Appareil à réparer"
                                    }} /> 
                                </div> 
                                <div className="col-lg-5 col-sm-7 mt-3 mt-sm-0">
                                    <PlacesAutocomplete
                                        value={this.state.address}
                                        onChange={this.handleChange}
                                        searchOptions={{componentRestrictions: { country: ['dz'] }}}
                                    >
                                        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                                        <div>
                                            <Control.text
                                            {...getInputProps({
                                                placeholder: 'Saisissez votre adresse ...',
                                                className: 'location-search-input form-control address-input',
                                                model: ".address", 
                                                name: "address",
                                                validators: {required}
                                            })}
                                            />
                                            <div className="autocomplete-dropdown-container">
                                            {loading && <div>Loading...</div>}
                                            {suggestions.map(suggestion => {
                                                const className = suggestion.active
                                                ? 'suggestion-item--active'
                                                : 'suggestion-item';
                                                // inline style for demonstration purpose
                                                const style = suggestion.active
                                                ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                                                : { backgroundColor: '#ffffff', cursor: 'pointer' };
                                                return (
                                                <div
                                                    {...getSuggestionItemProps(suggestion, {
                                                    className,
                                                    style,
                                                    })}
                                                >
                                                    <span>{suggestion.description}</span>
                                                </div>
                                                );
                                            })}
                                            </div>
                                        </div>
                                        )}
                                    </PlacesAutocomplete>
                                    {/* <Control.text model=".address" name="address" className="form-control address-input"
                                    placeholder="Saisissez votre adresse"
                                    validators={{required}} /> */}
                                    <Errors className="text-danger" model=".address" show="touched" messages={{
                                        required: "Veuillez entrer votre adresse"
                                    }} />
                                </div>
                                <div className="col-12 col-lg-4 mt-3 mt-lg-0">
                                    <button type="submit" className="btn primary-button">Prenez un rendez-vous</button>
                                </div>
                        </Row> 
                    </LocalForm>
                    <div className="row mt-2">
                        <div className="col-md-6">
                            <img src="assets/images/arrow.svg" className="arrow-image" alt="arrow" />
                        </div>
                        <div className="col-md-6 m-auto">
                            <h1 className="blue-header">
                               Indiquez l’appareil en panne et votre adresse
                            </h1>
                            <span className="blue-header">
                                Renseignez les champs
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Repair;