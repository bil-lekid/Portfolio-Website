import React from "react";
import shortAchievements from "../assets/Achievements/Achievements-Short.png";
import shortAchievementsFull from "../assets/Achievements/Achievement-shorts-full.png";
import tiktokAchievements from "../assets/Achievements/Achievement-tiktok-full.png";
import gul from "../assets/Achievements/gul.png";
import axe from "../assets/Achievements/axe_huskar_thumbnail.png";
import longAchievements from "../assets/Achievements/Achievements-longDB.png";

const Work = ({ animation }) => {
  return (
    <div
      name="work"
      className="bg-[#0a192f] w-full flex flex-col md:h-screen text-gray-300"
    >
      <div
        name="achievement-hitni"
        className="max-w-[1000px] mx-auto px-4 flex flex-col justify-center w-full h-screen md:h-full pt-20"
      >
        <div className="pb8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Achievements
          </p>
          <p className="py-6">// hitni_dota achievements</p>
        </div>

        {/* container hitni_dota */}
        <div
          data-aos-once="true"
          data-aos={animation}
          className="grid sm:grid-cols-2 gap-4"
        >
          {/* grid item */}
          <div
            style={{
              backgroundImage: `url(${axe})`,
            }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <p className="text-2xl text-center font-bold text-white tracking-wider">
                hitni_dota: 38k Views Dota Video
              </p>
              <div className="pt-8 text-center">
                <a
                  href="https://www.youtube.com/watch?v=E-LHvjpFs88"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Watch Video
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* grid item */}
          <div
            style={{ backgroundImage: `url(${shortAchievements})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <p className="text-center text-2xl font-bold text-white tracking-wider">
                Shorts and Tiktok Achievements img
              </p>
              <div className="pt-8 text-center">
                <a href={shortAchievementsFull} target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Youtube
                  </button>
                </a>
                <a href={tiktokAchievements} target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Tiktok
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        name="achievement-dbhobbytv"
        className="max-w-[1000px] mx-auto px-4 flex flex-col justify-center w-full h-screen md:h-full md:py-0"
      >
        <div className="pb8 text-right">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Achievements
          </p>
          <p className="py-6">// DBHobbyTv achievement</p>
        </div>
        {/* container dbhobbyTV */}
        <div
          data-aos-once="true"
          data-aos="fade-in-left"
          className="grid sm:grid-cols-2 gap-4"
        >
          {/* grid item */}
          <div
            style={{
              backgroundImage: `url(${gul})`,
            }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <p className="text-2xl text-center font-bold text-white tracking-wider">
                DBHobbyTV: 296K views Video
              </p>
              <div className="pt-8 text-center">
                <a
                  href="https://www.youtube.com/watch?v=8CSUFxz2pto&t=1s"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Watch Video
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* grid item */}
          <div
            style={{ backgroundImage: `url(${longAchievements})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <p className="text-center text-2xl font-bold text-white tracking-wider">
                DBHobbyTV Channel Proof
              </p>
              <div className="pt-8 text-center">
                <a href='https://youtu.be/W8BifZcdBWE' target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Proof Video
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
