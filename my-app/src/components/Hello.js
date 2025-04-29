import React, { Component } from 'react'

const Hello = () =>{

    // Component using JSX
    // return (
    //     <div>
    //         <h1>Hello Ibrahim</h1>
    //     </div>
    // )
// --------------------------------

    // Component without using JSX
    // for eg:


    // return React.createElement('div', null,  'Hello Ibrahim')
    
    // for add a heading h1

    return React.createElement('div', null, React.createElement('h1', null, 'Hello Ibrahim'))
}

export default Hello