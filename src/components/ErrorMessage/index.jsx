import React from 'react'
import { Message, MessageWrapper } from './ErrorMessage.styled'

const ErrorMessage = ({ message }) => {
    return (
        <MessageWrapper>
            <Message>{message}</Message>
        </MessageWrapper>
    )
}

export default ErrorMessage
