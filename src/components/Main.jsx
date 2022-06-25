import axios from "axios";
import React, { useEffect, useState } from "react";
import requests from "../Requests";
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";

const Main = () => {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);
  console.log(movie);

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div className="w-full h-[550px] lg:h-[750px] text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] lg:h-[750px] bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-cover md:object-fill"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className="absolute w-full top-[20%] lg:top-[35%] sm:top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            {movie?.title}
          </h1>
          <div className="my-4">
            <button className=" bg-white text-black py-2 px-8 font-bold text-2xl rounded text-center mr-4">
              <FaPlay className="inline mr-3 h-8 w-8 mb-1" />
              Play
            </button>
            <button className=" text-white font-bold text-2xl py-2 px-8 mt-4 sm:mt-0  ml-0 rounded bg-gray-600 ">
              <AiOutlineInfoCircle className="inline mr-3 h-9 w-9 mb-1" />
              More Info
            </button>
          </div>
          <p className="text-gray-400 text-sm">
            Released: {movie?.release_date}
          </p>
          <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
            {truncateString(movie?.overview, 300)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
