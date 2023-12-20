import { LayoutHeader } from '../LayoutHeader/index'
import layoutHeaderIcon from '../../assets/icons/layoutHeaderIcon/layoutHeaderIcon.svg'

const Sidebar = () => {
  return (
    <div className="sidebar w-[30%] h-full  p-7">
        <LayoutHeader 
            headTitle={"Library"} 
            description={"Library"} 
            icon={layoutHeaderIcon} 
        />
    </div>
  )
}

export default Sidebar