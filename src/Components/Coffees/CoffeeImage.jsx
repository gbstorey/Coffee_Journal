import React from "react";
import "./CoffeeImage.css";

const CoffeeImage = () => {
  return (
    <div className="coffee-container">
      <img className="coffee-image" src="/images/mexico.jpg" alt="coffee"></img>
      <h1 className="coffee-text">Mexico Dos Rios</h1>
      <p className="coffee-blurb">225 grams of beans from Mexico with notes of honey, prune, tamarind, herbs, and grape.</p>
    </div>
  );
};

export default CoffeeImage;
