import React from 'react'


// functional compononets
// function Greet(){
//     return <h1>Hello Ibrahim</h1>
// }
// ------------------------------------------------------------------
// PROPS START
//  const Greet = (props) => {
//     console.log(props)
//     return(
//         <div>
//     <h1>Functional Components {props.name} {props.heroName}</h1>
//         {props.children}
//         </div>
//     ) 
    
//  }

// PROPS END
// --------------------------------------------------------------

// DESTRUCTURING PROPS IN FUNCTIONAL COMPONENTS START

// METHOD :1 DESTRUCTING IN THE PARA METERS

// in this we dont need to do props.name just simply write name

// const Greet = ({name, heroName, children}) => {
//     // console.log(props)
//     return (
//         <div>
//             <h1>
//                 Functional Components {name} {heroName} {children}
//             </h1>
//         </div>
//     )
// }

// -------

// METHOD: 2

// DESTRUCTING IN THE FUNCTION BODY

const Greet = props => {
    const {name, heroName, children} = props
    return (
        <div>
            <h1>
                Functional Components {name} {heroName} {children}
            </h1>
        </div>
    )
}


//  DESTRUCTURING PROPS IN FUNCTIONAL COMPONENTS END

export default Greet