import React, { useEffect, useState } from 'react'
import { collection, addDoc ,setDoc,updateDoc,doc} from "firebase/firestore"; 
import {db} from "../firebase/config"
import { useRef } from 'react';
import { auth } from '../firebase/config';
import JoditEditor from 'jodit-react';
import { Link, useNavigate } from 'react-router-dom';

function Createblog() {
   
const [title,setTitle]=useState('')
const [body,setBody]=useState('')
const [description,setdescription]=useState('')
const [publish,setpublish]=useState(false)
const [image,setImage]=useState(null)

const navigate = useNavigate()
const editor = useRef()
const user = auth.currentUser
     //console.log(user); 


const add = async (e)=>{
    e.preventDefault()
    
    console.log(body,title)
    try {
        
        const docRef = await addDoc(collection(db, 'users'), {
          title: title,
          body : body,
          description: description,
          date:  Date.now(),
          email: user.email,
          image: image,
        });
        console.log("Document written with ID: ",docRef);
      } catch (e) {
        console.error("Error adding document: ", e);
      }

     setpublish(true) 
     navigate('/profile')
}

    return (
      
      <div className='bg-teal-600 p-10 '>

      {publish? <Link to={()=> navigate("/profile")}></Link>:<div>

      <form onSubmit={(event) =>add(event)} >   
      <label htmlFor="title" className='text-white'>Title:</label>  
       <input type="text" placeholder="Title" 
       className='m-4 p-2 rounded-lg'
      onChange={(e)=>{setTitle(e.target.value)}} required />

     <div>
     <label htmlFor="title" className='text-white'>Description:</label>  
       <input type="text" placeholder="Type main idea" 
       className='w-full my-4 p-2 rounded-lg'
      onChange={(e)=>{setdescription(e.target.value)}} required />
     
     <label htmlFor="image" className='text-white'>image</label>  
       <input type="text" placeholder="Type main idea" 
       className='w-full my-4 p-2 rounded-lg'
      onChange= {(e)=>{setImage(e.target.value)}}required />
     </div>

<JoditEditor
ref={editor}
value={body}
//tabIndex={1} // tabIndex of textarea
//onBlur={(newContent) => setBody(newContent)} // preferred to use only this option to update the content for performance reasons
onChange={(newContent) =>setBody(newContent)}
/>
<button type='submit' className={`text-white bg-teal-900 my-4 ${publish? 'bg-teal-950' : 'bg-teal-900'}`} > {publish? 'Published':'Publish'}</button>
      

  </form>
</div>}
  </div>
    )
}

export default Createblog
