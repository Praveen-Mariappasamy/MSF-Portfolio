import React from "react";
import Hero from "./components/Hero";
import Products from "./components/Products";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./styles/App.css";

export default function App() {
    return (
        <div className="App">
            <Hero />
            <About />
            <Products />
            <Contact />
            <Footer />
        </div>
    );
}