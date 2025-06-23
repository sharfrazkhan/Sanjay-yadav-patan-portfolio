import React from "react";
import image1 from "../images/patan.jpg";
import "./Hero.css";
const Hero = () => (
  <section className="hero">
    <div className="flex justify-between items-center flex-wrap max-w-[1200px] mx-auto px-4 w-full">
      <div className="flex flex-col">
      <h1 className="text-4xl font-bold mb-[5px]">Sanjay Yadav Patan <br/> </h1>
      <h1 className="text-2xl font-bold mb-[10px]" style={{color:'#CDD5DF'}}>(Social worker, Political activist, Politician)</h1>
      <p className="text-md">
        Leadership doesn’t begin with a title <br/> it begins with service. I have walked with people,<br/> worked for people, and <br/>now I’m ready to lead for the people.
      </p>
    </div>

    <div className="w-[260px] h-[260px] rounded-full bg-primary-500 text-white flex items-center justify-center text-[28px] font-bold">
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
