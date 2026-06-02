'use client'

import { useEffect, useRef } from 'react'
import { Bot, Box, Brush, Clapperboard, Cuboid, Sparkles } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styles from './Services.module.css'

gsap.registerPlugin(ScrollTrigger)

const services = [
  [Brush, 'UI/UX Designing', 'Crafting intuitive and visually stunning interfaces that prioritize user experience, accessibility, and modern design.'],
  [Sparkles, 'Portfolio Making', 'Building premium, high-end portfolio websites that showcase your work with cinematic layouts, smooth animations, and bold typography.'],
  [Bot, 'AI Agents', 'Developing intelligent AI-powered agents and automation solutions that streamline workflows and deliver smart, data-driven experiences.'],
  [Cuboid, '3D Modeling', 'Creating detailed, high-quality 3D models for products, characters, environments, and assets using industry-standard tools.'],
  [Box, 'Product Visualization', 'Producing photorealistic product renders and visualizations that bring concepts to life for marketing and e-commerce.'],
  [Clapperboard, 'Animation', 'Bringing ideas to motion with fluid animations, motion graphics, and cinematic sequences for engaging digital experiences.'],
]

export default function Services() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('[data-service]', { y: 38, opacity: 0 }, {
        y: 0,
        opacity: 1,
        duration: 0.82,
        stagger: 0.1,
        scrollTrigger: { trigger: ref.current, start: 'top 70%' },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section className="sectionShell" id="services" ref={ref}>
      <div className="sectionInner">
        <p className="sectionLabel" data-service>What I Do</p>
        <h2 className="sectionTitle" data-service>My Services</h2>
        <div className={styles.grid}>
          {services.map(([Icon, title, desc]) => (
            <article className={styles.card} key={title} data-service>
              <Icon aria-hidden="true" />
              <h3>{title}</h3>
              <p>{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
