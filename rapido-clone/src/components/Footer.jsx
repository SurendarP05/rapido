import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-gray-700">
          {/* Left: Rapido logo */}
          <div>
                <img src="./rapido-logo.svg" alt="" />
          </div>

          {/* Center: Main links */}
          <div className="flex flex-col space-y-2">
            <a href="#">Home</a>
            <a href="#">About Us</a>
            <a href="#">Careers</a>
            <a href="#">Safety</a>
            <a href="#">Blog</a>
            <a href="#">Press</a>
            <a href="#">Privacy Policy</a>
          </div>

          {/* Right: Legal links */}
          <div className="flex flex-col space-y-2">
            <a href="#">Customer Terms - Bike Taxi</a>
            <a href="#">Customer Terms - Cabs and Auto</a>
            <a href="#">Corporate Affairs</a>
            <a href="#">Captain Terms - Bike Taxi</a>
            <a href="#">Captain Terms - Cabs and Auto</a>
          </div>
        </div>

        {/* Bottom border */}
        <div className="border-t mt-6" />

        {/* Copyright */}
        <p className="text-center text-xs text-gray-500 mt-4">
          © 2025 Rapido Transportation. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
