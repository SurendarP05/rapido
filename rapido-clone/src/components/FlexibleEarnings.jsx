import React from 'react';

const CaptionSections = () => {
  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">

        {/* Left: Single Combined Image */}
        <div className="md:w-1/2">
          <img
            src="captains.webp" 
            alt="Rapido Captains"
            className="rounded-xl w-full"
          />
        </div>

        {/* Right: Caption Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 leading-snug">
            Flexible Hours & <br />
            <span className="relative inline-block">
              High
              <span className="absolute left-0 -bottom-1 w-10 h-1 bg-yellow-400"></span>
            </span>{' '}
            Earnings
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Join as a Rapido captain and earn on your own terms. Drive whenever you want.
          </p>
          <button className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-900 transition">
            Start Earning →
          </button>
        </div>

      </div>
    </section>
  );
};

export default CaptionSections;
