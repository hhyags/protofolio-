'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styles from './Portfolio.module.css'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    title: "Tanishka's Portfolio",
    desc: 'A design and prototype portfolio project focused on clean visual hierarchy, polished personal branding, and smooth user flow for presenting creative work.',
    tags: ['Design', 'Prototype', 'Portfolio'],
    link: 'https://tanishkas-portfolio-a517fae3.base44.app',
  },
  {
    title: 'Dileep Kumar Reddy Portfolio',
    desc: 'A design and prototype portfolio concept with a refined dark interface, intuitive navigation, and a professional presentation system for project storytelling.',
    tags: ['Design', 'Prototype', 'Portfolio'],
    link: 'https://dileep-kumar-reddy-portfolio-6ed23a4a.base44.app/',
  },
  {
    title: 'StockFlow AI',
    desc: 'A design and prototype project for an AI-assisted stock and workflow experience, shaped around data clarity, fast scanning, and practical product interaction.',
    tags: ['Design', 'Prototype', 'AI Product'],
    link: 'https://stockflowai12.netlify.app/',
  },
  {
    title: 'Kafa House Brew',
    desc: 'A design and prototype concept for a coffee brand experience with warm visuals, product-focused layout, and a smooth browsing journey.',
    tags: ['Design', 'Prototype', 'Brand Experience'],
    link: 'https://kafa-house-brew.base44.app',
  },
]

export default function Portfolio() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('[data-project]', { y: 42, opacity: 0 }, {
        y: 0,
        opacity: 1,
        duration: 0.85,
        stagger: 0.12,
        scrollTrigger: { trigger: ref.current, start: 'top 70%' },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section className={`sectionShell ${styles.portfolio}`} id="portfolio" ref={ref}>
      <div className={styles.marquee} aria-hidden="true">
        <div>Portfolio -- Featured Work -- Projects -- Portfolio -- Featured Work -- Projects --</div>
      </div>
      <div className="sectionInner">
        <p className="sectionLabel" data-project>Selected Work</p>
        <h2 className="sectionTitle" data-project>Design Prototypes</h2>
        <div className={styles.grid}>
          {projects.map((project) => (
            <article className={styles.card} key={project.title} data-project>
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <div className={styles.tags}>
                {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
              <a href={project.link} target="_blank" rel="noreferrer">View Project</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
