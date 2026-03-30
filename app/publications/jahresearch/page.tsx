'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { SubpageHero } from '@/components'
import { BookOpen, Users, Target, Award } from 'lucide-react'

export default function JahresearchPage() {
  return (
    <div style={{ backgroundColor: 'var(--color-surface-soft)', minHeight: '100vh' }}>

      <SubpageHero
        title="JOURNAL OF APPLIED HEALTH RESEARCH"
        subtitle="Peer-Reviewed Academic Journal"
      />

      <section style={{ padding: '6rem 2rem 8rem', position: 'relative', zIndex: 10 }}>
        <div style={{ maxWidth: '1000px', margin: '-4rem auto 0' }}>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ backgroundColor: 'white', padding: '4rem', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-lg)', marginBottom: '3rem', border: '1px solid rgba(0,0,0,0.03)' }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '2rem' }}>
              <span style={{ fontSize: '5rem', lineHeight: '0.8', fontWeight: 800, color: 'var(--color-primary-green)', fontFamily: 'var(--font-primary)' }}>O</span>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-gray-700)' }}>
                ur peer-reviewed academic journal provides a platform for sharing significant research findings with the broader scientific and professional communities. The Journal of Applied Health Research (jahresearch) is dedicated to advancing knowledge in health systems, clinical practice, epidemiology, pharmaceutical sciences, and healthcare delivery across Africa and beyond.
              </p>
            </div>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
            {[
              { icon: <Target size={32} />, title: 'Focus Areas', desc: 'Clinical, epidemiological, pharmaceutical, operational, and implementation research' },
              { icon: <Users size={32} />, title: 'Audience', desc: 'Researchers, academics, healthcare professionals, and policymakers' },
              { icon: <Award size={32} />, title: 'Quality', desc: 'Rigorous peer-review process ensuring high-quality publications' },
              { icon: <BookOpen size={32} />, title: 'Status', desc: 'Coming soon - Stay tuned for launch announcements' }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                style={{ backgroundColor: 'white', padding: '2.5rem 2rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)', border: '1px solid rgba(0,0,0,0.03)', textAlign: 'center' }}
              >
                <div style={{ color: 'var(--color-primary-green)', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
                  {item.icon}
                </div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '0.75rem', fontFamily: 'var(--font-primary)', color: 'var(--color-slate-black)' }}>{item.title}</h3>
                <p style={{ color: 'var(--color-gray-600)', fontSize: '0.95rem', lineHeight: 1.6 }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ backgroundColor: 'var(--color-primary-green)', padding: '3rem', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-lg)', color: 'white', textAlign: 'center' }}
          >
            <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '1rem', fontFamily: 'var(--font-primary)' }}>Stay Updated</h3>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.7, opacity: 0.95 }}>
              Subscribe to our newsletter to receive updates on the journal launch and submission guidelines.
            </p>
          </motion.div>

        </div>
      </section>
    </div>
  )
}
