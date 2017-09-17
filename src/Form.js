import React from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Results from './Results';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.trackStep = this.trackStep.bind(this);
  }

  trackStep() {
    if (this.props.step === 1) {
      return <Step1 onSubmit={this.props.onSubmit} name={this.props.name}/>;
    } else if (this.props.step === 2) {
      return <Step2 onSubmit={this.props.onSubmit} user={this.props.user} age={this.props.age} country={this.props.country}/>
    } else if (this.props.step === 3) {
      return <Step3 user={this.props.user} onSubmit={this.props.onSubmit}/>
    } else if (this.props.step === 4){
      return <Results onClick={this.props.onReset} user={this.props.user}/>
    } else {
      return "Whoops, something went wrong with the steps"
    }
  }
  render() {
    return (
      <div>
        {this.trackStep()}
      </div>
    )
  }
}
export default Form;
