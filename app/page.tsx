'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Shield, Heart, Activity, CheckCircle2, Globe2 } from 'lucide-react'

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
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

  return (
    <div style={{ backgroundColor: 'var(--color-surface-soft)', minHeight: '100vh', overflowX: 'hidden' }}>

      {/* 1. DYNAMIC HERO SECTION */}
      <section style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '160px',
        overflow: 'hidden',
        backgroundColor: 'var(--color-slate-black)'
      }}>
        {/* Animated Background Orbs */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.6, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{ position: 'absolute', top: '10%', right: '-10%', width: '50vw', height: '50vw', borderRadius: '50%', background: 'radial-gradient(circle, rgba(106,210,32,0.4) 0%, rgba(15,23,42,0) 70%)', filter: 'blur(80px)' }}
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.4, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          style={{ position: 'absolute', bottom: '-20%', left: '-10%', width: '60vw', height: '60vw', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,202,0,0.2) 0%, rgba(15,23,42,0) 70%)', filter: 'blur(100px)' }}
        />

        {/* Subtle Grid Overlay */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.5 }} />

        <div style={{ maxWidth: 'var(--max-content-width)', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 10, width: '100%' }}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            style={{ maxWidth: '800px' }}
          >
            <motion.div variants={fadeInUp} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: 'var(--radius-pill)', border: '1px solid rgba(255,255,255,0.1)', marginBottom: '2rem', backdropFilter: 'blur(10px)' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-primary-green)', boxShadow: '0 0 10px var(--color-primary-green)' }} />
              <span style={{ color: 'var(--color-cream)', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase' }}>Welcome To SimHealth Africa</span>
            </motion.div>

            <motion.h1 variants={fadeInUp} style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: 800, color: 'var(--color-white)', lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.02em', fontFamily: 'var(--font-primary)' }}>
              Transforming <span style={{ color: 'var(--color-primary-green)' }}>Health Delivery</span> Across Africa.
            </motion.h1>

            <motion.p variants={fadeInUp} style={{ fontSize: 'clamp(1.1rem, 2vw, 1.3rem)', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, marginBottom: '3rem', maxWidth: '600px', fontFamily: 'var(--font-secondary)' }}>
              We are an independent research, documentation, policy, and advocacy center dedicated to building capacity and supporting healthcare programs.
            </motion.p>

            <motion.div variants={fadeInUp} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/about-us">
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ padding: '1rem 2.5rem', backgroundColor: 'var(--color-primary-green)', color: 'white', border: 'none', borderRadius: 'var(--radius-pill)', fontSize: '1rem', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', boxShadow: 'var(--shadow-glow-green)' }}>
                  Explore Our Work <ArrowRight size={18} />
                </motion.button>
              </Link>
              <Link href="/programs">
                <motion.button whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }} whileTap={{ scale: 0.95 }} style={{ padding: '1rem 2.5rem', backgroundColor: 'transparent', color: 'white', border: '1px solid rgba(255,255,255,0.3)', borderRadius: 'var(--radius-pill)', fontSize: '1rem', fontWeight: 600, cursor: 'pointer', transition: 'background-color 0.3s' }}>
                  View Programs
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. VISION / MISSION / VALUES (Neuromorphic Cards) */}
      <section style={{ padding: '8rem 2rem', position: 'relative', zIndex: 20 }}>
        <div style={{ maxWidth: 'var(--max-content-width)', margin: '-4rem auto 0' }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}
          >
            {[
              { icon: <Globe2 size={32} />, title: "OUR VISION", desc: "To achieve good health and build human resource capacity of many, becoming a center of excellence in innovative, evidence-based programs." },
              { icon: <Activity size={32} />, title: "OUR MISSION", desc: "A knowledge-based organization with the mission to improve health and wellbeing, build capacity, and deliver context-specific innovative programs." },
              { icon: <Shield size={32} />, title: "OUR VALUES", desc: "Collaborative efforts with uncompromising integrity, honesty, and transparency in the discharge of our duties." }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.02, boxShadow: '15px 15px 30px rgba(0,0,0,0.5), -10px -10px 20px rgba(255,255,255,0.02), inset 8px 8px 20px rgba(255,255,255,0.08), inset -8px -8px 20px rgba(0,0,0,0.6)' }}
                style={{
                  backgroundColor: '#0f172a', /* Solid dark slate for claymorphism */
                  padding: '3rem 2.5rem',
                  borderRadius: '35px', /* Characteristic large soft radius */
                  boxShadow: '10px 10px 25px rgba(0,0,0,0.4), -8px -8px 20px rgba(255,255,255,0.02), inset 6px 6px 15px rgba(255,255,255,0.05), inset -6px -6px 15px rgba(0,0,0,0.5)', /* Dual inner/outer shadows */
                  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Subtle gradient hover glow behind the card content */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at top left, rgba(106, 210, 32, 0.08), transparent 70%)', zIndex: 0, pointerEvents: 'none' }}
                />

                <div style={{ position: 'relative', zIndex: 1, width: '64px', height: '64px', borderRadius: '22px', backgroundColor: '#1e293b', color: 'var(--color-primary-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem', boxShadow: '5px 5px 10px rgba(0,0,0,0.3), inset 3px 3px 8px rgba(255,255,255,0.05), inset -3px -3px 8px rgba(0,0,0,0.4)' }}>
                  {item.icon}
                </div>
                <h3 style={{ position: 'relative', zIndex: 1, fontSize: '1.3rem', fontWeight: 800, marginBottom: '1rem', fontFamily: 'var(--font-primary)', color: 'var(--color-white)', letterSpacing: '0.5px' }}>{item.title}</h3>
                <p style={{ position: 'relative', zIndex: 1, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, fontSize: '0.95rem' }}>{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. PROGRAMS OVERVIEW (Glassmorphism & Staggered Reveal) */}
      <section style={{ padding: '8rem 2rem', backgroundColor: 'var(--color-slate-black)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: 'radial-gradient(circle at top right, rgba(255,202,0,0.05), transparent 40%)' }} />

        <div style={{ maxWidth: 'var(--max-content-width)', margin: '0 auto', position: 'relative' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', marginBottom: '5rem', maxWidth: '800px', margin: '0 auto 5rem' }}
          >
            <h2 style={{ fontSize: '1rem', fontWeight: 800, letterSpacing: '2px', color: 'var(--color-primary-green)', textTransform: 'uppercase', marginBottom: '1rem' }}>Health | Capacity | Innovation</h2>
            <h3 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: 'var(--color-white)', marginBottom: '1.5rem', lineHeight: 1.2, fontFamily: 'var(--font-primary)' }}>Propelling Sustainable Healthcare Growth</h3>
            <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '1.1rem', lineHeight: 1.7 }}>
              Managed by leading experts and professionals, SimHealth Africa drives capacity building, technical support, and rapid innovation deployment across the continent.
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
              { title: "SimHealth Institute", icon: <CheckCircle2 size={28} /> },
              { title: "Innovation & Social Entrepreneurship", icon: <Globe2 size={28} /> },
              { title: "SimHealth Connect", icon: <Globe2 size={28} /> },
              { title: "Consultancy Services", icon: <Activity size={28} /> }
            ].map((prog, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ scale: 1.03, boxShadow: 'var(--clay-shadow-hover)', transform: 'translateY(-6px)' }}
                style={{
                  padding: '3rem 2rem',
                  backgroundColor: 'var(--clay-bg-dark)',
                  borderRadius: 'var(--clay-radius)',
                  textAlign: 'center',
                  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  cursor: 'pointer',
                  border: 'var(--clay-border)',
                  boxShadow: 'var(--clay-shadow-outer), var(--clay-shadow-inner)',
                  color: 'var(--color-white)'
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
      <section style={{ padding: '8rem 2rem', backgroundColor: 'var(--color-surface-soft)' }}>
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
