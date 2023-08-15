import React, { useState } from "react";

// import components

import Experience from "../Experience";

import Skills from "../Skills";

import Education from "../Education";

const FullDetails = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="py-5">
      <div className=" flex  justify-around items-center w-[90%] sm:w-[60%] md:w-[50%] lg:w-[30%] mx-auto">
        <button
          className={`py-2 px-4 text-sm text-black font-roboto-slab  ${
            activeTab === 1
              ? "border-[#0c7fb0] border-b-2  font-medium pb-3"
              : "text-black"
          }`}
          onClick={() => handleTabClick(1)}
        >
          Experience
        </button>
        <button
          className={`py-2 px-4 text-sm text-black font-roboto-slab ${
            activeTab === 2
              ? "border-[#0c7fb0] border-b-2  font-medium pb-3"
              : "text-black"
          }`}
          onClick={() => handleTabClick(2)}
        >
          Skills
        </button>
        <button
          className={`py-2 px-4 text-sm text-black font-roboto-slab  ${
            activeTab === 3 ? "border-[#0c7fb0] border-b-2 pb-3 " : "text-black"
          }`}
          onClick={() => handleTabClick(3)}
        >
          Education
        </button>
      </div>
      <div className="tab-content">
        {activeTab === 1 && <Experience />}
        {activeTab === 2 && <Skills />}
        {activeTab === 3 && <Education />}
      </div>
    </div>
  );
};

export default FullDetails;
