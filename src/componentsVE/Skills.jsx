import React from "react";

import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import FireBase from "../assets/firebase.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import Mongo from "../assets/mongo.png";
import AfterEffect from "../assets/skills/after-effect.png";
import Gimp from "../assets/skills/gimp.png";

const Skills = () => {
  return (
    <div
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
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.imagensempng.com.br%2Fwp-content%2Fuploads%2F2020%2F12%2Fpremiere.png&f=1&nofb=1&ipt=2957dd8a799f0663cb1168a891df8be74b53c271ae401219201dfe4ab94b3e4d&ipo=images"
              alt=""
            />
            <p className="my-4">Premiere Pro</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fresource.logitech.com%2Fw_1800%2Ch_1800%2Cc_limit%2Cq_auto%2Cf_auto%2Cdpr_1.0%2Fcontent%2Fdam%2Flogitech%2Fen%2Fmx%2Fadobe-creative-cloud-subscription%2Ficon_aftereffect.png%3Fv%3D1&f=1&nofb=1&ipt=5bfa85dc84997f691d5d80b69033ba3917d9d47218af9cf4a8533721396d1797&ipo=images"
              alt=""
            />
            <p className="my-4">After Effect</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogosdownload.com%2Flogo%2Fgimp-logo-512.png&f=1&nofb=1&ipt=93bf5342ce0ea3cc5e0e69ae1bfdc191f5ff22139927f22eefaec7f78bfeb7df&ipo=images"
              alt=""
            />
            <p className="my-4">Gimp</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets.stickpng.com%2Fimages%2F62b1fefc8309c32ce1623ded.png&f=1&nofb=1&ipt=b215a1c0376d776c9086251f638e12ecc14e5e8d1f71dab4af13980dfa2b3b2f&ipo=images"
              alt=""
            />
            <p className="my-4">Canva</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.iconscout.com%2Ficon%2Ffree%2Fpng-512%2Fdata-science-46-1170621.png&f=1&nofb=1&ipt=b8651303079c8aca88e21ce024000b2536662ed440c79397bc674fe0ab66cddc&ipo=images' alt="" />
            <p className="my-4">Data Science</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets.stickpng.com%2Fimages%2F5848152fcef1014c0b5e4967.png&f=1&nofb=1&ipt=246c0b416213d7cacf3a807762100aff851f99c2fb2940c96a2a83d8894ea3ac&ipo=images"
              alt=""
            />
            <p className="my-4">Python</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
