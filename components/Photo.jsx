"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="relative w-full h-full">
        <motion.div 
          initial={{opacity: 0}}
          animate={{
            opacity: 1,
            transition: {delay: 2, duration:0.4, ease:"easeIn"},
          }}
        >
          {/* Image */}
          <motion.div
            initial={{opacity: 0}}
          animate={{
            opacity: 1,
            transition: {delay: 2.4, duration:0.4, ease:"easeInOut"},
          }}
            className="w-[250px] h-[270px] xl:w-[400px] xl:h-[430px] mix-blend-lighten absolute">
                <Image 
                    src="/assets/h.png" 
                    priority 
                    quality={100} 
                    fill 
                    alt="" 
                    className="object-contain" 
                />
          </motion.div>

          {/* circle */}
          <motion.svg 
            className="w-[250px] xl:w-[406px] h-[250px] xl:h-[406px] overflow-visible" 
            fill="transparent"
            viewBox="0 0 510 510"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.circle 
              cx="259"
              cy="259"
              r="255"
              stroke="#00ff99"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{strokeDasharray: "24 10 0 0 "}}
              animate={{
                strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                rotate: [ 120, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </motion.svg>
        </motion.div>
    </div>
  );
};

export default Photo;