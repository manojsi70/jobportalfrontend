import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import 'react-toastify/dist/ReactToastify.css';
import Home from "./componets/Home/Home";
import Login from "./componets/auth/Login/Login";
import SignUp from "./componets/auth/SignUp/SignUp";
import Jobs from "./componets/pages/Jobs";
import Browse from "./componets/pages/Browse";
import Profile from "./componets/Profile/Profile";

const appRouter = createBrowserRouter([
   {
      path: "/",
      element: <Home />,
   },
   {
      path: "/login",
      element: <Login />,
   },
   {
      path: "/signup",
      element: <SignUp />,
   },
   {
      path:"/jobs",
      element:<Jobs/>
   },
   {
      path:"/browse",
      element:<Browse/>
   },
   {
      path:"/profile",
      element:<Profile/>
   }
]);
function App() {
   return (
      <>
         <RouterProvider router={appRouter} />
      </>
   );
}

export default App;
