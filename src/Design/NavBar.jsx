import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white/10  border-gray-200 backdrop-blur-md">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-5">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src="assets/shared/logo.svg" className="h-10 w-10" alt="Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white"></span>
        </Link>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-100/10 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-default "
        >
          <ul
            className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg bg-transparent md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 * *
          md:text-xl
          
          "
          >
            <li>
              <Link
                to="/"
                className="block py-2 px-3 text-white bg-blue-700/50 uppercase rounded md:bg-transparent  md:p-0 md:hover:bg-transparent hover:bg-gray-100/10"
                aria-current="page"
              >
                00 Home
              </Link>
            </li>
            <li>
              <Link
                to="/destination"
                className="block py-2 px-3 text-white rounded hover:bg-gray-100/10 md:hover:bg-transparent md:border-0 md:hover:text-blue-300 md:p-0"
              >
                01 Destination
              </Link>
            </li>
            <li>
              <Link
                to="/crew"
                className="block py-2 px-3 text-white rounded hover:bg-gray-100/10 md:hover:bg-transparent md:border-0 md:hover:text-blue-300 md:p-0"
              >
                02 Crew
              </Link>
            </li>
            <li>
              <Link
                to="/technology"
                className="block py-2 px-3 text-white rounded hover:bg-gray-100/10 md:hover:bg-transparent md:border-0 md:hover:text-blue-300 md:p-0"
              >
                04 Technology
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
