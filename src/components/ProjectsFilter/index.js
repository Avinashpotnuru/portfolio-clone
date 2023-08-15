import React, { useState } from "react";

//import components

import ProjectCard from "../ProjectCard";

import { tabs, projectsData } from "@/src/Data";

// third party imports

import { motion } from "framer-motion";
import TextContainer from "../TextAnimationContainer";

const ProjectsFilter = () => {
  const [tabsId, setTabsId] = useState("");

  const filterData = !tabsId
    ? projectsData
    : projectsData.filter((item) => item.category === tabsId);

  // console.log(filterData);
  // console.log(tabsId);

  return (
    <div>
      <div className="flex flex-col sm:flex-row w-full sm:justify-around sm:items-center">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.8, delay: 1 }}
          className="text-3xl text-[#0863bf] font-roboto-slab font-bold   sm:my-4 text-center my-2 sm:w-1/2"
        >
          My Projects
        </motion.h1>

        <div className="flex justify-center space-x-10 items-center my-9 sm:w-1/2">
          {tabs.map((val, idx) => (
            <button
              onClick={() => setTabsId(val?.category)}
              className={` text-black  py-2 px-4 rounded font-Lexend
              
              ${
                tabsId == val.category
                  ? "border-[#0c7fb0] border-b-2  pb-2 font-extrabold"
                  : "font-medium"
              }
              `}
              key={idx}
            >
              {val.tab}
            </button>
          ))}
        </div>
      </div>
      <div className="mb-5 grid grid-cols-1 gap-4  sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 mx-auto w-[90%]  ">
        {filterData.map((item, idx) => (
          <ProjectCard data={item} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsFilter;
