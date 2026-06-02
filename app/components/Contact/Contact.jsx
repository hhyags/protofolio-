'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styles from './Contact.module.css'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('[data-contact]', { y: 38, opacity: 0 }, {
        y: 0,
        opacity: 1,
        duration: 0.85,
        stagger: 0.1,
        scrollTrigger: { trigger: ref.current, start: 'top 72%' },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section className="sectionShell" id="contact" ref={ref}>
      <div className="sectionInner">
        <div data-contact>
          <p className="sectionLabel">Get In Touch</p>
          <h2 className="sectionTitle">Let's Connect</h2>
          <p className={styles.subheading}>Have a project idea? Let's create something amazing together.</p>
        </div>
        <div className={styles.grid}>
          <form className={styles.form} data-contact>
            <input type="text" name="name" placeholder="Name" aria-label="Name" />
            <input type="email" name="email" placeholder="Email" aria-label="Email" />
            <input type="text" name="subject" placeholder="Subject" aria-label="Subject" />
            <textarea name="message" rows="5" placeholder="Message" aria-label="Message" />
            <button type="submit">Send Message</button>
          </form>
          <aside className={styles.info} data-contact>
            <div><span />Email: gouthamsai@email.com</div>
            <div><span />Location: Visakhapatnam, India</div>
            <div><span />GitHub: <a href="https://github.com/hhyags" target="_blank" rel="noreferrer">github.com/hhyags</a></div>
            <div><span />LinkedIn: <a href="https://www.linkedin.com/in/goutham-sai-949558342" target="_blank" rel="noreferrer">goutham-sai</a></div>
            <div><span />Instagram: <a href="https://www.instagram.com/hhyags_143?igsh=MWY5N2F3cmZxNXFvYg==" target="_blank" rel="noreferrer">@hhyags_143</a></div>
          </aside>
        </div>
      </div>
      <footer className={styles.footer}>Copyright 2025 Goutham Sai | AI & Product Portfolio</footer>
    </section>
  )
}
