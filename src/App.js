import React, { Component } from 'react';
// import './App.css';
import CoderMirror from 'react-codemirror'

class App extends Component {
  render() {
    var options = {
      lineNumbers: true,
    };
    return (
      <div>
        <CoderMirror value={"// code"} options={options} />
        <div className="container">
          <h1 className="jumbotron-heading text-center">1</h1>
          <p className="text-center">
            <button className="btn btn-primary mr-2">Increment</button>
            <button className="btn btn-danger mr-2">Decrement</button>
          </p>
        </div>
      </div>
    );
  }
}

export default App;
