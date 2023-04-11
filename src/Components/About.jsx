import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full bg-gradient-to-b from-gray-800
    to-black text-white pt-20 md:pt-0"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pt-8">
          <p className="text-4xl font-bold border-b-4 border-gray-500 inline pt-4">
            About
          </p>
        </div>
        <p className="text-xl mt-6">
          I'm a self-taught Front-end developer from Pakistan. I build websites
          with a focus on providing the experience for everyone using them and
          responsiveness. Curious to learn more about developing scalable
          distribution systems, love problem solving, and care about writing and
          maintainable code. A responsive design makes your website accessible
          to all users, regardless of their devices.
        </p>
      </div>
    </div>
  );
};

export default About;
