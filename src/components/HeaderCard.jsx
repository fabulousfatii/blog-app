import React from 'react'
import Image from './background.jpg'
import { Link, Navigate, useNavigate } from 'react-router-dom'

function HeaderCard() {
    const navigate= useNavigate()
    return (
        <div  className=' bg flex justify-center items-center sm:min-w-[40rem] md:min-w-[48px] '>
            <div className='w-[80vw] lg:h-[80vh] bg-teal-500/30 backdrop-filter backdrop-blur-lg bg-opacity-35 px-4 py-7 my-14 mt-20 justify-between sm:flex-none lg:flex sm:h-screen'>
                <div >
                    <h1 className='text-5xl font-bold text-white p-14 '>Dive into <br /> Blog  Creativity</h1>
                </div>
                <div className='p-20 max-sm:p-0'>
                    <ul className='flex flex-col'>
                        <Link to={"/profile"}><li className='text-lg font-medium text-white border-t border-gray-300 px-20 py-3 hover:text-green-200 '>profile</li>
                        </Link>
                        <Link><li className='text-lg font-medium text-white border-t border-gray-300 px-20 py-3  hover:text-green-200 '>Signup</li>
                        </Link>
                        <Link><li className='text-lg font-medium text-white border-t border-gray-300 px-20 py-3  hover:text-green-200'>Login</li>
                        </Link>
                        <Link to={"/blogs"}><li className='text-lg font-medium text-white border-t border-gray-300 px-20 py-3  hover:text-green-200'>See blogs</li>
                        </Link>
                        
                       
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default HeaderCard
