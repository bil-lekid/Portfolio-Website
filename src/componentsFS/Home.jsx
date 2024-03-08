import React, { useRef } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Button } from "react-scroll";
import pasFoto from "../assets/pas foto.jpeg";
import "aos/dist/aos.css";
import { Element } from "react-scroll";

const Home = ({ animation }) => {
  return (
    <Element name="home">
      <div
        data-aos={animation}
        className="bg-[#0a192f] w-full h-screen flex justify-items-center"
      >
        {/* Container */}
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center items-center h-full">
          {/* Basic Info */}
          <div className="w-full ">
            <h1 className="text-[24px] sm:text-4xl md:text-5xl font-bold text-gray-300 inline-block">
              Hi, my name is
              <span className="text-pink-600"> Billy Huang</span>
            </h1>
            <h2 className="text-[18px] sm:text-[28px] md:text-[36px] font-bold text-gray-200">
              I'm a{" "}
              <span className="border-b-2 border-pink-600">
                Full Stack Developer
              </span>{" "}
            </h2>
          </div>
          <p className="text-[15px] sm:text-xl text-gray-200 py-4  text-justify max-w-[806px]">
            I have spent hundreds of hours grinding through FreeCodeCamp and
            projects. I fell in love with discovering new tools and solving
            problems. My mission is to help stakeholder make practical and
            appealing application, and to keep perfecting my crafts
          </p>
          <div className="flex lg:hidden justify-center ">
            <img
              className="w-32 sm:w-48 h-32 sm:h-48 object-cover rounded-full border-4 border-pink-600"
              src={pasFoto}
              alt="pas foto"
            />
          </div>
          <div className="mx-auto">
            <Button
              to="work"
              duration={500}
              smooth={true}
              className="group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 mt-6"
            >
              My Works
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </Button>
          </div>
        </div>
        <div className="hidden lg:flex flex-col justify-center mr-8 shrink-0">
          <img
            className="w-32 sm:w-48 h-32 sm:h-48 object-cover rounded-full border-4 border-pink-600 mu-2 mr-8"
            src={pasFoto}
            alt="pas foto"
          />
        </div>
      </div>
    </Element>
  );
};

export default Home;
