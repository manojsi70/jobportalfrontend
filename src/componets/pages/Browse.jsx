import React from "react";
import Navbar from "../navbar/Navbar";
import Job from "./Job";

const jobsearch = [1, 2, 3, 4, 5];
function Browse() {
   return (
      <div>
         <Navbar />
         <div className="max-w-7xl mx-auto my-10">
            <h1 className="font-bold text-xl my-10 ">
               Search Result({jobsearch.length})
            </h1>
            <div className="jobs_list grid grid-cols-3 gap-4 mt-5">
               {jobsearch.map((items, i) => {
                  return <Job />;
               })}
            </div>
         </div>
      </div>
   );
}

export default Browse;
