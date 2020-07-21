import React from 'react';
import './App.css';

class App extends React.Component 
{
  render() {
    const userDetails = {
      firstName: 'Peter',
      lastName: 'Bradely',
      age: '24',
      address: 'Kochi'
    };
  
    function userName(userDetails)
    {
      return `Name is ${userDetails.firstName} ${userDetails.lastName}`;
    }
  
    function age(userDetails)
    {
      return `Age is ${userDetails.age}`;
    }
  
    function address(userDetails)
    {
      return `Address is ${userDetails.address}`;
    }

    const child = (
      <div>
        <h2>{userName(userDetails)}</h2>
        <h2>{age(userDetails)}</h2>
        <h2>{address(userDetails)}</h2>
      </div>
    );
  
    return (
      <div className="App">
        <h1>Wlcome to React App!</h1>
        {child}
      </div>
    );
  }
  
}

export default App;
