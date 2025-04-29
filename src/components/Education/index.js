import { educationDetails } from "@/src/Data";
import { motion } from "framer-motion";
import EducationDetail from "../EducationDetail";
import { memo } from "react";

const Education = memo(() => {
  return (
    <div className="flex flex-col items-center justify-center w-full mx-auto my-5 sm:my-8">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.7 }}
        className="text-3xl font-medium my-3 md:my-6 font-roboto-slab text-[#0863bf]"
        aria-label="Education Details Section"
      >
        Education Details
      </motion.h1>
      <div className="flex flex-col border-2 border-gray-500 rounded-md  w-[95%] mx-auto sm:w-[90%] px-2 sm:px-5 ">
        <div className="grid grid-cols-1    divide-y-[2px] divide-gray-400 ">
          {educationDetails.map((val, index) => (
            <EducationDetail val={val} idx={index} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
});

export default Education;
