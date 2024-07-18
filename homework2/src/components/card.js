import React from "react";

export const card = ({ title, alt, stock, badge1, button, points, badge2 }) => {
  return (
    <div className="shopping-item">
      <h3> {title}</h3>
      <img
        alt={alt}
        src=""
      ></img>
      <div className="description">
        <span>{stock}</span>
        <span>{points}</span>
      </div>
      <div className="badges">
        <span className="badge-1">{badge1}</span>
        <span className="badge-2">{badge2}</span>
      </div>
      <button>{button} </button>
    </div>
  );
};

export default card;
