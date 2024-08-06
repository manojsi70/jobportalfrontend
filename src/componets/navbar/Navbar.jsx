import React, { useState } from "react";
import "./navbar.css";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


function Navbar() {
   const {user} = useSelector(store=>store.auth);
   const [profileLiks, setProfileLink] = useState(false);

   return (
      <div className="bg-[white] border border-gray-100 rounded-sm shadow-sm ">
         <div className="flex flex-wrap items-center text-center justify-between max-w-7xl h-16 ml-4 ">
            <div>
               <h1 className="text-2xl font-bold ">
                  Job <span className="text-[red]">Portal</span>
               </h1>
            </div>
            <div className="navbarlinks  flex flex-wrap  items-center gap-10">
               <ul className="flex font-medium items-center gap-5">
                  <li><Link to='/'>Home</Link></li>
                  <li><Link to='/jobs'>Jobs</Link></li>
                  <li><Link to='/browse'>Browse</Link></li>
               </ul>
               {!user ? (
                  <div className="flex flex-row gap-2 ">
                  <Link to="/login"><button className="btn-login btn-login-1 p-1">Login</button></Link>
                  <Link to="/signup"><button className="btn-login  ">SignUp</button></Link>  
                  </div>
               ) : (
                  <div>
                     <div className="btn-div w-[70px] h-8 text-center font-serif text-[#292121] bg-green-300">
                        <button onClick={() => setProfileLink((prev) => !prev)}>
                           Profile
                        </button>
                        <div>{profileLiks && <Dropdown />}</div>
                     </div>
                  </div>
               )}
            </div>
         </div>
      </div>
   );
}

export default Navbar;
