import React, { useState } from 'react'
import { getAuth } from 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';


function Login() {
    const navigate = useNavigate()
    const auth = getAuth();
    
const [email, setEmail] = React.useState("");
const [password, setPassword] = React.useState("");
const [isuserloggedin,setuserloggedin] = useState(false)
const [error,seterror]=useState(false)

    const submitlogin= async (e)=>{
        e.preventDefault()
        
        try {
            await signInWithEmailAndPassword(auth, email, password)
            toast.success("successfully user login")
            window.location.href = "/createblog"
            // navigate("/createblog")
            console.log("done");
            setuserloggedin(true)
            
        } catch (error) {
            toast.error('something occured')
            seterror(true)
        }
         
        }
    return (
        <div>
                 {isuserloggedin? <Link to={()=> navigate("./createblog")}></Link> :
                 <div className="bg-teal-700 flex items-center justify-center min-h-screen">
                 <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                     <h2 className="text-2xl font-semibold text-center mb-6">Log in</h2>
                     <h1 className='text-red-800'>{error? "please signup":null}</h1>
                     <form onSubmit={(e)=>submitlogin(e)}>
                         {/* <!-- Email Field --> */}
                         <div className="mb-4">
                             <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                             <input type="email" id="email" name="email" required
                                    className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                    onChange={(e)=>setEmail(e.target.value)}/>
                         </div>
             
                         {/* <!-- Password Field --> */}
                         <div className="mb-4">
                             <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                             <input type="password" id="password" name="password" required
                                    className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                    onChange={(e)=>setPassword(e.target.value)}/>
                         </div>
             
                         {/* <!-- Submit Button --> */}
                         <div className="mt-6">
                             <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold p-3 rounded-lg shadow-md transition duration-300">login</button>
                         </div>
                     </form>
                          <p>dont have an account</p>
                          <Link to={"/login/signup"}><span  className='text-blue-700'>Signup</span></Link>
                 </div>
                     </div>}
        </div>
    )
}

export default Login
