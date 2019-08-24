import React from 'react'
import { Link } from 'react-router-dom'
import { useAppState } from '../hooks'

const Auth = () => {
    const {state } = useAppState()

    if(typeof state._id !== 'undefined'){
        return (
            <div>
                <Link to="/user/signUp" className="nav-link">
                    Sign-Up
                </Link>
                <Link to="/user/signIn" className="nav-link">
                    Sign-In
                </Link>
            </div>
        )
    } else {
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
}

export default Auth