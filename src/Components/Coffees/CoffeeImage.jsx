import React from "react";
import "./CoffeeImage.css";

const CoffeeImage = () => {
  return (
    <div className="coffee-container">
      <div className="coffee-text-container">
        <h1 className="coffee-text">Mexico Dos Rios</h1>
      </div>
      <img className="coffee-image" src="/images/mexico.png" alt="coffee"></img>
      <p className="coffee-blurb">
        225 grams of beans from Mexico with notes of honey, prune, tamarind,
        herbs, and grape.
      </p>
    </div>
  );
};

export default CoffeeImage;
