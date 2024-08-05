import React from "react";

const filterData = [
   {
      filterType: "Location",
      array: ["Delhi NCR", "Delhi", "Banglore", "pune", "Noida"],
   },
   {
      filterType: "Company",
      array: ["Google", "Facebook", "Apple", "Microsoft", "Tesla"],
   },
   {
      filterType: "Experience",
      array: ["1-3 years", "3-5 years", "5+ years", "Fresher"],
   },
   {
      filterType: "salary",
      array: ["0-30k", "30k-50k", "50k-70k", "70k-90k", "90k+"],
   },
   {
      filterType: "position",
      array: [
         "Software Engineer",
         "Frontend",
         "BackEnd developer",
         "web Developer",
         "Senior Software Engineer",
         "Product Manager",
         "Project Manager",
         "Data Scientist",
      ],
   },
];
function FilterCard() {
   return (
      <div className="w-full bg-white p-3 rounded-md ">
         <h1>Filter Jobs</h1>
         <hr className="mt-3" />
         <div className="">
            {filterData.map((data, i) => (
               <div>
                  <h1 className="font-bold text-lg">{data.filterType}</h1>
                {
                    data.array.map((item, i)=>{
                        return(
                            <div className="flex items-center space-x-2 my-2 gap-1">
                                <input type="radio" id={item} name={item} value={item}/>
                                <label htmlFor={item}>{item}</label>
                            </div>
                        )
                    }

                    )
                }
               </div>
            ))}
         </div>
      </div>
   );
}

export default FilterCard;
