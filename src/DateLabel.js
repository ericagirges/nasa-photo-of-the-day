import React from "react";
import moment from "moment";

const DateLabel = props => {
    const {date} = props;
    const formattedDate = moment(date).format("MMMM Do, YYYY");
    console.log(formattedDate)
    return (
        <div className="display-date">
        <h2>
            {formattedDate}
        </h2>
        </div>
    
    )  
}





export default DateLabel;