// third party imports
import { motion } from "framer-motion";
import Image from "next/image";

const CertificateCard = ({ data, id }) => {
  return (
    <motion.div
      initial={{
        translateX: id % 2 == 1 ? "350" : "-350",
        translateY: id % 2 == 1 ? "350" : "-350",
        opacity: 0,
        scale: 0,
      }}
      animate={{ translateX: 0, translateY: 0, opacity: 1, scale: 1 }}
      transition={{
        delay: 0.4 * id,
        duration: 0.6,
        // type: "spring",
        // stiffness: 190,
      }}
      className="card h-[330px] sm:h-auto lg:h-[320px]"
    >
      <Image
        width={500}
        height={500}
        src={`/certificates/certificate${id + 1}.jpeg`}
        alt=""
      />

      <div className="flex flex-col justify-center mx-auto info items ">
        <h1 className="my-5 text-2xl font-bold text-center text-black font-Lexend ">
          {data?.name}
        </h1>

        <a
          href={data?.link}
          target="_blank"
          className="text-black duration-500 hover:font-medium hover:border-t-2 hover:border-b-2 hover:py-1 hover:border-black hover:transition-all "
        >
          Certification Link
        </a>
      </div>
    </motion.div>
  );
};

export default CertificateCard;
