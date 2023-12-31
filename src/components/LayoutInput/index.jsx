/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from "react";
import style from "./input.module.css";

export const LayoutInput = React.forwardRef(({ onKeyDown }, ref) => {
  return (
    <div className={`${style.form} flex items-center gap-2 rounded-xl h-10 ps-3 pe-4`}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.3593 13.7714C13.8275 13.7714 14.9123 12.6721 14.9123 11.0666V6.19214C14.9123 4.5866 13.8275 3.48732 12.3593 3.48732C10.8912 3.48732 9.80639 4.5866 9.80639 6.19214V11.0666C9.80639 12.6721 10.8912 13.7714 12.3593 13.7714ZM6.83398 11.2329C6.83398 14.227 8.82282 16.2737 11.6868 16.5486V18.0167H9.03256C8.64925 18.0167 8.33104 18.3204 8.33104 18.7037C8.33104 19.0798 8.64925 19.3908 9.03256 19.3908H15.6861C16.0694 19.3908 16.3876 19.0798 16.3876 18.7037C16.3876 18.3204 16.0694 18.0167 15.6861 18.0167H13.0319V16.5486C15.8959 16.2737 17.8847 14.227 17.8847 11.2329V9.8082C17.8847 9.4249 17.5809 9.12838 17.1976 9.12838C16.8143 9.12838 16.4961 9.4249 16.4961 9.8082V11.1823C16.4961 13.6485 14.8255 15.2685 12.3593 15.2685C9.89318 15.2685 8.22256 13.6485 8.22256 11.1823V9.8082C8.22256 9.4249 7.91157 9.12838 7.52827 9.12838C7.14497 9.12838 6.83398 9.4249 6.83398 9.8082V11.2329Z" fill="white" fillOpacity="0.54"/>
      </svg>
      <input
        ref={ref}
        onKeyDown={onKeyDown}
        className={`${style.input} w-full`}
        type="search"
        placeholder="Search Playlist"
      />
    </div>
  )
})