import React from "react";
import Date from "./Date";


const Header = props => {
    const {photoOfDay, date} = props

    return (
        <div className="header">
        <header>
            <h1>
                Astronomy Photo of the Day! 💫
            </h1>
        </header>
        <div className="display-date">
            {
                <Date date={date} photoOfDay={photoOfDay}/>
            }
        </div>
        </div>
        
    );
};

export default Header;