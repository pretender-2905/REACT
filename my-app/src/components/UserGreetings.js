import React, { Component } from 'react'
// conditional rendiring
class UserGreetings extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoggedIn: true
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

    // let message
    // if(this.state.isLoggedIn){
    //     message = <div>Welcome Ibrahim</div>
    // }else{
    //     message = <div>Welcome Guest</div>
    // }

    // return <div>{message}</div>


    // 3rd approach by ternary operator

    // return (
    //   this.state.isLoggedIn ? (
    //     <div>Welcome Ibrahim</div> ) : (
    //     <div>Welcome guest</div>
    //     )
    // )


    // 4th approach - short circuit approach
// agar left wali statemtn true hogi to right wali statemnt dikh jai gi aur agar left wali false ghogi to kuch bhi nhi dikhy ga
    return this.state.isLoggedIn && <div>Welcome Ibrahim</div>
  }
}

export default UserGreetings
