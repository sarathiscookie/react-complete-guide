import React from 'react';
import './App.css';

function App() {
  const user = {
    firstName: 'Peter',
    lastName: 'Bradely'
  };

  function greetings(user)
  {
    if(user) {
      return `${user.firstName} ${user.lastName}`;
    }
    else {
      return `No users`;
    }

  }

  return (
    <div className="App">
      <h1>Welcome {greetings(user)}</h1>
    </div>
  );
}

export default App;
