import { styled } from "styled-components";

export const UserCardGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    grid-gap: 80px;
    margin-top: 80px;

    @media (max-width: 700px) {
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        grid-gap: 80px;
    }
`;
