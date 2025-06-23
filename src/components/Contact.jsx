import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import imagePeople from "../images/imagesP.jpg";

const Contact = () => {
  return (
    <>
    <section id="contact" className="bg-[#F9FAFB] py-12 px-4">
      <div className="max-w-[1000px] mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Connect with Shri Sanjay Yadav Patan
        </h2>

        <p className="text-gray-600 max-w-[700px] mx-auto mb-10">
          Feel free to reach out for collaboration, public welfare initiatives, or to share your ideas for development.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-left">
          {/* Address */}
          <div className="flex items-start space-x-4">
            <FaMapMarkerAlt className="text-blue-600 mt-1" size={20} />
            <div>
              <h4 className="font-semibold text-gray-700">Address</h4>
              <p className="text-gray-600">B-5 sector 43 green field colony Faridabad, Haryana, India</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start space-x-4">
            <FaEnvelope className="text-green-600 mt-1" size={20} />
            <div>
              <h4 className="font-semibold text-gray-700">Email</h4>
              <p className="text-gray-600">info@sanjayyadavpatan.in</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="w-full mb-12">
      <img
        src={imagePeople} // Replace with your actual image path
        alt="People of India"
        className="w-full h-[500px] md:h-[400px] object-cover"
      />
    </section>
    </>
  );
};

export default Contact;
