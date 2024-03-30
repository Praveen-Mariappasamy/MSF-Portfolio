import { useNavigate } from 'react-router-dom';
import React from "react";
import "./Navigate.css"

export default function Navigating() {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/");
  };

  const navigateToAbout = () => {
    navigate("/about");
  };

  const navigateToCompany = () => {
    navigate("/company");
  };

  const navigateToRateus = () => {
    navigate("/rateus");
  };

  return (
    <div className="navigation">
      <button className="navitem" onClick={navigateToHome}><h1>Home</h1></button>
      <button className="navitem" onClick={navigateToCompany}><h1>Company</h1></button>
      <button className="navitem" onClick={navigateToRateus}><h1>Rate us</h1></button>
      <button className="navitem" onClick={navigateToAbout}><h1>About us</h1></button>
    </div>
  )
}