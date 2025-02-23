'use client';

import styles from './profile.module.css';
import { motion } from "framer-motion";
import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Lenis from "@studio-freight/lenis";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};


export default function Profile() {
  const socialRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);

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
    const handleScroll = () => {
      if (!socialRef.current) return;
      const socialTop = socialRef.current.getBoundingClientRect().top;
      setIsScrolled(socialTop <= 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.main 
      className={styles.main}
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* Header Section */}
      <header className={`${styles.header} ${isScrolled ? styles.navCream : ""}`}>
        <Link href="/" className={`${styles.logo} ${styles.navLink}`}>
          <Image
            src={isScrolled ? "/logo_cream.png" : "/logo_black.png"}
            alt="logo"
            width={32}
            height={32}
          />
        </Link>
        <Link href="/" className={styles.navLink}>Works</Link>
        <Link href="/profile" className={styles.navLink}>Profile</Link>
      </header>

      {/* Hero Section */}
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>
          Get to  
          <br />  
          Know Me
        </h1>
        <div className={styles.heroContent}>
          <p className={styles.heroSubtitle}>contact me at</p>
          <a href="mailto:kevynoctavian24@gmail.com" className={styles.heroLink}>
            kevynoctavian24@gmail.com
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className={styles.about}>
        <div className={styles.accentContainerRight}>
          <Image src="/add_2 b.svg" alt="accent" width={50} height={50} />
        </div>
        <div className={styles.aboutGrid}>
          <p className={`${styles.aboutContent} ${styles.first}`}>
            I&apos;m Kevyn Octavian, a 6th-semester Informatics student with a strong passion for continuous learning and adaptability. A fast learner with a keen interest in Data Analysis, Data Science, UI/UX Design, and Android App Development, I have solid experience in UI/UX freelance projects. Detail-oriented and an effective communicator, I thrive in teamwork and problem-solving environments, ensuring efficiency and collaboration.
          </p>
          <p className={`${styles.aboutContent} ${styles.second}`}>
            Proficient in UI/UX design with Figma, I specialize in mobile application development using Flutter and Kotlin, alongside expertise in data analysis, machine learning, automation, and data visualization with Python. I have experience in project management using Agile methodologies and web development with HTML, CSS, JavaScript, ReactJS, and Next.js. Additionally, I excel in critical thinking, communication, teamwork, adaptability, time management, and fast learning. In my free time, I enjoy exploring graphic design, creating visuals that blend creativity with functionality.
          </p>
        </div>
        <div className={styles.accentContainerLeft}>
          <Image src="/add_2 b.svg" alt="accent" width={50} height={50} />
        </div>
      </section>

      {/* Social Section */}
      <section className={styles.social} ref={socialRef}>
        <div className={styles.accentContainerLeft}>
          <Image src="/circle c.svg" alt="accent" width={50} height={50} />
        </div>
        <div className={styles.socialGrid}>
          <a href="https://www.linkedin.com/in/kevynoctavian/" className={`${styles.socialLink} ${styles.linkedin}`}>LinkedIn
            <Image src="arrow_outward c.svg" alt="LinkedIn" className={styles.socialArrow} width={128} height={128} />
          </a>
          <a href="https://dribbble.com/kevynoctavian" className={`${styles.socialLink} ${styles.dribbble}`}>Dribbble
            <Image src="arrow_outward c.svg" alt="Dribbble" className={styles.socialArrow} width={128} height={128} />
          </a>
          <a href="https://github.com/nyvee" className={`${styles.socialLink} ${styles.github}`}>Github
            <Image src="arrow_outward c.svg" alt="Github" className={styles.socialArrow} width={128} height={128} />
          </a>
          <a href="https://www.behance.net/kevynoctavian" className={`${styles.socialLink} ${styles.behance}`}>Behance
            <Image src="arrow_outward c.svg" alt="Behance" className={styles.socialArrow} width={128} height={128} />
          </a>
          <a href="https://www.upwork.com/freelancers/~0162b33b3e35bcb1cd?mp_source=share" className={`${styles.socialLink} ${styles.upwork}`}>Upwork
            <Image src="arrow_outward c.svg" alt="Upwork" className={styles.socialArrow} width={128} height={128} />
          </a>
        </div>
      </section>

      {/* Footer Section */}
      <footer className={`${styles.footer} ${styles.accentContainer}`}>
        <Image src="/circle b.svg" alt="accent" width={50} height={50} />
        <p className={styles.footerText}>© 2025 Kevyn Octavian. All rights reserved.</p>
        <Image src="/add_2 c.svg" alt="accent" width={50} height={50} />
      </footer>
    </motion.main>
  );
}