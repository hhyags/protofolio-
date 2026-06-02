import VideoIntro from '@/app/components/VideoIntro/VideoIntro'
import Navbar from '@/app/components/Navbar/Navbar'
import About from '@/app/components/About/About'
import Skills from '@/app/components/Skills/Skills'
import Portfolio from '@/app/components/Portfolio/Portfolio'
import Services from '@/app/components/Services/Services'
import Contact from '@/app/components/Contact/Contact'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <div id="home" aria-hidden="true" />
        <VideoIntro videoSrc="/hero-video.mp4" />
        <div id="next-section" aria-hidden="true" />
        <About />
        <Skills />
        <Portfolio />
        <Services />
        <Contact />
      </main>
    </>
  )
}
