import React, { Component } from 'react'
// conditional rendiring
class UserGreetings extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn : true
      }
    }
    
  render() {

    // 1st approach for conditional rendering
    // if(this.state.isLoggedIn){
    //     return (
    //         <div>
    //             Welcome Ibrahim
    //         </div>
    //     )
    // }else{
    //     return(
    //         <div>
    //             Welcome Guest
    //         </div>
    //     )
    // }


    // 2nd approach for conditional rendering, iin this we store the elememts in the variable

    let message
    if(this.state.isLoggedIn){
        message = <div>Welcome Ibrahim</div>
    }else{
        message = <div>Welcome Guest</div>
    }

    return <div>{message}</div>
  }
}

export default UserGreetings
