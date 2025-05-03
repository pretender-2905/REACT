import React, { Component } from 'react'

// STATE , SETSTATE

class Counter extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }

    increment() {
        // this.setState({
        //     count: this.state.count + 1
        // },
        //     () => {
        //         console.log('call  back vlaue', this.state.count)
        //     })

        // another method for incremeting 
        // start
    this.setState((prevState)=> ({
        count: prevState.count + 1
    }))
        console.log(this.state.count)
    }

    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()

        // end
    }

    render() {
        return (
            <div>
                <div>Count: {this.state.count}</div>
                <button onClick={() => this.incrementFive()}>Increment</button>
            </div>
        )
    }
    // }
}

export default Counter
