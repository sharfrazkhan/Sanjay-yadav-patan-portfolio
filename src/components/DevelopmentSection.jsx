
import React from "react";
import peopleImg from "../images/people.webp";
const DevelopmentSection = () => {
  return (
    <section className="bg-[#F9FAFB] py-12 px-4">
      <div className="max-w-[1000px] mx-auto text-center">
        {/* Landscape Image */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Empowering Local Communities
        </h2>
        <img
          src={peopleImg}// Replace with your image path
          alt="Local People"
          className="w-full h-auto max-h-[400px] object-cover rounded-2xl shadow-md mb-6"
        />

        <p className="text-gray-600 text-base max-w-[800px] mx-auto">
          Dedicated efforts are being made to uplift and empower the local people through
          better education, healthcare, employment opportunities, and rural development
          programs. The goal is to ensure inclusive growth and improve the quality of life
          for every individual in the region.
        </p>
      </div>
    </section>
  );
};

export default DevelopmentSection;
