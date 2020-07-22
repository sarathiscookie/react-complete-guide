import React from 'react';
import './App.css';

function App(){

  function Welcome(props) 
  {
    return <div>
      <h2>Name: {props.name}</h2>
      <h4>Age: {props.age}</h4>
      </div>;
  }

  return (
    <div className="App">
      <Welcome name="Peter Bradely" age="24"/>
      <Welcome name="Declan Oconner" age="45"/>
      <Welcome name="Maria Oconner" age="40"/>
    </div>
  );
}

export default App;
