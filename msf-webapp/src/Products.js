import React from 'react';
import './Products.css';
export default function(props){
    let imageSrc;
    try {
        imageSrc = require(`./images/${props.value}.webp`).default;
    } catch (error) {
        // Handle error, e.g., image not found
        console.error(`Image for '${props.value}' not found.`);
    }
    return(
            <div className="boxes">
                <img className="photos" src={imageSrc}/>
                <h1 className="product-items">{props.value}</h1>
            </div>
    )
}