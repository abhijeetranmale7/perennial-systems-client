import React from 'react'
import { Avatar, Details, DetailsWrapper, UserCard, UserName } from './UserProfileCard.styled'

const UserProfileCard = ({ user }) => {
    return (
        <UserCard aria-label='user-card'>
            {
                user.profileImage && (
                    <Avatar src={user.profileImage} alt="User Avatar" aria-label='user-avatar' />
                )
            }
            <DetailsWrapper>
                <UserName>{`${user.firstName} ${user.lastName}`}</UserName>
                <Details>Email: {user.email}</Details>
                <Details>Phone: {user.phoneNumber}</Details>
                <Details>City: {user.city}</Details>
            </DetailsWrapper>
        </UserCard>
    )
}

export default UserProfileCard
