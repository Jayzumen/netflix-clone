import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 z-[100] absolute w-full">
      <img
        className="cursor-pointer"
        src="https://i.ibb.co/r5krrdz/logo.png"
        alt="Netflix Logo"
        width={150}
      />
      <div>
        <button className="text-white pr-4">Sign In</button>
        <button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
