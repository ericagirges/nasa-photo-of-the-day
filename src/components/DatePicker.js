import React, {useState} from "react";
import ReactDatePicker from 'react-datepicker';
import styled, { keyframes }from "styled-components";

const Container = styled.div`
display: flex;

`

const DatePickerDiv = styled.div `
display: flex;
flex-direction: column;
text-align: left;
width: 400px;
margin-top:60px;
margin-left:10px;
color: ${props => props.theme.secondaryColor};
font-family: "Heebo";
font-weight: 700;
font-size: 1.2em;
  input {
    background-color: ${props => props.theme.primaryColor};
    border-radius: 10px;
    /* padding: ${props => props.theme.paddingSmall}; */
    font-size: 0.9em;
    color: ${props => props.theme.white};
    font-family: "Heebo";
    font-weight: 700;
    text-align: center;
    border: none;

    &:hover {
      border: 2px solid white;
    }

  }
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
  right: 40px;
  animation-name: ${spinningAnimation};
  animation-duration: 5000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

const DatePicker = (props) => {
    const {date, setDate} = props
  return (
    <Container>
    <DatePickerDiv>
      <h3>Click here to view all photos by date:</h3>
    <ReactDatePicker selected={date} onChange={setDate} />
    </DatePickerDiv>
    <Icon role="image" aria-label="astronaut spinning"></Icon>
    </Container>
  );
};

export default DatePicker;
