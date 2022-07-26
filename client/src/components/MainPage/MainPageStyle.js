import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const InfoContainer = styled.header`
    width: 100%;
    height: 100vh;
    background: linear-gradient(135deg, #C9D6FF, #E2E2E2);
    font-family: 'Source Sans Pro', sans-serif;

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`;

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 865px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center; 
`;

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'` )};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`;

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`;

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`;

export const Heading = styled.h1`
    margin-bottom: 40px;
    font-size: 46px;
    line-height: 1.1;
    font-weight: 500;
    color: rgba(30,27,27,0.8);

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const Heading2 = styled.h2`
    color: rgba(30,27,27,0.8);
    max-width: 440px;
    margin-bottom: 28px;
    font-size: 24px;
    line-height: 24px;
    font-weight: 500;
`;

export const Paragraph = styled.p`
    color: rgba(30,27,27,0.8);
    max-width: 440px;
    margin-bottom: 20px;
    font-size: 18px;
    line-height: 24px;
`;

export const ButtonWrap = styled.button`
    border-radius: 50px;
    background: ${({ primary }) => (primary ? '#fff' : '#1e1b1b')};
    white-space: nowrap;
    padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
    color: ${({ dark }) => (dark ? '#1e1b1b' : '#fff')};
    font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.1s ease-in-out;
        background: ${({ primary }) => (primary ? '#1e1b1b' : '#fff')}; 
        color: ${({ dark }) => (dark ? '#fff' : '#1e1b1b')};
    }
`;

export const NavLink = styled(Link)`
    text-decoration: none;
`;

export const ImageContainer = styled.div`
    max-width: 555px;
    height: 100%;
`;

export const MainImage = styled.img`
    width: 100%;
    height: 100%;
    margin: 0 0 28px 18px;
    padding-right: 0;
`;
