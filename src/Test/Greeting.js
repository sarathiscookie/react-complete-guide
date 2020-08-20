import React from 'react';

class Greeting extends React.Component {

  render() {
    return (
      <div>
      <p>{this.props.status}</p>
      </div>
    );
  }
}

export default Greeting;