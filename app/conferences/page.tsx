'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { SubpageHero } from '@/components'
import { Calendar, Users, MapPin, ArrowRight } from 'lucide-react'

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
}

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

export default function ConferencesPage() {
  return (
    <div style={{ backgroundColor: 'var(--color-surface-soft)', minHeight: '100vh' }}>

      <SubpageHero
        title="CONFERENCES"
        subtitle="Bringing Together Healthcare Leaders Across Africa"
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
            {/* AHD Conference */}
            <Link href="/conferences/ahd-conference" style={{ textDecoration: 'none', color: 'inherit' }}>
              <motion.div
                variants={fadeInUp}
                whileHover={{ y: -8, boxShadow: 'var(--shadow-xl)' }}
                style={{ backgroundColor: 'white', padding: '4rem 3rem', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-lg)', border: '1px solid rgba(0,0,0,0.03)', height: '100%', cursor: 'pointer' }}
              >
                <div style={{ width: '80px', height: '80px', borderRadius: '24px', backgroundColor: 'rgba(106,210,32,0.1)', color: 'var(--color-primary-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem' }}>
                  <Calendar size={40} />
                </div>
                <h2 style={{ fontSize: '1.8rem', fontWeight: 900, fontFamily: 'var(--font-primary)', color: 'var(--color-slate-black)', marginBottom: '1rem' }}>AHD Conference</h2>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--color-primary-green)', marginBottom: '1.5rem' }}>Africa Conference on Healthcare Delivery</h3>
                <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--color-gray-700)', marginBottom: '2rem' }}>
                  One of the largest regional gatherings focused on healthcare delivery and innovation in Africa. Our conference highlights the synergy between people, systems, and technology to create sustainable healthcare solutions across the continent.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--color-primary-green)', fontSize: '1rem', fontWeight: 600 }}>
                  <span>Learn More</span>
                  <ArrowRight size={20} />
                </div>
              </motion.div>
            </Link>

            {/* MACE Conference */}
            <Link href="/conferences/mace-conference" style={{ textDecoration: 'none', color: 'inherit' }}>
              <motion.div
                variants={fadeInUp}
                whileHover={{ y: -8, boxShadow: 'var(--shadow-xl)' }}
                style={{ backgroundColor: 'white', padding: '4rem 3rem', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-lg)', border: '1px solid rgba(0,0,0,0.03)', height: '100%', cursor: 'pointer' }}
              >
                <div style={{ width: '80px', height: '80px', borderRadius: '24px', backgroundColor: 'rgba(255,202,0,0.1)', color: 'var(--color-warning)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem' }}>
                  <Users size={40} />
                </div>
                <h2 style={{ fontSize: '1.8rem', fontWeight: 900, fontFamily: 'var(--font-primary)', color: 'var(--color-slate-black)', marginBottom: '1rem' }}>MACE Conference</h2>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--color-warning)', marginBottom: '1.5rem' }}>Med-Vical Annual Conference</h3>
                <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--color-gray-700)', marginBottom: '2rem' }}>
                  Find more information about the MACE Conference on the Med-Vical website. This annual event brings together healthcare professionals to discuss innovations in medical practice and healthcare delivery.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--color-warning)', fontSize: '1rem', fontWeight: 600 }}>
                  <span>Learn More</span>
                  <ArrowRight size={20} />
                </div>
              </motion.div>
            </Link>

          </motion.div>

        </div>
      </section>
    </div>
  )
}
