import Link from "next/link";

import React, { useState } from "react";

// third party imports
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

import { motion } from "framer-motion";

import { usePathname } from "next/navigation";
import TextContainer from "../TextAnimationContainer";

const Header = () => {
  const path = usePathname();
  // console.log(path);
  let Links = [
    { name: "HOME", link: "/" },
    { name: "ABOUT", link: "/about" },
    { name: "PROJECT'S", link: "/projects" },
    { name: "CERTIFICATES", link: "/course-certificates" },
    { name: "CONTACT", link: "/contact-us" },
  ];
  let [open, setOpen] = useState(false);

  // const openToggle = useSelector((state) => state.headerPopup.status);
  return (
    <div className="shadow-md w-full relative ">
      <div className="flex items-center justify-between  bg-white py-4 md:px-10 px-7 fixed top-0 left-0 right-0 z-10">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
  text-gray-800"
        >
          <Link href={"/"}>
            <TextContainer
              text="Avinash"
              className="font-roboto-slab font-extrabold text-[#0863bf]"
            />
          </Link>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="md:hidden transition-all duration-500 "
        >
          {!open ? <AiOutlineMenu /> : <AiOutlineClose />}
        </div>

        <ul
          className={` md:flex md:items-center bg-white md:pb-0  absolute md:static pl-9  md:z-auto z-20 left-0 w-full md:w-auto md:pl-0  transition-all duration-500 ease-in ${
            open ? "top-16 " : "top-[-490px]"
          }`}
        >
          {Links.map((link, idx) => (
            <motion.li
              initial={{ y: -500 }}
              animate={{ y: 0 }}
              transition={{
                delay: 1,
                duration: 1.2,
                type: "spring",
                shiftiness: 140,
              }}
              onClick={() => setOpen(false)}
              key={link.name}
              className={`md:ml-8 text-lg md:my-0 my-7 font-roboto ${
                path == link.link
                  ? " sm:border-[#0c7fb0] sm:border-b-2 font-bold pb-1"
                  : ""
              }`}
            >
              <Link
                href={link.link}
                className="text-gray-800 hover:text-gray-400 duration-500"
              >
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
