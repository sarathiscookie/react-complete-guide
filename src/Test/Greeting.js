import React from 'react';

class Greeting extends React.Component {

  render() {
    return (
      <div>
      <h3><u>Inline if with Logical && Operator</u></h3>
      {
        this.props.loginStatus === 'true' && 
        <h3>User is online. Welcome to React JS</h3>
      }
      </div>
    );
  }
}

export default Greeting;