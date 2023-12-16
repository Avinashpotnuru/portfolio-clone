import React, { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Image from "next/image";

const handleDragStart = (e) => e.preventDefault();
const responsive = {
  0: {
    items: 2,
  },
  490: {
    items: 3,
  },
  1024: {
    items: 4,
  },
};

const items = [
  <Image
    height={400}
    width={400}
    src="/movieszone.jpg"
    role="presentation"
    className="h-full w-full"
  />,
  <Image
    height={400}
    width={400}
    src="/resturaant.webp"
    role="presentation"
    className="h-full w-full"
  />,
  <Image
    height={400}
    width={400}
    src="/foodmuch.png"
    role="presentation"
    className="h-full w-full"
  />,
];

const TestCard = () => {
  const [cardToggle, setCardToggle] = useState(false);
  return (
    <div className="h-[500px] w-[300px] bg-red-300">
      <AliceCarousel
        className=""
        autoHeight={true}
        autoWidth={true}
        mouseTracking
        items={items}
        infinite
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        autoPlay={true}
        animationDuration={1500}
      />
      <h1>helloooo</h1>
    </div>
  );
};

export default TestCard;
