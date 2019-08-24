import React from 'react'
import { Link } from 'react-router-dom'
import { useAppState } from '../hooks'
// import { UserContext } from '../hooks/UserContext'

const SignInUp = (props) => {
    // const { state } = useContext(UserContext)

    // console.log(state.currentUser);
    
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

const SignOutProfile = () => {
    return (
        <div>
            <Link to="/user/signOut" className="nav-link">
                Sign-Out
            </Link>
            <Link to="/user/userProfile" className="nav-link">
                User Profile
            </Link> 
        </div>
    )
}

const Auth = () => {
    const {state } = useAppState()

    console.log(state._id);
    
    if(typeof state._id !== 'undefined'){
        return (
            <SignInUp 
                UserId={state._id}
            />
        )
    } else {
        return (
            <SignOutProfile />
        )
    }
}

export default Auth