import React from 'react';
import { Container } from './Homepage.styled';
import UserListing from './UserListing';
import Header from '../../components/Header';
import { useSelector } from 'react-redux';
import ErrorMessage from '../../components/ErrorMessage';

const Homepage = () => {

    const users = useSelector((state) => state);

    return (
        <Container>
            {
                !users.error ? (
                    <>
                        <Header text="User Listing" />
                        <UserListing />
                    </>
                ) : (
                    <ErrorMessage message={users.error} />
                )
            }
        </Container>
    )
}

export default Homepage
