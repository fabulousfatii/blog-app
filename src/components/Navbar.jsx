import React from 'react';
import {Link} from 'react-router-dom'

        function Navbar() {
          return (
            <nav className="bg-teal-800 h-12 w-full py-4 flex justify-center items-center  fixed">
              <div className="container mx-auto p-4 flex justify-center">
                
                <ul className="flex items-center gap-6 ">
                  <Link to={"/"} ><li><a className="text-white hover:text-gray-300 transition duration-300 ease-in-out" >Home</a></li></Link>
                  <Link to={"/aboutus"}><li><a className="text-white hover:text-gray-300 transition duration-300 ease-in-out" >About</a></li></Link>
                  <Link to={"/profile"}><li><a className="text-white hover:text-gray-300 transition duration-300 ease-in-out" >My account</a></li></Link>
                </ul>
                
              </div>
            </nav>
          );
        }
        
        export default Navbar;
      
    

