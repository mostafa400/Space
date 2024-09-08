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
      className="min-h-screen bg-cover bg-center flex flex-col
    bg-[url('/assets/technology/background-technology-mobile.jpg')]
    md:bg-[url('/assets/technology/background-technology-tablet.jpg')]
    lg:bg-[url('/assets/technology/background-technology-desktop.jpg')]"
    >
      <h1 className="text-white text-3xl lg:ml-64 pl-20 mt-20 ">
        01 Space Launch
      </h1>
      <div
        className="flex ml-20 mt-32 lg:flex-row lg:gap-10 lg:items-start
       flex-col gap-7 items-center "
      >
        <div className=" flex lg:flex-col lg:ml-48 gap-y-10 md:flex-row gap-x-10  ">
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
          <div
            className="text-white flex flex-col  lg:gap-y-6 lg:justify-self-center lg:w-full lg:items-start
           "
          >
            <h2 className="text-3xl">The Termonlongy ...</h2>
            <h1 className="text-7xl mb-5">{currentTechData.name}</h1>
            <p className="w-3/4 opacity-80">{currentTechData.description}</p>
          </div>
        </div>

        <div className=" w-3/4 ">
          <img
            className="w-full h-auto object-cover "
            src={getImageUrl(currentTechData.name)}
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Tech;
