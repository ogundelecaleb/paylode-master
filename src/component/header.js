import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
const Header = () => {
  const [toggle, setToggle] = useState(true);
  const [showMenu, setShowMenu] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
    setShowMenu(!showMenu);
  };

  return (
    <div className="sticky w-full bg-gray-100 z-1000 lg:relative shadow ">
      <div className="flex flex-row items-center   justify-between relative px-[30px] md:px-[80px] lg:px-[130px] py-[12px]">
        <Link to="/">
          <img
            src="/paylodelogo.png"
            alt=""
            className="lg:h-[45px] h-[38px] mr-5"
          />
        </Link>
        <nav className="hidden flex-1 lg:inline-block">
          <ul className="flex flex-row space-x-3 items-center text-[#124072]  gap-[30px] ">
          <Link to="/product">
                <li className="cursor-pointer border-b  hover:text-[##990019] hover:border-b hover:border-b-lg hover:border-b-[#124072]">
                  Products
                </li>
              </Link>
              <Link to="/pricing">
                <li className="cursor-pointer hover:text-[##990019] border-b  hover:border-b hover:border-b-lg hover:border-b-[#124072]">
                  Pricing
                </li>
              </Link>
              <li className="cursor-pointer  hover:text-[##990019] border-b  hover:border-b hover:border-b-lg hover:border-b-[#124072]">
                <a href="#contact">Developer</a>
              </li>
          </ul>
        </nav>
        <button className=" py-[12px] px-[20px] bg-[#124072] text-white font-bold rounded-md hidden lg:inline-block">
          <a href="#contact">Get Started</a>
        </button>
        <button onClick={handleToggle} className="lg:hidden md:inline-block">
          {toggle ? <GiHamburgerMenu /> : <AiOutlineClose />}
        </button>

        {showMenu && (
          <div className="bg-gray-100 absolute right-2 rounded-md shadow -bottom-[300px] lg:hidden w-[200px] py-5 px-3 z-10">
            <ul className="flex flex-col space-y-8 mb-2 ">
            <Link to="/">
                <li className="cursor-pointer border-b text-[#124072] hover:text-[#1b599b] hover:border-b hover:border-b-lg hover:border-b-[#124072]">
                  Home
                </li>
              </Link>
              <Link to="/product">
                <li className="cursor-pointer border-b text-[#124072] hover:text-[#1b599b] hover:border-b hover:border-b-lg hover:border-b-[#124072]">
                  Products
                </li>
              </Link>
              <Link to="/pricing">
              <li className="cursor-pointer border-b text-[#124072] hover:text-[#1b599b] hover:border-b hover:border-b-lg hover:border-b-[#124072]">
                  Pricing
                </li>
              </Link>
              <li className="cursor-pointer border-b text-[#124072] hover:text-[#1b599b] hover:border-b hover:border-b-lg hover:border-b-[#124072]">
                <a href="#contact">Developer</a>
              </li>
              {/* <li className="cursor-pointer border-b hover:text-[##990019] hover:border-b-[#124072]">
                Event
              </li> */}
            </ul>
            <button className=" py-[8px] px-[24px] bg-[#124072] mt-4 text-white font-bold rounded-md">
              Get Started
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
