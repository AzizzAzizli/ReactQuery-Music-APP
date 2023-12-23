import SettingIcon from '../../assets/icons/setting/setting.svg'
import FavouritesIcon from '../../assets/icons/favouritesIcon/favouritesIcon.svg'
import HomeIcon from '../../assets/icons/homeIcon/homeIcon.svg'
import { LayoutHeader } from '../LayoutHeader/index'
import SidebarItem from '../SidebarItem/SidebarItem'

const Sidebar = () => {
  return (
    <div className="sidebar flex flex-col gap-10 w-[30%] h-full  p-7">
        <LayoutHeader 
            headTitle={"Library"} 
            description={"All Music"} 
            icon={SettingIcon} 
        />

        <div className='flex flex-col gap-9'>
            <SidebarItem
                title={"Home"}
                icon={HomeIcon}
                route={"/"}
            />
            
             <SidebarItem
                title={"Favourites"}
                icon={FavouritesIcon}
                route={"/favourites"}
            />
        </div>
    </div>
  )
}

export default Sidebar