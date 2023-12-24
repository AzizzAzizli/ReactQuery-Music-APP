import { useNavigate } from "react-router-dom"

/* eslint-disable react/prop-types */
const SidebarItem = ({ title , icon , route , activeLink}) => {
  const navigate = useNavigate()
  return (
    <div onClick={() => navigate(route)} className="flex gap-6 items-center cursor-pointer">
        <img 
            alt="" 
            src={icon} 
        />
      <p className={`text-white text-xl ${activeLink?"  border-b-2  border-white-800":""}`}>
            {
                title
            }
        </p>
    </div>
  )
}

export default SidebarItem