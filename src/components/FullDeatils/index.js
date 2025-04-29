import React, { useCallback, useState } from "react";

import Experience from "../Experience";
import Skills from "../Skills";
import Education from "../Education";
import TabButton from "../TabButton";


const tabs = [
  { id: 1, label: "Experience", component: <Experience /> },
  { id: 2, label: "Skills", component: <Skills /> },
  { id: 3, label: "Education", component: <Education /> },
];

const FullDetails = () => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(1);

  const handleTabClick = useCallback((index) => {
    setSelectedTabIndex(index);
  }, []);

  return (
    <div className="py-5">
      <div className="flex justify-around items-center w-[90%] sm:w-[60%] md:w-[50%] lg:w-[30%] mx-auto">
        {tabs.map((tab) => (
          <TabButton
            key={tab.id}
            label={tab.label}
            index={tab.id}
            activeTab={selectedTabIndex}
            onClick={handleTabClick}
          />
        ))}
      </div>
      <div className="tab-content">
        {tabs.find((tab) => selectedTabIndex === tab.id)?.component}
      </div>
    </div>
  );
};

export default FullDetails;
