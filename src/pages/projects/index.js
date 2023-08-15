import React from "react";

// import components

import ProjectsFilter from "@/src/components/ProjectsFilter";

import Fade from "@/src/components/Fade";

const ProjectsPage = () => {
  return (
    <Fade>
      <div className="mt-20">
        <ProjectsFilter />
      </div>
    </Fade>
  );
};

export default ProjectsPage;
