import React from 'react';

const Step1 = (props) => {
  return (
      <div>
        <h1>Step 1</h1>
        <form onSubmit={props.onSubmit}>
          Name: <input onChange={props.name}></input><br />
          <button type="submit">next</button>
        </form>
      </div>
  )
}

export default Step1;
