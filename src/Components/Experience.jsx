import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import github from "../assets/git.png";
import node from "../assets/node.png";
import mongodb from "../assets/mongodb.png";

const Experience = () => {
  const experience = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: js,
      title: "Javascript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: react,
      title: "React",
      style: "shadow-blue-600",
    },

    {
      id: 5,
      src: node,
      title: "Node-JS",
      style: "shadow-green-800",
    },
    {
      id: 6,
      src: mongodb,
      title: "Mongo-DB",
      style: "shadow-green-500",
    },
    {
      id: 7,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400 ",
    },
  ];
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full min-h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 text-center gap-8 py-8 px-12 sm:px-0">
          {experience.map((item) => (
            <div
              key={item.id}
              className={`shadow-md  hover:scale-105 duration-500 py-2 rounded-lg ${item.style}`}
            >
              <img src={item.src} alt="experiences" className="w-20 mx-auto" />
              <p className="mt-4">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
