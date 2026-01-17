"use client";

import { 
  FaHtml5, 
  FaCss3, 
  FaJs, 
  FaReact, 
  FaFigma, 
  FaPython, 
  FaJava, 
  FaNodeJs,
  FaAws
} from "react-icons/fa";

import { SiTailwindcss, SiMysql, SiDocker, SiSpringboot } from "react-icons/si";

const about ={
  title: 'About me',
  description: "Java-focused backend developer building clean, maintainable applications with strong OOP foundations and hands-on exposure to AWS Cloud services and deployment workflows.",
  info: [
    { fieldName: "Name", fieldValue: "Harshit Raj Arya" },
    { fieldName: "Phone", fieldValue: "(+91) 7005298498" },
    { fieldName: "Experience", fieldValue: "Fresher" },
    { fieldName: "Gmail", fieldValue: "harshitrajarya@gmail.com" },
    { fieldName: "Nationality", fieldValue: "Indian" },
    { fieldName: "Languages", fieldValue: "Hindi, English" },
  ]
};

const experience = {
  title: "My experience",
  description: "Java backend developer focused on building clean, scalable applications, with solid OOP foundations and practical exposure to AWS Cloud and deployment workflows.",
  items: [
    {
      company: "AWS re/Start – Generation India",
      position: "Cloud Computing Trainee",
      duration: "Nov 2025 - Present",
    },
    {
      company: "Elevate Labs",
      position: "Java Development Intern",
      duration: "Sep 2025 - Nov 2025"
    },
    {
      company: "Tap Academy",
      position: "Software Development Trainee",
      duration: "Feb 2025 - Sep 2025"
    }
  ],
};

const education = {
  icon: '/assets/resume/cap.svg',
  title: "My education",
  description: "B.E. in Computer Science and Engineering (CGPA: 8.3)",
  items: [
    {
      institution: "Sai Vidya Institute of Technology",
      degree: "B.E. in Computer Science and Engineering",
      duration: "2021 - 2025" 
    },
  ],
};

const skills = {
  title: "My skills",
  description: "Backend-focused skill set centered on Java, RESTful services, and data-driven applications, with frontend, cloud, and containerization support.",
  skillList: [
    { icon: <FaJava/>, name: "java" },
    { icon: <FaPython/>, name: "python" },
    { icon: <SiMysql/>, name: "mysql" },
    { icon: <SiSpringboot />, name: "spring boot" },
    { icon: <FaHtml5/>, name: "html 5" },
    { icon: <FaCss3/>, name: "css 3" },
    { icon: <FaJs/>, name: "javascript" },
    { icon: <FaReact/>, name: "react.js" },
    { icon: <FaAws />, name: "aws" },
    { icon: <SiDocker />, name: "docker" },
    { icon: <SiTailwindcss/>, name: "tailwind.css" },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }}}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          <div className="min-h-[85vh] w-full">
            {/* Experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">
                  {experience.title}
                </h3>
                <p className="max-w-[750px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[300px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] auto-rows-min">
                    {experience.items.map((item, index) => (
                      <li key={index} className="bg-[#232329] min-h-[200px] py-4 px-8 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[300px] min-h-[60px] text-center lg:text-left lg:max-w-[420px]">{item.position}</h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[750px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] auto-rows-min">
                    {education.items.map((item, index) => (
                      <li key={index} className="bg-[#232329] min-h-[200px] py-6 px-8 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[300px] min-h-[60px] text-center lg:text-left lg:max-w-[420px]">{item.degree}</h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className="max-w-[750px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[20px] auto-rows-min">
                  {skills.skillList.map((skill, index) => (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl transition-all duration-300 group-hover:text-accent">{skill.icon}</div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            {/* About Me */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[750px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => (
                    <li key={index} className="flex items-center justify-center gap-4 xl:justify-start">
                      <span className="text-white/60">{item.fieldName}</span>
                      <span className="text-xl">{item.fieldValue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
