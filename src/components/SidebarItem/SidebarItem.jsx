/* eslint-disable react/prop-types */
const SidebarItem = ({ title , icon }) => {
  return (
    <div className="flex gap-6 items-center cursor-pointer">
        <img 
            alt="" 
            src={icon} 
        />
        <p className="text-white text-xl">
            {
                title
            }
        </p>
    </div>
  )
}

export default SidebarItem