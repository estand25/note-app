import React from 'react'
import api from '../api'
import {  UserSignUpProfile } from '../components'

const UserSignUp = () => {
    const handleCreateUser = async (payload) => {
        await api.insertUser(payload).then(res => {
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

export default UserSignUp

//https://blog.bitsrc.io/build-a-login-auth-app-with-mern-stack-part-1-c405048e3669