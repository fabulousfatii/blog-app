import React from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../firebase/config';
import { useNavigate } from 'react-router-dom';

function Signup() {
    
    const auth = getAuth();
    const navigate = useNavigate()
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [name, setName] = React.useState("");


    const submithandler = async (e) => {
        e.preventDefault()
        
        await createUserWithEmailAndPassword(auth, email, password)
        // Signed up 
        const user = auth.currentUser;
        console.log(user)
        if (user) {
            await setDoc(doc(db, "users", user.uid), {
                email: user.email,
                name: name,
            });
            console.log("Document written with ID: ");
            navigate('/login')
        }

       

    }
    
    
    return (
       
 <div className="bg-teal-700 flex items-center justify-center min-h-screen">
            <div className="bg-teal-800 text-white 00 p-6 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>
                <form onSubmit={(e) => submithandler(e)}>
                    {/* <!-- Email Field --> */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium  mb-2">Email</label>
                        <input type="email" id="email" name="email" required
                            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium  mb-2">Name</label>
                        <input type="text" name="text" required
                            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            onChange={(e) => setName(e.target.value)} />
                    </div>

                    {/* <!-- Password Field --> */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium  mb-2">Password</label>
                        <input type="password" id="password" name="password" required
                            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    {/* <!-- Submit Button --> */}
                    <div className="mt-6">
                        <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold p-3 rounded-lg shadow-md transition duration-300">Sign Up</button>
                    </div>
                </form>


                <p className="text-center mt-4 text-sm text-gray-200">Already have an account? <a onClick={()=>navigate("/login")} className="text-blue-500 hover:underline">Log in</a></p>
            </div>
        </div>
 
    )
}

export default Signup
