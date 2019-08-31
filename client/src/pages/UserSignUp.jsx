import React from 'react'
import api from '../api'
import {  UserSignUpProfile } from '../components'
import { UserConsumer } from '../hooks/UserContext'

const UserSignUpInner = (props) => {

    const handleCreateUser = async (payload) => {
        await api.insertUser(payload).then(res => {
            if(res.data.success === true){
                var user = res.data.data;  

                const updateUserStorage = {
                    _id: user._id,
                    username: user.username,
                    password: user.password,
                    email: user.email
                }
                
                props.updateAccount(updateUserStorage)
                window.alert('User created successfully !!')
            }
        }).catch(err => 
            console.log(err)       
        )
    }

    return (
        <UserSignUpProfile
            {...props}
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
        {({ data, handleChange}) => (
            <UserSignUpInner
                {...props}
                username={data.username}
                password={data.password}
                email={data.email}
                _id={data._id}
                updateAccount={handleChange}
            />
        )}
    </UserConsumer>
)

export default UserSignUp

//https://blog.bitsrc.io/build-a-login-auth-app-with-mern-stack-part-1-c405048e3669