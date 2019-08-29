import React from 'react'
import { Link } from 'react-router-dom'
import { UserConsumer } from '../hooks/UserContext'

class Auth extends React.Component {
    render() {
        return (
            <UserConsumer>
                {({ username }) => (
                    <AuthInfo
                        username={username}
                    />
                )}
            </UserConsumer>
        )
    }
}

const AuthInfo = (props) => {
    if(props.username !== ''){
        return (
            <div>
                <Link to="/user/userProfile" className="nav-link">{props.username}</Link>
                <Link to="/user/signOut" className="nav-link">Sign-Out</Link>
            </div>
        )
    } else {
        return (
            <div>
                <Link to="/user/signUp" className="nav-link">Sign-Up</Link>
                <Link to="/user/signIn" className="nav-link">Sign-In</Link>
            </div>
        )
    }
}

export default Auth

// const SignInUp = (props) => {
//     return (
//         <div>
//             <Link to="/user/signUp" className="nav-link">
//                 Sign-Up
//             </Link>
//             <Link to="/user/signIn" className="nav-link">
//                 Sign-In
//             </Link>
//             <p>
//                 {props.UserId}
//             </p>
//         </div>
//     )
// }

// const SignOutProfile = () => {
//     return (
//         <div>
//             <Link to="/user/signOut" className="nav-link">
//                 Sign-Out
//             </Link>
//             <Link to="/user/userProfile" className="nav-link">
//                 User Profile
//             </Link> 
//         </div>
//     )
// }

// const Auth = () => {    
//     if(typeof state._id !== 'undefined'){
//         return (
//             <SignInUp />
//         )
//     } else {
//         return (
//             <SignOutProfile />
//         )
//     }
// }

// const Auth = (_props) => (
//     <UserConsumer>
//         {( {details: {username}}) => (
//             <div>
//              <Link to="/user/userProfile" className="nav-link">
//                  {username} Profile
//              </Link>
//             </div>
//         )}
//     </UserConsumer>
// )