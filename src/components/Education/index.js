import React from "react";

// third party imports

import { FaSchool, FaCalendarAlt } from "react-icons/fa";

import { HiAcademicCap } from "react-icons/hi";

import { TiLocation } from "react-icons/ti";

import { educationDetails } from "@/src/Data";

import { motion } from "framer-motion";

const Education = () => {
  return (
    <div className="flex flex-col justify-center items-center my-5 sm:my-8 w-full mx-auto">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.7 }}
        className="text-3xl font-medium my-3 md:my-6 font-roboto-slab text-[#0863bf]"
      >
        Education Details
      </motion.h1>
      <div className="flex flex-col border-2 border-gray-500 rounded-md  w-[95%] mx-auto sm:w-[90%] px-2 sm:px-5 ">
        <div className="grid grid-cols-1    divide-y-[2px] divide-gray-400 ">
          {educationDetails.map((val, idx) => (
            <motion.div
              initial={{ x: "-100vh" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.4 }}
              key={idx}
              className="p-3 "
            >
              <div className="flex items-center my-2 lg:my-3 ">
                <FaSchool className="sm:text-[30px] mx-4" />
                <h1 className="text-[#0863bf] font-bold font-roboto-slab text-lg sm:text-xl">
                  {val.name}
                </h1>
              </div>
              <div className="flex items-center ">
                <FaCalendarAlt className="sm:text-[30px] mx-4" />
                <h1>{val.duration}</h1>
              </div>
              <div className="flex items-center my-2 lg:my-3  ">
                <HiAcademicCap className="sm:text-[30px] mx-4" />
                <h1 className=" font-semibold  text-base sm:text-lg">
                  {val.course}
                </h1>
              </div>

              <div className="flex items-center ">
                <TiLocation className="sm:text-[30px] mx-4" />
                <h1>{val.location}</h1>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
