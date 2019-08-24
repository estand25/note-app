import React from 'react'

const UserContext = React.createContext([{}, () => {}])

// let initilState = {
//     currentUser: ''
// }

// const reducer = (state,action) => {
//     switch(action.type){
//         case 'set-user':
//             return { 
//                 currentUser: action.payload
//             };
//         default:
//             return initilState;
//     }
// }

// export const UserProvider = ({reducer, initialState, children}) => {
//     <UserContect.Provider value={useReducer(reducer, initialState)}>
//         {children}
//     </UserContect.Provider>
// }
// const UserProvider = (props) => {
//     // UserContext.Provider
//     let [state, dispatch] = React.useReducer(reducer, initilState)
//     let value = { state, dispatch }

//     return (
//         <UserContext.Provider value={value}>
//             {props.childern}
//         </UserContext.Provider>
//     )

// }
// const UserConsumer = UserContext.Consumer

// export default UserContext

const UserProvider = (props) => {
    const [state, setState] = React.useState({})

    return (
        <UserContext.Provider value={[state, setState]}>
            {props.childern}
        </UserContext.Provider>
    )
}
export {
    UserContext,
    UserProvider,
    // UserConsumer
}