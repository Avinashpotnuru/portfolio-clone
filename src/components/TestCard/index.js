import React, { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

const TestCard = () => {
  const [cardToggle, setCardToggle] = useState(false);
  return (
    <div
      onMouseOver={() => setCardToggle(true)}
      onMouseOut={() => setCardToggle(false)}
      className="h-[500px] bg-green-200 w-[500px] shadow-md mx-auto flex flex-col justify-between  border-2 border-black bg-[url('/project2.png')] bg-cover object-center bg-center "
    >
      <h1>testing card</h1>
      <AnimatePresence>
        {cardToggle && (
          <motion.div
            initial={{ y: -400 }}
            animate={{ y: 0 }}
            whileHover={{
              transition: { duration: 0.7, delay: 0.3 },
              backgroundColor: "#9E7D5F",
              color: "white",
            }}
            exit={{ y: 400, duration: 2, delay: 0.4 }}
            className=" h-1/2 w-full  "
          >
            <h1></h1>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TestCard;
