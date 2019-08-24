import React, { Component } from 'react'
import api from '../api'
import { UserSign } from '../components'
import styled from 'styled-components'

const Button = styled.button.attrs({
    className: 'btn btn-primary',
})`
    margin: 15px 15px 15px 5px;
` 

class UserSignOut extends Component {
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

    handleSignOutUser = async (payload) => {
        await api.SignOutUser(payload).then(res => {
            console.log(res.user);
            window.alert('User successfully Sign-out!!')
        }).catch(err => {
            window.alert(err.error)
        })
    }

    render(){
        return (
            // <div>
            //     <Button onClick={handleSignOutUser}>Sign-out</Button>
            // </div>
            <UserSign
                title={'Sign Out'}
                btnAccept={'Sign Out'}
                // onUserNameChange={this.handleChangeInputUsername}
                // onPasswordChange={this.handleChangeInputPassword}
                onPayloadCreation={this.handleCreateUser}
            />
        )
    }
}

export default UserSignOut

//https://blog.bitsrc.io/build-a-login-auth-app-with-mern-stack-part-1-c405048e3669