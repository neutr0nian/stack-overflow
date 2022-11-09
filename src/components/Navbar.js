import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="px-5 md:px-10 lg:px-30">
      <nav className="py-5 flex justify-between ">
        <Link to="/">
          <h1 className="text-xl font-medium cursor-pointer">Stack Overflow</h1>
        </Link>
        <ul className="flex items-center">
          <div className="mx-3 w-60">
            <div className="input-group relative flex flex-wrap items-stretch">
              <input
                type="search"
                className="form-control relative flex-auto min-w-0 block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Search stackoverflow"
                aria-label="Search"
                aria-describedby="button-addon3"
              />
            </div>
          </div>
          <li>
            <BsFillMoonStarsFill
              // onClick={() => setDarkMode(!darkMode)}
              className="cursor-pointer text-2xl"
            />{" "}
          </li>
          <li>
            <a
              className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
              href="/mystack"
            >
              My Stack
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
