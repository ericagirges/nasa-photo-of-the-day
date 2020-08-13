import React, {useState} from "react";
import ReactDatePicker from 'react-datepicker';

const DatePicker = (props) => {
    const {date, setDate} = props
  return (
    <ReactDatePicker selected={date} onChange={setDate} />
  );
};

export default DatePicker;
