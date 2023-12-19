import Layout from '../../components/Layout/index'
import Sidebar from '../../components/Sidebar/index'
import Background from '../../assets/images/background/background.svg'
const Home = () => {
  return (
    <div className='flex relative w-full h-[100vh] p-12'>
        <img className='absolute object-cover top-0 left-0 w-full h-full -z-10' src={Background} alt="" />
        <Sidebar />
      
        <Layout />
    </div>
  )
}

export default Home