import React from 'react';

const GetQuickRides = () => {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        
        {/* Text Section */}
        <div className="md:w-1/2">
          <h2 className="text-6xl font-bold text-gray-900 mb-4 leading-snug">
            Get Quick Rides,<br />Low Fares
            <span className="block w-12 h-1 bg-yellow-400 mt-2"></span>
          </h2>
          <p className="text-2xl text-gray-700 mb-6">
            In Rapido we ensure our customers get rides quickly at the most affordable prices.
          </p>
          <button className="bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-gray-900 transition">
            Book a ride →
          </button>
        </div>

        
        <div className="md:w-1/2">
          <img
            src="/ride1.webp" 
            alt="Rapido Ride Options"
            className="rounded-xl w-full h-auto"
          />
        </div>

      </div>
    </section>
  );
};

export default GetQuickRides;
