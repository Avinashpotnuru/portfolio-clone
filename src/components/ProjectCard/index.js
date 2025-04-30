import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const ProjectCard = ({ data }) => {
  // console.log(data);
  return (
    <motion.div
      viewport={{ once: true, amount: 0.5 }}
      whileHover={{ scale: 1.05 }}
      initial={{
        opacity: 0,
        translateX: data.id % 2 === 1 ? "-100vh" : "130vh",
        translateY: -50,
      }}
      animate={{ opacity: 1, translateX: 0, translateY: 0 }}
      transition={{ delay: 1, duration: data.id * 0.3 }}
      className="h-[480px] sm:h-[490px]  md:h-[450px] lg:h-[400px] group bg-[#0c7fb0]  mx-auto shadow-2xl rounded-xl overflow-hidden "
    >
      <div className="overflow-hidden h-1/2 ">
        <Image
          width={240}
          height={140}
          src={data.imgUrl}
          alt={data?.title}
          className=" rounded-xl hover:scale-110 duration-500 transition-all   h-full w-full mx-auto border-t rounded-t-[12px] "
        />
      </div>

      <div className="px-3 text-black h-1/2 group">
        <h1 className="my-4 text-lg font-extrabold text-center group-hover:text-white font-Lexend ">
          {data?.title}
        </h1>
        <h1 className="text-center group-hover:text-white card__preview-text">
          {data?.description}
        </h1>
        <div className="mt-5 sm:mt-4 md:flex md:justify-around md:items-center">
          <div className="text-center ">
            <Link href={data?.Link}>
              <button className="text-white btn from-left font-roboto-slab">
                Read more
              </button>
            </Link>
          </div>
          <div className="mt-2 text-center sm:mt-0 ">
            <a
              href={data?.deploylink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="text-white btn from-left font-roboto-slab">
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
