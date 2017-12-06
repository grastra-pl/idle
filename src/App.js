import React, { Component } from 'react';
import './App.css';

class ZmianaZasobow {
  constructor(jakich, oile) {
    this.jakich = jakich;
    this.oile = oile;
  }
}

class App extends Component {
  render() {
    let a = new ZmianaZasobow("jakowych","iletam");

    console.log(a);

    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
