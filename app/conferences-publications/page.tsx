'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { SubpageHero } from '@/components'
import { Calendar, BookOpen, ArrowRight } from 'lucide-react'

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
}

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

export default function ConferencesPublicationsPage() {
  return (
    <div style={{ backgroundColor: 'var(--color-surface-soft)', minHeight: '100vh', overflowX: 'hidden' }}>

      <SubpageHero
        title="CONFERENCES & PUBLICATIONS"
        subtitle="Advancing Knowledge Through Research and Collaboration"
      />

      <section style={{ padding: '6rem 2rem 8rem', position: 'relative', zIndex: 10 }}>
        <div style={{ maxWidth: '1200px', margin: '-4rem auto 0' }}>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '3rem' }}
          >
            {/* Conferences Section */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -8, boxShadow: 'var(--shadow-xl)' }}
              style={{ backgroundColor: 'white', padding: '4rem 3rem', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-lg)', border: '1px solid rgba(0,0,0,0.03)' }}
            >
              <div style={{ width: '80px', height: '80px', borderRadius: '24px', backgroundColor: 'rgba(106,210,32,0.1)', color: 'var(--color-primary-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem' }}>
                <Calendar size={40} />
              </div>
              <h2 style={{ fontSize: '2rem', fontWeight: 900, fontFamily: 'var(--font-primary)', color: 'var(--color-slate-black)', marginBottom: '1.5rem' }}>CONFERENCES</h2>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--color-gray-700)', marginBottom: '2rem' }}>
                Join us at our flagship conferences bringing together healthcare professionals, researchers, and policymakers across Africa.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <Link href="/conferences/ahd-conference" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--color-primary-green)', fontSize: '1.05rem', fontWeight: 600, textDecoration: 'none' }}>
                  <ArrowRight size={20} />
                  <span>AHD Conference</span>
                </Link>
                <Link href="/conferences/mace-conference" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--color-primary-green)', fontSize: '1.05rem', fontWeight: 600, textDecoration: 'none' }}>
                  <ArrowRight size={20} />
                  <span>MACE Conference</span>
                </Link>
              </div>
            </motion.div>

            {/* Publications Section */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -8, boxShadow: 'var(--shadow-xl)' }}
              style={{ backgroundColor: 'white', padding: '4rem 3rem', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-lg)', border: '1px solid rgba(0,0,0,0.03)' }}
            >
              <div style={{ width: '80px', height: '80px', borderRadius: '24px', backgroundColor: 'rgba(255,202,0,0.1)', color: 'var(--color-warning)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem' }}>
                <BookOpen size={40} />
              </div>
              <h2 style={{ fontSize: '2rem', fontWeight: 900, fontFamily: 'var(--font-primary)', color: 'var(--color-slate-black)', marginBottom: '1.5rem' }}>PUBLICATIONS</h2>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--color-gray-700)', marginBottom: '2rem' }}>
                Access our peer-reviewed journal and regular newsletter featuring the latest research and health updates.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <Link href="/publications/jahresearch" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--color-warning)', fontSize: '1.05rem', fontWeight: 600, textDecoration: 'none' }}>
                  <ArrowRight size={20} />
                  <span>Journal of Applied Health Research</span>
                </Link>
                <Link href="/publications/simhealth-connect" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--color-warning)', fontSize: '1.05rem', fontWeight: 600, textDecoration: 'none' }}>
                  <ArrowRight size={20} />
                  <span>simHealth Connect Newsletter</span>
                </Link>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </section>
    </div>
  )
}
