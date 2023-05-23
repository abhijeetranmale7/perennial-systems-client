import React from 'react'
import { Heading, HeadingWrapper } from './Header.styled'

const Header = ({ text }) => {
    return (
        <HeadingWrapper>
            <Heading>{text}</Heading>
        </HeadingWrapper>
    )
}

export default Header
