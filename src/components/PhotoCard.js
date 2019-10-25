import React from "react";

const PhotoCard = props => {

    return (
        <div className="photo-box" key={props.date}>
            <img className="img" src={props.Img} alt="picoftheday" />
            <h1>{props.title}</h1>
            <h3>{props.copyright}</h3>
            <p>{props.explain}</p>

        </div>
    )
}

export default PhotoCard;