import React from 'react'
import {  UserSignUpProfile } from '../components'
import { UserConsumer } from '../hooks/UserContext'
import apis from '../api';

const UserProfile = () => {
    const handleUpdateUser = async (id, payload) => {
        await apis.updateUserById(id, payload).then(res => {
            window.alert('User Information Updated Successfully !!')
        })
    } 

    return (
        <UserConsumer>
            {({username, password, email, _id}) => (
                <UserSignUpProfile
                    title={'User Profile'}
                    btnAccept={'Update Profile'}
                    onDirectTo={'/notes/list'}
                    onCancelDirectTo={'/notes/about'}
                    onPayloadUpdate={handleUpdateUser}
                    username={username}
                    password={password}
                    email={email}
                    _id={_id}
                />
            )}
        </UserConsumer>
    )
}

export default UserProfile

//medium.com/flatiron-labs/how-to-use-the-react-context-api-70a76d3974d5