"use client";

import CountUp from "react-countup";

const stats = [
  {
    num: 12,
    text: "Years of experience",
  },
  {
    num: 12,
    text: "Project completed",
  },
  {
    num: 12,
    text: "Technologies mastered",
  },
  {
    num: 500,
    text: "Code commit",
  },
];

const Stats = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => {
            return (
              <div 
                className="flex items-center justify-center flex-1 gap-4 xl:justify-start"
                key={index}
              >
                <CountUp 
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-4xl font-extrabold xl:text-6xl"
                />
                <p className={`${
                  item.text.length < 10 ? "min-w-[100px]" : "max-w-[150px]"
                } leading-snug text-white/80`}
                  >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
