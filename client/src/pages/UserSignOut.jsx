import React from 'react'
import api from '../api'
import { UserSign } from '../components'

const UserSignOut = () => {
    // constructor(props){
    //     super(props)

    //     this.state = {
    //         username: '',
    //         password: '',
    //     }
    // }

    // handleChangeInputUsername = (_userName) => {
    //     this.setState({
    //         username: _userName
    //     })
    // }

    // handleChangeInputPassword = (password) => {
    //     this.setState({
    //         password: password
    //     })
    // }

    const handleSignOutUser = async (payload) => {
        await api.SignOutUser(payload).then(res => {
            console.log(res.user);
            window.alert('User successfully Sign-out!!')
        }).catch(err => {
            window.alert(err.error)
        })
    }

    // render(){
        return (
            <UserSign
                title={'Sign Out'}
                btnAccept={'Sign Out'}
                onPayloadCreation={handleSignOutUser}
                onDirectTo={'/notes/list'}
                onLogInInfo={''}
            />
        )
    // }
}

export default UserSignOut

//https://blog.bitsrc.io/build-a-login-auth-app-with-mern-stack-part-1-c405048e3669