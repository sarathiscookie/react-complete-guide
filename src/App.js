import React from 'react';
import './App.css';
import Greeting from './Test/Greeting';

class App extends React.Component {
  
  render() {
    const messages = ['React', 'Re: React', 'Re:Re: React'];

    return (
      <div className="App">
       <Greeting countOfMsg = {messages}/>
      </div>
    );
  }

}

export default App;
