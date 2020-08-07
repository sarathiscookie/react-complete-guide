import React from 'react';
import './App.css';
import Person from './Person/Person';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div>
        <h3>Welcome</h3>
        <Person />
        </div>
      </div>
    );
  }

}

export default App;
