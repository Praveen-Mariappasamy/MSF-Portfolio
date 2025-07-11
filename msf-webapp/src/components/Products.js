import React, { useState, useEffect } from 'react';
import '../styles/Products.css';

const productList = [
    "Paper Roll",
    "Printed Ledger Book", 
    "Computer Form",
    "Stickers",
    "Barcode Stickers",
    "Computer Paper",
    "Billing Roll",
    "Paper Tags",
    "Printed Carbonless Paper",
    "Offset Printing Paper"
];

function ProductCard({ product }) {
    const [imageSrc, setImageSrc] = useState(null);
    const [imageLoaded, setImageLoaded] = useState(false);
    
    useEffect(() => {
        const loadImage = async () => {
            try {
                const imageModule = await import(`../images/${product}.png`);
                setImageSrc(imageModule.default);
                setImageLoaded(true);
            } catch (error) {
                console.error(`Image for '${product}' not found.`);
                setImageLoaded(true);
            }
        };
        loadImage();
    }, [product]);

    return (
        <a href="#" className="product-card" aria-label={`Learn more about ${product}`}>
            <div className="product-image-container">
                {!imageLoaded ? (
                    <div className="product-image-placeholder">
                        <div className="loading-spinner"></div>
                    </div>
                ) : imageSrc ? (
                    <img 
                        className="product-image" 
                        src={imageSrc} 
                        alt={product}
                        loading="lazy"
                    />
                ) : (
                    <div className="product-image-placeholder">
                        <span className="placeholder-icon">📄</span>
                    </div>
                )}
            </div>
            <div className="product-info">
                <h3 className="product-name">{product}</h3>
                <div className="product-arrow">→</div>
            </div>
        </a>
    );
}

export default function Products() {
    return (
        <section className="products" id="products">
            <div className="container">
                <div className="products-header">
                    <h2>Our Products & Services</h2>
                    <p>Comprehensive printing solutions for all your business needs</p>
                </div>
                <div className="products-grid">
                    {productList.map((product, index) => (
                        <ProductCard key={index} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
}