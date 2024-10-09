import React from 'react'
import { getAuth } from 'firebase/auth';
import Usehook from '../hook/Usehook';
import BlogCard from '../components/BlogCard';
import { Link } from 'react-router-dom';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase/config';
import {toast} from "react-toastify"


function Profile() {
    const {bloglist} = Usehook()
    const auth = getAuth();
    console.log(auth.currentUser);
    const user = auth.currentUser

    const deleteblog = async(id)=>{
        try {
            await deleteDoc(doc(db,'users',id))        /// this is for delete syntax
            toast.success('your contact has been successfully deleted')

        } catch (error) {
            throw error
        }
      }
    
    return (
        
        <div 
        // className="w-full h-screen bg flex justify-center items-center md:w-full md:min-h-fit lg:w-full xl:w-screen 2xl:w-full"
        className=' w-full max-lg:h-[1100px] max-md:h-full max-sm:h-full bg py-10 sm:min-w-[40rem] md:min-w-[48px]  flex flex-col  '>
            <h1 className='w-full bg-teal-100 text-teal-950 text-2xl text-center font-bold p-3 '>My Profile</h1>
            <div className='p-20'>
                     
                    <h1 className='text-5xl font-bold text-white p-4 pt-5  '>My blogs</h1>
                    <h3 className='text-xl font-bold text-white px-4   '>{user?.email}</h3>
                    <Link to={"/createblog"}>
                    <button className='bg-white m-4 p-4 text-teal-900 font-bold hover:bg-teal-500 hover:text-white '>Create blog</button></Link>
                <div className=' max-sm:p-0'>
             <div className='flex flex-wrap gap-2'>
             {bloglist?.map((doc,index)=>{
                 console.log(doc.email==user.email);
                 if(doc.email==user.email){
                     return(
                        <div className='bg-[#cbebdf] rounded-lg p-2'>
                            <BlogCard blog={doc}/>
                            <div className='flex gap-2'>
                                <Link to={`/profile/${doc.title}`} >
                                <button className='bg-sky-600 text-white hover:bg-sky-900'>Update</button></Link>
                                <button onClick={()=>deleteblog(doc.id)} className='bg-rose-600 text-white hover:bg-rose-900'>Delete</button>

                            </div>
                        </div>
                     )
                 }
                
             })}
         </div>   
                </div>
            </div>
            
        </div>
    )
}

export default Profile
