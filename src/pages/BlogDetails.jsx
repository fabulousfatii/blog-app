import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { db } from '../firebase/config';
import Usehook from '../hook/Usehook';
import { doc, setDoc,deleteField ,updateDoc} from "firebase/firestore"; 


function BlogDetails() {
  const [like,setlike]=useState(false)
  const [count,setcount]=useState(0)
  const {bloglist}= Usehook()
  console.log("here",bloglist);
  

  const {title}=useParams()
 // console.log(title);


 console.log("like",like);




  return (
    <div className='w-full bg-teal-950  p-10 sm:min-w-[40rem] md:min-w-[48px] flex justify-center text-white'>
      <div>
       
      {bloglist?.map((doc,index)=>{
        // console.log(doc.title==title);
          if(doc.title===title){
           return(
            <div key={index}  className="w-[80vw]  bg-gradient-to-r from-cyan-300 to-blue-200  rounded-lg flex-col  backdrop-filter backdrop-blur-lg bg-opacity-35 p-4 my-14 justify-between sm:flex-none lg:flex sm:h-screen'">
              
             <img
            src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
            alt="Laptop"
            className="h-[250px] w-full rounded-md object-cover p-4"
          />
          {/* <svg className='mx-4' height="30px" width="30px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-4 -4 58.00 58.00" xml:space="preserve" fill="#181616" stroke="#181616" stroke-width="1.6"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill={doc.like?"#c41e08":"#f2eeed"} d="M24.85,10.126c2.018-4.783,6.628-8.125,11.99-8.125c7.223,0,12.425,6.179,13.079,13.543 c0,0,0.353,1.828-0.424,5.119c-1.058,4.482-3.545,8.464-6.898,11.503L24.85,48L7.402,32.165c-3.353-3.038-5.84-7.021-6.898-11.503 c-0.777-3.291-0.424-5.119-0.424-5.119C0.734,8.179,5.936,2,13.159,2C18.522,2,22.832,5.343,24.85,10.126z"></path> </g></svg> */}
          <h1 className="mx-4  font-semibold text-black text-3xl ">{doc.title}</h1>
            <div className="mt-3 mx-4 text-lg text-black"  dangerouslySetInnerHTML={{__html: doc.body}} >
           
           {/* {doc.body} */}
            </div>
          
            
            {/* <button onClick={()=>likebutton(doc.id)}
            className='bg-rose-800 my-5 '>{doc.like? "unlike":"like"}</button> */}
           </div>
           )
          }
       })}
     
      </div>
    </div>
  )
}

export default BlogDetails
