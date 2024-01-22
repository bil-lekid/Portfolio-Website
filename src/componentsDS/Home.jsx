import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import {Button} from 'react-scroll'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = ({animation}) => {
  return (
    <div data-aos={animation} name="home" className="bg-[#0a192f] w-full h-screen">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        
        {/* Basic Info */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-300">Hi, my name is  
        <span className="text-pink-600"> Billy Huang</span>
        </h1>
        <h2 className="text-[20px] sm:text-[28px] md:text-[36px] font-bold text-gray-200">
          I'm a <span className="border-b-2 border-pink-600">Data Scientist</span>
        </h2>
        <p className="text-xl text-gray-200 py-4 max-w-[620px] text-justify">
        A passionate Video Editor and Content Creator from Indonesia, Jakarta. Never shy of utilizing new technologies and non-stop improvement. Creator of two YouTube channels:
        </p>
        <div>
          <Button to="work" duration={500} smooth={true} className="group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
