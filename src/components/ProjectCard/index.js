import Link from "next/link";

import React from "react";

// third party imports

import { motion } from "framer-motion";
import Image from "next/image";

const ProjectCard = ({ data }) => {
  // console.log(data);
  return (
    <motion.div
      whileHover={{ duration: 0.02, delay: 0.1 }}
      initial={{
        opacity: 0,
        translateX: data.id % 2 == 1 ? "-100vh" : "130vh",
        translateY: -50,
      }}
      animate={{ opacity: 1, translateX: 0, translateY: 0 }}
      transition={{ delay: 1, duration: data.id * 0.3 }}
      className=" h-[500px] sm:h-[490px]  md:h-[450px] lg:h-[400px] group bg-[#0c7fb0]  mx-auto shadow-2xl rounded-xl overflow-hidden "
    >
      <div className="h-1/2 overflow-hidden ">
        <Image
          width={240}
          height={140}
          src={data.imgUrl}
          alt="project2"
          className=" rounded-xl hover:scale-110 duration-500 transition-all   h-full w-full mx-auto border-t rounded-t-[12px] "
        />
      </div>

      <div className="h-1/2 px-3    text-black group">
        <h1 className="text-lg font-extrabold text-center group-hover:text-white  my-4 font-Lexend  ">
          {data?.title}
        </h1>
        <h1 className="text-center group-hover:text-white">
          {data?.description}
        </h1>
        <div className=" mt-5 sm:mt-4  md:flex md:justify-around md:items-center ">
          <div className="text-center  ">
            <Link href={data?.Link}>
              <button className="btn from-left font-roboto-slab text-white">
                Read more
              </button>
            </Link>
          </div>
          <div className="text-center mt-2 sm:mt-0 ">
            <a href={data?.deploylink} target="_blank">
              <button className="btn from-left font-roboto-slab text-white">
                view project
              </button>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
