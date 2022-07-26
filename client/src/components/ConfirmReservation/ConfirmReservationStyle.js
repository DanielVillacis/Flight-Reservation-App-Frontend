import styled from "styled-components";

export const Header = styled.header`
    width: 100%;
    height: 100vh;
    background: linear-gradient(135deg, #C9D6FF, #E2E2E2);
    font-family: 'Source Sans Pro', sans-serif;
    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`;

export const Div = styled.div`
    display: grid;
    z-index: 1;
    height: auto;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0;
    justify-content: center; 
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const Message = styled.h2`
    color: rgba(30,27,27,0.8);
    margin-bottom: 20px;
    font-size: 32px;
    font-weight: 350;
`;

export const B = styled.b`
    color: #3bbf63;
`;
