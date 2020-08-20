import React from 'react';
import './App.css';
import Greeting from './Test/Greeting';

class App extends React.Component {

  state = {
    status: 'active',
  }

  render() {
    return (
      <div className="App">
      <h3> Inline If-Else with Conditional Operator (Example 1)</h3>
      {
        this.state.status === 'active' ? 
        <button>Save</button> :
        <button>Edit</button>
      }

      <h3> Inline If-Else with Conditional Operator (Example 2)</h3>
      <Greeting status = {this.state.status === 'active' ? 'Status is active' : 'Status is deactive'}/>
      </div>
    );
  }

}

export default App;
