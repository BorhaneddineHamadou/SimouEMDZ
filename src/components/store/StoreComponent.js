import React from 'react';
import './storeStyles.css';
import {LocalForm, Control} from 'react-redux-form';
import Slider from 'react-slick'
import { Button, Card, CardBody, CardImg } from 'reactstrap';


const handleSubmit = (values) =>{
    alert(JSON.stringify(values));
}

const SwapToSlide = () => {
    let slidesNumber;
    if(window.innerWidth > 991){
       slidesNumber = 4
    }else if(window.innerWidth > 767){
        slidesNumber = 3
    }else if(window.innerWidth > 500){
        slidesNumber = 2
    }else{
        slidesNumber = 1
    }
    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: slidesNumber,
        swipeToSlide: true,
        afterChange: function(index) {
          console.log(
            `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
          );
        }
    };

    return(
    <div>
        <h4 className="mb-2">Nos appareils reconditionnés</h4>
        <Slider {...settings}>
          <div>
            <Card>
               <CardImg top width="100%" src="assets/images/lave-vaisselle.jpg" alt="Lave-vaisselle" />
               <CardBody>
                   <Button outline>
                       Lave-vaisselle
                   </Button>
               </CardBody>
            </Card>  
          </div>
          <div>
            <Card>
                <CardImg top width="100%" src="assets/images/Cuisinière.jpg" alt="Cuisinière" />
                <CardBody>
                    <Button outline>
                       Cuisinière
                    </Button>
                </CardBody>
            </Card>
          </div>
          <div>
            <Card>
               <CardImg top width="100%" src="assets/images/Refrégérateur.jpg" alt="Refrégérateur" />
               <CardBody>
                   <Button outline>
                       Refrégérateur
                   </Button>
               </CardBody>
            </Card>
          </div>
          <div>
            <Card>
               <CardImg top width="100%" src="assets/images/Machine-à-laver.jpg" alt="Machine à laver" />
               <CardBody>
                   <Button outline>
                       Machine à laver
                   </Button>
               </CardBody>
            </Card>
          </div>
          <div>
            <Card>
               <CardImg top width="100%" src="assets/images/congélateur.jpg" alt="Congélateur" />
               <CardBody>
                   <Button outline>
                       Congélateur
                   </Button>
               </CardBody>
            </Card>
          </div>
          <div>
            <Card>
               <CardImg top width="100%" src="assets/images/cheminée.jpg" alt="Cheminée" />
               <CardBody>
                   <Button outline>
                       Cheminée
                   </Button>
               </CardBody>
            </Card>
          </div>
        </Slider>
    </div>
    );
}

const Store = (props) => {

   return(
      <div className="store-wrapper">
        <div className="big-blue-container">
          <div className="container">
              <div className="row search-container">
                  <div className="col-10 col-md-11">
                      <div className="row">
                          <div className="col-md-9">
                            <LocalForm onSubmit={(values)=>handleSubmit(values)}>
                                <Control.text model=".search" className="form-control" name="search" id="search" placeholder="Rechercher" />
                            </LocalForm>
                          </div>
                          <div className="col-5 col-md-3 mt-3 mt-md-0">
                            <button type="submit" className="btn primary-button">Rechercher</button>  
                          </div>
                      </div>
                  </div>
                  <div className="col-2 col-md-1 mt-1 mt-md-0">
                      <img src="assets/images/shopping-cart.png" className="shopping-cart" />
                  </div>
              </div>
              <div className="big-image">
                  <h1>C'est comme du neuf mais c'est moins cher</h1>
              </div>
          </div>
      </div>
      <div className="proprieties">
          <div className="container">
             <div className="row">
                <div className="col-8 m-auto col-md">
                    <div className="row prop-row">
                        <div className="col-lg-2">
                            <img src="assets/images/prop1.png" alt="Propriété 1" className="prop-image" />
                        </div>
                        <div className="col-lg-10 mt-2 mt-lg-0">
                            <h4 className="blue-header">
                               Testé et réparé par nos réparateurs
                            </h4>
                        </div>
                    </div>
                </div>
                <div className="col-8 m-auto col-md mt-3 mt-md-0">
                    <div className="row prop-row">
                        <div className="col-lg-2">
                            <img src="assets/images/prop2.png" alt="Propriété 2" className="prop-image" />
                        </div>
                        <div className="col-lg-10 mt-2 mt-lg-0">
                            <h4 className="blue-header">
                                Moins cher jusqu'à -20%
                            </h4>
                        </div>
                    </div>
                </div>
                <div className="col-8 m-auto col-md mt-3 mt-md-0">
                    <div className="row prop-row">
                        <div className="col-lg-2">
                           <img src="assets/images/prop3.png" alt="Propriété 3" style={{"width": "40px"}} />
                        </div>
                        <div className="col-lg-10 mt-2 mt-lg-0">
                            <h4 className="blue-header">
                               Garanti 1 an Réparation ou échange
                            </h4>
                        </div>
                    </div>
                </div>
             </div> 
          </div>
      </div>
      <div className="store-content">
          <div className="container">
              <SwapToSlide />
          </div>
      </div>
    </div> 
   );
}

export default Store;