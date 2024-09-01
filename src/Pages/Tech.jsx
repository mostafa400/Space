import { useState } from "react";
import data from "../../public/assets/data.json";

function Tech() {
  const [currentTech, setCurrentTech] = useState("Launch vehicle");

  const techs = data.technology;

  const currentTechData = techs.find((tech) => tech.name === currentTech);

  const getImageUrl = (name) => {
    const formattedName = name.toLowerCase().replace(/\s+/g, "-");
    return `./assets/technology/image-${formattedName}-portrait.jpg`;
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col overflow-hidden
    bg-[url('/assets/technology/background-technology-mobile.jpg')]
    md:bg-[url('/assets/technology/background-technology-tablet.jpg')]
    lg:bg-[url('/assets/technology/background-technology-desktop.jpg')]"
    >
      <h1 className="text-white text-3xl lg:ml-64 pl-20 mt-20">
        01 Space Launch
      </h1>
      <div className="lg:flex lg:flex-row lg:ml-44 lg:mt-36 lg:gap-10  md:flex md:flex-col ">
        <div className=" flex flex-col ml-64 gap-y-10  ">
          {techs.map((tech, index) => (
            <button
              key={tech.name}
              className="bg-white text-black text-xl rounded-full w-16 h-16 hover:ring-4 hover:ring-white/50 transition-all duration-300 ease-in-out"
              onClick={() => setCurrentTech(tech.name)}
            >
              {index + 1}
            </button>
          ))}
        </div>

        <div>
          <div className="text-white lg:flex lg:flex-col lg:gap-y-6 lg:justify-self-center lg:w-full">
            <h2 className="text-5xl">The Termonlongy ...</h2>
            <h1 className="text-7xl">{currentTechData.name}</h1>
            <p className="w-1/2">{currentTechData.description}</p>
          </div>
        </div>

        <div className=" w-full ">
          <img
            className="w-full h-full "
            src={getImageUrl(currentTechData.name)}
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Tech;
