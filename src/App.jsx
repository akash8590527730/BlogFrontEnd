import React  from 'react'
import Header  from './components/Header'
import Home  from './components/Home'
import Footer from './components/Footer'
import { Routes,Route, useLocation } from 'react-router-dom'
import Blogs from "./Pages/Blogs"
import About from './Pages/About'
import Creator from './Pages/Creator'
import Contact from './Pages/Contact'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Dashboard from './Pages/Dashboard'
import Detail  from './Pages/Detail'
import UpdateBlog from './admindashboard/UpdateBlog'




function App() {
 const locations = useLocation();
 const noHeaderFooter =['/login','/dashboard','/register'].includes(locations.pathname)
  return (
    <div>
  { !noHeaderFooter && <Header/>}
   <Routes>
   <Route path='/' element={<Home/>} />
   <Route path='/blogs' element={<Blogs/>} />
   <Route path='/about' element={<About/>} />
   <Route path='/creator' element={<Creator/>} />
   <Route path='/contact' element={<Contact/>} />
   <Route path='/login' element={<Login/>} />
   <Route path='/register' element={<Register/>} />
   <Route path='/dashboard' element={<Dashboard/>} />
   <Route path='/blog/:id' element={<Detail/>} />
   <Route path='/blog/update/:id' element={<UpdateBlog/>} />
   </Routes>
 {!noHeaderFooter &&   <Footer/>}
    </div>
  )
}

export default App
