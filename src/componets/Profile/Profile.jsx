import React from "react";
import Navbar from "../navbar/Navbar";
import { MdEdit } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import AppliedJobTable from "./AppliedJobTable";

const skills = [
   "Frontend developer",
   "Web developer",
   "HTML",
   "CSS",
   "JavaScript",
   "React.js",
   "MongoDB",
   "Python",
];

const isResume = true;
function Profile() {
   return (
      <div>
         <Navbar />
         <div className="max-w-7xl mx-auto bg-white border-gray-200 rounded-2xl my-6 p-8">
            <div className="flex items-center gap-4">
               <div className="flex items-center gap-4">
                  <div className="h-24 w-24 ">
                     <img
                        src="https://www.logodesign.net/logo/line-art-buildings-in-swoosh-1273ld.png?nwm=1&nws=1&industry=company&sf=&txt_keyword=All"
                        alt="profile"
                     />
                  </div>
                  <div className="">
                     <h1 className="font-bold text-xl gap-3">Full Name</h1>

                     <p className="text-sm font-light">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Neque soluta expedita error eaque maiores sint
                        placeat dolor similique ut veritatis!
                     </p>
                  </div>
                  <button>
                     <MdEdit />
                  </button>
               </div>
            </div>
            <div className=" flex items-center gap-4 my-2">
               <CiMail />
               <span>manoj43898@gmail.com</span>
            </div>
            <div className="flex items-center gap-4">
               <FaPhoneAlt />
               <span>+91 1234567890</span>
            </div>
            <div className="bg-slate-100 border border-gray-200 rounded-md mt-4">
               <h1 className="my-4 ml-5">Skills.</h1>
               <div className="flex flex-wrap gap-6 ">
                  {skills.length !== 0 ? (
                     skills.map((items, i) => {
                        return (
                           <div key={i} className="flex flex-wrap items-center">
                              <span className="p-1 mr-2 bg-[#767af4] text-[#000000] border border-white rounded-md mb-3">
                                 {items}
                              </span>
                           </div>
                        );
                     })
                  ) : (
                     <span>Add your skills</span>
                  )}
               </div>
            </div>
            <div className="my-3">
               <label className="font-bold text-xl border-none" htmlFor="">
                  Resume :
               </label>
               <div className="flex items-center gap-1">
                  {isResume ? (
                     <a
                        className="text-[#2f2f80] w-full hover:underline cursor-pointer"
                        target="blank"
                        href="https://manojsiportfolio.netlify.app/"
                     >
                        Manoj Portfolio
                     </a>
                  ) : (
                     <span>Upload Your Resume</span>
                  )}
               </div>
            </div>
            <div className="">
               <h1 className="font-bold text-lg m-3 ">Applied Jobs</h1>
               <AppliedJobTable className="" />
            </div>
         </div>
      </div>
   );
}

export default Profile;
