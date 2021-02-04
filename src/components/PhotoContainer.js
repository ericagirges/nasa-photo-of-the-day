import React from "react";
import styled from "styled-components";


const Photo = styled.img `
    height: 500px;
    width: auto;
    border-radius: 10px;

    @media (max-width: ${props => props.theme.tabletBreakpoint}) {
      width: 80%;
      height: auto;
    }


`
const PhotoDescription = styled.div `
    background-color: ${props => props.theme.black};
    padding-bottom: 40px;

    h2 {
        padding-top: 50px;
        color: ${props => props.theme.secondaryColor};
        font-size: 1.8em;
    }
    p {
        color: ${props => props.theme.white};
        padding: 0 30px;
        font-size: 1.2em;
        
    }

    @media (max-width: ${props => props.theme.tabletBreakpoint}) {
        h2 {
            margin: 0 30px;
            font-size: 1.2em;
        }

        p {
            font-size: 0.9em;
        }
      
    }
`

const PhotoContainer = props => {
    const {photoOfDay, setPhotoOfDay} = props

    return (
        <div>
            <Photo className="photo-of-day" src={photoOfDay.hdurl} alt="astrological collection imported from NASA"/>
            <PhotoDescription>
            <h2>{photoOfDay.title}</h2>
            <p>{photoOfDay.explanation}</p>
            </PhotoDescription>
        </div>
    )
}


export default PhotoContainer;