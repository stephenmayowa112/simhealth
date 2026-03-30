'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { SubpageHero } from '@/components'

export default function SimHealthConnectPage() {
  return (
    <div style={{ backgroundColor: 'var(--color-surface-soft)', minHeight: '100vh' }}>
      <SubpageHero
        title="simHealth Connect"
        subtitle="Policy, Advocacy, and Community Empowerment"
      />

      <section style={{ padding: '6rem 2rem 8rem', position: 'relative', zIndex: 10 }}>
        <div style={{ maxWidth: '900px', margin: '-4rem auto 0', position: 'relative' }}>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ backgroundColor: 'white', padding: '4rem', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-lg)', border: '1px solid rgba(0,0,0,0.03)', marginBottom: '3rem' }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <span style={{ fontSize: '5rem', lineHeight: '0.8', fontWeight: 800, color: 'var(--color-primary-green)', fontFamily: 'var(--font-primary)' }}>S</span>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-gray-700)', fontFamily: 'var(--font-secondary)' }}>
                imHealth Africa operates as an independent policy and advocacy center, bridging the gap between scientific research and local community needs. Our mission is to enhance population health through evidence-based policies, advocacy, and community empowerment. We conduct operational research and emphasize the importance of evidence in health policy decisions, focusing on strategic advocacy, health system strengthening, and capacity building.
                <br /><br />
                Engaging in both formal and informal advocacy, we mobilize communities for health initiatives and integrate these efforts within broader project frameworks to ensure sustainability. Our online community fosters collaboration with local and international institutions, promoting rapid dissemination of our projects and initiatives.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ backgroundColor: 'var(--color-primary-green)', padding: '3rem', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-lg)', color: 'white' }}
          >
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1.5rem', fontFamily: 'var(--font-primary)' }}>simhealthsolutions</h3>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              One of our flagship programs designed to optimize equitable access to healthcare products and services through health-tech and other innovative healthcare delivery solutions.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.8' }}>
              It is also a platform dedicated to empowering individuals, healthcare practitioners, and the public with accurate health information, encompassing medicines and poison guidance for better health outcomes. These resources will be accessible through our website and an upcoming YouTube channel.
            </p>
          </motion.div>

        </div>
      </section>
    </div>
  )
}
