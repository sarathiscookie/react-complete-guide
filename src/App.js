import React from 'react';
import './App.css';

function App(props) {

  return (
    <div className="App">
      <h3>Name: {props.name}</h3>
      <h3>Age: {props.age}</h3>
    </div>
  );
}

export default App;
