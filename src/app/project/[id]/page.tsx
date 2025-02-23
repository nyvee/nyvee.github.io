'use client';

import { notFound, useParams } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import styles from "./project.module.css";
import { useEffect } from "react";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

const projects = [
  { id: "1", 
    title: "Wayang Nganjor Web Design",
    year: "2024",
    description: "Wayang Nganjor is a contemporary puppet art form that emerged and flourished in Pandeglang, Banten. It represents a reimagining of traditional performing arts by blending elements from ubrug, rampak bedug, and wayang golek. Spearheaded by the talented puppeteer Ki Tirta Nugraha Pratama, Wayang Nganjor revitalizes these traditional art forms through reconstruction, crafting a modern narrative that resonates with the millennial audience.", 
    role: "UI/UX Designer",
    link: "https://wayangnganjor.id/",
    image: "/images/project-1.png" 
  },
  { id: "2", 
    title: "Eterluna Vtube Agency Website Design", 
    year: "2024",
    description: "Eterluna is a dynamic Vtuber group from Indonesia, dedicated to fostering community acceptance and showcasing each member's unique individuality. Their mission is to create an inclusive environment where diverse talents can shine and connect with global audiences, enriching the digital content landscape and building a vibrant, engaged community.", 
    role: "UI/UX Designer",
    link: "https://www.behance.net/gallery/192816331/Eterluna-VTube-Agency-Website",
    image: "/images/project-2.png" 
  },
  { id: "3", 
    title: "Lu'merce E-commerce Mobile App Final Project", 
    year: "2023",
    description: "Designed for a high-class fashion e-commerce app and landing page, this minimalist yet elegant design exudes luxury. A refined color palette and sleek interface enhance the premium shopping experience, ensuring a seamless, intuitive user journey. By balancing sophistication and simplicity, the design creates a captivating digital storefront for modern, discerning consumers.", 
    role: "UI/UX Designer, Mobile Developer & Project Manager",
    image: "/images/project-3.png" 
  },
  { id: "4", 
    title: "Restsmart App", 
    year: "2024",
    description: "This mobile application, Restmart, embodies a user-centered design philosophy, emphasizing simplicity and accessibility. With an intuitive interface and clean layout, the app is crafted to cater to a diverse audience, ensuring effortless navigation for users of all ages and technical backgrounds.", 
    role: "UI/UX Designer",
    link: "https://play.google.com/store/apps/details?id=com.miurayuuki.RestSmart&pcampaignid=web_share",
    image: "/images/project-4.png" 
  },
];

export default function ProjectDetails() {
  const params = useParams();
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1025) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    };
  
    handleResize();
    window.addEventListener("resize", handleResize);
  
    return () => {
      document.body.style.overflowY = "auto";
      document.body.style.overflowX = "hidden";
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  

  return (
    <motion.main 
    className={styles.projectDetail}
    variants={pageVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    >
      <header className="header nav">
        <Link href="/" className="logo nav-link">
          <Image src="/logo_white.png" alt="logo" width={32} height={32} />
        </Link>
        <Link href="/" className="nav-link">Back</Link>
      </header>

      <section className={styles.projectContent}>
        <div className={styles.columnOne}>
          <h1 className={styles.projectTitle}>{project.title}</h1>
          <div className={styles.projectInfo}>
            <p>Year</p>
            <span>{project.year}</span>
          </div>
          <div className={styles.projectInfo}>
            <p>Role</p>
            <span>{project.role}</span>
          </div>
          {project.link ? (
            <div className={styles.projectInfo}>
              <p>Publication</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                {project.link}
              </a>
            </div>
          ) : null}
        </div>
        <div className={styles.columnTwo}>
          <p className={styles.projectDesc}>{project.description}</p>
          <Image src={project.image} alt={project.title} width={600} height={400} />
        </div>
      </section>

      <footer className={`${styles.footerPosition} footer accent-container`}>
        <Image src="/add_2.svg" alt="accent" width={50} height={50} />
        <p className="footer-text">© 2025 Kevyn Octavian. All rights reserved.</p>
        <Image src="/add_2.svg" alt="accent" width={50} height={50} />
      </footer>
    </motion.main>
  );
}