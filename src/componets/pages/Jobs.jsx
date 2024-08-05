import React from "react";
import Navbar from "../navbar/Navbar";
import Job from "./Job";
import FilterCard from "./FilterCard";

const JobArray = [1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
function Jobs() {
   return (
      <div>
         <Navbar />
         <div className="max-w-7xl mx-auto mt-5">
            <div className="flex gap-5">
               <div className="w-[20%]">
                  <FilterCard />
               </div>
               {JobArray.length < 0 ? (
                  <span> Job not Found</span>
               ) : (
                  <div className="flex-1 h-[88vh] overflow-auto pb-5">
                    <div className="grid grid-cols-3 gap-4">
                       
                    {
                      JobArray.map((items, i)=>(
                        <div>
                            <Job/>
                        </div>
                      ))  
                    }
                    </div>
                  </div>
               )
            }
            </div>
         </div>
      </div>
   );
}

export default Jobs;
