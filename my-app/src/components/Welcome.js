import React, {Component} from 'react'
// class components
class Welcome extends Component{
    render(){
        const {name, heroName} = this.props
        return(
            <h1>Class Component {name} {heroName}</h1>
        ) 
    }
}

export default Welcome