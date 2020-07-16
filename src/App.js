import React from 'react';
import './App.css';

function App() {
  
  const user = {
    firstname: 'Peter',
    secondname: 'Bradely'
  };

  function name(user)
  {
    return `My name is ${user.firstname} ${user.secondname}`
  }

  return (
    <div className="App">
      <h1>Welcome to React Application. {name(user)}</h1>
    </div>
  );
}

export default App;
