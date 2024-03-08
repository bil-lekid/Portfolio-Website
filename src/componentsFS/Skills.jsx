import React from "react";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import AppWrite from "../assets/appwrite.png";
import Redux from "../assets/redux.png";
import Mongo from "../assets/mongo.png";

const Card = ({ image, title }) => {
  return (
    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
      <img className="w-20 mx-auto" src={image} alt="" />
      <p className="my-4">{title}</p>
    </div>
  );
};

const Skills = ({ animation }) => {
  return (
    <div
      data-aos-once={true}
      data-aos={animation}
      name="skills"
      className="bg-[#0a192f] text-gray-300 w-full h-screen p-4"
    >
      {/* container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full pt-20 md:pt-4">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
            Skills
          </p>
          <p className="py-4">
            // These are the software/skills I've worked with
          </p>
        </div>

        {/* skills container */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center py-8">
          <Card image={HTML} title="HTML" />
          <Card image={CSS} title="CSS" />
          <Card image={JavaScript} title="JavaScript" />
          <Card image={ReactImg} title="React" />
          <Card image={GitHub} title="Github" />
          <Card image={Tailwind} title="TailWindCSS" />
          <Card image={AppWrite} title="AppWrite" />
          <Card image={Redux} title="Redux" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
