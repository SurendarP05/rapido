// import React, { useState } from 'react';
// import { FaMapMarkerAlt } from 'react-icons/fa';
// import { IoCloseCircle } from 'react-icons/io5';

// const HeroSection = () => {
//   const [pickup, setPickup] = useState('');
//   const [drop, setDrop] = useState('');
//   const [pickupError, setPickupError] = useState('');
//   const [dropError, setDropError] = useState('');

//   const handleSubmit = () => {
//     let valid = true;
//     if (!pickup.trim()) {
//       setPickupError('Please enter pickup location');
//       valid = false;
//     } else {
//       setPickupError('');
//     }

//     if (!drop.trim()) {
//       setDropError('Please enter drop location');
//       valid = false;
//     } else {
//       setDropError('');
//     }

//     if (valid) {
//       alert(`Pickup: ${pickup}, Drop: ${drop}`);
//     }
//   };

//   return (
//     <section
//       className="min-h-screen flex items-center justify-center bg-cover bg-center"
//       style={{ backgroundImage: "url('/map.png')" }}
//     >
//       <div className="container w-full flex items-center justify-center px-64 py-16">
//         <div className="text-center ">
//           <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mt-8 mb-10">
//             Bharat Moves On Rapido!
//           </h1>

//           <div className="flex flex-col gap-6 mb-6 mx-auto">
//             {/* Pickup Input */}
//             <div className="relative w-full">
//               <FaMapMarkerAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-xl" />
//               <input
//                 type="text"
//                 placeholder="Enter Pickup Location"
//                 value={pickup}
//                 onChange={(e) => setPickup(e.target.value)}
//                 className="w-full text-[18px] h-[72px] pl-[60px] pr-10 rounded-md border border-gray-300 outline-none text-gray-700"
//               />
//               {pickup && (
//                 <IoCloseCircle
//                   className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl cursor-pointer"
//                   onClick={() => setPickup('')}
//                 />
//               )}
//             </div>
//             {pickupError && (
//               <p className="text-left text-xl text-red-800 ml-1 -mt-2">
//                 {pickupError}
//               </p>
//             )}

//             {/* Drop Input */}
//             <div className="relative w-full">
//               <FaMapMarkerAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-xl" />
//               <input
//                 type="text"
//                 placeholder="Enter Drop Location"
//                 value={drop}
//                 onChange={(e) => setDrop(e.target.value)}
//                 className="w-full text-[18px] h-[72px] pl-[60px] pr-10 rounded-md border border-gray-300 outline-none text-gray-700"
//               />
//               {drop && (
//                 <IoCloseCircle
//                   className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl cursor-pointer"
//                   onClick={() => setDrop('')}
//                 />
//               )}
//             </div>
//             {dropError && (
//               <p className="text-left text-xl text-red-800 ml-1 -mt-2">
//                 {dropError}
//               </p>
//             )}
//           </div>

//           <button
//             onClick={handleSubmit}
//             className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-6 px-10 rounded-md text-xl w-full transition"
//           >
//             Book Ride
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
import React, { useState } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { IoCloseCircle } from 'react-icons/io5';

const HeroSection = () => {
  const [pickup, setPickup] = useState('');
  const [drop, setDrop] = useState('');
  const [pickupError, setPickupError] = useState('');
  const [dropError, setDropError] = useState('');

  const handleSubmit = () => {
    let valid = true;
    if (!pickup.trim()) {
      setPickupError('Please enter pickup location');
      valid = false;
    } else {
      setPickupError('');
    }

    if (!drop.trim()) {
      setDropError('Please enter drop location');
      valid = false;
    } else {
      setDropError('');
    }

    if (valid) {
      alert(`Pickup: ${pickup}, Drop: ${drop}`);
    }
  };

  return (
    <section
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/map.png')" }}
    >
      <div className="container w-full px-4 sm:px-8 md:px-16 lg:px-32 py-16">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mt-8 mb-10">
            Bharat Moves On Rapido!
          </h1>

          <div className="flex flex-col gap-6 mb-6 mx-auto max-w-lg sm:max-w-xl md:max-w-2xl">
            {/* Pickup Input */}
            <div className="relative w-full">
              <FaMapMarkerAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-xl" />
              <input
                type="text"
                placeholder="Enter Pickup Location"
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                className="w-full text-[18px] h-[72px] pl-[60px] pr-10 rounded-md border border-gray-300 outline-none text-gray-700"
              />
              {pickup && (
                <IoCloseCircle
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl cursor-pointer"
                  onClick={() => setPickup('')}
                />
              )}
            </div>
            {pickupError && (
              <p className="text-left text-xl text-red-800 ml-1 -mt-2">
                {pickupError}
              </p>
            )}

            {/* Drop Input */}
            <div className="relative w-full">
              <FaMapMarkerAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-xl" />
              <input
                type="text"
                placeholder="Enter Drop Location"
                value={drop}
                onChange={(e) => setDrop(e.target.value)}
                className="w-full text-[18px] h-[72px] pl-[60px] pr-10 rounded-md border border-gray-300 outline-none text-gray-700"
              />
              {drop && (
                <IoCloseCircle
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl cursor-pointer"
                  onClick={() => setDrop('')}
                />
              )}
            </div>
            {dropError && (
              <p className="text-left text-xl text-red-800 ml-1 -mt-2">
                {dropError}
              </p>
            )}

            {/* Book Ride Button */}
            <button
              onClick={handleSubmit}
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-6 px-10 rounded-md text-xl w-full transition"
            >
              Book Ride
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
