import React, { useState } from "react";
import "./Card.css";
function Card() {
  const [isOpen, setIsOpen] = useState(false);

  const openCard = () => {
    setIsOpen(true);
  };

  return (
    <div className="card">
      <div
        className="card-top"
        style={{
          borderTopWidth: isOpen ? "0px" : "150px",
          borderBottomWidth: isOpen ? "150px" : "0px",
          top: isOpen ? "-150px" : "0px",
        }}
      ></div>
      <button className="btn-click" onClick={openCard}>
        Click here
      </button>
    </div>
  );
}

export default Card;
