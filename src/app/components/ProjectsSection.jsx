"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Pure Proof-of-Stake Implementation",
    description: "Optimized and implemented Algorand’s Pure Proof-of-Stake (PPoS) mechanism, significantly enhancing network scalability and security.",
    image: "/images/project_1.png",
    tag: ["All Projects", "Blockchain Projects"],
  },
  {
    id: 2,
    title: "Wine Refinery App - Supply Chain Solution",
    description: "Developed a blockchain-based supply chain management solution for the Wine Refinery App, improving transparency and trust across the supply chain.",
    image: "/images/project_2.png",
    tag: ["All Projects", "Blockchain Projects"],
  },
  {
    id: 3,
    title: "Nova Learning - Digital Identity Verification",
    description: "Created a digital identity verification system for Nova Learning, enhancing trust in educational certifications and combating fraud.",
    image: "/images/project_3.png",
    tag: ["All Projects", "Blockchain Projects", "Smart Contract Projects"],
  },
  {
    id: 4,
    title: "Empire Hotel Booking Management",
    description: "Developed a digital currency-based booking system for the Empire Hotel, reducing transaction processing time by 50%.",
    image: "/images/project_4.png",
    tag: ["All Projects", "Distributed Systems Projects", "Blockchain Projects"],
  },
  {
    id: 5,
    title: "Algorand Consensus Mechanism Optimization",
    description: "Optimized the consensus mechanism for Algorand, achieving a 30% improvement in transaction throughput and a 25% reduction in latency.",
    image: "/images/project_5.png",
    tag: ["All Projects", "Blockchain Projects"],
  },
  {
    id: 6,
    title: "Distributed Storage System with IPFS",
    description: "Implemented a distributed storage solution using IPFS, enhancing data availability and resilience across decentralized networks.",
    image: "/images/project_6.png",
    tag: ["All Projects", "Distributed Systems Projects"],
  }
];


const ProjectsSection = () => {
  const [tag, setTag] = useState("All Projects");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-1 py-6">
        <ProjectTag 
          onClick={handleTagChange}
          name="All Projects"
          isSelected={tag === "All Projects"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Blockchain Projects"
          isSelected={tag === "Blockchain Projects"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Smart Contract Projects"
          isSelected={tag === "Smart Contract Projects"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Distributed Systems Projects"
          isSelected={tag === "Distributed Systems Projects"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;