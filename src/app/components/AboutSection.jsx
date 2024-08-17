"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { skillsData } from "./skillsData"
import { motion } from "framer-motion";
import Icons from "./icons";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const growOnHover = {
  scale: 1.2,
};

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index, ) => (
          <motion.li
            className="flex flex-col items-center px-4 py-3 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            whileHover={growOnHover}
            viewport={{
              once: true,
            }}
            custom={index}
          >
            <Icons icon={skill.icon} size={50}/>
            <span className="mt-2 text-white">{skill.name}</span>
          </motion.li>
        ))}
      </ul>
      
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <div className="mt-4 text-2xl flex gap-6 border border-black/5 rounded-lg pt-2 pb-7 px-5 md:p-2">
        <div>
          <img src="/images/PUC.png" alt="USC" width="200" />
        </div>
        <div className="list-disc pl-2">
          <p>Pontifical University, Brazil</p>
          <p>Duration: 2015 – 2019</p>
          <p>Degree: Bachelor in Computer Science</p>
      </div>
      </div>
      
      // <ul className="list-disc pl-2">
      //   <li>Ramjas School, Delhi</li>
      //   <li>Shiv Nadar University, Delhi NCR</li>
      // </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Certified Blockchain Developer(CBD)-Blockchain Council(2018)</li>
        <li>Certified Smart Contract Developer(CSCD)-Blockchain Council(2019)</li>
        <li>Cyfrin Updraft</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        {/* <Image src="/images/aboutme.jpeg" width={500} height={500} /> */}
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a Senior Blockchain Engineer with a deep passion for building secure and scalable blockchain solutions. With proficiency in Solidity, Rust, GoLang, and experience across platforms like Ethereum and Solana, I excel in developing and auditing smart contracts, optimizing consensus mechanisms, and enhancing network resilience. My strong understanding of cryptography and blockchain protocols, combined with a commitment to problem-solving and continuous learning, drives me to deliver robust, cutting-edge blockchain applications. I thrive in collaborative environments and am eager to innovate within the decentralized technology space.
          </p>
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          
          <div className="flex flex-row justify-start mt-1 text-2xl sm:text-2xl lg:text-2xl">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;