import React from "react";
import LatestJobsCard from "./LatestJobsCard";

const randomsjobs = [1, 3, 5, 2, 5, 7, 8, 9.7];
function LatestJobs() {
   return (
      <div className="mx-auto max-w-7xl my-20">
         <h1 className="text-4xl font-bold">
            <span className="text-[#3b3beb] ml-4">Latest & Top </span>Job
            Opening
         </h1>
         {/* all jobs cards */}
         <div className="grid grid-cols-3 my-5 gap-4">
            {randomsjobs.slice(0,6).map((items, i) => (
               <LatestJobsCard />
            ))}
         </div>
      </div>
   );
}

export default LatestJobs;
