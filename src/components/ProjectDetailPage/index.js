import Link from "next/link";

import React from "react";

// third party imports

import { IoIosArrowBack } from "react-icons/io";

import { BsGithub } from "react-icons/bs";
import Image from "next/image";

const ProjectDetailPage = ({ data }) => {
  return (
    <div className="px-5 my-5 sm:my-20 sm:w-[95%] lg:w-[90%] sm:mx-auto ">
      <Link href={"/projects"}>
        <button className="bg-sky-300 p-3 cursor-pointer">
          <IoIosArrowBack />
        </button>
      </Link>
      <div className="flex flex-col sm:flex-row my-4 ">
        <div className="sm:w-1/2 my-auto sm:flex sm:justify-center sm:items-center ">
          <Image
            height={500}
            width={500}
            className="w-[95%] h-full  sm:h-auto  sm:my-auto  mx-auto object-fill "
            src={data.imgUrl}
            alt="todo"
          />
        </div>
        <div className="sm:w-1/2 sm:px-10 ">
          <h1 className="text-3xl font-bold text-cyan-500 my-2 sm:my-4  ">
            {data?.title}
          </h1>

          <h1 className="text-xl sm:text-2xl font-bold text-center sm:text-left mb-6 ">
            Technologies
          </h1>
          <div className=" w-[90%] mx-auto overflow-x-auto overflow-desk  ">
            <div className="flex space-x-4  w-[120%] sm:w-full mx-auto  py-2 ">
              {data?.technologies.map((val, idx) => {
                console.log("val", val);
                return (
                  <div
                    className="my-auto hover:text-[#06b6d4] text-[60px] hover:scale-110 hover:-translate-y-1 transition duration-150 ease-in-out"
                    key={idx}
                  >
                    {val?.icon}
                  </div>
                );
              })}
            </div>
          </div>

          <h1 className="text-gray-500 my-2">{data?.description}</h1>
          {data?.keypoints?.length && (
            <ul className="list-disc p-4 space-y-1 text-gray-500">
              {data?.keypoints?.map((val) => (
                <li>{val}</li>
              ))}
            </ul>
          )}

          {/* <div className="flex items-center mt-4">
            <BsGithub color="blue" size={12} />
            <a className="text-blue-500 hover:text-blue-700 ml-2 " href="">
              Github Source Code
            </a>
          </div> */}

          <br />
          <a
            className="text-blue-500 hover:text-blue-700 "
            href={data?.projectLink}
            target="_blank"
          >
            Project Link
          </a>
          <hr className="border-t-2 border-gray-300 my-4" />
          <h1>
            <span className="text-lg font-bold ">Creator - </span>Avinash
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
