/* eslint-disable react/prop-types */
import { useState } from "react";
import style from "./card.module.css";

export const Card = ({ cardDetail, callBackFavourites, isFav }) => {
  const [localIsFav, setLocalIsFav] = useState(isFav);

  function favButtonClick(cardDetail) {
    callBackFavourites(cardDetail);
    setLocalIsFav((prev) => !prev);
  }

  function watchOnYouTube(id) {
    const youtubeUrl = `https://www.youtube.com/watch?v=${id}`;
    window.open(youtubeUrl, "_blank");
  }

  return (
    <div
      // onClick={() => callBackClick(cardDetail.videoId)}
      className={`${style.cardBottom} group relative transition-transform duration-300 ease-in-out transform hover:scale-100`}
    >
      <div
        className={`${style.imgSize} w-full rounded-xl overflow-hidden h-full relative`}
      >
        <img
          src={cardDetail.thumbnail}
          className="w-full h-full object-cover"
          alt=""
        />
        <div
          className={`${style.divv} cursor-pointer hidden group-hover:flex items-center justify-center absolute inset-0 text-white bg-black bg-opacity-50 transition duration-300 ease-in-out `}
        >
          <button
            className={`${localIsFav?"bg-red-700":"bg-green-700"} rounded-md p-1`}
            onClick={() => favButtonClick(cardDetail)}
          >
            {localIsFav ? "Remove fav" : "Add fav"}
          </button>
        </div>
      </div>
      <div>
        <p onClick={()=>watchOnYouTube(cardDetail.videoId)} className={`${style.cardTitle} cursor-pointer`}>{cardDetail.title}</p>
        <p className={`${style.cardDesc}`}>{cardDetail.author}</p>
      </div>
    </div>
  );
};
