import { useState } from "react";

import data from "../../public/assets/data.json";

function Destination() {
  const [currentDestination, setCurrentDestination] = useState("Moon");
  const destinations = data.destinations;
  const currentDestinationData = destinations.find(
    (dest) => dest.name === currentDestination
  );

  const getImageUrl = (name) => {
    const formattedName = name.toLowerCase().replace(/\s+/g, "-");
    return `/assets/destination/image-${formattedName}.webp`;
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col pb-16
                 bg-[url('/assets/destination/background-destination-mobile.jpg')]
                 md:bg-[url('/assets/destination/background-destination-tablet.jpg')]
                 lg:bg-[url('/assets/destination/background-destination-desktop.jpg')]"
    >
      <div className="container mx-auto  mt-20 lg:static md:realtive ">
        <h1 className="text-white text-3xl uppercase lg:transform-none lg:left-80 md:text-xl md:absolute md:left-10  md:top-32 p-5">
          01 pick your destination
        </h1>
        <div
          className="lg:grid lg:grid-cols-2 lg:gap-20 lg:items-center lg:mt-20
          md:mt-20 md:flex md:flex-col md:items-center 
          flex flex-col items-center text-center
        "
        >
          <div className=" md:flex md:flex-col md:gap-5 md:items-center md:mt-20 md:mb-10">
            <img
              src={getImageUrl(currentDestinationData.name)}
              alt={currentDestinationData.name}
              className="lg:w-3/4 lg:h-3/4 
              md:w-4/5 md:h-4/5"
            />
          </div>

          <div
            className="text-white  lg:flex  lg:gap-10  lg:self-start lg:mt-10 lg:items-start
          md:flex md:flex-col md:items-center md:text-center 
          "
          >
            <div className="flex gap-5  lg:text-2xl mb-10 mt-10 text-3xl justify-center">
              {destinations.map((dest) => (
                <button
                  key={dest.name}
                  onClick={() => setCurrentDestination(dest.name)}
                >
                  {dest.name}
                </button>
              ))}
            </div>

            <div className="lg:text-left lg:flex lg:items-start md:flex md:flex-col md:items-center">
              <h1 className="text-8xl uppercase mb-10 ">
                {currentDestinationData.name}
              </h1>
              <p className="lg:w-3/4  md:w-3/4 text-2xl p-3 ">
                {currentDestinationData.description}
              </p>
              <hr className="w-3/4 border-t border-gray-300 my-4 lg:ml-0 md:ml-0 ml-20" />
              <div className=" flex justify-center text-white-400  gap-20 mt-10 ">
                <div className="text-xl">
                  <p>Avg. distance</p>
                  {currentDestinationData.distance}
                </div>
                <div className="text-xl">
                  <p>Avg. travel time</p>
                  {currentDestinationData.travel}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Destination;
