import React from 'react';
import './App.css';

function App() {

  // User details
  const user = {
    firstName: 'Jane',
    lastName: 'Doe',
    address: 'Kochi',
    job: 'MeanStackDeveloper'
  };

  // Greetings
  function greetings(user)
  {
    if(user) {
      return `${user.firstName} ${user.lastName}`;
    }
    else {
      return `No users`;
    }
  }

  // Job Details
  function jobs(user)
  {
    return user.job;
  }

  // Address Details
  function address(user)
  {
    return user.address;
  }

  const reactDom = <h1>{greetings(user)}</h1>;

  const reactDomWithChild = (
    <div>
      <h1>{ jobs(user) }</h1>
      <h2>{ address(user) }</h2>
    </div>
  );


  return (
    <div className="App">
      <div>{reactDom}</div>
      {reactDomWithChild}
    </div>
  );
}

export default App;
