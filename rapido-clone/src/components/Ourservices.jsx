// import React from 'react';

const services = [
  { name: "Bike", icon: "/bike-icon.webp" },
  { name: "Auto", icon: "/auto.webp" },
  { name: "Auto Share", icon: "/auto-share.webp" },
  { name: "Parcel", icon: "/parcel.webp" },
  { name: "Cab Economy", icon: "/cab-economy.webp" },
  { name: "Cab Premium", icon: "/cab-premium.webp" },
]

const OurServices = () => {
  return (
    <section className="py-16 pl-20 pr-16  bg-white">
      <h2 className="text-5xl font-bold mb-4 text-left inline-block relative">
        Our Services
        <span className="block h-1 w-12 bg-yellow-400 mt-2"></span>
      </h2>

      {/* Display all 6 services in a 4-column grid; extra items wrap to the next line aligned left */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4  gap-6 mt-12">
        {services.map((service, index) => (
          <div
            key={index}
            // className="flex flex-col items-center bg-gray-100 rounded-xl shadow-sm p-6 w-44 h-40"
          >
            <img
              src={service.icon}
              alt={service.name}
              className="w-40 h-28 object-cover rounded-xl  mb-3"
            />
          <p className="text-lg font-medium font-sans text-gray-800">{service.name}</p>
          </div>
          
        ))}
      </div>
     
    </section>
  );
};

export default OurServices;
