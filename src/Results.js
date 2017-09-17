import React from 'react';
import Reset from './Reset';

class Results extends React.Component {

  checkAge() {
    if (this.props.user.age >= 18) {
      return "old enough to drink"
    } else {
      return "not old enough to drink yet"
    }
  }

  render() {
    return (
      <div>
        <h1>Hey {this.props.user.name}, I hear you're {this.props.user.age} and live in {this.props.user.country} <br />
        That's {this.checkAge()}!</h1>
        <Reset onClick={this.props.onClick}/>
      </div>
    )
  }
}

export default Results;
