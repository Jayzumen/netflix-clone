import React from "react";
import SavedMovies from "../components/SavedMovies";

const Account = () => {
  return (
    <>
      <div className="w-full text-white">
        <img
          className=" w-full h-[400px] object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/271ac55e-7228-438e-824e-92db37981e59/f011ac74-9a96-486b-9b0b-0244533802c4/DE-en-20220627-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="Netflix Background"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-[550px]"></div>
        <div className="absolute top-[20%] p-4 md:p-8">
          <h1 className="text-7xl md:text-5xl font-bold">My Movies</h1>
        </div>
      </div>
      <SavedMovies />
    </>
  );
};

export default Account;
