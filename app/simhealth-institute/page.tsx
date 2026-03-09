'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { SubpageHero } from '@/components'
import { CheckCircle2 } from 'lucide-react'

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

export default function SimHealthInstitutePage() {
  return (
    <div style={{ backgroundColor: 'var(--color-surface-soft)', minHeight: '100vh' }}>
      <SubpageHero
        title="SIMHEALTH INSTITUTE"
        subtitle="Training, coaching, and capacity building services."
      />

      <section style={{ padding: '4rem 2rem 8rem', position: 'relative', zIndex: 10 }}>
        <div style={{ maxWidth: '1100px', margin: '-4rem auto 0' }}>

          {/* Main Intro Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ backgroundColor: 'white', padding: '4rem', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-lg)', marginBottom: '4rem', border: '1px solid rgba(0,0,0,0.03)' }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <span style={{ fontSize: '5rem', lineHeight: '0.8', fontWeight: 800, color: 'var(--color-primary-green)', fontFamily: 'var(--font-primary)' }}>W</span>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-gray-700)' }}>
                e offer training, coaching, mentoring and other capacity building services to individual and corporate organizations. simHealth Africa is committed to capacity building and human resource development through curriculum development, training, coaching and mentorship. We are working on technology deployment to facilitate teaching and learning in a cost efficient way. simHealth Africa provides support to the Government of Nigeria (Ministries of Health) in curriculum development, training, mentorship and coaching on public health supply chain.
              </p>
            </div>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '3rem' }}>
            {/* Left Column: Education */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{ padding: '2rem', backgroundColor: 'transparent', borderRadius: 'var(--radius-lg)' }}
            >
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '1.5rem', fontFamily: 'var(--font-primary)', letterSpacing: '0.05em', color: 'var(--color-slate-black)' }}>EDUCATION, TRAINING & MENTORSHIP</h3>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--color-gray-700)', marginBottom: '2rem' }}>
                simHealth has experienced and multidisciplinary faculty and staff who teach, coach and mentor course participants. Our courses are delivered as standard workshops (<span style={{ color: 'var(--color-primary-green)', fontWeight: 600 }}>International Training Workshops</span>) and/or seminars (<span style={{ color: 'var(--color-primary-green)', fontWeight: 600 }}>SimHealth Africa Seminar Series</span>).
              </p>

              <motion.ul variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                {[
                  "Leadership and management",
                  "Operational research, data management and dissemination",
                  "Pharmaceutical systems and services",
                  "Supply chain management",
                  "Clinical services and patient care",
                  "Epidemiology, Global/public health and Healthcare delivery",
                  "Monitoring and evaluation"
                ].map((item, i) => (
                  <motion.li key={i} variants={fadeInUp} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <div style={{ color: 'var(--color-primary-green)', marginTop: '2px' }}>
                      <CheckCircle2 size={20} />
                    </div>
                    <span style={{ fontSize: '1.05rem', lineHeight: 1.5, color: '#444' }}>{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            {/* Right Column: Research */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{ padding: '2rem', backgroundColor: 'transparent', borderRadius: 'var(--radius-lg)' }}
            >
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '1.5rem', fontFamily: 'var(--font-primary)', letterSpacing: '0.05em', color: 'var(--color-slate-black)' }}>RESEARCH & DOCUMENTATION</h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--color-gray-700)' }}>
                <p>
                  simHealth Institute is positioned to serve as repository of data and publications on health and health systems, applying rigorous scientific methods for its clinical, epidemiological, pharmaceutical, operational and implementation research works.
                </p>
                <p>
                  We mentor professionals and students in key subject areas and build capacity for scientific inquiry and research dissemination.
                </p>
                <p>
                  We anchor the <span style={{ color: 'var(--color-primary-green)', fontWeight: 600 }}>Africa Conference on Healthcare Delivery</span>, one of the largest regional meetings on healthcare delivery and innovation in Africa.
                </p>
                <p>
                  Also, through our peer review journal, we offer a platform for dissemination of research findings. We publish the regular newsletter "<span style={{ color: 'var(--color-primary-green)', fontWeight: 600 }}>simHealth Focus</span>."
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </section>
    </div>
  )
}
