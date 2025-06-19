"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "fullstack",
    title: "project 1",
    description:
      "Developed a social networking web application using PostgreSQL, Python (Flask), and React, managing over daily interactions between students and faculty.",
    stack: [{ name: "HTML5" }, { name: "CSS3" }, { name: "JavaScript" }, { name: "Python" }],
    image: "/assets/work/svitconnect.png",
    live: "https://svitconnect.netlify.app/",
    github: "https://github.com/HRArya/SVITConnect",
  },
  // {
  //   num: "02",
  //   category: "frontend",
  //   title: "project 2",
  //   description:
  //     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio sit nobis expedita.",
  //   stack: [{ name: "HTML5" }, { name: "CSS3" }, { name: "JavaScript" }],
  //   image: "/assets/work/thumb2.png",
  //   live: "https://example.com/project2",
  //   github: "https://github.com/user/project2",
  // },
  // {
  //   num: "03",
  //   category: "fullstack",
  //   title: "project 3",
  //   description:
  //     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio sit nobis expedita.",
  //   stack: [{ name: "HTML5" }, { name: "CSS3" }, { name: "JavaScript" }],
  //   image: "/assets/work/thumb3.png",
  //   live: "https://example.com/project3",
  //   github: "https://github.com/user/project3",
  // },
];

const Project = () => {
  const [project, setProject] = useState(projects[0]);

    const handleSlideChange = (swiper) => {
      setProject(projects[swiper.activeIndex]);
    
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1, 
        transition: { delay:2.4, duration: 0.4, ease: "easeIn"}
      }}
      className="min-h-[80vh] flex flex-col justify-center py-16 xl:px-0"

    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[55%] xl:h-[460px] flex flex-col justify-between order-2 xl:order-none gap-4">
            <div className="flex flex-col gap-[26px] h-[60%]">
              {/* outline num */}
              <div className="font-extrabold leading-none text-transparent text-8xl text-outline">
              {project.num}
              </div>

              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white capitalize group-hover:text-accent transition-all duration-500">
              {project.category} project
              </h2>

              {/* project description */}
              <p className="text-white/60">{project.description}</p>

              {/* Tech Stack */}
              <ul className="flex flex-wrap gap-4">
              {project.stack.map((item, index) => {
              return (
                <li key={index} className="text-xl text-accent">
                  {item.name}
                  {index !== project.stack.length - 1 && ","}
                </li>
              );
              })}
              </ul>

              {/* border */}
              <div className="border border-white/20" />

              {/* Buttons */}
              <div className="flex items-center gap-4">
              {/* Live Button */}
              {project.live && (
                <Link href={project.live} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="flex w-[50px] h-[50px] rounded-full bg-white/5 justify-center items-center group cursor-pointer">
                          <BsArrowUpRight className="text-3xl text-white transition group-hover:text-accent" />
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              )}

              {/* GitHub Button */}
              {project.github && (
                <Link href={project.github} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="flex w-[50px] h-[50px] rounded-full bg-white/5 justify-center items-center group cursor-pointer">
                          <BsGithub className="text-3xl text-white transition group-hover:text-accent" />
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>GitHub Repo</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              )}
              </div>
            </div>
          </div>

          {/* SLIDER */}
          <div className="w-full xl:w-[45%] min-h-[350px] xl:h-[460px]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[420px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[380px] relative group flex justify-center items-center">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 z-10 w-full h-full bg-black/10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          alt={project.title}
                          className="object-cover w-full h-full rounded-xl"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              {projects.length > 1 && (
                <WorkSliderBtns 
                  containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-10 w-full justify-between xl:w-max xl:justify-none"
                  btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[24px] h-[24px] flex justify-center items-center transition-all"
                />
              )}
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Project;
