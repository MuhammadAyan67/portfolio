"use client";
import { useState } from "react";
import { userInfo, headerItems } from "@/constant/constant";
import { NavItems } from "@/models/Header";
import { HiMenu } from "react-icons/hi";
import { Link as ScrollLink } from "react-scroll";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Header: React.FC = () => {
  const [NavItems, showNavItems] = useState<boolean>(false);
  useEffect(() => {
    Aos.init();
  });
  return (
    <header className="bg-white p-6 justify-between fixed top-0 w-full z-10 md:flex ">
      <div className="flex justify-between">
        <h2 className="text-3xl font-bold" data-aos="fade-down-right">
          {userInfo.name + "."}
        </h2>
        <HiMenu
          size={30}
          className="md:hidden"
          onClick={() => showNavItems((prevState) => !prevState)}
        />
      </div>
      <div
        className={`mr-8 md:space-x-6 text-center bg-blend-hard-light mt-3 md:mt-0 md:block ${
          NavItems ? "block" : "hidden"
        } `}
      >
        {Object.keys(headerItems).map((item) => (
          <span data-aos="fade-down-left">
            {" "}
            <ScrollLink
              to={headerItems[item as keyof NavItems].page}
              key={headerItems[item as keyof NavItems].label}
              className="block md:inline-block cursor-pointer "
              spy={true}
              smooth={true}
            >
              {headerItems[item as keyof NavItems].label}
            </ScrollLink>
          </span>
        ))}
      </div>
    </header>
  );
};
export default Header;
