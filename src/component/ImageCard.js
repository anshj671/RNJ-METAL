import React from "react";
import "./ImageCard.css"; 


const ImageCard = ({ image, title }) => {
  return (
    <div className="image-card">
      <div className="image-container">
        <img src={image} alt={title} className="image" />
      </div>
      <h3 className="title">{title}</h3>
    </div>
  );
};

export default ImageCard;
