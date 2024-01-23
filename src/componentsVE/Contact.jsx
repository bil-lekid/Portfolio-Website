import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Aos from "aos";
import "aos/dist/aos.css";

const Contact = ({ animation }) => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] p-4 pb-0 flex flex-col items-center"
    >
      <form
        data-aos="zoom-in-right"
        data-aos-once={true}
        method="POST"
        action="https://getform.io/f/f69ef934-cd94-4b64-86af-04a724b3d94c"
        className="flex flex-col max-w-[600px] w-full pt-20 my-auto mx-auto "
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            // Submit the form below or shoot me an email -
            billyhuangb5@gmail.com
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2 max-h-32"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto items-center">
          Let's Collaborate
        </button>
      </form>
      <div className="xl:hidden z-10">
        <ul className="flex gap-4">
          <li className="p-3 duration-300 bg-blue-600">
            <a
              className="flex justify-between  w-[1/6vw] text-gray-300"
              target="_blank"
              href="https://www.linkedin.com/in/billy-huang-data-science-enthusiast/"
            >
              <FaLinkedin size={30} />
            </a>
          </li>
          <li className="p-3  duration-300 bg-[#333333]">
            <a
              className="flex justify-between  w-[1/6vw] text-gray-300 "
              target="_blank"
              href="https://github.com/bil-lekid/HeraldReplayGet"
            >
              <FaGithub size={30} />
            </a>
          </li>
          <li className="p-3  duration-300 bg-[#6fc2b0]">
            <a
              className="flex justify-between  w-[1/6vw] text-gray-300"
              target="_blank"
              href="https://mail.google.com/mail/?view=cm&to=billyhuangb5@gmail.com"
            >
              <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="p-3  duration-300 bg-[#565f69]">
            <a
              className="flex justify-between  w-[1/6vw] text-gray-300"
              target="_blank"
              href="https://docs.google.com/document/d/1K-gNHJdkoemRzNpBYm-ZuijN-CFeL8Ve073bPTtfNrs/edit?usp=sharing"
            >
              <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
