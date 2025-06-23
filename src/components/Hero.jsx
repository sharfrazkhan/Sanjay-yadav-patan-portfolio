import React from "react";
import image1 from "../images/patan.jpg";
import "./Hero.css";

const Hero = () => (
  <section className="hero py-8">
    <div className="flex flex-col md:flex-row justify-between items-center flex-wrap max-w-[1200px] mx-auto px-4 w-full gap-6">
      
      {/* Text Section */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          Sanjay Yadav Patan
        </h1>
        <h2 className="text-lg md:text-2xl font-semibold mb-3 text-[#CDD5DF]">
          (Social worker, Political activist, Politician)
        </h2>
        <p className="text-sm md:text-md leading-relaxed">
          Leadership doesn’t begin with a title,<br />
          it begins with service. I have walked with people,<br />
          worked for people, and now I’m ready to lead for the people.
        </p>
      </div>

      {/* Image Section */}
      <div className="w-[200px] h-[200px] md:w-[260px] md:h-[260px] rounded-full bg-primary-500 text-white flex items-center justify-center text-[28px] font-bold">
        <img
          src={image1}
          alt="Sanjay Yadav Patan"
          className="w-full h-full rounded-full object-cover"
        />
      </div>
      
    </div>
  </section>
);

export default Hero;
