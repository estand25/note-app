import React from 'react'
import api from '../api'
import { UserSign } from '../components'
import { UserConsumer } from '../hooks/UserContext'

const UserSignOutInner = (props) => {
    const handleSignOutUserWithId = async (payload) => {
        await api.SignOutUser(payload).then(res => {
            if(res.data.success === true){
                const updateUserStorage = {
                    _id: '',
                    username: '',
                    password: '',
                    email: ''
                }

                props.updateAccount(updateUserStorage)
                window.alert('User Successfully Sign-out!!')
            }
        }).catch(err =>
            console.log(err)
        )
    }

    return (        
        <UserSign
            {...props}
            title={'Sign Out'}
            btnAccept={'Sign Out'}
            onPayloadUser={handleSignOutUserWithId}
            onDirectTo={'/notes/list'}
            onCancelDirectTo={'/notes/about'}
            onLogInInfo={'0'}
            onUserId={props._id}
        />
    )
}

const UserSignOut = props => (
    <UserConsumer>
        {({data, handleChange}) => (
            <UserSignOutInner
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

export default UserSignOut

//https://blog.bitsrc.io/build-a-login-auth-app-with-mern-stack-part-1-c405048e3669