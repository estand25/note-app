import React from 'react'
import api from '../api'
import { UserSign } from '../components'

const UserSignOut = () => {
    const handleSignOutUserWithId = async (_id) => {
        await api.getUserById(_id).then(res => {
            console.log(res);
            window.alert('User Successfully Sign-out!!')
        })
    }

    return (
        <UserSign
            title={'Sign Out'}
            btnAccept={'Sign Out'}
            onPayloadUser={handleSignOutUserWithId}
            onDirectTo={'/notes/list'}
            onCancelDirectTo={'/notes/about'}
        />
    )
}

export default UserSignOut

//https://blog.bitsrc.io/build-a-login-auth-app-with-mern-stack-part-1-c405048e3669