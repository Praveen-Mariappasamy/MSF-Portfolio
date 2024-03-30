import React from "react"
import "./About.css"
import App from './App.js'
import CEO1 from "./images/CEO1.png";
import CEO2 from "./images/CEO2.png";
export default function About(){
    const styles = {
        fontFamily: '"Fuggles", cursive',
        margin: '0 3rem 0 0',
        fontSize: '5rem',
        fontWeight: 'bold',
        textAlign: 'right',
    }
    return(
        <div>
            <App />
        <h1 className="head">A word from our Founders,</h1>
        <div className="container">
            <h1 className="ff">Mariappasamy</h1>
            <h3 className="speech">MS Forms provides cutting-edge, environmentally friendly, and economical printing solutions, continuously evolving alongside industry progress. We meticulously source materials from suppliers who meet rigorous printing criteria. Our accomplishments and advancements showcase the commitment of our passionate in-house workforce. We cultivate an environment that promotes engagement, creativity, and collective recognition, prioritizing trust, esteem, and empathy within successful teams.</h3>
            <h2 style={styles}>Mariappasamy.K</h2>
        </div>
        <img src={CEO1} alt="CEO" className="CEO1" />
        <img src={CEO2} alt="CEO" className="CEO2" />
        <div className="container1">
            <h1 className="ff">Gunabalan</h1>
            <h3 className="speech">Our facilities boast a robust infrastructure outfitted with state-of-the-art equipment for top-tier product fabrication. Segmented into distinct departments—production, packaging, quality assurance, R&D, and logistics—our framework guarantees smooth operational oversight, underscored by a dedication to excellence and exceeding industry benchmarks through innovative practices and ongoing enhancement.</h3>
            <h2 style={styles}>Gunabalan.M</h2>
        </div>
        </div>
    )
}