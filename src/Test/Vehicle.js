import React from 'react';

class Vehicle extends React.Component {

  render() {
    return (
      <div>
      <p>Vehicle Name: {this.props.name}. Vehicle Man. Year: {this.props.year}</p>
      </div>
    );
  }
}

export default Vehicle;