import React, { useState, useEffect } from 'react';
import './Products.css';

export default function Product(props) {
    const [imageSrc, setImageSrc] = useState(null);
    
    const loadImage = async () => {
        try {
            const imageModule = await import(`./images/${props.value}.webp`);
            setImageSrc(imageModule.default);
        } catch (error) {
            console.error(`Image for '${props.value}' not found.`);
        }
    };

    loadImage();
    console.log(imageSrc)
    console.log("what")
    if (!imageSrc) {
        return (
            <div className="boxes">
                <div>Loading...</div>
                <h1 className="product-items">{props.value}</h1>
            </div>
        );
    }
    
    return (
        <div className="boxes">
            <img className="photos" src={imageSrc} alt={props.value} />
            <h1 className="product-items">{props.value}</h1>
        </div>
    );
}
