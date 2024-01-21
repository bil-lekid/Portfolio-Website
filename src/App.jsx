import { useEffect, useState } from "react";
import "./App.css";
import VideoEditor from "./Pages/VideoEditor.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import React from "react";
import Portrait from "./assets/pas foto.jpeg";
import Aos from "aos";
import 'aos/dist/aos.css'

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    Aos.init({duration:2000})
  }, [])
  
  return (
    <div className="bg-[#0a192f] w-full h-screen flex flex-col justify-center items-center">
      <img className="h-96 w-96 rounded-full object-cover border-4 border-pink-600 mb-10" src={Portrait} alt="billy" />
      <div className="w-full grid grid-cols-3 gap-2 justify-stretch px-3 text-2xl" data-aos="flip-right">
        <button className="md:scale-150 h-[92px] w-[153px] text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto items-center">
          Data Scientist
        </button>
        <button
          onClick={() => navigate("/video-editor")}
          className="md:scale-150 h-[92px] w-[153px] text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto items-center"
        >
          Video Editor
        </button>
        <button className="md:scale-150 h-[92px] w-[153px] text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto items-center">
          Full Stack Engineer
        </button>
      </div>
    </div>
  );
};

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/video-editor" element={<VideoEditor />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
