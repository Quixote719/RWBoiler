import React, { Component } from "react";
import "./app.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="block" />
        <p className="App-intro">I dream and the world trembles</p>
        <div className="deck" />
        <div className="deck">Beyond good and evil</div>
      </div>
    );
  }
}

export default App;
