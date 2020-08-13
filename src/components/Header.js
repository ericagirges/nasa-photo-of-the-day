import React from "react";
import DatePicker from "../components/DatePicker"
import styled from "styled-components";

const StyledHeader = styled.div`
  background-color: ${props => props.theme.black};
  padding: ${props => props.theme.paddingMedium};


`

const StyledH1 = styled.h1`
color: ${props => props.theme.white};
font-size: 3.5em;



`

const Header = props => {
  const {date, setDate} = props
  return (
    <StyledHeader className="header">
      <header>
        <StyledH1>Astronomy Photo of the Day! 💫</StyledH1>
        <DatePicker date={date} setDate={setDate}/>
      </header>
    </StyledHeader>
  );
};

export default Header;
