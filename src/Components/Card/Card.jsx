import React, { useState } from "react";
import "./Card.css";
import picture from "../../Pic/picture.jpg";
function Card() {
  const [isOpen, setIsOpen] = useState(false);

  const openCard = () => {
    setIsOpen(true);
  };

  return (
    <>
      {" "}
      <div className="card" style={{ marginTop: isOpen ? "200px" : "0px" }}>
        <div
          className="card-top"
          style={{
            borderTopWidth: isOpen ? "0px" : "150px",
            borderBottomWidth: isOpen ? "150px" : "0px",
            top: isOpen ? "-150px" : "0px",
          }}
        ></div>
        <button
          className="btn-click"
          onClick={openCard}
          style={{ opacity: isOpen ? "0" : "1" }}
        >
          Click here
        </button>
        <img
          className="bakra-pic"
          src={picture}
          style={{
            opacity: isOpen ? "1" : "0",
            top: isOpen ? "-200px" : "0",
          }}
        />
        <h1
          className="eid-txt"
          style={{
            opacity: isOpen ? "1" : "0",
          }}
        >
          Eid Mubarak
        </h1>
      </div>
    </>
  );
}

export default Card;
