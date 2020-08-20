import React from 'react';
import './App.css';
import Job from './Test/Job';

class App extends React.Component {

  state = {
    jobs: [
      { name: 'React Developer', status: 'Active', requirement: 5 },
      { name: 'Vue Developer', status: 'Active', requirement: 3 },
      { name: 'Node Developer', status: 'Active', requirement: 4 },
    ]
  }

  switchJobHandler = () => {
    this.setState( {
      jobs: [
        { name: 'React Developer', status: 'Deactive', requirement: 5 },
        { name: 'Vue Developer', status: 'Active', requirement: 5 },
        { name: 'Node Developer', status: 'Active', requirement: 5 },
      ]
    } )
  }

  render() {
    return (
      <div className="App">
        <button onClick = {this.switchJobHandler}>Switch Job!</button>
        <Job name = {this.state.jobs[0].name} status = {this.state.jobs[0].status} requirement = {this.state.jobs[0].requirement}/>
        <Job name = {this.state.jobs[1].name} status = {this.state.jobs[1].status} requirement = {this.state.jobs[1].requirement}/>
        <Job name = {this.state.jobs[2].name} status = {this.state.jobs[2].status} requirement = {this.state.jobs[2].requirement}/>
      </div>
    );
  }

}

export default App;
