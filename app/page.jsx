'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import VideoIntro from '../components/VideoIntro';
import styles from './page.module.css';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const PROJECTS = [
  {
    name: 'Skill Graph Intelligence',
    stack: 'React.js · Vite · Node.js · Express · MongoDB · Firebase',
    desc: 'Built an AI-powered LMS connecting students with mentors using the MERN Stack and Firebase Authentication. Implemented real-time polling (Socket.io), skill assessments, career tracking, and the Skill-T-Meter.',
  },
  {
    name: 'Leave Management System',
    stack: 'Java · Spring Boot · MySQL · Liquibase',
    desc: 'Developed an enterprise-ready Spring Boot backend with JWT authentication and role-based access control, automated leave balance management, overlap detection, and strict leave lifecycle transitions.',
  },
  {
    name: 'Seating Arrangement Generator',
    stack: 'Java · Spring Boot · HTML · CSS',
    desc: 'Developed a Spring Boot application to automate classroom seat allocation, integrating frontend and backend for efficient seat generation and local deployment.',
  },
  {
    name: 'Movie Ticket Engine',
    stack: 'Java',
    desc: 'Built a Java-based ticket booking system supporting Premier, General, and Student categories with ticket generation and pricing logic using OOP principles.',
  },
];

const SKILL_GROUPS = [
  {
    label: 'Languages',
    items: ['JavaScript', 'Java', 'Python', 'C', 'C++', 'SQL', 'HTML', 'CSS'],
  },
  {
    label: 'Frameworks',
    items: ['React.js', 'Vite', 'Express.js', 'Node.js', 'Spring Boot'],
  },
  {
    label: 'Databases',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Firebase'],
  },
  {
    label: 'AI & Dev Tools',
    items: ['MCP', 'Claude Code Subagents', 'Hooks', 'Agents', 'Prompt Caching', 'SDK'],
  },
  {
    label: 'Tooling',
    items: ['Git', 'GitHub', 'VS Code', 'IntelliJ IDEA', 'AntiGravity', 'Figma', 'FigJam'],
  },
];

const ACHIEVEMENTS = [
  'Software Engineer Internship at Samasra Soft - Mississauga, Ontario, Canada',
  'Contributor in GirlScript Summer of Code (GSSoC) 2026 – Global Rank 5',
  'Received the Dean’s List Certificate for outstanding academic performance, ranking among the top performers in the class during Semester 1',
  '5000+ Open Source Contributions on GitHub',
  'Solved 500+ coding problems on CodeChef and 100+ on LeetCode and HackerRank',
];

export default function Home() {
  const mainRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(`.${styles.reveal}`).forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 90%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <main className={styles.main} ref={mainRef}>
      <VideoIntro scrollTargetId="about" />

      {/* ABOUT */}
      <section id="about" className={styles.section}>
        <div className={styles.sectionInner}>
          <span className={`${styles.eyebrow} ${styles.reveal}`}>About</span>
          <h2 className={`${styles.sectionTitle} ${styles.reveal}`}>
            Building scalable, user-focused software — one product at a time.
          </h2>
          <div className={styles.aboutGrid}>
            <p className={`${styles.aboutText} ${styles.reveal}`}>
              I&apos;m <strong>Mohith Reddy Desireddy</strong>, a Computer Science
              and Engineering student specializing in{' '}
              <strong>Product Engineering with Artificial Intelligence</strong> at
              SRM University AP. I care about the space where clean engineering
              meets real product sense — writing code that scales and building
              interfaces people actually enjoy using. Currently exploring
              full-stack development, AI-native tooling, and open-source
              collaboration.
            </p>
            <div className={`${styles.statList} ${styles.reveal}`}>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>9.93</div>
                <div className={styles.statLabel}>CGPA · SRM University AP</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>2029</div>
                <div className={styles.statLabel}>Expected Graduation</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>500+</div>
                <div className={styles.statLabel}>Problems Solved · CodeChef</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className={styles.section}>
        <div className={styles.sectionInner}>
          <span className={`${styles.eyebrow} ${styles.reveal}`}>Selected Work</span>
          <h2 className={`${styles.sectionTitle} ${styles.reveal}`}>Projects</h2>
          <div className={`${styles.projectGrid} ${styles.reveal}`}>
            {PROJECTS.map((p, i) => (
              <div className={styles.projectCard} key={p.name}>
                <span className={styles.projectIndex}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className={styles.projectName}>{p.name}</h3>
                <span className={styles.projectStack}>{p.stack}</span>
                <p className={styles.projectDesc}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className={styles.section}>
        <div className={styles.sectionInner}>
          <span className={`${styles.eyebrow} ${styles.reveal}`}>Toolkit</span>
          <h2 className={`${styles.sectionTitle} ${styles.reveal}`}>Skills</h2>
          <div className={`${styles.skillGroups} ${styles.reveal}`}>
            {SKILL_GROUPS.map((group) => (
              <div key={group.label}>
                <span className={styles.skillGroupLabel}>{group.label}</span>
                <div className={styles.pillRow}>
                  {group.items.map((item) => (
                    <span className={styles.pill} key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section id="achievements" className={styles.section}>
        <div className={styles.sectionInner}>
          <span className={`${styles.eyebrow} ${styles.reveal}`}>Track Record</span>
          <h2 className={`${styles.sectionTitle} ${styles.reveal}`}>Experience & Achievements</h2>
          <div className={`${styles.achieveList} ${styles.reveal}`}>
            {ACHIEVEMENTS.map((a) => (
              <div className={styles.achieveItem} key={a}>
                <span className={styles.achieveMark}>&#9670;</span>
                <span>{a}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className={styles.section}>
        <div className={`${styles.sectionInner} ${styles.contact}`}>
          <span className={`${styles.eyebrow} ${styles.reveal}`}>Get in touch</span>
          <h2 className={`${styles.contactTitle} ${styles.reveal}`}>
            Let&apos;s build something worth shipping.
          </h2>
          <div className={`${styles.contactLinks} ${styles.reveal}`}>
            <a
              className={styles.contactLink}
              href="mailto:desireddymohithreddy0925@gmail.com"
            >
              desireddymohithreddy0925@gmail.com
            </a>
            <a className={styles.contactLink} href="https://www.linkedin.com/in/mohith-reddy-desireddy-795404382/">
              LinkedIn
            </a>
            <a className={styles.contactLink} href="https://github.com/desireddymohithreddy0925">
              GitHub
            </a>
            <a className={styles.contactLink} href="https://leetcode.com/u/DESIREDDY_MOHITH_REDDY/">
              LeetCode
            </a>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        © 2026 Mohith Reddy Desireddy · Tirupati, Andhra Pradesh, India
      </footer>
    </main>
  );
}
