import React from 'react'
import { Message, MessageWrapper } from './EmptyMessage.styled'

const EmptyMessage = () => {
    return (
        <MessageWrapper>
            <Message>No user available</Message>
        </MessageWrapper>
    )
}

export default EmptyMessage
