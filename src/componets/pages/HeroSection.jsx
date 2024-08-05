import React from "react";
import { FaSearch } from "react-icons/fa";
import './herosection.css'
function HeroSection() {
   return (
      <div className="text-center">
         <div className="flex flex-col gap-4">
            <span className="mx-auto">
               <h2 className="px-4 py-3 rounded-full bg-gray-100 text-[#d335359d] font-medium">
                  No. 1 Job Hunt Website
               </h2>
            </span>
            <h1 className="text-4xl font-bold">
               Search, Apply & <br /> Get Your{" "}
               <span className="text-[#3b3beb]">Dream Jobs</span>
            </h1>
            <p>
               Lorem ipsum dolor, sit amet consectetur adipisicing elit.
               Cupiditate, maiores adipisci? Possimus exercitationem fugiat aut
            </p>
            <div className="flex w-[40%] shadow-lg border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto ">
               <input
                  type="text"
                  className="h-[40px] w-[90%] outline-none"
                  placeholder="Find your dream jobs"
               />
               <button className="search-btn w-[10%] bg-[#3b3beb] h-[40px]">
                  <FaSearch />
               </button>
            </div>
         </div>
      </div>
   );
}

export default HeroSection;
