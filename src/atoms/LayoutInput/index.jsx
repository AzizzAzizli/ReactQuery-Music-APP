import React from "react";
import style from "./input.module.css";
import icon from "../../assets/icons/layoutHeaderIcon/layoutHeaderIcon.svg";
export const LayoutInput = () => {
  console.log(icon);
  return (
    <div>
      <input
        className={`${style.input} w-full   rounded-xl h-10 ps-3 pe-4 text-white `}
        type="search"
        placeholder="Search Playlist"
      />
    </div>
  );
};
