import React from "react";
import cardimg from "../../assets/images/cardImg/cardImg.svg";
import style from "./card.module.css";

export const Card = () => {
  return (
    <div className={`${style.cardBottom}`}>
      <div className={`${style.imgSize} rounded-xl`}>
        <img src={cardimg} alt="" />
      </div>
      <div>
        <p className={`${style.cardTitle}`}>hollywood</p>
        <p className={`${style.cardDesc}`}>babbu maan</p>
      </div>
    </div>
  );
};
//