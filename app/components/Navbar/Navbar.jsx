'use client'

import { useEffect, useState } from 'react'
import styles from './Navbar.module.css'

const links = [
  ['About', '#about'],
  ['Skills', '#skills'],
  ['Work', '#portfolio'],
  ['Services', '#services'],
  ['Contact', '#contact'],
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('about')
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setReady(true), 3400)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = links.map(([, href]) => document.querySelector(href)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-42% 0px -48% 0px' }
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const dot = document.querySelector('.cursorDot')
    const ring = document.querySelector('.cursorRing')
    if (!dot || !ring) return

    let ringX = 0
    let ringY = 0
    let dotX = 0
    let dotY = 0
    let frame = 0

    const animate = () => {
      ringX += (dotX - ringX) * 0.18
      ringY += (dotY - ringY) * 0.18
      dot.style.transform = `translate3d(${dotX}px, ${dotY}px, 0) translate(-50%, -50%)`
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`
      frame = requestAnimationFrame(animate)
    }

    const onMove = (event) => {
      dotX = event.clientX
      dotY = event.clientY
      ring.classList.toggle('isHovering', Boolean(event.target.closest('a, button, input, textarea')))
    }

    window.addEventListener('pointermove', onMove)
    animate()
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('pointermove', onMove)
    }
  }, [])

  return (
    <>
      <header className={`${styles.navbar} ${ready ? styles.ready : ''} ${scrolled ? styles.scrolled : ''}`}>
        <a className={styles.logo} href="#home" aria-label="Goutham Sai home">GS</a>
        <nav className={styles.links} aria-label="Primary navigation">
          {links.map(([label, href]) => (
            <a key={href} className={active === href.slice(1) ? styles.active : ''} href={href}>{label}</a>
          ))}
        </nav>
        <button className={styles.menuButton} type="button" onClick={() => setOpen(true)} aria-label="Open menu">
          <span />
          <span />
        </button>
        <div className={`${styles.overlay} ${open ? styles.open : ''}`}>
          <button className={styles.closeButton} type="button" onClick={() => setOpen(false)} aria-label="Close menu">Close</button>
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
        </div>
      </header>
      <div className="cursorDot" aria-hidden="true" />
      <div className="cursorRing" aria-hidden="true" />
    </>
  )
}
