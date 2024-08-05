import React, { useState } from "react";
import Navbar from "../../navbar/Navbar";
import "./signup.css";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { USER_API_END_POINT } from "../../ulitsApi/constant.js";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../../../redux/authslice";

function SignUp() {
   const [input, setInput] = useState({
      fullname: "",
      email: "",
      phoneNumber: "",
      password: "",
      role: "",
      file: "",
   });
   const navigate = useNavigate();
   const loading = useSelector((state) => state.auth);
   const dispatch = useDispatch();
   const changeEventHandler = (e) => {
      let formdata = { ...input };
      let inputName = e.target.name;
      let inputValue = e.target.value;
      formdata[inputName] = inputValue;
      setInput(formdata);
   };
   const changeFileHandler = (e) => {
      setInput({ ...input, file: e.target.files?.[0] });
   };
   const submitHeandler = async (e) => {
      e.preventDefault(); // Prevent the default form submission behavior

      const formData = new FormData();
      formData.append("fullname", input.fullname);
      formData.append("email", input.email);
      formData.append("phoneNumber", input.phoneNumber);
      formData.append("password", input.password);
      formData.append("role", input.role);
      if (input.file) {
         formData.append("file", input.file);
      }

      try {
         dispatch(setLoading(true));
         const res = await axios.post(
            `${USER_API_END_POINT}/register`,
            formData,
            {
               headers: {
                  "Content-Type": "multipart/form-data",
               },
               withCredentials: true,
            }
         );
         if (res.data.success) {
            toast.success(res.data.message);
            navigate("/login"); // Navigate only if the registration is successful
         }
      } catch (error) {
         toast.error(error.response?.data?.message || "Registration failed");
      } finally {
         dispatch(setLoading(false));
      }
   };
   return (
      <div className="main-cntainer ">
         <Navbar />
         <ToastContainer />
         <div className=" font-serif flex items-center justify-center max-w-7xl mx-auto">
            <form
               onSubmit={submitHeandler}
               action=""
               className="w-1/2 border border-gray-300 rounded-md p-4 my-10"
            >
               <h1 className="h1heading font-bold text-xl mb-5">Sign Up</h1>
               <div className="lab_inp_box my-5 flex flex-col gap-2 text-center justify-center max-w-[70%] m-auto">
                  <label htmlFor="">Full Name</label>
                  <input
                     type="text"
                     id=""
                     placeholder="Enter your full name"
                     name="fullname"
                     onChange={changeEventHandler}
                     value={input.fullname}
                  />
               </div>
               <div className="lab_inp_box my-5 flex flex-col gap-2 text-center justify-center max-w-[70%] m-auto">
                  <label htmlFor="">Email</label>
                  <input
                     type="email"
                     id=""
                     placeholder="Enter your email"
                     name="email"
                     onChange={changeEventHandler}
                     value={input.email}
                  />
               </div>
               <div className="lab_inp_box my-5 flex flex-col gap-2 text-center justify-center max-w-[70%] m-auto">
                  <label htmlFor="">Phone Number</label>
                  <input
                     type="phone"
                     id=""
                     placeholder="Enter your Phone"
                     name="phoneNumber"
                     onChange={changeEventHandler}
                     value={input.phoneNumber}
                  />
               </div>
               <div className="lab_inp_box my-5 flex flex-col gap-2 text-center justify-center max-w-[70%] m-auto">
                  <label htmlFor="">Password</label>
                  <input
                     type="password"
                     id=""
                     placeholder="Enter password"
                     name="password"
                     onChange={changeEventHandler}
                     value={input.password}
                  />
               </div>

               {/* // radio buttons */}
               <div className="flex max-w-[50%] m-auto items-center justify-between ">
                  <div className="radio-btn ">
                     <input
                        className="mx-3"
                        type="radio"
                        name="role"
                        value="student"
                        checked={input.role === "student"}
                        onChange={changeEventHandler}
                     />
                     <label className="" htmlFor="">
                        Student
                     </label>
                  </div>
                  <div>
                     <input
                        className="mx-3"
                        type="radio"
                        name="role"
                        value="recruiter"
                        checked={input.role === "recruiter"}
                        onChange={changeEventHandler}
                     />
                     <label htmlFor="">Recruiter</label>
                  </div>
               </div>
               <div className=" felx text-center my-2 justify-center max-w-[50%] m-auto  ">
                  <label className="mx-3" htmlFor="">
                     Profile
                  </label>
                  <input
                     type="file"
                     className="cursor-pointer"
                     accept="image/*"
                     onChange={changeFileHandler}
                  />
               </div>
               <div className="text-center">
                  {!loading ? (
                     <div className="spinner-border text-primary" role="status">
                        <span className="sr-only">Loading...</span>
                     </div>
                  ) : (
                     <button
                        type="submit"
                        className="sign-up-btn w-[80%] m-auto h-10 my-3 font-light bg-[#070e12]"
                     >
                        SignUp
                     </button>
                  )}
               </div>
               <span>
                  Already have an account?{" "}
                  <Link to="/login" className="for_login_page  text-[#4141b3]">
                     Click here
                  </Link>
               </span>
            </form>
         </div>
      </div>
   );
}

export default SignUp;
