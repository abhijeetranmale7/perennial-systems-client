import React from 'react';
import { LoaderComponent, LoaderContainer } from './Loader.styled';

const Loader = () => {
    return (
        <LoaderContainer>
            <LoaderComponent aria-label="loader" />
        </LoaderContainer>
    );
};

export default Loader;
