import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, MainImage, Heading, Heading2,Paragraph, ButtonWrap, NavLink, ImageContainer} from './MainPageStyle';
import logo from './travelers.svg'

class MainPage extends Component{

    render() {
        return (
        <InfoContainer>
           <InfoWrapper>
                <InfoRow>
                    <Column1>
                        <TextWrapper>
                            <Heading>Welcome to Travel Light</Heading>
                            <Heading2>The number one flight platform in the world!</Heading2>
                            <Paragraph>With more than 300,000 users, we've dedicated our best resources to give our customers the best flight prices in the market.</Paragraph>
                            <NavLink to="/findFlights">
                                <ButtonWrap>
                                    Book your Flight
                                </ButtonWrap>
                            </NavLink>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImageContainer>
                            <MainImage src={logo}/>
                        </ImageContainer>
                    </Column2>
                </InfoRow>
           </InfoWrapper>
        </InfoContainer>
        );
    }
}
export default MainPage;