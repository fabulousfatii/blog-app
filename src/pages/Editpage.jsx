import React, { useRef, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import JoditEditor from 'jodit-react';
import Usehook from '../hook/Usehook';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase/config';

function Editpage() {
    const [title,setTitle]=useState('')
    const [body,setBody]=useState('')
    const [description,setdescription]=useState('')
    const [publish,setpublish]=useState(false)
    const [image,setImage]=useState(null)

    const titleid=useParams()
    console.log(titleid);
    
    const navigate= useNavigate()
    const editor = useRef()
    const {bloglist}=Usehook()
    console.log("here",bloglist);

    const updateblog=async(e,id,blog)=>{
        e.preventDefault()
        const edit = doc(db,'users',id);
        console.log(blog);
        
  // Set the "capital" field of the city 'DC'
  await updateDoc(edit, {
    title:title?title:blog.title,
    body:body?body:blog.body,
    description:description?description:blog.body,
    image:image?image:blog.image,
  });

  setpublish(true)
  navigate('/profile')
 }

 
    
    




    return (
        <div className='bg-teal-600 p-10 '>

        <div>
  
        {bloglist.map((blog)=>{
            
            
            if(blog.title===titleid.title){
                
                return(
                    <form onSubmit={(event) =>updateblog(event,blog.id,blog)} >   
                    <label htmlFor="title" className='text-white'>Title:</label>  
                     <input type="text"
                      placeholder="Title" 
                     defaultValue={blog.title}
                     className='m-4 p-2 rounded-lg'
                    onChange={(e)=>{setTitle(e.target.value)}} required />
              
                   <div>
                   <label htmlFor="title" className='text-white'>Description:</label>  
                     <input type="text" defaultValue={blog.description}
                     className='w-full my-4 p-2 rounded-lg'
                    onChange={(e)=>{setdescription(e.target.value)}} required />
                   
                   <label htmlFor="image" className='text-white'>image</label>  
                     <input type="text" placeholder="Type main idea" defaultValue={blog.image}
                     className='w-full my-4 p-2 rounded-lg'
                    onChange= {(e)=>{setImage(e.target.value)}}required />
                   </div>
              
              <JoditEditor
              ref={editor}
              value={blog.body}
              //tabIndex={1} // tabIndex of textarea
              //onBlur={(newContent) => setBody(newContent)} // preferred to use only this option to update the content for performance reasons
              onChange={(newContent) =>setBody(newContent)}
              />
              <button type='submit' className={`text-white bg-teal-900 my-4 ${publish? 'bg-teal-950' : 'bg-teal-900'}`} > update</button>
                    
              
                </form>
                   
                )
             
            }
        })}
  </div>
    </div>
    )
}

export default Editpage
