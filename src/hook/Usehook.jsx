import React, { useState,useEffect } from 'react'
import { collection, getDocs,onSnapshot } from "firebase/firestore";
import { db } from '../firebase/config'

function Usehook() {

    const [bloglist,setbloglist]=useState([])


    useEffect(()=>{
        const getblogs= async ()=>{
          const contactcollection = collection(db,'users');
          // const data = await getDocs(contactcollection);
                                                                                // always use this method for geeting all doc
          onSnapshot(contactcollection,(snapshot)=>{
            const mapcontacts = snapshot.docs.map((doc)=>({...doc.data(),id:doc.id}))
            console.log(mapcontacts);
            setbloglist(mapcontacts);
            return mapcontacts
          })
          
          // ok so using snapshot everything will update without refresh
          //without it having problem that whenever we deleted, adduser ,it was not getting change but i had refresh to see the change that if its deleted or not
      
        }
        getblogs()
      },[db])

      const saveblogs=(title)=>{
        const save = bloglist.filter((item)=> {
          return item.title === title
        })
        
      }


      
    return {bloglist,saveblogs}
    
}

export default Usehook
