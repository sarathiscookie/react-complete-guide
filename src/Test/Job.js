import React from 'react';

class Job extends React.Component {

  render() {
    return (
      <div>
      <p>{this.props.name}</p>
      <p>{this.props.status}</p>
      <p>{this.props.requirement}</p>
      </div>
    );
  }
}

export default Job;