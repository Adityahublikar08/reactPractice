import React from "react";
import { FaRegPlayCircle } from "react-icons/fa";
import { MdFacebook } from "react-icons/md";
import { IoLogoInstagram } from "react-icons/io5";
import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import './Nav.css'
function Home() {
  const navigate = useNavigate();
    const handleNav=()=>{
        navigate('/plans')
    }
  return (
    <div
      style={{
        display: "flex",
        padding: "20px",
      }}
    >
      <div>
        <div>
          <h1 style={{ fontWeight: "bold", fontSize: "80px",textShadow:"1px 1px 1px whitesmoke" }}>
            ELEVATE YOUR <br />
            WORKOUT
          </h1>
        </div>
        <div style={{ textJustify: "auto",zIndex:"3", color: "whitesmoke", fontSize: "16px",textShadow:"1px 1px 1px black" }}>
          Every athlete that stepped onto that platform wasn’t just lifting
          weights—they were lifting their own limits, breaking barriers, and
          showing us what unstoppable truly means. From the heart-pounding
          cheers to the jaw-dropping lifts, the vibe was off the charts! The
          medals, the trophies, the records—they’re not just wins, they’re
          stories of hard work, discipline, and relentless energy. And let’s not
          forget the crowd… YOU fueled this fire. The event may be over, but the
          journey continues.
        </div>
        <div style={{ display: "flex", padding: "20px", gap: "30px" }}>
          <button
            style={{
              backgroundColor: "black",
              height: "60px",
              width: "max-content",
              border:"none"
            }}
            onClick={handleNav}
          >
            Get Started
          </button>
          <button
            style={{ border: "none", height: "60px", width: "max-content",backgroundColor:"orangered" }}
          >
            <FaRegPlayCircle /> Play Video
          </button>
        </div>
        <div
          style={{
            display: "flex",
            gap: "20px",
            fontSize: "30px",
            padding: "30px",
          }}
        >
          <MdFacebook />
          <IoLogoInstagram />
          <CiLinkedin />
          <FiGithub />
        </div>
      </div>
      <div id="ds"
        style={{ width: "max-content", position: "relative", right: "`200px", }}
      >
        <img src="/body.png" alt="" height="95%" />
      </div>
    </div>
  );
}

export default Home;
