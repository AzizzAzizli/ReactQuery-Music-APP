import icon from "../../assets/icons/layoutHeaderIcon/layoutHeaderIcon.svg";

export const LayoutHeader = () => {

  return (
    <header className=" flex flex-col mb-6 ">
      <div className=" flex justify-between items-center">
        <h1 className=" text-4xl font-bold text-white">Playlist</h1>
        <div>
          <img src={icon} alt="" />
        </div>
          </div>
          <p className=" text-xl font-normal  text-black opacity-60">304 Playlist</p>
    </header>
  );
};
