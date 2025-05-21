// import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./Components/Navbar"
// import Banner from "./Components/Banner"
import Blogs from '../Pages/Blogs';
import Services from '../Pages/Services';
import About from '../Pages/About';
import Footer from './Components/Footer';
import Contact from '../Pages/Contact';
import Home from "../Pages/Home"
import SingleBlog from '../Pages/SingleBlog';
import CreateBlogs from '../Pages/CreateBlogs';

function App() {

  return (
    <>
      <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/blogs' element={<Blogs/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contacts' element={<Contact/>}/>
      <Route path='/blogs/:id' element={<SingleBlog/>}/>
      <Route path='/createBlogs' element={<CreateBlogs/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
