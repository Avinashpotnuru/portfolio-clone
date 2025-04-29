import React from "react";

// third party imports

import { FaUserAlt } from "react-icons/fa";

import { MdCall } from "react-icons/md";

import { HiOutlineMail } from "react-icons/hi";

import { BsGithub, BsLinkedin, BsInstagram, BsFacebook } from "react-icons/bs";

import { useDispatch } from "react-redux";

import { openContactPopup } from "@/src/store/slices/popup";

import { motion } from "framer-motion";

//icon Variants

const iconVariants = {
  hover: {
    scale: 1.2,
    y: -5,
    color: "blue",
  },
};

const cardIconVariants = {
  hover: {
    scale: 0.7,
    rotateX: 360,

    transition: {
      duration: 0.8,
    },
  },
};

const contactCard = {
  hidden: {
    opacity: 0,
    scale: 0,
    x: "-100vh",
  },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 0.9,
      delay: 1.2,
      type: "spring",
      stiffness: 60,
    },
  },
};

const Contact = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.8, delay: 1 }}
        className="text-2xl text-[#0863bf] font-roboto-slab md:text-5xl font-bold text-center mb-5 md:my-10"
      >
        Get in touch
      </motion.h1>

      <div className="mb-5 grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5 md:gap-y-10 lg:gap-y-14 md:w-[90%]  md:mx-auto px-3">
        <motion.div
          initial={{ opacity: 0, scale: 0, x: "-100vh" }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{
            duration: 1.3,
            delay: 0.8,
          }}
          className="bg-[#e1e1e1] shadow-md flex flex-col justify-center items-center py-5 "
        >
          <motion.div
            variants={cardIconVariants}
            whileHover="hover"
            className="my-5"
          >
            <div className="sm:hidden">
              <FaUserAlt size={30} />
            </div>
            <motion.div
              variants={cardIconVariants}
              whileHover="hover"
              className="hidden sm:block"
            >
              <FaUserAlt size={50} />
            </motion.div>
          </motion.div>
          <h1 className="font-semibold text-center sm:text-2xl font-Lexend">
            Avinash Potnuru
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0, x: "-100vh" }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{
            duration: 1.3,
            delay: 1,
          }}
          className="bg-[#e1e1e1] shadow-md flex flex-col justify-center items-center py-5 "
        >
          <motion.div
            variants={cardIconVariants}
            whileHover="hover"
            className="my-5"
          >
            <div className="sm:hidden">
              <MdCall size={30} />
            </div>
            <div className="hidden sm:block">
              <MdCall size={50} />
            </div>
          </motion.div>
          <h1 className="font-semibold text-center sm:text-2xl font-Lexend">
            8919016096
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0, x: "-100vh" }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{
            duration: 1.3,
            delay: 1.2,
          }}
          className="bg-[#e1e1e1] shadow-md flex flex-col justify-center items-center py-5 "
        >
          <motion.div
            variants={cardIconVariants}
            whileHover="hover"
            className="my-5"
          >
            <div className="sm:hidden">
              <HiOutlineMail size={30} />
            </div>
            <div className="hidden sm:block">
              <HiOutlineMail size={50} />
            </div>
          </motion.div>
          <div className="max-w-[90%] flex justify-center items-center  sm:hidden ">
            <h1 className="font-semibold text-center sm:text-2xl font-Lexend ">
              potnuruavinash111
              <br />
              @gmail.com
            </h1>
          </div>
          <div className="max-w-[90%] justify-center items-center  flex ">
            <h1 className="hidden font-semibold text-center sm:text-2xl sm:block font-Lexend ">
              potnuruavinash111 @gmail.com
            </h1>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0, x: "-100vh" }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{
            duration: 1.3,
            delay: 1.4,
          }}
          className="bg-[#e1e1e1] shadow-md flex flex-col justify-center items-center py-5  "
        >
          <motion.div className="my-4">
            <h1 className="font-semibold text-center sm:text-2xl font-Lexend">
              Follow{" "}
            </h1>
          </motion.div>
          <div className="flex justify-around items-center py-5 w-full sm:w-[60%] ">
            <motion.a
              variants={iconVariants}
              whileHover="hover"
              href="https://github.com/Avinashpotnuru"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub size={25} />
            </motion.a>
            <motion.a
              variants={iconVariants}
              whileHover="hover"
              href="https://www.linkedin.com/in/avinash-potnuru/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsLinkedin size={25} />
            </motion.a>

            <motion.a
              variants={iconVariants}
              whileHover="hover"
              href="https://www.instagram.com/potnuru_avinash/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsInstagram size={25} />
            </motion.a>
            <motion.a
              variants={iconVariants}
              whileHover="hover"
              href="https://www.facebook.com/avinash.potnuru.18"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsFacebook size={25} />
            </motion.a>
          </div>
        </motion.div>
      </div>
      <div className="flex items-center justify-center my-3 ">
        <button
          onClick={() => dispatch(openContactPopup())}
          className="contact"
        >
          Contact US
          <span className="first"></span>
          <span className="second"></span>
          <span className="third"></span>
          <span className="fourth"></span>
        </button>
      </div>
    </div>
  );
};

export default Contact;
