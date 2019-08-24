import React, { useState } from 'react'

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

const UserSign = (props) => {
    const [_userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const handleChangeInputUsername = async event => {
        setUserName(event.target.value)
    }

    const handleChangeInputPassword = async event => {
        setPassword(event.target.value)
    }

    const onClick = () => {
        const payload = {
            username: _userName, 
            password: password
        }

        props.onPayloadCreation(payload)

        setUserName('')
        setPassword('')

        window.location.href = props.directTo
    }

    return (
        <Wrapper>
            <Title>{props.title}</Title>
            <Label>UserName: </Label>
            <Spacing>
                <InputText
                    type="text"
                    value={_userName}
                    onChange={handleChangeInputUsername}
                />
            </Spacing>
            <Label>Password: </Label>
            <Spacing>
                <InputText
                    type="password"
                    value={password}
                    onChange={handleChangeInputPassword}
                />
            </Spacing>
            <Button onClick={onClick}>{props.btnAccept}</Button>
            <CancelButton href={'/notes/about'}>Cancel</CancelButton>
        </Wrapper>
    )
}

export default UserSign