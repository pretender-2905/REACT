import React from 'react'
// events

// in functional components


function FunctionClick() {

    function clickHandler(){
        console.log("button clicked!")
    }
  return (
    <div>
      {/* passing the function as a event not a function call thtas why not added parenthesis after function name */}
      <button onClick={clickHandler}>Click</button>
    </div>
  )
}

export default FunctionClick
