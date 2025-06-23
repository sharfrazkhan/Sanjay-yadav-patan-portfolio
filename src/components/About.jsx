import React from "react";
import images1 from "../images/3.jpeg";
import images2 from "../images/12.jpeg";

const About = () => (
  <section id="about" className="section-body py-8 px-4">
    <div className="flex flex-col max-w-[1200px] mx-auto w-full gap-10">
      
      {/* First Row */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4">
        {/* Image */}
        <div className="w-full md:w-[600px] h-[300px] md:h-[400px]">
          <img
            src={images1}
            alt="image1"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Text */}
        <div className="w-full md:w-[600px] h-auto md:h-[400px] flex items-center justify-center text-center md:text-left px-2">
          <p className="text-lg md:text-2xl font-semibold text-black">
            Had the opportunity to meet and work closely with Hon’ble Home Minister Shri Amit Shah
          </p>
        </div>
      </div>

      {/* Second Row */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-4">
        {/* Text */}
        <div className="w-full md:w-[600px] h-auto md:h-[400px] flex items-center justify-center text-center md:text-left px-2">
          <p className="text-lg md:text-2xl font-semibold text-black">
            Honoured to meet and interact with Yog Rishi Baba Ramdev ji, gaining insights from his visionary thoughts on yoga, Ayurveda, and nation-building
          </p>
        </div>

        {/* Image */}
        <div className="w-full md:w-[600px] h-[300px] md:h-[400px]">
          <img
            src={images2}
            alt="image2"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  </section>
);

export default About;
