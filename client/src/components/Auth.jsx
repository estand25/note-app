import React from 'react'
import { Link } from 'react-router-dom'

const SignInUp = (props) => {
    return (
        <div>
            <Link to="/user/signUp" className="nav-link">
                Sign-Up
            </Link>
            <Link to="/user/signIn" className="nav-link">
                Sign-In
            </Link>
            <p>
                {props.UserId}
            </p>
        </div>
    )
}

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

const Auth = () => {    
    // if(typeof state._id !== 'undefined'){
        return (
            <SignInUp />
        )
    // } else {
    //     return (
    //         <SignOutProfile />
    //     )
    // }
}

export default Auth