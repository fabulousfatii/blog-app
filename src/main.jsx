import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Createblog from './pages/Createblog.jsx';
import BlogDetails from './pages/BlogDetails.jsx'
import Blogs from './pages/Blogs.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import Profile from './pages/Profile.jsx';
import ErrorPage from './ErrorPage.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import About from './pages/About.jsx';
import Editpage from './pages/Editpage.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path='/createblog' element={<Createblog />} />
      <Route path='/aboutus' element={<About/>} />
      <Route path='/profile'>
      <Route index element={<Profile />} />
      <Route path=':title' element={<Editpage />} />
      </Route>
      
      
     

      <Route path='/login' >
        <Route index element={<Login />} />
        <Route path='signup' element={<Signup />} />
        
      </Route>

      <Route path='/blogs' errorElement={<ErrorPage />}>
        <Route index element={<Blogs />} />
        <Route path=':title' element={<BlogDetails />} />
        
        

      </Route>
      <Route path="*" element={<ErrorPage />}/>
    </Routes>
    <Footer/>
  </BrowserRouter>
)
