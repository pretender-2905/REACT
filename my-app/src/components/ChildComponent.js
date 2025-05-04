import React from 'react'
// child compoent will call the parent componet method

// video 15
function ChildComponent(props) {
  return (
    <div>
      {/* <button onClick={props.greetHandler}>Greet Parent</button> */}

      {/* now we are padding a parameter, so we use arrow function */}
      <button onClick={() => props.greetHandler("Child")}>Greet Parent</button>
    </div>
  )
}

export default ChildComponent