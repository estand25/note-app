import React, {useState} from 'react'

// const UserContext = React.createContext([{}, () => {}])

// export const UserConsumer = UserContext.Consumer

// const UserProvider = (props) => {
//     const [state, setState] = useState({
//         _id: '5d5ddd7f15045034ac158ec8',
//         username: 'd1',
//         password: 'd1pw'
//      })

//     return (
//         <UserContext.Provider value={[state, setState]}>
//             {props.children}
//         </UserContext.Provider>
//     );
// }

const UserContext = React.createContext()

export const UserConsumer = UserContext.Consumer

class UserProvider extends React.Component {
    state = {
        _id: '5d5ddd7f15045034ac158ec8',
        username: 'd1',
        password: 'd1pw',
        updateAccount: updatedAccount => this.updateAccount(updatedAccount)
      }
      
      updateAccount = updatedAccount => {
        this.setState(prevState => ({
        ...prevState,
         ...updatedAccount
        }))
      }


    render () {
        return (
            <UserContext.Provider value={this.state}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}

export default UserProvider
// const UserContext = React.createContext([{}, () => {}])

// const UserProvider = (props) => {
//     const [state, setState] = useState({})

//     return (
//         <UserContext.Provider value={[state, setState]}>
//             {props.children}
//         </UserContext.Provider>
//     );
// }

// export {
//     UserContext,
//     UserProvider
// }

// https://upmostly.com/tutorials/how-to-use-the-usecontext-hook-in-react