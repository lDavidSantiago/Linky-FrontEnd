import React from "react";
import { HiOutlineLink } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import ShinyButton from "./ShinyButton";
import { BrowserRouter, Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <nav className="flex w-full pb-3 pt-4 lg:px-4 sticky top-0 z-50 bg-white dark:bg-neutral-900 border-b border-neutral-700">
                <div className="container mx-auto flex flex-wrap items-center justify-between px-4">
                    
                    <div className="flex items-center space-x-3">
                        <a
                            className="flex items-center space-x-3 transition-opacity hover:opacity-80"
                            href="/"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 512 512"
                                width="30"
                            >
                                <rect
                                    id="r4"
                                    width="512"
                                    height="512"
                                    x="0"
                                    y="0"
                                    fill="url(#r5)"
                                    stroke="#FFF"
                                    strokeOpacity="100%"
                                    strokeWidth="0"
                                    paintOrder="stroke"
                                    rx="128"
                                ></rect>
                            </svg>
                            <HiOutlineLink className="text-white text-x2 w-4 h-4" />
                            <span className="self-center whitespace-nowrap text-lg font-medium tracking-tight dark:text-white">
                                MiniURL
                            </span>
                        </a>
                    </div>

                    {/* Action Buttons Section */}
                    <div className="flex items-center space-x-5 mt-3 md:mt-0">
                        {/* GitHub Icon */}
                        <a
                            href="https://github.com/lDavidSantiago"
                            className="inline-flex items-center space-x-3 justify-center whitespace-nowrap rounded-md text-sm font-medium text-gray-100 hover:text-gray-300 hover:scale-110 transition-transform duration-300 ease-in-out"
                        >
                            <FaGithub size={24} />
                        </a>
                        
                        {/* Search Button */}
                        <button className="inline-flex items-center space-x-3 justify-center whitespace-nowrap rounded-md text-sm font-medium text-gray-100 hover:text-gray-300 hover:scale-110 transition-transform duration-300 ease-in-out">
                            <span>
                                <CiSearch size={24} />
                            </span>
                        </button>
                        
                        {/* Custom Shiny Button */}
                        <Link to='/dashboard'>
                        <ShinyButton/>
                       </Link>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
