import { LayoutHeader } from "../LayoutHeader/index"
import { LayoutInput } from "../LayoutInput/index"

const Layout = () => {
  return (
    <div className="layout w-[70%] h-full p-7">
      <LayoutHeader />
      <LayoutInput/>
    </div>
  )
}

export default Layout