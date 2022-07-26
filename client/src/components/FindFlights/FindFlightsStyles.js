import styled from 'styled-components';

export const FindFlightsContainer = styled.header`
    width: 100%;
    height: 100vh;
    background: linear-gradient(135deg, #C9D6FF, #E2E2E2);
    font-family: 'Source Sans Pro', sans-serif;
    margin:0;
    padding:0;
    overflow: hidden;

    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;

`;

export const FlightBox = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    height: 570px;
    width: 400px;
    padding-left: 25px;
    padding-right: 25px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    -webkit-flex-flow: column;
    -ms-flex-flow: column;
    flex-flow: column;
    z-index: 5;
    color: yellow;
    background: rgba(255,255,255,0.45);
    border-radius: 25px;
    opacity: 0.85;
    filter: alpha(opacity=85);
`;

export const TextWrapper = styled.div`
    padding-left: 25px;
    padding-right: 25px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-flow: column;
    -ms-flex-flow: column;
    flex-flow: column;
    z-index: 5;
`;

export const FlightTitle = styled.div`
    font-weight: 200;
    margin-top: 60px;
    text-align: center;
    letter-spacing: 0px;
    letter-spacing: 0.05rem;
`;

export const H2 = styled.h2`
    color: rgba(30,27,27,0.8);
    font-size: 42px;
`;

export const Form = styled.div`
    /*background: none;
    margin-bottom: 10px;
    line-height: 2.8em;
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 100;
    letter-spacing: 0px;
    letter-spacing: 0.02rem;
    font-size: 24px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.65);
    -webkit-transition: all .2s ease;
    transition: all .2s ease;*/


    margin-top: 65px;
`;

export const Input = styled.input`
    background: none;
    margin-bottom: 36px;
    line-height: 2em;
    color: rgba(30,27,27,0.8);
    font-weight: 300;
    letter-spacing: 0.02rem;
    font-size: 20px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.65);
    -webkit-transition: all .2s ease;
    transition: all .2s ease;
    width: 100%;
    border: none;

    ::placeholder,
    ::-webkit-input-placeholder {
        color: rgba(30,27,27,0.2);
    }
    ::input-placeholder {
        color: rgba(30,27,27,0.8);
    }
    
    &:focus {
        outline: none;
        border-color: white;
        -webkit-transition: all .2s ease;
        transition: all .2s ease;
        color: rgba(30,27,27,0.8);
    }
`;

export const SearchButton = styled.button`
    cursor: pointer;
    background-color: rgba(30,27,27,1);
    border: 1px solid rgba(255, 255, 255, 0.25);
    border-radius: 25px;
    color: rgba(255, 255, 255, 1);
    -webkit-align-self: flex-end;
    -ms-flex-item-align: end;
    align-self: flex-end;
    font-size: 19px;
    font-size: 1.2rem;
    font-family: ;
    font-weight: 300;
    line-height: 2.5em;
    margin-top: 50px;
    margin-bottom: 20px;
    -webkit-transition: all .2s ease;
    transition: all .2s ease;
    width: 100%;

    &:hover {
        background: rgba(255, 255, 255, 0.25);
        border: 1px solid rgba(30,27,27,0.8);
        color: rgba(30,27,27,0.8);
        -webkit-transition: all .2s ease;
        transition: all .2s ease;
    }
    &:focus {
        outline: none;
    }
`;