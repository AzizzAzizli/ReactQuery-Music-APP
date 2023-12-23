/* eslint-disable react/prop-types */
import style from "./card.module.css";

export const Card = ({ cardDetail, callBackFavourites, isFav }) => {
    return (
      <div
        // onClick={() => callBackClick(cardDetail.videoId)}
        className={`${style.cardBottom} group relative transition-transform duration-300 ease-in-out transform hover:scale-100`}
      >
        <div className={`${style.imgSize} w-full rounded-xl overflow-hidden h-full relative`}>
          <img src={cardDetail.thumbnail} className="w-full h-full object-cover" alt="" />
          <div className={`${style.divv} cursor-pointer hidden group-hover:flex items-center justify-center absolute inset-0 text-white bg-black bg-opacity-50 transition duration-300 ease-in-out `}>
            <button className="bg-gray-600" onClick={() => callBackFavourites(cardDetail)}>
              {isFav?"Remove fav":"Add fav"}
            </button>
          </div>
        </div>
        <div>
          <p className={`${style.cardTitle}`}>
            {cardDetail.title}
          </p>
          <p className={`${style.cardDesc}`}>
            {cardDetail.author}
          </p>
        </div>
      </div>
    );
};
