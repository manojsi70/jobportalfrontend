import React from "react";
import { Link } from "react-router-dom";
import { LuLogOut } from "react-icons/lu";
function Dropdown() {
   return (
      <>
         <div className="profile-links flex flex-col w-10">
            <ul className="flex flex-col gap-3 mt-5">
               <li className="cursor-pointer"><Link className="profile-link" to="/profile"> View Profile</Link></li>

               <div className="bg-[#ffffffc2] ">

               <li className="text-start ml-4" >Bio: `  
                  <span className="text-[12px] font-light">
                     Lorem ipsum, dolor sit amet consectetur `
                  </span>
               </li>
               </div>
               <li className="cursor-pointer">Setting</li>
               <li className="cursor-pointer gap-5 mt-3">
                  <span><LuLogOut className=" m-auto text-[22px] " /></span></li>
            </ul>
         </div>
      </>
   );
}

export default Dropdown;
