import React from "react";
import HeroImage from "../assets/me.jpg";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <div
      name="home"
      className=" h-screen w-full px-2 bg-gradient-to-b from-black to-gray-800 pt-52"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row ">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a React Developer 
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I have  6 months of experience currently learning to become a fullstack developer.
            Currently, I love to work on web application using technologies like
            React, Tailwind, NodeJS, MongoDB, ExpressJS.
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className=" group text-white w-fit flex items-center px-6 py-3 my-2 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 gap-1"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdKeyboardArrowRight size={25} />
              </span>
            </Link>
          </div>
        </div>

        <div className="w-2/3 sm:w-1/3">
          <img
            src={HeroImage}
            alt="my profiles"
            className="rounded-2xl mt-3 "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
