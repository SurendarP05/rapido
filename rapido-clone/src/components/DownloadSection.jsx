import React from "react";

const DownloadSection = () => {
  return (
    <section className="bg-black text-white py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Download Now</h2>
        <div className="w-12 h-1 bg-yellow-400 mx-auto mb-10"></div>

        {/* App Options */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          {/* App 1 */}
          <div className="flex flex-col items-center">
            <a
              href="https://play.google.com/store/search?q=rapido&c=apps"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/rapido-down.svg" // Replace with your yellow app icon
                alt="Rapido User App"
                className="w-16 h-16 rounded-lg mb-4"
              />
            </a>

            <p className="text-center text-lg">
              Rapido: Bike-Taxi,
              <br />
              Auto & Cabs
            </p>
          </div>

          {/* App 2 */}
          <div className="flex flex-col items-center">
            <a
              href="https://play.google.com/store/search?q=rapido+captain&c=apps"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/rapidocap-down.webp" // Replace with your white app icon
                alt="Rapido Captain App"
                className="w-16 h-16 rounded-lg mb-4"
              />
            </a>

            <p className="text-center text-lg">
              Rapido Captain:
              <br />
              Drive & Earn
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
