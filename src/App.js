import React, { Component } from 'react';
import Navigation from './Navigation';
import Header from './Header';

import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Navigation />
                <Header/>
            </div>
        );
    }

}

export default App;