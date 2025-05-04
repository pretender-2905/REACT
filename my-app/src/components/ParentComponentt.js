import React, { Component } from 'react'
import ChildComponent from './ChildComponent'


// props as method video 15
class ParentComponentt extends Component {

    constructor(props) {
        super(props)
        this.state = {
            ParentName: 'Parent'
        }
        // binding beacuse i am using  this
        this.greetParent = this.greetParent.bind(this)
    }

    greetParent(childName) {
        alert(`Hello ${this.state.ParentName} from ${childName}`)
    }
    render() {
        return (
            <div>
                {/* dont add parentthesis we are passing a reference to the greetParent method as a props called greet handler */}
                <ChildComponent greetHandler = {this.greetParent} />
            </div>
        )
    }
}

export default ParentComponentt































