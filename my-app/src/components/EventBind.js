import React, { Component } from 'react'
// event hanlding by class components
class EventBind extends Component {

    constructor(props) {
        super(props)

        this.state = {
            message: "Hello"
        }

           // 3rd aproach and most used aproach
        //    this.clickHandler = this.clickHandler.bind(this) 
    }

    // clickHandler() {
    //     this.setState({
    //         message: "GoodBye"

    //     })

    //     console.log(this)
    // }

    // 4th aproach
    

    clickHandler = () => {
        this.setState({
            message : "Goodbye!"
            
        })
        console.log(this)
    }
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* 1st approach */}
                {/* <button onClick={this.clickHandler.bind(this)}
                >Click</button> */}

{/* ------------ */}

                {/* 2nd approach */}
                {/* also we can use an arrow function which automatically bind this */}

                {/* <button onClick={() => this.clickHandler() }>Click</button> */}


 {/* --------------- */}


                {/* 3rd aproach and most used aproach, is use constructore to assign event binding to the click handler as mentioned in constructor as apparoach 3 */}
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default EventBind
