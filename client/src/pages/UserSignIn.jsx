import React, { Component } from 'react'
import api from '../api'
import { UserSign } from '../components'

class UserSignIn extends Component {
    constructor(props){
        super(props)

        this.state = {
            username: '',
            password: '',
        }
    }

    handleChangeInputUsername = (_userName) => {
        this.setState({
            username: _userName
        })
    }

    handleChangeInputPassword = (password) => {
        this.setState({
            password: password
        })
    }

    handleCreateUser = async (payload) => {
        await api.insertUser(payload).then(res => {
            window.alert('User created successfully !!')
        })
    }

    render(){
        return (
            <UserSign
                title={'Sign In'}
                btnAccept={'Sign In'}
                onUserNameChange={this.handleChangeInputUsername}
                onPasswordChange={this.handleChangeInputPassword}
                onPayloadCreation={this.handleCreateUser}
            />
        )
    }
}

export default UserSignIn

//https://blog.bitsrc.io/build-a-login-auth-app-with-mern-stack-part-1-c405048e3669