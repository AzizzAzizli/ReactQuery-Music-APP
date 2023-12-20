/* eslint-disable react/prop-types */
export const LayoutHeader = ({ headTitle , description , icon }) => {

  return (
    <header className=" flex flex-col mb-6 ">
      <div className=" flex justify-between items-center">
        <h1 className=" text-4xl font-bold text-white">{headTitle}</h1>
        <div>
          <img src={icon} alt="" />
        </div>
          </div>
          <p className="description text-xl font-normal">{description}</p>
    </header>
  );
};