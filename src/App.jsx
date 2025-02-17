import { Route, Routes } from 'react-router'
import './App.css'
import MainPage from "./pages/mainPage/MainPage"
import ImgsPage from "./pages/imgsPage/ImgsPage"
import ImgPage from "./pages/imgPage/ImgPage"
import Layout from "./components/layout/Layout"

function App () {


  return(
    <div>
      <Routes>

        <Route path="/" element={<Layout/>}>

          <Route index element={<MainPage/>}/>
          <Route path='/imgs' element={<ImgsPage/>}/>
          <Route path="/imgs/:id" element={<ImgPage/>} />
          <Route path="*" element={<div>404 not found</div>}/>
          
        </Route>
        
      </Routes>
    </div>
  )
}

export default App