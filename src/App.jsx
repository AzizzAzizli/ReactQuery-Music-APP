import { Route, Routes } from "react-router-dom"
import Router from './constants/routes/routes'
import Home from './pages/home/index'
const App = () => {
  return (
    <>
      <Routes>
          <Route path={Router.home} element={<Home />} />
      </Routes>
    </>
  )
}

export default App