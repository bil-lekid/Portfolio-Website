import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Button } from "react-scroll";
import { HiArrowNarrowRight } from "react-icons/hi";

const About = ({ animation }) => {
  return (
    <div
      data-aos={animation}
      data-aos-once="true"
      className="w-full h-screen bg-[#0a192f] text-gray-300 flex flex-col justify-center "
      name="about"
    >
      {/* container hitni_dota*/}
      <div className="flex flex-col justify-center items-center gap-2 md:gap-4 max-w-[1000px] mx-auto px-8">
        <div className="flex justify-center gap-8 items-center">
          <div>
            <p className="text-right underline decoration-pink-600 decoration-4 text-2xl md:text-4xl font-bold py-1">
              About <span className="block">hitni_dota</span>
            </p>
            <div className="hidden md:inline">
              <p className="text-xl text-justify max-w-[800px]">
                Hitni_dota is a Dota 2 channel that produces unique content by
                utilizing data science. The type of content involves short
                rampage videos uploaded on YouTube and TikTok, as well as
                watching Herald replays with very high scores .
              </p>
            </div>
          </div>
          <a href="https://www.youtube.com/@hitni_dota">
            <img
              className="h-[72px] md:h-[172px] rounded-full border-4 border-pink-600 m-1"
              src="https://yt3.googleusercontent.com/yxs7Zx7z6fehg1CSSxRdCXEUMGKjWCCOhTxwi7U2GseV4KPYw4JSKpBC5WOAgLrwGN69Ed97sYQ=s176-c-k-c0x00ffffff-no-rj"
              alt="hitni_dota"
            />
          </a>
        </div>
        <div className="md:hidden">
          <p className="text-[15px] mx-4 text-justify">
            Hitni_dota is a Dota 2 channel that produces unique content by
            utilizing data science. The type of content involves short rampage
            videos uploaded on YouTube and TikTok, as well as watching Herald
            replays with very high scores .
          </p>
        </div>
        <Button
          to="achievements"
          duration={500}
          smooth={true}
          className="group text-white border-2 px-6 py-3 my-2 mx-auto flex items-center hover:bg-pink-600 hover:border-pink-600"
        >
          Check Achievements
          <span className="group-hover:rotate-90 duration-300">
            <HiArrowNarrowRight className="ml-3 " />
          </span>
        </Button>
      </div>
      {/* container DBHobbyTV*/}
      <div className="flex flex-col justify-center items-center gap-2 md:gap-4 max-w-[1000px] mx-auto px-8">
        <div className="flex justify-center gap-8 items-center">
          <a href="https://www.youtube.com/@DBHobbyTV">
            <img
              className="h-[72px] md:h-[190px] rounded-full border-4 border-pink-600 m-1"
              src="https://yt3.googleusercontent.com/RtFJZZcYr1WWy_49APBGnWtaj7a97la30sAZ5qGRJESZ2s5lULdqXZQ8tUr_TOFXkw2XDJuogfw=s900-c-k-c0x00ffffff-no-rj"
              alt="dbhobbytv"
            />
          </a>
          <div>
            <p className="text-left underline decoration-pink-600 decoration-4 text-2xl md:text-4xl font-bold py-1">
              About <span className="block">DBHobbyTV</span>
            </p>
            <div className="hidden md:inline">
              <p className="text-xl text-justify max-w-[800px]">
                DBHobbyTV is a YouTube channel that my friends and I created.
                This channel creates manhwa (Korean comic) narrative content to
                read and summarize manhwa. I am responsible for content
                planning, video editing, script writing, and video editing.
                Unfortunately the channel has been closed due to video evidence
                copyright issues.
              </p>
            </div>
          </div>
        </div>
        <div className="md:hidden">
          <p className="text-[15px] mx-4 text-justify">
            DBHobbyTV is a YouTube channel that my friends and I created. This
            channel creates manhwa (Korean comic) narrative content to read and
            summarize manhwa. I am responsible for content planning, video
            editing, script writing, and video editing. Unfortunately the
            channel has been closed due to video evidence copyright issues.
          </p>
        </div>
        <Button
          to="achievements"
          duration={500}
          smooth={true}
          className="group text-white border-2 px-6 py-3 my-2 mx-auto flex items-center hover:bg-pink-600 hover:border-pink-600"
        >
          Check Achievements
          <span className="group-hover:rotate-90 duration-300">
            <HiArrowNarrowRight className="ml-3 " />
          </span>
        </Button>
      </div>
    </div>
  );
};

export default About;
