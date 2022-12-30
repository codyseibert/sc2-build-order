import Link from "next/link";
import React from "react";

export const Navbar = () => {
  return (
    <nav className="border-gray-200 bg-white px-2 py-2.5 dark:bg-gray-900 sm:px-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <Link href="/" className="link flex items-center">
          <span className="font-semibol text-xl">SC2 Build Order Manager</span>
        </Link>

        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:text-sm md:font-medium md:dark:bg-gray-900">
            <li>
              <Link href="/races" className="link" aria-current="page">
                Find a Build
              </Link>
            </li>
            <li>
              <Link href="/submit-build" className="link" aria-current="page">
                Create Build
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
