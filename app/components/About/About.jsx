'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styles from './About.module.css'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('[data-about]', { y: 40, opacity: 0 }, {
        y: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.12,
        scrollTrigger: { trigger: ref.current, start: 'top 72%' },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section className="sectionShell" id="about" ref={ref}>
      <div className={`sectionInner ${styles.grid}`}>
        <div data-about>
          <p className="sectionLabel">About Me</p>
          <div className={styles.badges}>
            <span>Student Developer</span>
            <span>Active Learner</span>
            <span>Aspiring Developer</span>
          </div>
        </div>
        <article className={styles.copy} data-about>
          <h2 className="sectionTitle">Aspiring Developer</h2>
          <p>I'm Goutham Sai, a B.Tech student and aspiring developer from Visakhapatnam, India. I'm passionate about technology, creativity, and learning new skills. Right now, I'm focused on building a strong foundation in web development, UI/UX design, and problem-solving.</p>
          <p>I enjoy creating clean and simple digital experiences, whether it's designing portfolios, building web interfaces, or experimenting with AI tools. I approach every project with patience, curiosity, and a positive mindset. Even though I'm at the early stage of my journey, I'm dedicated to improving every day and turning ideas into real, working solutions.</p>
          <p>More than just coding, I value teamwork, creativity, and helping others. I believe growth comes from practice, collaboration, and continuous learning - and I'm excited to build meaningful projects along the way.</p>
          <span className={styles.location}>Visakhapatnam, India</span>
        </article>
      </div>
    </section>
  )
}
