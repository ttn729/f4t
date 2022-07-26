import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar';


class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <h1>Hello!</h1>
        <p>I'm Spicy Caterpillar, a chess player and computer scientist.
          I grew up playing chess in a small city in America.</p>

        <p>In my free time, I play chess and learn languages.</p>

        <p>I spend a lot of time learning about chess, languages, and Taboo TV</p>

      </div>
    );
  }


}

export default App;
