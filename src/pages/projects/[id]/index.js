import { useRouter } from "next/router";
import React, { useEffect, useMemo } from "react";

import { pages } from "@/src/Data";

// Import components
import ProjectDetailPage from "@/src/components/ProjectDetailPage";
import Fade from "@/src/components/Fade";

const ProjectInfoPages = () => {
  const router = useRouter();
  const { id } = router.query;

  // Memoized page mapping without unnecessary dependencies
  const pageToRender = useMemo(
    () => ({
      "todo-list": pages?.todolist,
      "movies-zone": pages?.moviesZone,
      "movies-app": pages?.moviesApp,
      restaurant: pages?.RestaurantWebsite,
      "food-munch": pages?.FoodMunch,
      "type-master": pages?.typeMaster,
      portfolio: pages?.portfolio,
      "react-todolist": pages?.reacttodolist,
    }),
    []
  ); // Empty dependency array, no need for 'pages' as dependency

  // Redirect if the page is not found
  useEffect(() => {
    if (!id) return;
    if (!pageToRender[id]) {
      router.push("/");
    }
  }, [id, router, pageToRender]);

  // Show nothing until the valid page is available
  if (!pageToRender[id]) return null;

  return (
    <Fade>
      <div className="mt-24 min-h-[60vh]">
        <ProjectDetailPage data={pageToRender[id]} pageName={id} />
      </div>
    </Fade>
  );
};

export default ProjectInfoPages;
