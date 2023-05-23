import React from 'react'
import UserProfileCard from './UserProfileCard'
import { UserCardGrid } from './UserGrid.styled'

function UserGrid({ users }) {
    return (
        <UserCardGrid>
            {
                users.data.map((user) => (
                    <UserProfileCard user={user} key={user._id} />
                ))
            }
        </UserCardGrid>
    )
}

export default UserGrid
