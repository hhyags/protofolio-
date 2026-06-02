'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styles from './Skills.module.css'

gsap.registerPlugin(ScrollTrigger)

const skillGroups = [
  {
    title: 'Skills',
    items: [
      'Python Programming',
      'JavaScript',
      'SQL & Database Management',
      'HTML5 & CSS3',
      'Machine Learning',
      'Generative AI',
      'Prompt Engineering',
      'AI Agent Development',
      'Data Analysis',
      'Data Visualization',
      'Predictive Analytics',
      'REST API Integration',
      'Full-Stack Web Development',
      'Cloud Computing Fundamentals',
      'Infrastructure Monitoring',
      'System Performance Analysis',
      'Product Development',
      'Technical Documentation',
      'Project Management',
      'Problem Solving',
      'Team Collaboration',
      'Client Communication',
    ],
  },
  {
    title: 'AI & Machine Learning Tools',
    items: ['Python', 'Jupyter Notebook', 'Google Colab', 'OpenAI API', 'Gemini API', 'Claude API', 'Ollama', 'OpenRouter'],
  },
  {
    title: 'Web Development Tools',
    items: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'HTML5', 'CSS3', 'JavaScript'],
  },
  {
    title: 'Database & Backend',
    items: ['MongoDB', 'PostgreSQL', 'Supabase', 'REST APIs'],
  },
  {
    title: 'Cloud & Deployment',
    items: ['AWS (Basics)', 'Docker', 'Vercel', 'Netlify'],
  },
  {
    title: 'Development & Collaboration',
    items: ['Git', 'GitHub', 'Postman', 'VS Code', 'Cursor AI', 'Windsurf'],
  },
  {
    title: 'Design & Productivity',
    items: ['Figma', 'Canva', 'Notion'],
  },
  {
    title: 'Areas of Interest',
    items: [
      'Artificial Intelligence',
      'Machine Learning',
      'Generative AI',
      'AI Infrastructure Monitoring',
      'Predictive Maintenance Systems',
      'SaaS Product Development',
      'Startup Building',
      'Freelancing & Product Consulting',
    ],
  },
  {
    title: 'Core Strengths',
    items: ['Rapid Prototyping', 'AI-Powered Product Development', 'Research & Innovation', 'Problem Solving', 'Leadership', 'Communication', 'Adaptability', 'Continuous Learning'],
  },
]

export default function Skills() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('[data-skill-fade]', { y: 34, opacity: 0 }, {
        y: 0,
        opacity: 1,
        duration: 0.75,
        stagger: 0.08,
        scrollTrigger: { trigger: ref.current, start: 'top 72%' },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section className="sectionShell" id="skills" ref={ref}>
      <div className="sectionInner">
        <p className="sectionLabel" data-skill-fade>Expertise</p>
        <h2 className="sectionTitle" data-skill-fade>Skills & Tools</h2>
        <div className={styles.grid}>
          {skillGroups.map((group) => (
            <article className={styles.group} key={group.title} data-skill-fade>
              <h3>{group.title}</h3>
              <div className={styles.pills}>
                {group.items.map((item) => <span key={item}>{item}</span>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
