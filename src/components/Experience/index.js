import React from "react";

import { experienceData } from "@/src/Data";
// third party imports
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="flex flex-col justify-center items-center my-5">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.7 }}
        className="text-3xl text-[#0863bf] font-medium font-roboto-slab my-3 md:my-6"
      >
        Experience
      </motion.h1>
      <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-2 lg:w-[80%]">
        {experienceData.map((val, id) => {
          return (
            <motion.div
              initial={{
                scale: 0,
                opacity: 0,
                translateX: id % 2 == 1 ? "-100vh" : "100vh",
              }}
              animate={{ scale: 1, opacity: 1, translateX: 0 }}
              transition={{ delay: 0.8, duration: 1.1 }}
              key={val.id}
              className="px-4 py-5  border-2 border-gray-400 mx-4 rounded-md"
            >
              <h1 className="text-[23px] font-bold my-2 text-[#0863bf]">
                {val.role}
              </h1>
              <h1 className="text-xl font-medium my-2">{val.company}</h1>
              <h1 className="text-base font-medium my-2">{val.duration}</h1>
              <ul className="list-disc mx-4 text-gray-700 ">
                {val.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Experience;
