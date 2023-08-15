import TestCard from "@/src/components/TestCard";
import React from "react";

const TestPage = () => {
  return (
    <div className="my-32 w-[50%]  ">
      <div className=" flex space-x-6 bg-slate-800 flex-nowrap  w-[3500px]">
        {[...Array(9)].map((item, idx) => {
          return <TestCard key={idx} />;
        })}
      </div>
    </div>
  );
};

export default TestPage;
