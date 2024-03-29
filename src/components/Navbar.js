import React from "react";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Signin from "./Signin";
import Logout from "./Logout";
const Navbar = () => {
  const [user]=useAuthState(auth)
  return (
    <div className="bg-gray-800 h-20 flex justify-between items-center p-4">

    <h1 className=" text-white text-3xl">Chat App</h1>
    {user? <Logout></Logout>: <Signin></Signin>}
    
    
    </div>
  );
};

export default Navbar;
