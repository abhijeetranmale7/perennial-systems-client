import { styled } from "styled-components";
import '@fontsource/open-sans/300.css';

export const Container = styled.div`
    font-family: 'Open Sans', sans-serif;
    padding-left: 40px;
    padding-right: 40px;
    padding-bottom: 40px;

    @media (max-width: 700px) {
        padding-left: 0;
        padding-right: 0;
    }
`;
