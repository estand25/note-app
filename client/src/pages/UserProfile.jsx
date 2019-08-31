import React from 'react'
import {  UserSignUpProfile } from '../components'
import { UserConsumer } from '../hooks/UserContext'
import apis from '../api';

const UserProfileInner = (props) => {
    const handleUpdateUser = async (id, payload) => {
        await apis.updateUserById(id, payload).then(res => {
            if(res.data.success === true){
                var user = res.data.data;                
                const updateUserStorage = {
                    _id: user._id,
                    username: user.username,
                    password: user.password,
                    email: user.email
                }

                props.updateAccount(updateUserStorage)
            
                window.alert('User Information Updated Successfully !!')
            }
        }).catch(err => {
            console.log(err);
            window.alert(err.error)
        })
    } 

    return (
        <UserSignUpProfile
            {...props}
            title={'User Profile'}
            btnAccept={'Update Profile'}
            onDirectTo={'/notes/list'}
            onCancelDirectTo={'/notes/about'}
            onPayloadUpdate={handleUpdateUser}
        />
    )
}

const UserProfile = props => (
    <UserConsumer>
        {({data, handleChange}) => (
            <UserProfileInner
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

export default UserProfile