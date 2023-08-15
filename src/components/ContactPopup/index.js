// third party imports

import { useState } from "react";

import { useForm } from "react-hook-form";

import { DevTool } from "@hookform/devtools";

import { useSelector, useDispatch } from "react-redux";

import Modal from "../UI/Model";

import { motion } from "framer-motion";

import { AiOutlineClose } from "react-icons/ai";

import {
  openContactPopup,
  closeContactPopup,
  openDetailsPopup,
} from "@/src/store/slices/popup";
import TextContainer from "../TextAnimationContainer";

const inputVariants = {
  hidden: {
    x: "-200vh",
  },
  visible: {
    x: 0,
    transition: {
      delay: 0.9,
      duration: 0.8,
    },
  },
};

const ContactPopup = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset, formState, control } = useForm();

  const { errors } = formState;
  // console.log("form state", formState);

  // console.log("err", errors);

  const [data, setData] = useState("");
  const contactToggle = useSelector(
    (state) => state.popSlice.contactPopup.status
  );
  // console.log(contactToggle);

  const validatePhoneNumber = (value) => {
    const phoneNumber = value?.replace(/[^0-9]/g, ""); // Remove non-digit characters
    return phoneNumber?.length === 10 || "Phone number must be 10 digits";
  };

  const onSubmit = (data, e) => {
    console.log(data);
    setData(data);
    dispatch(openDetailsPopup(data));
    dispatch(closeContactPopup());
    reset();
  };

  return (
    <Modal
      parentClasses={" flex justify-center items-center  w-full m-auto"}
      isOpen={contactToggle}
    >
      <div className="relative bg-slate-200   w-[95%] min-h-[90%] sm:h-[500px] sm:w-[500px] flex flex-col justify-center items-center">
        <div
          onClick={() => {
            dispatch(closeContactPopup());
            reset();
          }}
          className="absolute  top-7 right-7 hover:text-[20px]"
        >
          <AiOutlineClose />
        </div>
        <TextContainer
          text="Contact Us"
          className="text-3xl my-6 font-bold text-[#0863bf] "
        />

        <form
          className="flex flex-col justify-center items-center  w-[80%]  "
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <div className="flex flex-col w-full ">
            <label
              className="block text-gray-700 text-sm font-bold my-3"
              for="firstName"
            >
              FULL NAME
            </label>
            <motion.input
              variants={inputVariants}
              initial="hidden"
              animate="visible"
              type="text"
              className="  shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              {...register("firstName", {
                required: {
                  value: true,
                  message: "Name is required",
                },
              })}
              placeholder="First name"
            />
            <p className="text-red-600 font-semibold my-1">
              {errors.firstName?.message}
            </p>
          </div>
          <div className="flex flex-col w-full ">
            <label className="block text-gray-700 text-sm font-bold my-3">
              EMAIL
            </label>
            <motion.input
              variants={inputVariants}
              type="email"
              initial="hidden"
              animate="visible"
              className="  shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              {...register("email", {
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email formate",
                },
              })}
              placeholder="Enter your Email"
            />
            <p className="text-red-600 font-semibold my-1">
              {errors.email?.message}
            </p>
          </div>

          <div className="flex flex-col w-full ">
            <label className="block text-gray-700 text-sm font-bold my-3">
              PHONE NUMBER
            </label>

            <motion.input
              variants={inputVariants}
              initial="hidden"
              animate="visible"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              {...register("number", {
                required: "Phone number is required",
                minLength: {
                  value: 10,
                  message: "Phone number must be 10 digits",
                },
                maxLength: {
                  value: 10,
                  message: "Phone number must be 10 digits",
                },
                pattern: {
                  value: /^\d{10}$/,
                  message: "Phone number must contain only digits",
                },
              })}
              maxLength={10}
              placeholder="Enter your phone number"
            />

            {errors.number && (
              <p className="text-red-600 font-semibold my-1">
                {errors.number.message}
              </p>
            )}
          </div>

          <div className="flex flex-col w-full ">
            <label className="block text-gray-700 text-sm font-bold my-3">
              MESSAGE
            </label>

            <motion.textarea
              variants={inputVariants}
              initial="hidden"
              animate="visible"
              className="  shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              {...register("message", {
                required: {
                  value: true,
                  message: "Message is required",
                },
              })}
              placeholder="Enter your Message"
            />

            <p className="text-red-600 font-semibold my-1">
              {errors.message?.message}
            </p>
          </div>

          {/* <input
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline my-4"
            type="submit"
          /> */}

          <input className="submitbutton " type="submit" />
        </form>
        <DevTool control={control} />
      </div>
    </Modal>
  );
};

export default ContactPopup;
