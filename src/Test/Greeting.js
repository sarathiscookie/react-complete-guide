import React from 'react';

class Greeting extends React.Component {

  render() {
    return (
      <div>
      <h3><u>Inline if with Logical && Operator</u></h3>
      {
          this.props.countOfMsg.length > 0 &&
          <h3>User recieved messages count is {this.props.countOfMsg.length}.</h3>
      }
      </div>
    );
  }
}

export default Greeting;