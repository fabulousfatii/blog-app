import React from 'react'
import { Link } from 'react-router-dom'

function Createcard() {
    return (
        <div className='w-full h-[120vh] bgcreate   sm:min-w-[40rem] md:min-w-[48px]'>
            <div className='p-14'>
                <h1 className='text-5xl font-semibold text-white px-2 md:px-14 py-2'>Let your talent shown to world</h1>
               <Link to={'/login'}>
               <button className='bg-[#69aba9] hover:bg-teal-600 text-white font-bold px-2  md:px-7 py-1 my-2 rounded-xl mx-16'>Create your blog</button>
               </Link>
            </div>
            <div className='px-14'>
                <ul className='text-white flex flex-col gap-1 px-14 text-lg list-disc'>
                    <li>Food and health</li>
                    <li>Fashion and trends</li>
                    <li>Vlogs ,routines</li>
                    <li>Education , knowledege, researche</li>
                    <li>Latest technologies and guides</li>
                    <li>Lifestyle, best practices</li>
                    <li>Struggles and passions of world</li>
                </ul>
            </div>
            
        </div>
    )
}

export default Createcard
