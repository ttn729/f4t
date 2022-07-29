import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar';


class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navbar />

        <div className='AppContent'>
          <div className='wrapper'>
            <p>I'm Spicy Caterpillar, a chess player and computer scientist.</p>
            <p>I grew up playing chess in a small city in America.</p>
            <p> In my free time, I enjoy practicing chess and playing Taboo TV.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
