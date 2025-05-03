import React, { Component } from 'react'

// handling event in class components
export class ClassClickk extends Component {
    clickHandler(){
        console.log("Clicked the button")
    }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click me</button>
      </div>
    )
  }
}

export default ClassClickk
