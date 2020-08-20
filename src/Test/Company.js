import React from 'react';

class Company extends React.Component {

  render() {
    return (
      <div>
      <p> Company Name: {this.props.name}. Sector: {this.props.sector}</p>
      </div>
    );
  }
}

export default Company;