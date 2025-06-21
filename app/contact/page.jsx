"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { FaPhoneAlt, FaEnvelope, FaSpinner, FaCheck } from "react-icons/fa";
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
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // '', 'sending', 'sent', 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("sent");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }

    // Reset form after 5 seconds
    setTimeout(() => {
      setStatus("");
    }, 2000);
  };

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
            <form
              onSubmit={handleSubmit}
              autoComplete="off"
              className="flex flex-col gap-8 p-6 rounded-xl"
            >
              <h3 className="text-3xl font-semibold text-accent">Let&apos;s connect</h3>
              <p className="text-base text-white/60">
                Open to opportunities and collaborations—let&apos;s get in touch!
              </p>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <Input
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                <Input
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
                <Input
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <Textarea
                placeholder="Your message..."
                className="h-24"
                name="message"
                value={formData.message}
                onChange={handleChange}
              />

              {/* Submit Area */}
            <Button
              type="submit"
              size="md"
              className={`max-w-40 flex justify-center transition items-center h-12 relative ${
                status === "sent" ? "bg-accent hover:bg-accent" : ""
              }`}
              disabled={status === "sending" || status === "sent"}
            >
              {status === "sending" ? (
                <FaSpinner className="text-xl text-white animate-spin" />
              ) : status === "sent" ? (
                <FaCheck className="text-2xl text-white animate-scale-up" />
              ) : (
                "Send Message"
              )}
            </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="w-full xl:w-[40%] flex flex-col justify-center order-1 xl:order-none gap-6">
            {info.map((item, index) => (
              <div key={index} className="flex items-center gap-4 text-white">
                <a
                  href={item.link}
                  className="text-xl transition-transform duration-200 text-accent hover:scale-110"
                  aria-label={item.title}
                >
                  {item.icon}
                </a>
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
