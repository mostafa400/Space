import { useState } from "react";
import data from "../../public/assets/data.json";

function Crew() {
  const [currentCrew, setCurrentCrew] = useState("Douglas Hurley");
  const crews = data.crew;

  const currentCrewData = crews.find((crew) => crew.name === currentCrew);

  const getImageUrl = (name) => {
    const formattedName = name.toLowerCase().replace(/\s+/g, "-");
    return `/assets/crew/image-${formattedName}.webp`;
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col pb-16
    bg-[url('/assets/crew/background-crew-mobile.jpg')]
    md:bg-[url('/assets/crew/background-crew-tablet.jpg')]
    lg:bg-[url('/assets/crew/background-crew-desktop.jpg')]"
    >
      <h1 className="text-white text-3xl pt-5 pl-10 lg:ml-64 lg:pl-20 mt-20  ">
        02 Meet Your Crew
      </h1>
      <div
        className=" lg:ml-64 lg:p-0
       md:pl-0  md:flex md:flex-col md:items-center md:justify-center md:h-full 
       p-10"
      >
        <div className="lg:grid lg:grid-cols-2 lg:gap-4  md:flex md:flex-col md:items-center ">
          <div className="text-white lg:text-left md:text-center md:mb-5 ">
            <h1 className=" text-4xl  uppercase md:mt-6 ">
              {currentCrewData.role}
            </h1>
            <p className="text-6xl mt-10  uppercase ">{currentCrewData.name}</p>
            <p className="text-3xl mt-10 lg:max-w-3xl  text-blue-50 md:text-2xl md:max-w-2xl  ">
              {currentCrewData.bio}
            </p>
          </div>
          <div
            className="lg:absolute space-x-8 bottom-40 text-white 
          
          md:static md:mt-8 text-center mt-5 "
          >
            {crews.map((crew) => (
              <button
                key={crew.name}
                onClick={() => setCurrentCrew(crew.name)}
                className="w-6 h-6 rounded-full bg-white opacity-50 hover:opacity-100 transition-opacity"
              ></button>
            ))}
          </div>
          <div>
            <img
              src={getImageUrl(currentCrewData.name)}
              alt={currentCrewData.name}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Crew;
