import React from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
  } from 'reactstrap';

const PhotoCard = props => {
    return (
        <div>
        <Card>
          <CardImg top width="100%" src={props.Img} alt="Card image cap" />
          <CardBody>
            <CardTitle>{props.title}</CardTitle>
            <CardSubtitle>{props.copyright}</CardSubtitle>
            <CardText>{props.explain}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  };

      //         <div className="photo-box">
        //             <img className="img" src={props.Img} alt="picoftheday" />
        //             <h1>{props.title}</h1>
        //             <h3>{props.copyright}</h3>
        //             <p>{props.explain}</p>
        // </div>

export default PhotoCard;

