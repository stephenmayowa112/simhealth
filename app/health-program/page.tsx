'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { SubpageHero } from '@/components'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

export default function HealthProgramPage() {
  return (
    <div style={{ backgroundColor: 'var(--color-surface-soft)', minHeight: '100vh' }}>

      {/* Custom Hero to preserve the Amber color from before, but modernized */}
      <section style={{
        position: 'relative',
        padding: '10rem 2rem 6rem',
        backgroundColor: 'var(--color-amber)',
        overflow: 'hidden',
        textAlign: 'center'
      }}>
        <motion.div
          animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.4, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          style={{ position: 'absolute', top: '-50%', left: '20%', width: '60vw', height: '60vw', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,0.6) 0%, rgba(15,23,42,0) 70%)', filter: 'blur(80px)', pointerEvents: 'none' }}
        />
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} style={{ position: 'relative', zIndex: 10, maxWidth: '1000px', margin: '0 auto' }}>
          <h1 style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', fontWeight: 900, color: 'var(--color-slate-black)', fontFamily: 'var(--font-primary)', marginBottom: '1.5rem', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
            HEALTH PROGRAM
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'rgba(15,23,42,0.8)', fontFamily: 'var(--font-secondary)', maxWidth: '600px', margin: '0 auto', fontWeight: 500 }}>
            .....Improving Health and Wellbeing
          </p>
        </motion.div>
      </section>

      <section style={{ padding: '6rem 2rem 8rem', position: 'relative', zIndex: 10 }}>
        <div style={{ maxWidth: '1200px', margin: '-4rem auto 0' }}>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
            }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '3rem', alignItems: 'center' }}
          >

            {/* Left side text content */}
            <motion.div
              variants={fadeInUp}
              style={{ backgroundColor: 'white', padding: '3.5rem', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-lg)', display: 'flex', flexDirection: 'column', gap: '1.5rem', fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--color-gray-700)', border: '1px solid rgba(0,0,0,0.03)' }}
            >
              <p>
                <strong style={{ color: 'var(--color-primary-green)' }}>simHealth Africa</strong> promotes access to quality and affordable healthcare products and services.
              </p>
              <p>
                In addition, the organization supports governments, donor agencies, implementing partners, health facilities and the local community in health strengthening, promotion of healthy living and disease prevention.
              </p>
              <p>
                Through <span style={{ color: 'var(--color-info)', fontWeight: 600 }}>Med-Vical International</span> (the social enterprise) we provide access to quality and affordable healthcare products and services, especially in resource-limited settings. We provide smart and convenient primary and specialized secondary healthcare services.
              </p>
              <p>
                Furthermore, through <span style={{ color: 'var(--color-info)', fontWeight: 600 }}>simHealth Mission</span>, we provide mobile and medical outreach services by collaborating with other hospitals and healthcare organizations.
              </p>
            </motion.div>

            {/* Right side image */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              style={{ position: 'relative', width: '100%', minHeight: '500px', borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-xl)' }}
            >
              <Image
                src="https://placehold.co/800x600/eeeeee/999999?text=Health+Program+Group"
                alt="Health Program Group Photo"
                fill
                style={{ objectFit: 'cover' }}
              />
            </motion.div>

          </motion.div>

        </div>
      </section>
    </div>
  )
}
