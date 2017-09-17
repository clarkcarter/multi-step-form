import React from 'react';
import Form from './Form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      user: {
        name: '',
        age: null,
        country: ''
      }
    };
    this.name = this.name.bind(this);
    this.age = this.age.bind(this);
    this.country = this.country.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  name(e) {
    this.name = e.target.value;
  }

  age(e) {
    this.age = e.target.value;
  }

  country(e) {
    this.country = e.target.value;
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      user: {
        name: this.name,
        age: this.age,
        country: this.country
      },
      step: this.state.step + 1
    });
  }

  handleReset(e) {
    e.preventDefault();
    this.setState({
      user: {
        name: '',
        age: null,
        country: ''
      },
      step: 1
    });
  }

  render() {
    return (
      <div>
        <Form
          onSubmit={this.handleSubmit}
          name={this.name}
          age={this.age}
          country={this.country}
          step={this.state.step}
          user={this.state.user}
          onReset={this.handleReset}
        />
      </div>
    )
  }
}

export default App;
