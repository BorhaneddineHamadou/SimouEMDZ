import React, {Component} from "react";
import Footer from "../footer/FooterComponent";
import Header from "../header/HeaderComponent";
import Navigation from "../navigation/NavigationComponent";

class Index extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
           <>
             <Navigation />
             <Header />
             <Footer />
           </> 
        );
    }
}

export default Index;