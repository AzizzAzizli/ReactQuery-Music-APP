import { Route, Routes } from "react-router-dom"
import Router from './constants/routes/routes'
import Home from './pages/home/index'
import Favourites from './pages/favourites/index'
const App = () => {
  return (
    <>
      <Routes>
          <Route path={Router.home} element={<Home />} />
          <Route path={Router.favourites} element={<Favourites />} />
      </Routes>
    </>
  )
}

export default App