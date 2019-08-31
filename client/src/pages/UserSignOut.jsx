import React from 'react'
import api from '../api'
import { UserSign } from '../components'
import { UserConsumer } from '../hooks/UserContext'

const UserSignOutInner = (props) => {
    const handleSignOutUserWithId = async (_id) => {
        const payload = {
            username: '',
            password: '',
            email: ''
        }
        
        props.updateAccount(payload)

        await api.getUserById(_id).then(res => {
            console.log(res);
            
            window.alert('User Successfully Sign-out!!')
        })
    }

    return (
        <UserSign
            title={'Sign Out'}
            btnAccept={'Sign Out'}
            onPayloadUser={handleSignOutUserWithId}
            onDirectTo={'/notes/list'}
            onCancelDirectTo={'/notes/about'}
            onLogInInfo={'0'}
        />
    )
}

const UserSignOut = props => (
    <UserConsumer>
        {({username, password, email, _id, updateAccount}) => (
            <UserSignOutInner
                {...props}
                username={username}
                password={password}
                email={email}
                _id={_id}
                updateAccount={updateAccount}
            />
        )}
    </UserConsumer>
)

export default UserSignOut

//https://blog.bitsrc.io/build-a-login-auth-app-with-mern-stack-part-1-c405048e3669