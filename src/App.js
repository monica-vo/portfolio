import React from 'react';
import './App.css';
import NavBar from './NavBar';
import Middle from './Middle';
import Right from './Right';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <Middle/>
     <Right/>
     <Footer/>

    </div>
  );
}

export default App;
