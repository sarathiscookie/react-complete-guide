import React from 'react';
import './App.css';
import Person from './Person/Person';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div>
        <h3> Welcome To React </h3>
        <Person name="Peter Bradely" age="28" />
        <Person name="Declan Oconner" age="58" />
        <Person name="Maria Oconner" age="29" />
        </div>
      </div>
    );
  }

}

export default App;
