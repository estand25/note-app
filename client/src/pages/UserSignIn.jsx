import React from 'react'
import api from '../api'
import { UserSign } from '../components'
import { UserConsumer } from '../hooks/UserContext'

const UserSignInInner = (props) => {
    const handleCreateUser = async (payload) => {
        console.log('UserSignIn');
        console.log(payload);
        
        
        await api.SignInUser(payload).then(res => {
            console.log(res.data.data._id);
            
            window.alert('User successfully Sign-In!!')
            
        }).catch(err => {
            window.alert(err.error)
        })

        props.updateAccount(payload)
    }

    return (
        <UserSign
            title={'Sign-In'}
            btnAccept={'Sign-In'}
            onPayloadCreation={handleCreateUser}
            onDirectTo={'/notes/list'}
            onCancelDirectTo={'/notes/about'}
            onLogInInfo={'1'}
        />
    )
}

const UserSignIn = props => (
    <UserConsumer>
        {({username, password, email, _id, updateAccount}) => (
            <UserSignInInner
                {...props}
                username={username}
                password={password}
                email={email}
                _id={_id}
                updateAccount={updateAccount}
            />
        )}    
    </UserConsumer>
)

export default UserSignIn

//https://blog.bitsrc.io/build-a-login-auth-app-with-mern-stack-part-1-c405048e3669