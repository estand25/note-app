import React from 'react'
import {  UserSignUpProfile } from '../components'
import { UserConsumer } from '../hooks/UserContext'
import apis from '../api';

const UserProfileInner = (props) => {
    const handleUpdateUser = async (id, payload) => {
        await apis.updateUserById(id, payload).then(res => {
            window.alert('User Information Updated Successfully !!')
        })

        props.updateAccount(payload)
    } 

    return (
        <UserSignUpProfile
            title={'User Profile'}
            btnAccept={'Update Profile'}
            onDirectTo={'/notes/list'}
            onCancelDirectTo={'/notes/about'}
            onPayloadUpdate={handleUpdateUser}
            username={props.username}
            password={props.password}
            email={props.email}
            _id={props._id}
        />
    )
}


const UserProfile = props => (
    <UserConsumer>
        {({username, password, email, _id, updateAccount}) => (
            <UserProfileInner
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
export default UserProfile