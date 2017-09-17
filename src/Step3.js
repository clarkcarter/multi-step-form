import React from 'react';

const Step3 = (props) => {
  return (
    <div>
      <form onSubmit={props.onSubmit}>
        <h1>Check your details are correct</h1>
        <strong>Name:</strong> {props.user.name}<br />
        <strong>Age:</strong> {props.user.age}<br />
        <strong>Country:</strong> {props.user.country}<br />
        <button type="submit">submit</button>
      </form>
    </div>
  )
}

export default Step3;
