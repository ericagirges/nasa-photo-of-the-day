import React from "react";
import DatePicker from "../components/DatePicker"
import styled, { keyframes } from "styled-components";



const StyledHeader = styled.header`
  background-color: ${props => props.theme.black};
  padding: ${props => props.theme.paddingMedium};
  
`;

const StyledH1 = styled.h1`
  color: ${props => props.theme.white};
  font-size: 3.5em;
  text-align:center;

  @media (max-width: ${props => props.theme.designBreakpoint}) {
    font-size: 3.0em;
      
    }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: ${(props) => props.theme.mobileBreakpoint}) {
    flex-direction: column-reverse;
  }
`;

const H1Wrapper = styled.div`
  position: relative;
  padding-right: 20px;


  @media (max-width: ${(props) => props.theme.mobileBreakpoint}) {
    padding: 0;
  }
`;

const IconWrapper = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
`;

const spinningAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Icon = styled.div`
  background-image: url("/little-astronaut.png");
  background-size: cover;
  height: 150px;
  width: 150px;
  position: absolute;
  animation-name: ${spinningAnimation};
  animation-duration: 5000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

const Header = props => {
  const {date, setDate} = props
  return (
    <StyledHeader className="header">
          <StyledH1>✨ Astronomy Photo of the Day! ✨</StyledH1>
      <Row>
        <H1Wrapper>
          <DatePicker date={date} setDate={setDate}/>
        </H1Wrapper>
        <IconWrapper>
        <Icon role="image" aria-label="astronaut spinning"></Icon>
        </IconWrapper>
      </Row>
    </StyledHeader>
  );
};

export default Header;
