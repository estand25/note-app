import React from 'react'
import api from '../api'
import { UserSign } from '../components'
import { UserConsumer } from '../hooks/UserContext'

const UserSignInInner = (props) => {
    const handleCreateUser = async (payload) => {
        // console.log('UserSignIn');
        // console.log(payload);
        
        await api.SignInUser(payload).then(res => {
            // console.log(res.data);
            // console.log(res.data.success);

            if(res.data.success === true){
                var user = res.data.data;
                console.log(user);
                
                const updateUser = {
                    username: user.username,
                    password: user.password,
                    _id: user._id,
                    email: user.email
                }

                props.updateAccount(updateUser)
            }
            
            
            window.alert('User successfully Sign-In!!')
            
        }).catch(err => {
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
        {({data, handleChagne}) => (
            <UserSignInInner
                {...props}
                username={data.username}
                password={data.password}
                email={data.email}
                _id={data._id}
                updateAccount={handleChagne}
            />
        )}    
    </UserConsumer>
)

export default UserSignIn

//https://blog.bitsrc.io/build-a-login-auth-app-with-mern-stack-part-1-c405048e3669