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
const redirectionLinks = [
    "https://www.indiamart.com/msformsprint/paper-roll.html#21907582088",
    "https://www.indiamart.com/msformsprint/accounting-ledger-book.html#11573765930",
    "https://www.indiamart.com/msformsprint/computer-form.html#11603181197",
    "https://www.indiamart.com/msformsprint/printed-sticker.html#11574019455",
    "https://www.indiamart.com/msformsprint/barcode-sticker.html",
    "https://www.indiamart.com/msformsprint/computer-paper.html",
    "https://www.indiamart.com/msformsprint/billing-roll.html",
    "https://www.indiamart.com/msformsprint/printed-paper-tag.html#20594108433",
    "https://www.indiamart.com/msformsprint/carbonless-paper.html",
    "https://www.indiamart.com/msformsprint/offset-printing-paper.html#20594108673"
]

function ProductCard({ product, redirection }) {
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
        <a href={redirection} className="product-card" aria-label={`Learn more about ${product}`}>
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
                        <ProductCard key={index} product={product} redirection={redirectionLinks[index]}/>
                    ))}
                </div>
            </div>
        </section>
    );
}