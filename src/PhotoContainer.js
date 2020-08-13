import React from "react";

const PhotoContainer = props => {
    const {photoOfDay, setPhotoOfDay} = props

    return (
        <div>
            <img className="photo-of-day" src={photoOfDay.hdurl} alt="astrological collection imported from NASA"/>
            <h2>{photoOfDay.title}</h2>
            <p>`Description: ${photoOfDay.explanation}</p>
        </div>
    )
}


export default PhotoContainer;