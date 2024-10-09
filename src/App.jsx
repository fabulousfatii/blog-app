import { useEffect, useState } from 'react'
import HeaderCard from './components/HeaderCard';
import Createcard from './components/Createcard';
import BlogCard from './components/BlogCard';
import Usehook from './hook/Usehook';
import { Link } from 'react-router-dom';
import EndingPage from './components/EndingPage';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function App() {

  const {bloglist}= Usehook()

console.log(bloglist);


useGSAP(()=>{
  gsap.to(".box",{
    transform:"translateX(-100%)",
            duration:5,
            delay:3,
            repeat:-1,
            ease:"none",
            color:"white",
            
  })
})
  return (
       <div>
       <header>
        <HeaderCard/> 
        {/* 
        {/* <Createblog/> */}
       </header>
 
       <Createcard/>

        <div className='w-full cardbg  sm:min-w-[40rem] md:min-w-[48px] flex flex-col overflow-x-hidden'>
           <h1 className='text-5xl font-semibold text-white px-14 pt-20 text-center'>Updates, Lifestyle, Technology and more</h1>
           <Link to={`/blogs`}>
          <button className='bg-[#71cac7] hover:bg-teal-600 text-2xl font-semibold text-white px-14 lg:mx-96 mt-9'>Explore</button>
          </Link>
        
         <div className='flex gap-3 box   p-10 flex-shrink-0' >
            {
              bloglist.map((blog)=>(
                <div key={blog.title} className='w-[300px]'>
                  <BlogCard  blog={blog} />
                </div>
              ))
            }
            
          </div>
        </div>
        <EndingPage/>
       </div>
  )
}

export default App





//  dangerouslySetInnerHTML={{__html: body}}/>          add this where blog.body will be entered 
// do this in js const body  = blogslist.body