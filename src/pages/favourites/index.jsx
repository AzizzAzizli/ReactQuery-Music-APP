import Sidebar from '../../components/Sidebar/index'
import Background from '../../assets/images/background/background.svg'
import { LayoutHeader } from "../../components/LayoutHeader/index";
import layoutHeaderIcon from "../../assets/icons/layoutHeaderIcon/layoutHeaderIcon.svg";
import { Card } from '../../components/Card/index'
const Favourites = () => {
  let Favorites = JSON.parse(localStorage.getItem("favorites")) ?? [];

  const callBackFavourites = (item) => {

    // console.log(item);
  
    const favMusic = {
      imgUrl: item.thumbnail,
      title: item.title,
      author: item.author,
      id:item.videoId
    };
  
    const isInclude = Favorites.find(item => item.id === favMusic.id)
  
    // console.log(Favorites);
    
    if (isInclude) {
      const updatedFavorites = Favorites.filter((fav) => (
        fav.title !== favMusic.title || fav.author !== favMusic.author
      ));
      Favorites = updatedFavorites;
    } else {
      Favorites.push(favMusic);
    }
  
    localStorage.setItem("favorites", JSON.stringify(Favorites));
  };

  const quickMusics = JSON.parse(localStorage.getItem('favorites'))
  console.log(quickMusics);
  return (
      <div className='overlay flex relative w-full h-[100vh] p-12'>
          <img className='  absolute object-cover top-0 left-0 w-full h-full -z-10' src={Background} alt="BackGroundImg" />
          <Sidebar />
            <div className="layout w-[70%] h-full p-7">
                <LayoutHeader
                  headTitle={"Playlist"}
                  description={`0 Playlist`}
                  icon={layoutHeaderIcon}
                />

                <section className={`cardBody gap-[23.04px]`}>
                     {
                      quickMusics?.map((musicItem) => (
                          <Card
                              key={musicItem.videoId}
                              cardDetail={musicItem}
                              callBackFavourites={callBackFavourites}
                          />
                        ))
                     }
                </section>
          </div>
      </div>
  )
}

export default Favourites