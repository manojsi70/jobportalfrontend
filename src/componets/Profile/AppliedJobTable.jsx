import React from "react";

const arry = [1, 2, 3, 4, 5, 6];
function AppliedJobTable() {
   return (
      <div className="mt-3 w-full">
         <table className="w-full">
            <thead className="table_header h-10">
               <tr className="text-justify ">
                  <th>Date</th>
                  <th>Job Role</th>
                  <th>Company</th>
                  <th>Staus</th>
               </tr>
            </thead>
            <tbody className="gap-4 m-4">
               {arry.map((item, i) => {
                  return (
                     <tr className="" key={i}>
                        <td>05/08/2024</td>
                        <td>Frontend developer</td>
                        <td>Google</td>
                        <td className=" border-gray-100 rounded-sm">Panding</td>
                     </tr>
                  );
               })}
            </tbody>
         </table>
      </div>
   );
}

export default AppliedJobTable;
