import React from "react";
import { CiBookmark } from "react-icons/ci";
function Job() {
   return (
      <div className="p-5 rounded-md shadow-xl bg-white border border-gray-100">
         <div className="flex justify-around">
            <p className="text-sm text-gray-400">2 days ago</p>
            <button className="outline-none rounded-full">
               <CiBookmark className="" />
            </button>
         </div>
         <div className="flex items-center gap-6 my-2">
            <button className="max-w-8 h-auto">
               <img
                  className="rounded-full"
                  src="https://www.logodesign.net/logo/line-art-buildings-in-swoosh-1273ld.png?nwm=1&nws=1&industry=company&sf=&txt_keyword=All"
                  alt="Company logo"
               />
            </button>
            <div className="">
               <h1 className="font-medium text-lg">Company Name:</h1>
               <p className="text-sm ">India</p>
            </div>
         </div>

         <div>
            <h1 className="font-bold text-lg "> Title :</h1>
            <p className="font-light">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
               deserunt aperiam quos doloremque repellat quia ullam soluta
               facilis nam! Ea.
            </p>
         </div>
         <div className="flex flex-wrap gap-3 items-center my-auto ">
            <b className="bagesinfo  border-spacing-3 border px-1 text-[#3a3ac9] mt-5">
               Positions: 2
            </b>
            <b className="bagesinfo  border-spacing-3 border px-1 text-[#7e274e] mt-5">
               FullTime: 2
            </b>
            <b className="bagesinfo  border-spacing-4 border px-1 text-[#973ac9] mt-5">
               Salary: 5lpa
            </b>
         </div>
         <div className=" flex mt-5 gap-5">
            <button className="w-[40%] h-9 border rounded-md border-gray-100 bg-[white] p-1 shadow-md text-[black] hover:p-2">Details</button>
            <button className="w-[50%] h-9 border rounded-md border-gray-100 bg-[#992bfa] p-1 shadow-md text-[#f5f5f6] hover:p-2">Save for Later</button>
            
         </div>
      </div>
   );
}

export default Job;
