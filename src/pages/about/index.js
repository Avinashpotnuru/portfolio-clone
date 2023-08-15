import Fade from "@/src/components/Fade";
import FullDetails from "@/src/components/FullDeatils";
import MyDetails from "@/src/components/MyDetails";
import React from "react";

const AboutPage = () => {
  return (
    <Fade>
      <div className="mt-24">
        <MyDetails />
        <FullDetails />
      </div>
    </Fade>
  );
};

export default AboutPage;
