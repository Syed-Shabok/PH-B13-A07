import React from "react";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import twitter from "../../assets/twitter.png";

const Footer = () => {
  return (
    <footer className="bg-[#244d3f] pt-15 pb-5">
      <div className="container mx-auto px-5 space-y-4 ">
        <h1 className="text-5xl md:text-7xl font-extrabold text-center text-[#FFFFFF]">
          Keen<span className="font-semibold">Keeper</span>
        </h1>
        <p className="text-lg md:text-xl text-[#FFFFFF] text-center">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
        <h4 className="text-2xl text-[#FFFFFF] text-center font-semibold">
          Social Links
        </h4>
        <div className="flex items-center justify-center gap-3">
          <a href="">
            <img src={instagram} alt="Instagram Logo" />
          </a>
          <a href="">
            <img src={facebook} alt="Facebook Logo" />
          </a>
          <a href="">
            <img src={twitter} alt="Twitter Logo" />
          </a>
        </div>

        <hr className="bg-[#1a8862] h-0.5 mt-9" />

        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center py-4 gap-6 text-center md:text-left">
          <p className="md:text-xl text-[#fafafa]">
            © 2026 KeenKeeper. All rights reserved.
          </p>

          <div className="text-[#fafafa] text-sm md:text-lg flex gap-3 md:gap-6">
            <a href="">Privacy Policy</a>
            <a href="">Terms of Service</a>
            <a href="">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
