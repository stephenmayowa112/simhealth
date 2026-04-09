'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Shield, Heart, Activity, CheckCircle2, Globe2 } from 'lucide-react'

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
}

export default function Home() {
  const { scrollYProgress } = useScroll()
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const [currentImage, setCurrentImage] = React.useState(0)
  const images = ['/images/image1.jpg', '/images/image2.jpg']

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', overflowX: 'hidden' }}>

      {/* 1. DYNAMIC HERO SECTION */}
      <section style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '160px',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #f0f9eb 0%, #ffffff 50%, #fffbeb 100%)'
      }}>
        {/* Animated Background Orbs */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.4, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{ position: 'absolute', top: '10%', right: '-10%', width: '50vw', height: '50vw', borderRadius: '50%', background: 'radial-gradient(circle, rgba(106,210,32,0.2) 0%, rgba(255,255,255,0) 70%)', filter: 'blur(80px)' }}
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          style={{ position: 'absolute', bottom: '-20%', left: '-10%', width: '60vw', height: '60vw', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,202,0,0.15) 0%, rgba(255,255,255,0) 70%)', filter: 'blur(100px)' }}
        />

        {/* Subtle Grid Overlay */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(106,210,32,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(106,210,32,0.03) 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.5 }} />

        <div style={{ maxWidth: 'var(--max-content-width)', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 10, width: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          {/* Left side - Text content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', backgroundColor: 'rgba(106,210,32,0.1)', borderRadius: 'var(--radius-pill)', border: '1px solid rgba(106,210,32,0.2)', marginBottom: '2rem', backdropFilter: 'blur(10px)' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-primary-green)', boxShadow: '0 0 10px var(--color-primary-green)' }} />
              <span style={{ color: 'var(--color-dark-green)', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase' }}>Welcome To simHealth Africa</span>
            </motion.div>

            <motion.h1 variants={fadeInUp} style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, color: 'var(--color-slate-black)', lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.02em', fontFamily: 'var(--font-primary)' }}>
              Transforming <span style={{ color: 'var(--color-primary-green)' }}>Health Delivery</span> Across Africa.
            </motion.h1>

            <motion.p variants={fadeInUp} style={{ fontSize: 'clamp(1rem, 1.8vw, 1.2rem)', color: 'var(--color-gray-700)', lineHeight: 1.6, marginBottom: '3rem', maxWidth: '600px', fontFamily: 'var(--font-secondary)' }}>
              Welcome to simHealth Africa (Africa Society for Improved Health Delivery)
              <br />
              <span style={{ color: 'var(--color-primary-green)', fontWeight: 600, letterSpacing: '2px' }}>Health | Capacity | Innovation</span>
            </motion.p>

            <motion.div variants={fadeInUp} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '4rem' }}>
              <Link href="/about-us">
                <motion.button whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(106,210,32,0.3)' }} whileTap={{ scale: 0.95 }} style={{ padding: '1rem 2.5rem', backgroundColor: 'var(--color-primary-green)', color: 'white', border: 'none', borderRadius: 'var(--radius-pill)', fontSize: '1rem', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', boxShadow: '0 4px 15px rgba(106,210,32,0.25)', transition: 'all 0.3s ease' }}>
                  Explore Our Work <ArrowRight size={18} />
                </motion.button>
              </Link>
              <Link href="/programs">
                <motion.button whileHover={{ scale: 1.05, backgroundColor: 'var(--color-slate-black)', boxShadow: '0 10px 30px rgba(0,0,0,0.15)' }} whileTap={{ scale: 0.95 }} style={{ padding: '1rem 2.5rem', backgroundColor: 'transparent', color: 'var(--color-slate-black)', border: '2px solid var(--color-slate-black)', borderRadius: 'var(--radius-pill)', fontSize: '1rem', fontWeight: 600, cursor: 'pointer', transition: 'all 0.3s ease' }}>
                  View Programs
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right side - Image carousel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ position: 'relative', height: '500px', borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }}
          >
            {images.map((img, index) => (
              <motion.div
                key={img}
                initial={{ opacity: 0 }}
                animate={{ opacity: currentImage === index ? 1 : 0 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                style={{ position: 'absolute', inset: 0 }}
              >
                <Image
                  src={img}
                  alt={`simHealth Africa - Image ${index + 1}`}
                  fill
                  style={{ objectFit: 'cover' }}
                  priority={index === 0}
                />
              </motion.div>
            ))}
            {/* Overlay gradient for better text visibility */}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(255,255,255,0.2) 0%, transparent 50%)' }} />
          </motion.div>
        </div>

        {/* Mobile responsive: Stack vertically on small screens */}
        <style jsx>{`
          @media (max-width: 1024px) {
            div[style*="gridTemplateColumns"] {
              grid-template-columns: 1fr !important;
              gap: 2rem !important;
            }
          }
        `}</style>
      </section>

      {/* 2. VISION / MISSION / VALUES (Neuromorphic Cards) */}
      <section style={{ padding: '8rem 2rem', position: 'relative', zIndex: 20, backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: 'var(--max-content-width)', margin: '-4rem auto 0' }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}
          >
            {[
              { icon: <Globe2 size={32} />, title: "OUR VISION", desc: "At simHealth Africa, we aspire to enhance health outcomes and strengthen human resource capacities across the continent. Our goal is to foster sustainable healthcare delivery systems and establish ourselves as a center of excellence for innovative, evidence-based programs tailored to local contexts." },
              { icon: <Activity size={32} />, title: "OUR MISSION", desc: "As a knowledge-driven organization, simHealth Africa is dedicated to improving health and well-being. We aim to build human resource capacity, launch innovative initiatives, and fortify healthcare systems throughout Africa." },
              { icon: <Shield size={32} />, title: "OUR VALUES", desc: "Our operations are grounded in collaboration and integrity. We adhere to a strict code of conduct that emphasizes honesty and transparency. Our core values include: Collaboration, Equitable Access, Honesty, and Transparency." }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.02, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                style={{
                  backgroundColor: '#f8fafc', /* Light slate background */
                  padding: '3rem 2.5rem',
                  borderRadius: '35px', /* Characteristic large soft radius */
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)', /* Softer shadow */
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  position: 'relative',
                  overflow: 'hidden',
                  border: '1px solid rgba(106,210,32,0.1)'
                }}
              >
                {/* Subtle gradient hover glow behind the card content */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at top left, rgba(106, 210, 32, 0.05), transparent 70%)', zIndex: 0, pointerEvents: 'none' }}
                />

                <div style={{ position: 'relative', zIndex: 1, width: '64px', height: '64px', borderRadius: '22px', backgroundColor: 'rgba(106,210,32,0.1)', color: 'var(--color-primary-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem', boxShadow: '0 4px 15px rgba(106,210,32,0.15)' }}>
                  {item.icon}
                </div>
                <h3 style={{ position: 'relative', zIndex: 1, fontSize: '1.3rem', fontWeight: 800, marginBottom: '1rem', fontFamily: 'var(--font-primary)', color: 'var(--color-slate-black)', letterSpacing: '0.5px' }}>{item.title}</h3>
                <p style={{ position: 'relative', zIndex: 1, color: 'var(--color-gray-700)', lineHeight: 1.7, fontSize: '0.95rem' }}>{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. PROGRAMS OVERVIEW (Glassmorphism & Staggered Reveal) */}
      <section style={{ padding: '8rem 2rem', backgroundColor: '#f0f9eb', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: 'radial-gradient(circle at top right, rgba(106,210,32,0.08), transparent 40%)' }} />

        <div style={{ maxWidth: 'var(--max-content-width)', margin: '0 auto', position: 'relative' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', marginBottom: '5rem', maxWidth: '800px', margin: '0 auto 5rem' }}
          >
            <h2 style={{ fontSize: '1rem', fontWeight: 800, letterSpacing: '2px', color: 'var(--color-primary-green)', textTransform: 'uppercase', marginBottom: '1rem' }}>Health | Capacity | Innovation</h2>
            <h3 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: 'var(--color-slate-black)', marginBottom: '1.5rem', lineHeight: 1.2, fontFamily: 'var(--font-primary)' }}>Propelling Sustainable Healthcare Growth</h3>
            <p style={{ color: 'var(--color-gray-700)', fontSize: '1.1rem', lineHeight: 1.7 }}>
              Managed by leading experts and professionals, simHealth Africa drives capacity building, technical support, and rapid innovation deployment across the continent.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}
          >
            {[
              { title: "Health Program", icon: <Heart size={28} /> },
              { title: "simHealth Institute", icon: <CheckCircle2 size={28} /> },
              { title: "simNovate (Innovation & Social Entrepreneurship)", icon: <Globe2 size={28} /> },
              { title: "simHealth Connect", icon: <Globe2 size={28} /> },
              { title: "Consultancy Services", icon: <Activity size={28} /> }
            ].map((prog, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ scale: 1.03, boxShadow: '0 15px 35px rgba(0,0,0,0.12)', y: -6 }}
                style={{
                  padding: '3rem 2rem',
                  backgroundColor: 'rgba(255,255,255,0.9)',
                  borderRadius: 'var(--clay-radius)',
                  textAlign: 'center',
                  cursor: 'pointer',
                  border: '1px solid rgba(106,210,32,0.15)',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                  color: 'var(--color-slate-black)'
                }}
              >
                <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'center', opacity: 0.9, color: 'var(--color-primary-green)' }}>
                  {prog.icon}
                </div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 800, fontFamily: 'var(--font-primary)' }}>{prog.title}</h4>
              </motion.div>
            ))}
          </motion.div>

          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <Link href="/programs">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ padding: '1rem 2.5rem', backgroundColor: 'var(--color-primary-green)', color: 'white', border: 'none', borderRadius: 'var(--radius-pill)', fontSize: '1rem', fontWeight: 700, cursor: 'pointer', boxShadow: 'var(--shadow-glow-green)' }}>
                View All Programs
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. ORGANIZATION NEWS (Sleek Modern Banner) */}
      <section style={{ padding: '6rem 2rem', position: 'relative', overflow: 'hidden', backgroundColor: 'var(--color-secondary-yellow)' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ maxWidth: 'var(--max-content-width)', margin: '0 auto', textAlign: 'center' }}
        >
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, color: 'var(--color-slate-black)', margin: 0, fontFamily: 'var(--font-primary)', letterSpacing: '-0.02em' }}>
            ORGANIZATION NEWS
          </h2>
          <p style={{ fontSize: '1.2rem', color: 'rgba(15,23,42,0.8)', marginTop: '1rem', fontWeight: 500 }}>
            Stay updated with our latest field operations, research, and impact stories.
          </p>
        </motion.div>
      </section>

      {/* 5. OUR PARTNERS (Scrolling or Fade in) */}
      <section style={{ padding: '8rem 2rem', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: 'var(--max-content-width)', margin: '0 auto', textAlign: 'center' }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-gray-500)', margin: '0 0 4rem', fontFamily: 'var(--font-primary)', textTransform: 'uppercase', letterSpacing: '2px' }}
          >
            Trusted By Leading Organizations
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '4rem', flexWrap: 'wrap', filter: 'grayscale(100%) opacity(0.6)' }}
          >
            <Image src="https://placehold.co/200x80/ffffff/000000?text=University+Of+Benin" alt="University of Benin" width={200} height={80} />
            <Image src="https://placehold.co/120x120/ffffff/000000?text=Gov+Partner" alt="Government" width={120} height={120} />
            <Image src="https://placehold.co/250x80/ffffff/000000?text=World+Bank" alt="World Bank" width={250} height={80} />
          </motion.div>
        </div>
      </section>

    </div>
  )
}
