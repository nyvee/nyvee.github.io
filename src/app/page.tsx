"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import Lenis from "@studio-freight/lenis";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

export default function Home() {
  const projectListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
    });
  
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
  
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const list = projectListRef.current;
    if (!list) return;
  
    const preventScroll = (event: WheelEvent) => {
      if (event.deltaY !== 0) {
        event.preventDefault();
        event.stopPropagation();
        list.scrollLeft += event.deltaY;
      }
    };
  
    list.addEventListener("wheel", preventScroll, { passive: false });
  
    return () => {
      list.removeEventListener("wheel", preventScroll);
    };
  }, []);
  
  
  return (
     <motion.main
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
     >
       <header className="header nav">
         <Link href="/" className="logo nav-link">
            <Image src="/logo_white.png" alt="logo" width={32} height={32} />
              </Link>
                <Link href="/" className="nav-link">
                  Works
                </Link>
                <Link href="/profile" className="nav-link">
                  Profile
                </Link>
            </header>

            <section className="hero">
              <h1 className="hero-title">
                Kevyn
                <br />
                Octavian
              </h1>
              <div className="hero-content">
                <p className="hero-subtitle">UI/UX, Android Application and Data Science.</p>
                <div className="arrow">
                  <Image src="/arrow_downward_alt.svg" alt="arrow" width={150} height={150} className="icon" />
                </div>
              </div>
            </section>

            <section className="featured">
              <div className="accent-container">
                <Image src="/add_2.svg" alt="accent" width={50} height={50} />
                <Image src="/add_2.svg" alt="accent" width={50} height={50} />
              </div>

              <div className="scroll-container">
                <div className="scroll-wrapper">
                  <div className="scroll-text">
                    <span> Featured UI/UX Projects • </span>
                    <span> Featured UI/UX Projects • </span>
                    <span> Featured UI/UX Projects • </span>
                    <span> Featured UI/UX Projects • </span>
                  </div>
                  <div className="scroll-text">
                    <span> Featured UI/UX Projects • </span>
                    <span> Featured UI/UX Projects • </span>
                    <span> Featured UI/UX Projects • </span>
                    <span> Featured UI/UX Projects • </span>
                  </div>
                </div>
              </div>

              <div className="projects-grid">
                {[
                  { id: 1, col: "1 / 2", row: "1 / 2" },
                  { id: 2, col: "2 / 3", row: "2 / 3" },
                  { id: 3, col: "3 / 4", row: "3 / 4" },
                  { id: 4, col: "4 / 4", row: "2 / 3" },
                ].map(({ id, col, row }) => (
                  <Link key={id} href={`/project/${id}`} passHref legacyBehavior>
                    <div
                      className="project-card"
                      style={{ gridColumn: col, gridRow: row }}
                    >
                      <img src={`/images/project-${id}.png`}/>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="accent-container">
                <Image src="/add_2.svg" alt="accent" width={50} height={50} />
                <Image src="/add_2.svg" alt="accent" width={50} height={50} />
              </div>

            </section>

            <div className="accent-container-right">
                <Image src="/circle.svg" alt="accent" width={50} height={50} />
            </div>

            <section className="other-projects">
              <div className="section-header">
                <hr className="section-divider" />
                <h2 className="section-title">Other Projects</h2>
              </div>
              <div className="project-list" ref={projectListRef}>
                {projects.map((project) => (
                  <div key={project.title} className="project-item">
                    <div className="text-container">
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                    </div>
                    <a href={project.link} className="project-link">
                      <p>View on Github</p>
                      <Image src="/arrow_outward.svg" alt="arrow" width={24} height={24} />
                    </a>
                  </div>
                ))}
              </div>
            </section>

            <section className="graphic-design-projects">
              <div className="section-header">
                <hr className="section-divider" />
                <h2 className="section-title">Graphic Design Projects</h2>
              </div>

              <div className="graphic-design-grid">
                {[
                  { id: 1, size: "small", area: "a" },
                  { id: 2, size: "small", area: "b" },
                  { id: 3, size: "small", area: "c" },
                  { id: 4, size: "small", area: "d" },
                  { id: 5, size: "small", area: "e" },
                  { id: 6, size: "large", area: "f" }, // Large image
                ].map(({ id, size, area }) => (
                  <div key={id} className={`graphic-design-item ${size}`} data-area={area}>
                    <img src={`/images/graphic-design-${id}.png`} alt={`Graphic Design ${id}`} />
                  </div>
                ))}
              </div>
            </section>


            <footer className="footer accent-container">
              <Image src="/add_2.svg" alt="accent" width={50} height={50} />
              <p className="footer-text">© 2025 Kevyn Octavian. All rights reserved.</p>
              <Image src="/circle.svg" alt="accent" width={50} height={50} />
            </footer>

          </motion.main>    
  )
}

const projects = [
  {
    title: "ScanVision",
    description:
      "An Android app developed for the Bangkit 2024 Final Capstone Project, designed to detect visible eye diseases using the front camera and machine learning, with a feature to fetch related articles.",
    link: "https://github.com/nyvee/ScanVisionApp",
  },
  {
    title: "Submission 5",
    description:
      "An Android app developed for a Dicoding Submission, allowing users to post images with a title, caption, and optional location sharing.",
    link: "https://github.com/nyvee/submission-5",
  },
  {
    title: "Lu'merce",
    description:
      "An Android eCommerce app developed for a Semester Final Project, designed for selling luxury items with a focus on CRUD implementation and backend integration.",
    link: "https://github.com/nyvee/frontend-project",
  },
  {
    title: "Heatwave Dashboard",
    description:
      "A web app developed with Dash and Plotly to visualize global heatwave anomalies, allowing users to select a year, choose a projection type, explore temperature trends, filter data by country, and view interactive choropleth maps.",
    link: "https://github.com/nyvee/Heatwave-Dashboard",
  },
  {
    title: "AgriPrice",
    description:
      "A data analysis project on food commodity consumption, production, and pricing in Yogyakarta (2018–2023), utilizing data preprocessing, visualization, and multiple linear regression to predict prices and identify key influencing factors.",
    link: "https://github.com/nyvee/AgriPrice-Analysis",
  },
  {
    title: "Image Classification",
    description:
      "An image classification project using genetic algorithms for feature selection and a random forest classifier to identify eye conditions, optimizing accuracy through evolutionary techniques and performance evaluation.",
    link: "https://github.com/nyvee/Image-Classification-GA",
  },
]


