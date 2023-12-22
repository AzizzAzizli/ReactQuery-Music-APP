/* eslint-disable react/prop-types */
import style from "./card.module.css";

export const Card = ({ cardDetail , callBackClick }) => {
  return (
    <div onClick={() => callBackClick(cardDetail.videoId)} className={`${style.cardBottom}`}>
      <div className={`${style.imgSize} w-full rounded-xl overflow-hidden h-full`}>
          <img src={cardDetail.thumbnail} className="w-full h-full object-cover" alt="" />
      </div>
      <div>
            <p className={`${style.cardTitle}`}>
              { cardDetail.title }
            </p>
            <p className={`${style.cardDesc}`}>
              {cardDetail.author}
            </p>
      </div>
    </div>
  );
};