import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './category.css'
import { Carousel } from "react-responsive-carousel";
const category = [
   "FrontEnd Developer",
   "BackEnd Developer",
   "Full Stack Developer",
   "Data Scientist",
   "Mobile Developer",
   "Fresher Engineer",
   "Web Developer",
];

function CategoryCorousel() {
   return (
      <>
         <div className="my-3 flex flex-wrap text-center m-auto ">
            <Carousel className="scroller justify-center text-center max-w-[50%] m-auto bg-slate-200 my-5 h-0">
               {category.map((item, index) => (
                  <div className=" " key={index}>
                     <span className="items_category">{item}</span>
                  </div>
               ))}
            </Carousel>
         </div>
      </>
   );
}

export default CategoryCorousel;
