'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { SubpageHero } from '@/components'
import { BookOpen, FileText, ArrowRight } from 'lucide-react'

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
}

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

export default function PublicationsPage() {
  return (
    <div style={{ backgroundColor: 'var(--color-surface-soft)', minHeight: '100vh' }}>

      <SubpageHero
        title="PUBLICATIONS"
        subtitle="Sharing Knowledge and Research Findings"
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
            {/* Journal of Applied Health Research */}
            <Link href="/publications/jahresearch" style={{ textDecoration: 'none', color: 'inherit' }}>
              <motion.div
                variants={fadeInUp}
                whileHover={{ y: -8, boxShadow: 'var(--shadow-xl)' }}
                style={{ backgroundColor: 'white', padding: '4rem 3rem', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-lg)', border: '1px solid rgba(0,0,0,0.03)', height: '100%', cursor: 'pointer' }}
              >
                <div style={{ width: '80px', height: '80px', borderRadius: '24px', backgroundColor: 'rgba(106,210,32,0.1)', color: 'var(--color-primary-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem' }}>
                  <BookOpen size={40} />
                </div>
                <h2 style={{ fontSize: '1.8rem', fontWeight: 900, fontFamily: 'var(--font-primary)', color: 'var(--color-slate-black)', marginBottom: '1rem' }}>Journal of Applied Health Research</h2>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--color-primary-green)', marginBottom: '1.5rem' }}>Peer-Reviewed Academic Journal</h3>
                <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--color-gray-700)', marginBottom: '2rem' }}>
                  Our peer-reviewed academic journal provides a platform for sharing significant research findings with the broader scientific and professional communities.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--color-primary-green)', fontSize: '1rem', fontWeight: 600 }}>
                  <span>Learn More</span>
                  <ArrowRight size={20} />
                </div>
              </motion.div>
            </Link>

            {/* simHealth Connect Newsletter */}
            <Link href="/publications/simhealth-connect" style={{ textDecoration: 'none', color: 'inherit' }}>
              <motion.div
                variants={fadeInUp}
                whileHover={{ y: -8, boxShadow: 'var(--shadow-xl)' }}
                style={{ backgroundColor: 'white', padding: '4rem 3rem', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-lg)', border: '1px solid rgba(0,0,0,0.03)', height: '100%', cursor: 'pointer' }}
              >
                <div style={{ width: '80px', height: '80px', borderRadius: '24px', backgroundColor: 'rgba(255,202,0,0.1)', color: 'var(--color-warning)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem' }}>
                  <FileText size={40} />
                </div>
                <h2 style={{ fontSize: '1.8rem', fontWeight: 900, fontFamily: 'var(--font-primary)', color: 'var(--color-slate-black)', marginBottom: '1rem' }}>simHealth Connect</h2>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--color-warning)', marginBottom: '1.5rem' }}>Regular Newsletter</h3>
                <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--color-gray-700)', marginBottom: '2rem' }}>
                  Our newsletter provides the latest updates on our programs and the health landscape globally. Stay connected with health and development-related information.
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
