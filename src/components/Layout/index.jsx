import { LayoutHeader } from "../LayoutHeader/index"
import { LayoutInput } from "../LayoutInput/index"
import layoutHeaderIcon from '../../assets/icons/layoutHeaderIcon/layoutHeaderIcon.svg'

const Layout = () => {
  return (
    <div className="layout w-[70%] h-full p-7">
       <LayoutHeader 
            headTitle={"Playlist"} 
            description={"304 Playlist"} 
            icon={layoutHeaderIcon} 
        />
      <LayoutInput/>
    </div>
  )
}

export default Layout