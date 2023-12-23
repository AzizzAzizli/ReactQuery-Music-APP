import React, { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar/index";
import Background from "../../assets/images/background/background.svg";
import { LayoutHeader } from "../../components/LayoutHeader/index";
import layoutHeaderIcon from "../../assets/icons/layoutHeaderIcon/layoutHeaderIcon.svg";
import { Card } from "../../components/Card/index";

const Favourites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) ?? [];
    setFavorites(storedFavorites);
  }, []);

  const callBackFavourites = (item) => {
    const isInclude = favorites.find((favs) => favs.id === item.id);

    if (isInclude) {
      const updatedFavorites = favorites.filter(
        (fav) => fav.title !== item.title || fav.author !== item.author
      );
      setFavorites(updatedFavorites);

      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    }
  };

  function isFav(item) {
    
    const isInclude = favorites.find((favs) => favs.id === item.id);

    if (isInclude) {

      return true

    }
  return false
}

  return (
    <div className="overlay flex relative w-full h-[100vh] p-12">
      <img
        className="absolute object-cover top-0 left-0 w-full h-full -z-10"
        src={Background}
        alt="BackGroundImg"
      />
      <Sidebar />
      <div className="layout w-[70%] h-full p-7">
        <LayoutHeader
          headTitle={"Playlist"}
          description={`${favorites.length} Playlist`}
          icon={layoutHeaderIcon}
        />

        <section className={`cardBody gap-[23.04px]`}>
          {favorites?.map((musicItem) =>{
                let isFav = favorites.find((favs) => favs.id === musicItem.id)
          return (
            <Card
              isFav={() => isFav(musicItem)}
              key={musicItem.id}
              cardDetail={musicItem}
              callBackFavourites={callBackFavourites}
            />
          )
          })}
        </section>
      </div>
    </div>
  );
};

export default Favourites;
