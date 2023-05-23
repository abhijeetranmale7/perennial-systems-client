import { styled } from "styled-components";

export const UserCard = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    border: 1px solid #1B98F5;
    border-radius: 10px;
    padding: 20px;
    background-color: #1B98F5;
`;

export const Avatar = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 100%;
    position: absolute;
    top: -25%;
`;

export const UserName = styled.h2`
    margin: 45px 0 0 0;
    color: #fff;
`;

export const DetailsWrapper = styled.div`
    flex: 1;
`;

export const Details = styled.p`
    font-size: 16px;
    margin: 5px 0;
    color: #fff;
`;
