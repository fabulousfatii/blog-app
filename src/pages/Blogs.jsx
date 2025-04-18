import React from 'react'
import Usehook from '../hook/Usehook';
import BlogCard from '../components/BlogCard';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


function Blogs() {
    const {bloglist}= Usehook()
    return (
        <div className='flex flex-col'>
            {/* <Navbar/> */}
            <div className='w-full bg-[#1a746f] p-10 sm:min-w-[40rem] md:min-w-[48px]  flex'>
           <div>
           <h1 className='text-5xl font-semibold text-white px-14 py-4 pt-9 m-6'>Updates, Lifestyle, Technology and more</h1>
           
           <div className='flex flex-wrap gap-4 box' >
            
              {bloglist.map((blog,index)=>
               <div key={index} className='bg-[#cbebdf] rounded-lg'>
                
                  <BlogCard key={index} blog={blog} />
  
                  <Link to={`/blogs/${blog.title}`} >
                  <button type="button" className="mx-4 mb-2 rounded-lg bg-teal-950 px-5 py-1 text-lg font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"> Read</button>
                  </Link>
               </div>

               
              )}

         
            </div>
           </div>
        </div>
        </div>
    )
}

export default Blogs
