import React from "react";
import { FaInstagram, FaYoutube, FaXTwitter } from "react-icons/fa6";

const SocialMediaContainer = () => {
  return (
    <div className="bg-white border-t">
      <div className="container mx-auto px-4 py-4 flex justify-center space-x-6">
        <a href="#" aria-label="Twitter">
          <FaXTwitter className="text-2xl text-black hover:text-gray-600" />
        </a>
        <a href="#" aria-label="YouTube">
          <FaYoutube className="text-2xl text-black hover:text-gray-600" />
        </a>
        <a href="#" aria-label="Instagram">
          <FaInstagram className="text-2xl text-black hover:text-gray-600" />
        </a>
      </div>
    </div>
  );
};

export default SocialMediaContainer;
