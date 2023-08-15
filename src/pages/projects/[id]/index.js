import { useRouter } from "next/router";
import React, { useEffect } from "react";

import { pages } from "@/src/Data";

//  import components

import ProjectDetailPage from "@/src/components/ProjectDetailPage";
import Fade from "@/src/components/Fade";

const ProjectInfoPages = () => {
  const router = useRouter();

  const { id } = router.query;

  const pageToRender = {
    "todo-list": pages?.todolist,
    "movies-app": pages?.moviesApp,
    restaurant: pages?.RestaurantWebsite,
    "food-munch": pages?.FoodMunch,
    "type-master": pages?.typeMaster,
    portfolio: pages?.portfolio,
    "react-todolist": pages?.reacttodolist,
  };

  useEffect(() => {
    if (!id) return;
    if (!pageToRender[id]) {
      router.push("/");
    }
  }, [id]);

  if (!pageToRender[id]) return null;

  console.log(router);

  return (
    <Fade>
      <div className="mt-24 min-h-[60vh] ">
        <ProjectDetailPage data={pageToRender[id]} pageName={id} />
      </div>
    </Fade>
  );
};

export default ProjectInfoPages;
