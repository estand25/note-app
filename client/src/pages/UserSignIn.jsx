import React from 'react'
import api from '../api'
import { UserSign } from '../components'
import { useAppState } from '../hooks'

const UserSignIn = () => {

    const { actions } = useAppState()

    const handleCreateUser = async (payload) => {
        // console.log(payload);
        
        await api.SignInUser(payload).then(res => {
            console.log(res.data.data._id);
            
            actions.setId(res.data.data._id)
            window.alert('User successfully Sign-In!!')
        }).catch(err => {
            window.alert(err)
        })
    }

    return (
        <UserSign
            title={'Sign In'}
            btnAccept={'Sign In'}
            onPayloadCreation={handleCreateUser}
            onDirectTo={'/notes/list'}
            onLogInInfo={'1'}
        />
    )
}

export default UserSignIn

//https://blog.bitsrc.io/build-a-login-auth-app-with-mern-stack-part-1-c405048e3669