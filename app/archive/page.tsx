'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { SubpageHero } from '@/components'
import { Archive, FolderOpen } from 'lucide-react'

export default function ArchivePage() {
  return (
    <div style={{ backgroundColor: 'var(--color-surface-soft)', minHeight: '100vh' }}>

      <SubpageHero
        title="ARCHIVE"
        subtitle="Historical Records and Past Initiatives"
      />

      <section style={{ padding: '6rem 2rem 8rem', position: 'relative', zIndex: 10 }}>
        <div style={{ maxWidth: '900px', margin: '-4rem auto 0' }}>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ backgroundColor: 'white', padding: '4rem', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-lg)', border: '1px solid rgba(0,0,0,0.03)', textAlign: 'center' }}
          >
            <div style={{ width: '100px', height: '100px', borderRadius: '50%', backgroundColor: 'rgba(106,210,32,0.1)', color: 'var(--color-primary-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem' }}>
              <Archive size={50} />
            </div>
            <h2 style={{ fontSize: '2rem', fontWeight: 900, fontFamily: 'var(--font-primary)', color: 'var(--color-slate-black)', marginBottom: '1.5rem' }}>Archive Section</h2>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-gray-700)', marginBottom: '2rem' }}>
              Access historical records, past projects, publications, and conference materials from simHealth Africa's extensive work across the continent.
            </p>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', padding: '1rem 2rem', backgroundColor: 'var(--color-surface-soft)', borderRadius: 'var(--radius-lg)', color: 'var(--color-gray-600)', fontSize: '0.95rem' }}>
              <FolderOpen size={20} />
              <span>Archive content coming soon</span>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  )
}
