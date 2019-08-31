import React from 'react'
import api from '../api'
import {  UserSignUpProfile } from '../components'
import { UserConsumer } from '../hooks/UserContext'

const UserSignUpInner = (props) => {

    const handleCreateUser = async (payload) => {
        props.updateAccount(payload)
        
        await api.insertUser(payload).then(res => {
            console.log(res);
            
            window.alert('User created successfully !!')
        })
    }

    return (
        <UserSignUpProfile
            title={'Sign-Up'}
            btnAccept={'Sign-Up'}
            onDirectTo={'/notes/list'}
            onCancelDirectTo={'/notes/about'}
            onPayloadCreation={handleCreateUser}
            onUserType={'0'}
        />
    )
}

const UserSignUp = props => (
    <UserConsumer>
        {({username, password, email, _id, updateAccount}) => (
            <UserSignUpInner
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

export default UserSignUp

//https://blog.bitsrc.io/build-a-login-auth-app-with-mern-stack-part-1-c405048e3669