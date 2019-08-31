import React from 'react'
import { Link } from 'react-router-dom'
import { UserConsumer } from '../hooks/UserContext'
import ls from 'local-storage'

const Auth = () => (
    <UserConsumer>
        {({ data }) => (
            <AuthInfo
                username={data.username}
            />
        )}
    </UserConsumer>
)

const AuthInfo = (props) => {
    console.log(ls.get('_id'));
    
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