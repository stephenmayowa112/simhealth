'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { SubpageHero } from '@/components'
import { ArrowRightCircle } from 'lucide-react'

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

export default function InnovationProgramPage() {
  return (
    <div style={{ backgroundColor: 'var(--color-surface-soft)', minHeight: '100vh' }}>

      {/* Dynamic Gold Header for Innovation */}
      <section style={{
        position: 'relative',
        padding: '10rem 2rem 6rem',
        backgroundColor: 'var(--color-secondary-yellow)',
        overflow: 'hidden',
        textAlign: 'center'
      }}>
        <motion.div
          animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.4, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          style={{ position: 'absolute', top: '-50%', left: '20%', width: '60vw', height: '60vw', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,0.6) 0%, rgba(15,23,42,0) 70%)', filter: 'blur(80px)', pointerEvents: 'none' }}
        />
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} style={{ position: 'relative', zIndex: 10, maxWidth: '1000px', margin: '0 auto' }}>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, color: 'var(--color-slate-black)', fontFamily: 'var(--font-primary)', marginBottom: '1.5rem', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
            simNovate
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'rgba(15,23,42,0.8)', fontFamily: 'var(--font-secondary)', maxWidth: '700px', margin: '0 auto', fontWeight: 500 }}>
            Social Innovation and Entrepreneurship Program
          </p>
        </motion.div>
      </section>

      <section style={{ padding: '6rem 2rem 8rem', position: 'relative', zIndex: 10 }}>
        <div style={{ maxWidth: '900px', margin: '-4rem auto 0' }}>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ backgroundColor: 'white', padding: '4rem', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-lg)', marginBottom: '4rem', border: '1px solid rgba(0,0,0,0.03)' }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '3rem' }}>
              <span style={{ fontSize: '5rem', lineHeight: '0.8', fontWeight: 800, color: 'var(--color-warning)', fontFamily: 'var(--font-primary)' }}>O</span>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-gray-700)' }}>
                ur simNovate initiative champions social innovation and entrepreneurship to enhance access to healthcare, promote economic empowerment, and reduce poverty. We seek to address health disparities through sustainable, community-centered business models that focus on improving access to care, decreasing costs, and eliminating barriers. By promoting equity, community-led solutions, digital transformation, and public-private partnerships, we aim to drive advancements in health and social development.
              </p>
            </div>

            <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '1.5rem', fontFamily: 'var(--font-primary)', color: 'var(--color-slate-black)' }}>simHealth Africa provides support in:</h3>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              style={{ backgroundColor: 'var(--color-surface-soft)', padding: '3rem', borderRadius: 'var(--radius-lg)' }}
            >
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {[
                  "Knowledge management",
                  "Innovation and social entrepreneurship",
                  "Micro, Small, and Medium Enterprises (MSMEs) and start-ups",
                  "Training, career counseling, and mentorship",
                  "Youth and women empowerment programs, skills acquisition, and poverty alleviation"
                ].map((item, i) => (
                  <motion.li key={i} variants={fadeInUp} style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', backgroundColor: 'white', padding: '1.2rem', borderRadius: '12px', boxShadow: 'var(--shadow-sm)' }}>
                    <div style={{ color: 'var(--color-warning)' }}>
                      <ArrowRightCircle size={24} />
                    </div>
                    <span style={{ fontSize: '1.05rem', lineHeight: 1.5, color: '#444', fontWeight: 500 }}>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

        </div>
      </section>
    </div>
  )
}
