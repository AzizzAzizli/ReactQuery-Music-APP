/* eslint-disable react/prop-types */
import style from "./card.module.css";

export const Card = ({ title , thumbnail , author }) => {
  return (
    <div className={`${style.cardBottom}`}>
      <div className={`${style.imgSize} w-full rounded-xl overflow-hidden h-full`}>
        <img src={thumbnail} className="w-full h-full object-cover" alt="" />
      </div>
      <div>
        <p className={`${style.cardTitle}`}>{ title }</p>
        <p className={`${style.cardDesc}`}>{author}</p>
      </div>
    </div>
  );
};
