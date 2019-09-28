import React, { Component } from 'react';

import './style/Navigation.css';

class Navigation extends Component {
    render() {
        const sections = ['Home', 'About', 'Projects', 'Contact']; //sections is an array
        const navLinks = sections.map((section) => { //array.map() method iterates over the array's items
            return(
                <li><a href={'#' + section}>{section}</a></li> //stores every item of the array in navLinks
            )
        });
        return (      /*returns (displays) whatever comes from the navLinks constant into the <nav> tag */
            <nav>
                <ul>
                    {navLinks} 
                </ul>
            </nav>

        );
    }

}

export default Navigation;
