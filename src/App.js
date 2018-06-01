import React, { Component } from 'react';
import Carousel from './components/Carousel';
import Poster from './components/Poster';


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Carousel arrowColor="green" length={10}>
            <Poster/>
        </Carousel>
      </div>
    );
  }
}

export default App;
