import SettingIcon from '../../assets/icons/setting/setting.svg'
import FavouritesIcon from '../../assets/icons/favouritesIcon/favouritesIcon.svg'
import HomeIcon from '../../assets/icons/homeIcon/homeIcon.svg'
import { LayoutHeader } from '../LayoutHeader/index'
import SidebarItem from '../SidebarItem/SidebarItem'
import { useLocation } from 'react-router-dom'
import Router from '../../constants/routes/routes'

const Sidebar = () => {
    const {pathname} = useLocation()
    console.log(pathname);
    // {pathname===ROUTER.home? "warning":"light"} 
    function inPage(pathname,router) {
        if (pathname === router) {
            return true
        }
        else {
          return  false
        }
    }

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
                  route={Router.home}
                  activeLink={inPage(pathname,Router.home)}
            />
            
             <SidebarItem
                title={"Favourites"}
                icon={FavouritesIcon}
                  route={Router.favourites}
                  activeLink={inPage(pathname,Router.favourites)}
            />
        </div>
    </div>
  )
}

export default Sidebar