import React from "react";
import Date from "./Date";
import PhotoContainer from "./PhotoContainer";

const Header = props => {
    const {photoOfDay, date} = props




    return (
        <header>
            <h1>
                Astronomy Photo of the Day! 💫
            </h1>
            <button>Archive</button>
        </header>

    )
}









export default Header;