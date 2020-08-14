import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
text-align: left;
color: ${(props) => props.theme.secondaryColor};
font-family: "Heebo";
font-weight: 700;
font-size: 1.2em;
  input {
    background-color: ${(props) => props.theme.primaryColor};
    border-radius: 10px;
    /* padding: ${(props) => props.theme.paddingSmall}; */
    font-size: 0.9em;
    color: ${(props) => props.theme.white};
    font-family: "Heebo";
    font-weight: 700;
    text-align: center;
    border: none;

    &:hover {
      border: 2px solid white;
    }

  }

  @media (max-width: ${(props) => props.theme.mobileBreakpoint}) {
    font-size: 1.0em;
    width: 100%;
      text-align: center;
    }

`;

const DatePicker = (props) => {
  const { date, setDate } = props;
  return (
    <Container>
        <h3>Click here to view all photos by date:</h3>
        <ReactDatePicker selected={date} onChange={setDate} />
    </Container>
  );
};

export default DatePicker;
