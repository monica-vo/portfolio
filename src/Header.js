import React, { Component } from 'react';
import './style/Header.css';

/*This block of code is anothere way to style the component without doing it in the css file
It is here only for learning different ways of coding for learning purposes

import bgImg from './img/bgImg.png';
const mystyles = {
    backgroundImage: `url( ${bgImg})`,
    height: '80vh',
    backgroundColor: 'lightgray',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    // backgroundPosition: 'bottom', this display the image from the bottom to up
}
*/

class Header extends Component {
    render() {
        const mainHeader = "Monica Valencia Ocampo"; //This variable is used below
        const subHeader = "Junior Software Developer"; //This variable is used below
        return (
            <header> 
                <h1>{mainHeader}</h1> 
                <h3>{subHeader}</h3>
            </header>
        );
    }
};

export default Header;

