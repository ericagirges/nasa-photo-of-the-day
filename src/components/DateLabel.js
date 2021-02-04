import React from "react";
import moment from "moment";
import styled from "styled-components";

const DateDiv = styled.div`
    color: ${props => props.theme.primaryColor};
    font-size: 1.6em;

    @media (max-width: ${props => props.theme.tabletBreakpoint}) {
        font-size: 1.2em;
      
    }

`

const DateLabel = props => {
    const {date} = props;
    const formattedDate = moment(date).format("MMMM Do, YYYY");
    console.log(formattedDate)
    return (
        <DateDiv className="display-date">
        <h2>
            {formattedDate}
        </h2>
        </DateDiv>
    
    )  
}





export default DateLabel;