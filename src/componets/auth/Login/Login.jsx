import React, { useState } from "react";
import Navbar from "../../navbar/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { USER_API_END_POINT } from "../../ulitsApi/constant";
import { useDispatch, useSelector } from "react-redux";
import {setLoading, setUser} from "../../../redux/authslice.js";

function Login() {
   const [input, setInput] = useState({
      email: "",
      password: "",
      role: "",
   });
   const { loading } = useSelector((store) => store.auth);
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const changeEventHandler = (e) => {
      let formdata = { ...input };
      let inputName = e.target.name;
      let inputValue = e.target.value;
      formdata[inputName] = inputValue;
      setInput(formdata);
   };

   const submitHandler = async (e) => {
      e.preventDefault(); // Prevent the default form submission behavior
      try {
         dispatch(setLoading(true));
         const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
            headers: {
               "Content-Type": "application/json",
            },
            withCredentials: true,
         });
         if (res.data.success) {
            dispatch(setUser(res.data.user))
            navigate("/");
            toast.success(res.data.message);
         }
      } catch (error) {
         toast.error(error.response.data.message);
      } finally {
         dispatch(setLoading(false));
      }
   };

   return (
      <div className="main-container">
         <Navbar />
         <div className="font-serif flex items-center justify-center max-w-7xl mx-auto">
            <form
               onSubmit={submitHandler}
               action=""
               className="w-1/2 border border-gray-300 rounded-md p-4 my-10"
            >
               <h1 className="h1heading font-bold text-xl mb-5">Login</h1>

               <div className="lab_inp_box my-5 flex flex-col gap-2 text-center justify-center max-w-[70%] m-auto">
                  <label htmlFor="email">Email</label>
                  <input
                     type="email"
                     id="email"
                     placeholder="Enter your email"
                     name="email"
                     onChange={changeEventHandler}
                     value={input.email}
                  />
               </div>

               <div className="lab_inp_box my-5 flex flex-col gap-2 text-center justify-center max-w-[70%] m-auto">
                  <label htmlFor="password">Password</label>
                  <input
                     type="password"
                     id="password"
                     placeholder="Enter password"
                     name="password"
                     onChange={changeEventHandler}
                     value={input.password}
                  />
               </div>

               {/* Radio buttons */}
               <div className="flex max-w-[50%] m-auto items-center justify-between">
                  <div className="radio-btn">
                     <input
                        className="mx-3"
                        type="radio"
                        name="role"
                        value="student"
                        checked={input.role === "student"}
                        onChange={changeEventHandler}
                     />
                     <label className="" htmlFor="role-student">
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
                     <label htmlFor="role-recruiter">Recruiter</label>
                  </div>
               </div>

               <div className="text-center">
                  {loading ? (
                     <div className="spinner-border text-primary" role="status">
                        <span className="sr-only">Loading...</span>
                     </div>
                  ) : <button
                  type="submit"
                  className="sign-up-btn w-[80%] m-auto h-10 my-3 font-light bg-[#070e12]"
               >
                  Login
               </button>}
                  
               </div>
               <span>
                  Don't have an account?{" "}
                  <Link to="/signup" className="for_login_page text-[#4141b3]">
                     Click here
                  </Link>
               </span>
            </form>
         </div>
         <ToastContainer />
      </div>
   );
}

export default Login;
