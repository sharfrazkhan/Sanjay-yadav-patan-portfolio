import React from "react";
import images1 from "../images/3.jpeg"; // Adjust the import path as necessary
import images2 from "../images/12.jpeg";

const About = () => (
  <section id="about" className="section-body">
    <div className="flex items-center flex-wrap max-w-[1200px] mx-auto px-2 w-full ">
      <div className="flex flex-row">
        <div className="flex flex-col">
          <div className="w-[600px] h-[400px] bg-sky-500 text-white flex items-center justify-center text-[28px] font-bold">
            <img src={images1}
             alt={"image1"} 
             className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="w-[600px] h-[400px] text-black flex items-center justify-center text-[28px] ml-[25px] font-bold">
            <p>
              Had the opportunity to meet and work closely with Hon’ble Home Minister Shri Amit Shah
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-row py-[50px]">
        <div className="flex flex-col">
         <div className="w-[600px] h-[400px] text-black flex items-center justify-center text-[28px] ml-[25px] font-bold">
            <p>
              Honoured to meet and interact with Yog Rishi Baba Ramdev ji, gaining insights from his visionary thoughts on yoga, Ayurveda, and nation-building 
            </p>
          </div>
        </div>
        <div className="flex flex-col">
           <div className="w-[600px] h-[400px] bg-sky-500 text-white flex items-center justify-center text-[28px] font-bold">
            <img src={images2}
             alt={"image2"} 
             className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;