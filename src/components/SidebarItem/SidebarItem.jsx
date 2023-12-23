import { useNavigate } from "react-router-dom"

/* eslint-disable react/prop-types */
const SidebarItem = ({ title , icon , route }) => {
  const navigate = useNavigate()
  return (
    <div onClick={() => navigate(route)} className="flex gap-6 items-center cursor-pointer">
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