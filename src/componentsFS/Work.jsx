import React from "react";
import megaProject from "../assets/projects/hitni-blog-app.png";
import freeCCRWS from "../assets/Achievements/FCC-responsive-cert.png";
import freeCCJS from "../assets/Achievements/FCC-javascript-cert.png";

const Work = ({ animation }) => {
  return (
    <div
      name="work"
      className="bg-[#0a192f] w-full flex flex-col h-auto md:min-h-[804px] md:h-screen text-gray-300 pt-20"
    >
      <div
        name="free-code-camp"
        className="max-w-[1000px] mx-auto px-4 flex flex-col justify-center w-full h-full"
      >
        <div className="">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6">
            //{" "}
            <a
              className="underline text-blue-300 hover:text-pink-600"
              href="https://www.freecodecamp.org/Billy_Huang"
              target="_blank"
            >
              FreeCodeCamp
            </a>{" "}
          </p>
        </div>

        {/* container FreeCodeCamp */}
        <div
          data-aos-once="true"
          data-aos={animation}
          className="grid sm:grid-cols-2 gap-4"
        >
          {/* grid item */}
          <div
            style={{
              backgroundImage: `url(${freeCCRWS})`,
            }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <p className="text-2xl text-center font-bold text-white tracking-wider">
                Responsive Web Design Course
              </p>
              <div className="pt-8 text-center">
                <a
                  href="https://www.freecodecamp.org/certification/Billy_Huang/responsive-web-design"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    See Certification
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* grid item */}
          <div
            style={{
              backgroundImage: `url(${freeCCJS})`,
            }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <p className="text-center text-2xl font-bold text-white tracking-wider">
                Legacy JavaScript Algorithms and Data Structures Certification
              </p>
              <div className="pt-8 text-center">
                <a
                  href="https://www.freecodecamp.org/certification/Billy_Huang/javascript-algorithms-and-data-structures"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    See Certification
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        name="mega-project"
        className="max-w-[1000px] mx-auto px-4 flex flex-col justify-center w-full h-full py-5"
      >
        <div className="text-right">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Mega Project
          </p>
          <p className="py-6">
            //{" "}
            <a
              className="underline text-blue-400 hover:text-pink-600"
              href="https://www.youtube.com/watch?v=Bvwq_S0n2pk&t=43362s&pp=ygUScmVhY3QgY3Jhc2ggY291cnNl"
              target="_blank"
            >
              Full Stack React Developer Course with Appwrite by Hitesh from
              FreeCodeCamp
            </a>
          </p>
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
              backgroundImage: `url(https://img.youtube.com/vi/Bvwq_S0n2pk/maxresdefault.jpg)`,
            }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <p className="text-2xl text-center font-bold text-white tracking-wider">
                11 Learning Project
              </p>
              <div className="pt-8 text-center">
                <a
                  href="https://github.com/bil-lekid/learn-react"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    View Projects
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* grid item */}
          <div
            style={{ backgroundImage: `url(${megaProject})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <p className="text-center text-2xl font-bold text-white tracking-wider">
                Mega Project: Blog App
              </p>
              <div className="pt-8 text-center">
                <a
                  href="https://github.com/bil-lekid/learn-react/tree/main/11blogapp"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    View Project
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
