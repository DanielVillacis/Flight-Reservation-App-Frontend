import styled from "styled-components";


export const BodyContainer = styled.header`
    /*align-items: center;*/
	/*background-attachment: fixed;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;*/
	/*place-items: center;*/

    background: linear-gradient(135deg, #C9D6FF, #E2E2E2);
    display: grid;
	height: 100vh;
    width: 100%;
    padding: 0;
    margin: 0;
    box-sizing: border-box;

    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    ::after{
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
    }
`;


export const DetailsBox = styled.div`
    width: 75%;
    height: 50%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: rgba(255,255,255,0.45);
    border-radius: 25px;
`;


export const FlightDetails = styled.div`
    height: 100%;
    /*background-color: rgba(255,255,0,0.25);*/
`;

export const ReservationTitle = styled.h2`
position: relative;
    padding-bottom: 10px;
    margin-bottom: 10px;
    color: rgba(30,27,27,0.8);
    font-size: 34px;

    text-align: center;
    padding-top: 20px;
    margin-top: 10px;
    margin-top: 20px;
`;


export const FlightDetailsTitle = styled.h3`
    position: relative;
    padding-bottom: 10px;
    margin-bottom: 20px;
    color: rgba(30,27,27,0.8);
    font-size: 24px;

    text-align: center;
    padding-top: 40px;
    margin-top: 10px;
    margin-top: 20px;
`;


export const Info = styled.div`
    position: relative;
    padding-bottom: 10px;
    margin-bottom: 20px;
    color: rgba(30,27,27,0.8);
    font-size: 18px;
    font-weight: 300;
    /*text-align: center;*/
`;


export const PassengerDetailsBox = styled.div`
    padding: 25px 40px;
    height: 100%;
`;


export const PassengerDetailsTitle = styled.h3`
    position: relative;
    padding-bottom: 10px;
    margin-bottom: 0px;
    color: rgba(30,27,27,0.8);
    font-size: 24px;
    text-align: center;
`;


export const FormContainer = styled.form`

`;


export const Input = styled.input`
    background: none;
    margin-bottom: 5px;
    line-height: 2em;
    color: rgba(30,27,27,0.8);
    font-weight: 200;
    letter-spacing: 0.01rem;
    font-size: 15px;
    -webkit-transition: all .2s ease;
    transition: all .2s ease;
    width: 100%;
    border: none;
    text-transform: uppercase;
    text-align: left;

    ::placeholder,
    ::-webkit-input-placeholder {
        color: rgba(30,27,27,0.3);
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


export const PaymentDetailTitle = styled.h3`
    position: relative;
    padding-bottom: 10px;
    margin-bottom: 10px;
    color: rgba(30,27,27,0.8);
    font-size: 24px;
    text-align: center;
    padding-top: 10px;
`;


export const ConfirmButton = styled.button`
    cursor: pointer;
    background: none;
    border: 1px solid rgba(255, 255, 255, 0.25);
    
    /*rgba(30,27,27,0.8)*/
    border-radius: 25px;
    color: rgba(255, 255, 255, 1);
    background-color: rgba(30,27,27,1);
    -webkit-align-self: flex-end;
    -ms-flex-item-align: end;
    align-self: flex-end;
    font-size: 15px;
    font-size: 1rem;
    font-family: ;
    font-weight: 300;
    line-height: 2em;
    margin-top: -30px;
    margin-bottom: 0px;
    -webkit-transition: all .2s ease;
    transition: all .2s ease;
    width: 50%;

    &:hover {
        background: rgba(255, 255, 255, 0.25);
        border: 1px solid rgba(30,27,27,1);
        color: rgba(30,27,27,0.8);
        -webkit-transition: all .1s ease;
        transition: all .1s ease;
    }
    &:focus {
        outline: none;
    }
`;



