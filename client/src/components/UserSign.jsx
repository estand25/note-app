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

const Holder = styled.div``

// const LogIn = (props) => (
//     <Holder>
//         <Title>{props.title}</Title>
//         <Label>UserName: </Label>
//         <Spacing>
//             <InputText
//                 type="text"
//                 value={props.onValueUsername}
//                 onChange={props.onHCIU}
//             />
//         </Spacing>
//         <Label>Password: </Label>
//         <Spacing>
//             <InputText
//                 type="password"
//                 value={props.onValuePassword}
//                 onChange={props.onHCIP}
//             />
//         </Spacing>
//     </Holder>
// )

const LogInInfo = (props) => {
    if(props.onFieldShowLogIn === '1') {
        return (
            <Holder>
                <Title>{props.title}</Title>
                <Label>UserName: </Label>
                <Spacing>
                    <InputText
                        type="text"
                        value={props.usename}
                        onChange={props.onUsernameFun}
                    />
                </Spacing>
                <Label>Password: </Label>
                <Spacing>
                    <InputText
                        type="password"
                        value={props.password}
                        onChange={props.onPasswordFun}
                    />
                </Spacing>
            </Holder>
            // <LogIn
            //     title={props.title}
            //     onValueUsername={props.usename}
            //     onHCIU={props.onUsernameFun}
            //     onValuePassword={props.password}
            //     onHCIP={props.onPasswordFun}
            // />
        )
    } else {
        return (
            <Holder />
        )
    }
}

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

        window.location.href = props.onDirectTo
    }


    return (
        <Wrapper>
            {/* <LogInInfo /> */}
            <LogInInfo
                title={props.title}
                usename={_userName}
                onUsernameFun={handleChangeInputUsername}
                password={password}
                onPasswordFun={handleChangeInputPassword}
                onFieldShowLogIn={props.onLogInInfo}
            />
            {/* <LogIn /> */}
            {/* {LogIn} */}
            {/* <LogIn key="1" />
            <InputText
                    key='1'
                    type="text"
                    value={_userName}
                    onChange={handleChangeInputUsername}
                /> */}
            {/* <LogIn
                title={props.title}
                onValueUsername={_userName}
                onHCIU={handleChangeInputUsername}
                onValuePassword={password}
                onHCIP={handleChangeInputPassword}
            /> */}
            {/* <Holder>
                <Title>{props.title}</Title>
                <Label>UserName: </Label>
                <Spacing>
                    <InputText
                        key={props.key}
                        type="text"
                        value={_userName}
                        onChange={handleChangeInputUsername}
                    />
                </Spacing>
                <Label>Password: </Label>
                <Spacing>
                    <InputText
                        key={props.key}
                        type="password"
                        value={password}
                        onChange={handleChangeInputPassword}
                    />
                </Spacing>
            </Holder>                 */}
            <Button onClick={onClick}>{props.btnAccept}</Button>
            <CancelButton href={'/notes/about'}>Cancel</CancelButton>
        </Wrapper>
    )
}

export default UserSign