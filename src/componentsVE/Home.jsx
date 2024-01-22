import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Button } from "react-scroll";
import Aos from "aos";
import "aos/dist/aos.css";
import Gaben from "../assets/gaben_PP.png";

const Home = ({ animation }) => {
  return (
    <div
      data-aos={animation}
      name="home"
      className="bg-[#0a192f] w-full h-screen flex justify-items-center"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center items-center h-full">
        {/* Basic Info */}
        <div className="w-full ">
          <h1 className="text-[28px] sm:text-4xl md:text-5xl font-bold text-gray-300 inline-block">
            Hi, my name is
            <span className="text-pink-600"> Billy Huang</span>
          </h1>
          <h2 className="text-[20px] sm:text-[28px] md:text-[36px] font-bold text-gray-200">
            I'm a{" "}
            <span className="border-b-2 border-pink-600">Video editor</span> /{" "}
            <span className="border-b-2 border-pink-600">content creator</span>
          </h2>
        </div>
        <p className="text-xl text-gray-200 py-4  text-justify max-w-[806px]">
          A passionate Video Editor and Content Creator from Indonesia, Jakarta. Never shy of utilizing new technologies and non-stop improvement. Creator of two YouTube channels:
        </p>
        <div className="flex lg:hidden justify-center ">
          <a href="https://www.youtube.com/@hitni_dota">
            <img
              className="w-48 rounded-full mr-8 border-4 border-pink-600"
              src="https://yt3.googleusercontent.com/yxs7Zx7z6fehg1CSSxRdCXEUMGKjWCCOhTxwi7U2GseV4KPYw4JSKpBC5WOAgLrwGN69Ed97sYQ=s176-c-k-c0x00ffffff-no-rj"
              alt="hitni_dota"
            />
          </a>
          <a href="https://www.youtube.com/@DBHobbyTV">
            <img
              className="w-48 rounded-full  border-4 border-pink-600 ml-8"
              src="https://yt3.googleusercontent.com/RtFJZZcYr1WWy_49APBGnWtaj7a97la30sAZ5qGRJESZ2s5lULdqXZQ8tUr_TOFXkw2XDJuogfw=s900-c-k-c0x00ffffff-no-rj"
              alt="dbhobbytv"
            />
          </a>
        </div>
        <div>
          <Button
            to="about"
            duration={500}
            smooth={true}
            className="group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600"
          >
            About these channels
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </Button>
        </div>
      </div>
      <div className="hidden lg:flex flex-col justify-center mr-8 shrink-0">
          <a href="https://www.youtube.com/@hitni_dota">
            <img
              className="w-48 rounded-full mb-2 border-4 border-pink-600 mr-8"
              src="https://yt3.googleusercontent.com/yxs7Zx7z6fehg1CSSxRdCXEUMGKjWCCOhTxwi7U2GseV4KPYw4JSKpBC5WOAgLrwGN69Ed97sYQ=s176-c-k-c0x00ffffff-no-rj"
              alt="hitni_dota"
            />
          </a>
          <a href="https://www.youtube.com/@DBHobbyTV">
            <img
              className="w-48 rounded-full  border-4 border-pink-600 mu-2 mr-8"
              src="https://yt3.googleusercontent.com/RtFJZZcYr1WWy_49APBGnWtaj7a97la30sAZ5qGRJESZ2s5lULdqXZQ8tUr_TOFXkw2XDJuogfw=s900-c-k-c0x00ffffff-no-rj"
              alt="dbhobbytv"
            />
          </a>
        </div>
    </div>
  );
};

export default Home;
