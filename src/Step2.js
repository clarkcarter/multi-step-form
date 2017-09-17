import React from 'react';

const Step2 = (props) => {
  return (
    <div>
      <h1>Step 2</h1>
      <h2>Hi {props.user.name}</h2>
      <form onSubmit={props.onSubmit}>
        Age: <input onChange={props.age}></input><br />
        Country: <input onChange={props.country}></input><br />
        <button type="submit">next</button>
      </form>
    </div>
  )
}

export default Step2;
