import React, {useState} from "react";
import ReactDatePicker from 'react-datepicker';
import styled from "styled-components";

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

  }
`;

const DatePicker = (props) => {
    const {date, setDate} = props
  return (
    <DatePickerDiv>
      <h3>Click here to view all photos by date:</h3>
    <ReactDatePicker selected={date} onChange={setDate} />
    
    </DatePickerDiv>
  );
};

export default DatePicker;
