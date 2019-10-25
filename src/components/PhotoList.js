import React, { useState, useEffect } from "react";
import axios from "axios";
import PhotoCard from "./PhotoCard";

export default function PhotoList() {
    const [photos, setPhotos] = useState([])

    useEffect(() => {
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=LxR28viArSj7g3YuAGLepfifA5QNKfII5VpbZZBL`)
            .then(response => {

                //console.log(response.data);
                setPhotos(response.data);
            })
            .catch(error => {
                //console.log("data not found", error)
            });
    }, [])

    
    return (
        <div className="container">
            <div className="potd">

     <PhotoCard copyright={photos.copyright} title={photos.title} explain={photos.explanation} Img={photos.hdurl} /> 
            </div>
        </div>
    )

    
}

