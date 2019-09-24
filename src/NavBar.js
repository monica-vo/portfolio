import React from 'react';
import './App.css';




function NavBar(){
    return(
        <div className="App-navbar">
        <ul>
          <li><a class="active" href="#home">Home</a></li>
          <li><a id="about" href="#about">About</a></li>
          <li class="dropdown">
            <a class="dropbtn">Projects</a>
            <div class="dropdown-content">
              <a href="https://monica-vo.github.io/keycodefinder/">KeyCode</a>
              <a href="https://monica-vo.github.io/dicegame/">Dice game</a>
              <a href="#">Cyber Pet</a>
              <a href="#">Cash Machine</a>
              <a href="https://monica-vo.github.io/zengardenproject/">Zen Garden</a>

            </div>
          </li>
          <li><a id="contact" href="#contact">Contact</a></li>
        </ul>
        <div class="search-container">
    <form action="/action_page.php">
      <input type="text" placeholder="Search.." name="search"/>
      <button type="submit"><i class="fa fa-search"></i></button>
    </form>
  </div>
  </div>
  );

}

export default NavBar;