import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      className="min-h-screen h-full bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-16 
overflow-y-auto 
   md:flex md:flex-col md:items-center 


    bg-[url('./assets/home/background-home-mobile.jpg')]
    md:bg-[url('./assets/home/background-home-tablet.jpg')]
    lg:bg-[url('./assets/home/background-home-desktop.jpg')]

    "
    >
      <div className="container lg:mx-auto px-4 lg:mb-44  ">
        <div
          className="lg:grid  lg:grid-cols-2 lg:gap-48  lg:justify-items-center lg:ml-20 
        md:flex md:flex-col md:items-center 
        flex flex-col items-center 

        "
        >
          <div className="text-white lg:ml-24 md:text-center text-center md:w-3/4  lg:text-left">
            <p className=" text-2xl text-white uppercase tracking-wider   ">
              So, you want to travel to
            </p>

            <h1 className="text-9xl uppercase tracking-widest md:mb-3 ">
              Space
            </h1>
            <p>
              <p className="tracking-widest text-gray-200 md:mb-20">
                Let’s face it; if you want to go to space, you might as well
                genuinely go to outer space and not hover kind of on the edge of
                it. Well sit back, and relax because we’ll give you a truly out
                of this world experience!
              </p>
            </p>
          </div>
          <div className="md:mt-auto">
            <Link to="/destination">
              <button className="bg-white text-black text-4xl rounded-full md:w-72 md:h-72 w-64 h-64 hover:ring-4 hover:ring-white/50 transition-all duration-300 ease-in-out  ">
                Explore
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
