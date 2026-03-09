'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { SubpageHero } from '@/components'

export default function SimHealthConnectPage() {
  return (
    <div style={{ backgroundColor: 'var(--color-surface-soft)', minHeight: '100vh' }}>
      <SubpageHero
        title="SIMHEALTH CONNECT"
        subtitle="(ADVOCACY, POLICY AND COLLABORATION)"
      />

      <section style={{ padding: '6rem 2rem 8rem', position: 'relative', zIndex: 10 }}>
        <div style={{ maxWidth: '900px', margin: '-4rem auto 0', position: 'relative' }}>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ backgroundColor: 'white', padding: '4rem', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-lg)', border: '1px solid rgba(0,0,0,0.03)' }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <span style={{ fontSize: '5rem', lineHeight: '0.8', fontWeight: 800, color: 'var(--color-primary-green)', fontFamily: 'var(--font-primary)' }}>S</span>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-gray-700)', fontFamily: 'var(--font-secondary)' }}>
                imHealth Africa has been engaged in several formal and informal advocacy and mobilization activities for health and non-health programs. Some of the activities are stand-alone advocacy and mobilization programs, others are embedded in other projects to facilitate acceptance and nurture sustainability of intervention programs within local communities.
                <br /><br />
                Furthermore, simHealth Africa is offering an online community of practice, collaboration and linkages with local and international academic institutions, healthcare facilities, partners and implementers of funded projects, and governments at all levels. We promote rapid dissemination of organizations' projects and programs.
              </p>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  )
}
