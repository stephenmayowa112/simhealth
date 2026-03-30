'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { SubpageHero } from '@/components'
import { Calendar, Users, Target, Globe2 } from 'lucide-react'

export default function AHDConferencePage() {
  return (
    <div style={{ backgroundColor: 'var(--color-surface-soft)', minHeight: '100vh' }}>

      <SubpageHero
        title="AHD CONFERENCE"
        subtitle="Africa Conference on Healthcare Delivery"
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
              <span style={{ fontSize: '5rem', lineHeight: '0.8', fontWeight: 800, color: 'var(--color-primary-green)', fontFamily: 'var(--font-primary)' }}>S</span>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-gray-700)' }}>
                imHealth Africa is the convener of the Africa Conference on Healthcare Delivery (AHD Conference), one of the largest regional gatherings focused on healthcare delivery and innovation in Africa. Our conference highlights the synergy between people, systems, and technology to create sustainable healthcare solutions across the continent, fostering collaboration among practitioners, academics, and policymakers.
              </p>
            </div>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            {[
              { icon: <Target size={32} />, title: 'Focus Areas', desc: 'Healthcare delivery, innovation, and system strengthening' },
              { icon: <Users size={32} />, title: 'Participants', desc: 'Practitioners, academics, policymakers, and health professionals' },
              { icon: <Globe2 size={32} />, title: 'Impact', desc: 'Pan-African collaboration for sustainable health solutions' },
              { icon: <Calendar size={32} />, title: 'Status', desc: 'Details coming soon' }
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

        </div>
      </section>
    </div>
  )
}
