import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
    border: 1px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: 'btn btn-primary',
})`
    margin: 15px 15px 15px 5px;
` 

const CancelButton = styled.a.attrs({
    className: 'btn btn-danger',
})`
    margin 15px 15px 15px 5px;
`

const Spacing = styled.div`
    padding: 5px;
`

class UserSignUp extends Component {
    constructor(props){
        super(props)

        this.state = {
            username: '',
            password: '',
            email: '',
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

    handleChangeInputEmail = (email) => {
        this.setState({
            email: email
        })
    }

    handleCreateUser = async () => {
        const {_userName, password, email} = this.state

        const payload = {
            username: _userName, 
            password: password, 
            email: email
        }

        await api.insertUser(payload).then(res => {
            window.alert('User created successfully !!')
        })
    }

    render(){
        const {_userName, password, email} = this.state

        return (
            <Wrapper>
            <Title>Sign-Up</Title>
            <Label>UserName: </Label>
            <Spacing>
                <InputText
                    type="text"
                    value={_userName}
                    onChange={this.handleChangeInputUsername}
                />
            </Spacing>
            <Label>Password: </Label>
            <Spacing>
                <InputText
                    type="text"
                    value={password}
                    onChange={this.handleChangeInputPassword}
                />
            </Spacing>
            <Label>Email: </Label>
            <Spacing>
                <InputText
                    type="text"
                    value={email}
                    onChange={this.handleChangeInputEmail}
                />
            </Spacing>
            <Button onClick={this.handleCreateUser}>Sign-Up</Button>
            <CancelButton href={'/notes/about'}>Cancel</CancelButton>
        </Wrapper>
        )
    }
}

export default UserSignUp

//https://blog.bitsrc.io/build-a-login-auth-app-with-mern-stack-part-1-c405048e3669