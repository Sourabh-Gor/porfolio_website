"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Nasa Space Apps Challenge",
    description: "Collaborated with a skilled team to design and develop a website for NASA's eclipse simulation game, showcasing exceptional web development skills.",
    image: "/images/projects/11.png",
    gitUrl: "https://github.com/Sourabh-Gor/eclipseModel",
  },
  {
    id: 2,
    title: "Pneumonia Detection using ML",
    description: "Engineered a deep learning model for precise pneumonia detection using X-ray images, underlining my proficiency in machine learning techniques.",
    image: "/images/projects/2.png",
    gitUrl: "https://github.com/Sourabh-Gor/pneumonia",
  },
  {
    id: 3,
    title: "Box Office Revenue Prediction using Regression",
    description: "Box office revenue prediction through regression involves leveraging statistical models to anticipate a movie's financial success, considering factors like genre, budget, and release date.",
    image: "/images/projects/3.png",
    gitUrl: "https://github.com/Sourabh-Gor/BoxOfficeRevenuePrediction",
  },
  {
    id: 4,
    title: "Monthly Budget Planner",
    description: "Flask-based Monthly Budget Planner: Easily manage and track monthly expenses, set budget limits, and visualize financial data with this user-friendly web application. Empowering users for effective and streamlined budget management.",
    image: "/images/projects/4.png",
    gitUrl: "https://github.com/Sourabh-Gor/BudgetPlannerFlaskF",
  },
  {
    id: 5,
    title: "Smart Agriculture Monitoring System",
    description: "Spearheaded the development of a comprehensive smart agriculture monitoring system using C++ and Arduino, showcasing expertise in embedded systems.",
    image: "/images/projects/10.png",
    gitUrl: "https://github.com/Sourabh-Gor/SmartAgricultureMonitoringSystem",
  },
  {
    id: 6,
    title: "Restful Api",
    description: "Created a RESTful API from scratch, demonstrating comprehensive back-end development skills and efficient API design",
    image: "/images/projects/5.png",
    gitUrl: "https://github.com/Sourabh-Gor/my-restful-api",
  },
  {
    id: 7,
    title: "Blogsite using MERN Stack",
    description: "This project is a dynamic blog platform leveraging the MERN stack (MongoDB, Express.js, React, Node.js). Users can create, edit, and share blog posts, while enjoying a responsive and interactive user interface for an immersive blogging experience.",
    image: "/images/projects/7.png",
    gitUrl: "https://github.com/Sourabh-Gor/blogsite",
  },
  {
    id: 8,
    title: "Secure Secrets Sharing Web Application",
    description: "Crafted a robust web application with advanced security features, utilizing database management, cookies, session management, and Google OAuth for an exemplary user experience.",
    image: "/images/projects/12.png",
    gitUrl: "https://github.com/Sourabh-Gor/Secrets_Website",
  },
  {
    id: 9,
    title: "Weather API Application with its own RESTFUL API",
    description: "A user-friendly application that fetches real-time weather data using a weather API. Offering current weather conditions, forecasts, and location-based updates, this app provides a seamless and informative experience for users to stay updated on the latest weather information.",
    image: "/images/projects/5.png",
    gitUrl: "https://github.com/Sourabh-Gor/weather-api",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });




  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project,index) => (
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
              gitUrl={project.gitUrl}
            />
            </motion.li>
            ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
