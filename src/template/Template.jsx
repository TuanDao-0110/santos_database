import { Carousel, Dropdown } from "flowbite-react";
import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Template() {
  return (
    <div>
      <nav className="px-2 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <Link to={"/"} className="flex items-center">
            <img src={require("./img/logo.png")} className="mr-3 h-6 sm:h-10" alt="Flowbite Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">santos tasks</span>
          </Link>

          <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
            <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to="/palidrome"
                  className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent"
                  aria-current="page"
                >
                  palidrome
                </Link>
              </li>
              <li>
                <Link
                  to="/bubblesort"
                  className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent"
                  aria-current="page"
                >
                  bubblesort
                </Link>
              </li>
              <li>
              
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
}
