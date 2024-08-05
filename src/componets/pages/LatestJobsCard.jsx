import React from "react";
import "./latestjobs.css";
function LatestJobsCard() {
   return (
      <div className="p-5 rounded-sm shadow-xl bg-[white] border-gray-100 cursor-pointer">
         <div className="">
            <h1 className="font-medium text-lg">Company Name:</h1>
            <p className="text-sm text-gray-400">India</p>
         </div>
         <div>
            <h1 className="font-bold text-lg my-2">Job Title:</h1>
            <p className="text-sm text-gray-500">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
               magni ea totam voluptatum pariatur placeat dolores aspernatur
               cumque molestiae soluta!
            </p>
            <div className="flex flex-wrap gap-5 items-center my-auto mt-4">
               <b className="bagesinfo  border-spacing-3 border px-1 text-[#3a3ac9] mt-5">
                  Positions: 2
               </b>
               <b className="bagesinfo  border-spacing-3 border px-1 text-[#7e274e] mt-5">
                  FullTime: 2
               </b>
               <b className="bagesinfo  border-spacing-3 border px-1 text-[#973ac9] mt-5">
                  Salary: 5lpa
               </b>
            </div>
         </div>
      </div>
   );
}

export default LatestJobsCard;
