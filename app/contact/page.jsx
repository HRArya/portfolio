"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+91) 7005298498",
    link: "tel:+917005298498",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "harshitrajarya@gmail.com",
    link: "mailto:harshitrajarya@gmail.com",
  },
];

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.3, duration: 0.4, ease: "easeIn" },
      }}
      className="py-10"
    >
      <div className="container px-4 mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* Form */}
          <div className="w-full xl:w-[50%] order-2 xl:order-none">
            <form className="flex flex-col gap-8 p-6 rounded-xl">
              
              <h3 className="text-3xl font-semibold text-accent">Let's connect</h3>
              <p className="text-base text-white/60">
                Open to opportunities and collaborations—let’s get in touch!
              </p>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <Input type="text" placeholder="First Name" />
                <Input type="text" placeholder="Last Name" />
                <Input type="email" placeholder="Email Address" />
                <Input type="tel" placeholder="Phone Number" />
              </div>

              <Textarea placeholder="Your message..." className="h-10 " />

              <Button
                type="submit"
                size="md"
                className="max-w-40"
              >
                Send Message
              </Button>
              {/* <button
                type="submit"
                size
                className="px-6 py-3 mt-4 transition rounded text-white/80 w-fit bg-accent hover:opacity-90"
              >
                Send Message
              </button> */}
            </form>
          </div>

          {/* Contact Info */}
          <div className="w-full xl:w-[40%] flex flex-col justify-center order-1 xl:order-none gap-6">
            {info.map((item, index) => (
              <div key={index} className="flex items-center gap-4 text-white">
                {/* Icon wrapped in link */}
                <a
                  href={item.link}
                  className="text-xl transition-transform duration-200 text-accent hover:scale-110"
                  aria-label={item.title}
                >
                  {item.icon}
                </a>

                {/* Title and plain text (not clickable) */}
                <div>
                  <div className="font-semibold">{item.title}</div>
                  <div className="text-sm text-white/60">{item.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
