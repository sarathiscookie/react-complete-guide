import React from 'react';
import './App.css';

class App extends React.Component
{
  constructor(props){
    super(props);
    this.name = props.name;
    this.age = props.age;
    this.address = props.address;
  }

  render() {
    return (
      <div className="App">
        <h3>Name: {this.name}</h3>
        <h3>Age: {this.age}</h3>
        <h4>Address: {this.address}</h4>
      </div>
    );
  }
}

export default App;
