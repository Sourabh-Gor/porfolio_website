"use client";
import React , {useTransition, useState} from 'react'
import Image from 'next/image'
import TabButton from './TabButton';


const TAB_DATA = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <ul className="list-disc pl-2">
          <li>Full Stack Web Devlopement & TailwindCSS</li>
          <li>React & Next js</li>
          <li>SQL & NoSQL</li>
          <li>Python,Flask & ML</li>
          <li>Java</li>
          <li>C++</li>
          
          
        </ul>
      ),
    },
    {
      title: "Education",
      id: "education",
      content: (
        <ul className="list-disc pl-2">
          <li>UG: Dayananda Sagar University(Currently Pursuing) Graduation:2025</li>
          <li>PUC in Aradhana PU College</li>
          <li>10th ICSE in St. Miras High School</li>
        </ul>
      ),
    },
    {
      title: "Certifications",
      id: "certifications",
      content: (
        <ul className="list-disc pl-2">
          <li>Ethical Hacking Certification by NPTEL</li>
          <li>Winner of NASA Hackathon at Jain Univesity Bengaluru</li>
          <li>Winner of Flask Hackathon at Dayananda Sagar Univesity Bengaluru</li>
        </ul>
      ),
    },
  ];

const About = () => {
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
        <Image src="/images/about-image.png" width={500} height={500} alt='About Image' />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          Sourabh J Gor, a dedicated full-stack web developer, brings a profound passion for crafting interactive and responsive applications.
          Armed with valuable skills and experience, I specialize in leveraging versatile tech stacks.
          As a quick learner, I thrive on challenges that expand my knowledge, contributing to cutting-edge projects.
          My collaborative nature makes me an enthusiastic team player, eager to create exceptional and innovative applications through continuous learning and staying abreast of the latest industry trends.
          Let&apos;s embark on a journey to build something amazing together!
          </p>
          <div className="flex flex-row justify-start mt-8">
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

export default About;
