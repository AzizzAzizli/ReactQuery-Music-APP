import { LayoutHeader } from "../../atoms/LayoutHeader"
import { LayoutInput } from "../../atoms/LayoutInput"

/* eslint-disable react/prop-types */
const Layout = () => {
  return (
    <div className="layout w-[70%] h-full p-7">
      <LayoutHeader />
      <LayoutInput/>
    </div>
  )
}

export default Layout