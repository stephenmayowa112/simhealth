'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { SubpageHero } from '@/components'
import { Handshake, Users, Globe2 } from 'lucide-react'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

export default function PartnershipsPage() {
  return (
    <div style={{ backgroundColor: 'var(--color-surface-soft)', minHeight: '100vh' }}>

      <SubpageHero
        title="PARTNERSHIPS & COLLABORATIONS"
        subtitle="Building Stronger Health Systems Together"
      />

      <section style={{ padding: '6rem 2rem 8rem', position: 'relative', zIndex: 10 }}>
        <div style={{ maxWidth: '1000px', margin: '-4rem auto 0' }}>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ backgroundColor: 'white', padding: '4rem', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-lg)', marginBottom: '4rem', border: '1px solid rgba(0,0,0,0.03)' }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '2rem' }}>
              <span style={{ fontSize: '5rem', lineHeight: '0.8', fontWeight: 800, color: 'var(--color-primary-green)', fontFamily: 'var(--font-primary)' }}>W</span>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-gray-700)' }}>
                e welcome partnerships and collaborations to enhance our impact. If you are interested in collaborating on any of our program areas, please reach out to us.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
              <div style={{ textAlign: 'center', padding: '2rem' }}>
                <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'rgba(106,210,32,0.1)', color: 'var(--color-primary-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                  <Handshake size={40} />
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '0.75rem', fontFamily: 'var(--font-primary)', color: 'var(--color-slate-black)' }}>Strategic Partnerships</h3>
                <p style={{ color: 'var(--color-gray-600)', fontSize: '0.95rem', lineHeight: 1.6 }}>Collaborate with us on health system strengthening initiatives</p>
              </div>

              <div style={{ textAlign: 'center', padding: '2rem' }}>
                <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'rgba(106,210,32,0.1)', color: 'var(--color-primary-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                  <Users size={40} />
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '0.75rem', fontFamily: 'var(--font-primary)', color: 'var(--color-slate-black)' }}>Research Collaboration</h3>
                <p style={{ color: 'var(--color-gray-600)', fontSize: '0.95rem', lineHeight: 1.6 }}>Partner with our research teams on impactful studies</p>
              </div>

              <div style={{ textAlign: 'center', padding: '2rem' }}>
                <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'rgba(106,210,32,0.1)', color: 'var(--color-primary-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                  <Globe2 size={40} />
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '0.75rem', fontFamily: 'var(--font-primary)', color: 'var(--color-slate-black)' }}>Global Networks</h3>
                <p style={{ color: 'var(--color-gray-600)', fontSize: '0.95rem', lineHeight: 1.6 }}>Join our international network of health professionals</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ backgroundColor: 'var(--color-primary-green)', padding: '3rem', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-lg)', color: 'white', textAlign: 'center' }}
          >
            <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '1rem', fontFamily: 'var(--font-primary)' }}>Ready to Partner With Us?</h3>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '2rem', opacity: 0.95 }}>
              For more information about our programs and partnership opportunities, explore our website or reach out to us directly.
            </p>
            <a href="/contact-us" style={{ display: 'inline-block', padding: '1rem 2.5rem', backgroundColor: 'white', color: 'var(--color-primary-green)', borderRadius: 'var(--radius-pill)', fontSize: '1rem', fontWeight: 700, textDecoration: 'none', boxShadow: 'var(--shadow-md)' }}>
              Contact Us
            </a>
          </motion.div>

        </div>
      </section>
    </div>
  )
}
