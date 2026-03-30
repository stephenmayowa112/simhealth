'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { SubpageHero } from '@/components'
import { ExternalLink } from 'lucide-react'

export default function MACEConferencePage() {
  return (
    <div style={{ backgroundColor: 'var(--color-surface-soft)', minHeight: '100vh' }}>

      <SubpageHero
        title="MACE CONFERENCE"
        subtitle="Med-Vical Annual Conference"
      />

      <section style={{ padding: '6rem 2rem 8rem', position: 'relative', zIndex: 10 }}>
        <div style={{ maxWidth: '900px', margin: '-4rem auto 0' }}>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ backgroundColor: 'white', padding: '4rem', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-lg)', border: '1px solid rgba(0,0,0,0.03)', textAlign: 'center' }}
          >
            <h2 style={{ fontSize: '2rem', fontWeight: 900, fontFamily: 'var(--font-primary)', color: 'var(--color-slate-black)', marginBottom: '1.5rem' }}>MACE Conference</h2>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-gray-700)', marginBottom: '3rem' }}>
              For more information about the MACE Conference, please visit the Med-Vical website.
            </p>
            <a 
              href="https://medvical.com" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', padding: '1rem 2.5rem', backgroundColor: 'var(--color-warning)', color: 'white', borderRadius: 'var(--radius-pill)', fontSize: '1rem', fontWeight: 700, textDecoration: 'none', boxShadow: 'var(--shadow-md)' }}
            >
              <span>Visit Med-Vical Website</span>
              <ExternalLink size={20} />
            </a>
          </motion.div>

        </div>
      </section>
    </div>
  )
}
