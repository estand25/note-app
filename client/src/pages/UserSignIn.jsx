import React from 'react'
import api from '../api'
import { UserSign } from '../components'
import { UserConsumer } from '../hooks/UserContext'

const UserSignInInner = (props) => {
    const handleCreateUser = async (payload) => {                
        await api.SignInUser(payload).then(res => {
            if(res.data.success === true){
                var user = res.data.data;
                console.log(user);
                
                const updateUserStorage = {
                    _id: user._id,
                    username: user.username,
                    password: user.password,
                    email: user.email
                }

                props.updateAccount(updateUserStorage)
                window.alert('User successfully Sign-In!!')
            }
            
        }).catch(err => {
            console.log(err);
            window.alert(err.error)
        })
    }

    return (
        <UserSign
            title={'Sign-In'}
            btnAccept={'Sign-In'}
            onPayloadCreation={handleCreateUser}
            onDirectTo={'/notes/about'}
            onCancelDirectTo={'/notes/about'}
            onLogInInfo={'1'}
        />
    )
}

const UserSignIn = props => (
    <UserConsumer>
        {({data, handleChange}) => (
            <UserSignInInner
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

export default UserSignIn

//https://blog.bitsrc.io/build-a-login-auth-app-with-mern-stack-part-1-c405048e3669