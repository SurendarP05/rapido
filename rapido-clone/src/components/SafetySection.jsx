
// import React from 'react';

// const SafetySection = () => {
//   return (
//     <div className="flex flex-col px-8 pt-6 md:flex-row items-center justify-around bg-white  md:p-12 shadow-md">
//       {/* Left: Text Content */}
//       <div className="max-w-sm">
//         <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
//           Safety for all
//         </h2>
//         <div className="w-14 h-1 bg-yellow-400 my-2"></div>
//         <p className="text-gray-700 text-wrap text-4xl md:text-lg mb-4">
//           At Rapido, your safety is our priority. We’re dedicated to making every ride safe and comfortable.
//         </p>
//         <a
//           href="#"
//           className="text-blue-800 font-semibold hover:underline inline-flex items-center"
//         >
//           Know More <span className="ml-1">&gt;</span>
//         </a>
//       </div>

//       {/* Right: Image */}
//       <img
//         src="/safety-helmet.webp" 
//         alt="Rapido Safety"
//         className="w-full md:w-[400px]  rounded-2xl mt-6 md:mt-0"
//       />
//     </div>
//   );
// };

// export default SafetySection;
import React from 'react';

const SafetySection = () => {
  return (
    <section className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-12 py-10 md:py-16">
        
        {/* Left: Text Content */}
        <div className="max-w-xl text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Safety for all
          </h2>
          <div className="w-14 h-1 bg-yellow-400 my-4 mx-auto md:mx-0"></div>
          <p className="text-gray-700 text-3xl md:text-lg mb-6">
            At Rapido, your safety is our priority. We’re dedicated to making every ride safe and comfortable.
          </p>
          <a
            href="#"
            className="text-blue-800 font-bold text-2xl hover:underline inline-flex items-center"
          >
            Know More <span className="ml-1">&gt;</span>
          </a>
        </div>

        {/* Right: Image */}
        <img
          src="/safety-helmet.webp"
          alt="Rapido Safety"
          className="w-full max-w-xl md:ml-10 mt-10 md:mt-0 rounded-2xl"
        />
      </div>
    </section>
  );
};

export default SafetySection;
