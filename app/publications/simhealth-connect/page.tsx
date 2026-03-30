'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { SubpageHero } from '@/components'
import { FileText, Mail, Globe2, TrendingUp } from 'lucide-react'

export default function SimHealthConnectNewsletterPage() {
  return (
    <div style={{ backgroundColor: 'var(--color-surface-soft)', minHeight: '100vh' }}>

      <SubpageHero
        title="simHealth Connect Newsletter"
        subtitle="Stay Informed on Health and Development"
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
              <span style={{ fontSize: '5rem', lineHeight: '0.8', fontWeight: 800, color: 'var(--color-warning)', fontFamily: 'var(--font-primary)' }}>O</span>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-gray-700)' }}>
                ur newsletter, simHealth Connect, provides the latest updates on our programs and the health landscape globally. We utilize this regular publication to disseminate health and development-related information, keeping our audience informed on important updates. Join us in our mission to improve health outcomes and drive positive change in communities.
              </p>
            </div>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
            {[
              { icon: <FileText size={32} />, title: 'Content', desc: 'Program updates, health news, research highlights, and community stories' },
              { icon: <Globe2 size={32} />, title: 'Reach', desc: 'Global audience of health professionals, partners, and stakeholders' },
              { icon: <TrendingUp size={32} />, title: 'Impact', desc: 'Driving awareness and positive change in health systems' },
              { icon: <Mail size={32} />, title: 'Status', desc: 'Coming soon - Subscribe to stay updated' }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                style={{ backgroundColor: 'white', padding: '2.5rem 2rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)', border: '1px solid rgba(0,0,0,0.03)', textAlign: 'center' }}
              >
                <div style={{ color: 'var(--color-warning)', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
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
            style={{ backgroundColor: 'var(--color-warning)', padding: '3rem', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-lg)', color: 'white', textAlign: 'center' }}
          >
            <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '1rem', fontFamily: 'var(--font-primary)' }}>Subscribe to simHealth Connect</h3>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '2rem', opacity: 0.95 }}>
              Be the first to receive updates on our programs, research findings, and health initiatives across Africa.
            </p>
            <a href="/contact-us" style={{ display: 'inline-block', padding: '1rem 2.5rem', backgroundColor: 'white', color: 'var(--color-warning)', borderRadius: 'var(--radius-pill)', fontSize: '1rem', fontWeight: 700, textDecoration: 'none', boxShadow: 'var(--shadow-md)' }}>
              Get in Touch
            </a>
          </motion.div>

        </div>
      </section>
    </div>
  )
}
