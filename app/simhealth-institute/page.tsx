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
        title="simHealth Institute"
        subtitle="Capacity building and human resource development through training, coaching, and mentoring."
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
              <span style={{ fontSize: '5rem', lineHeight: '0.8', fontWeight: 800, color: 'var(--color-primary-green)', fontFamily: 'var(--font-primary)' }}>A</span>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-gray-700)' }}>
                t simHealth Institute, we are dedicated to fostering capacity building and human resource development through a wide array of services, including training, coaching, mentoring, and curriculum development tailored for individuals and corporate organizations. As a committed partner to the Government of Nigeria's Ministries of Health, we provide expert support in developing curricula and delivering training, mentorship, and coaching specifically focused on enhancing the public health supply chain.
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
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '1.5rem', fontFamily: 'var(--font-primary)', letterSpacing: '0.05em', color: 'var(--color-slate-black)' }}>TRAINING & CAPACITY BUILDING PROGRAMS</h3>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--color-gray-700)', marginBottom: '2rem' }}>
                Our team of experienced, multidisciplinary faculty and staff are here to guide course participants through a comprehensive series of workshops and seminars. These include our specialized standard training workshops and seminars (<span style={{ color: 'var(--color-primary-green)', fontWeight: 600 }}>simHealth Africa Seminar Series</span>). Stay tuned for announcements on upcoming training programs.
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
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '1.5rem', fontFamily: 'var(--font-primary)', letterSpacing: '0.05em', color: 'var(--color-slate-black)' }}>RESEARCH & DISSEMINATION</h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--color-gray-700)' }}>
                <p>
                  The simHealth Institute serves as a vital repository for data and publications related to health systems. We conduct rigorous clinical, epidemiological, pharmaceutical, operational, and implementation research.
                </p>
                <p>
                  Our mentoring and coaching extend to professionals, students, and academics to cultivate skills in scientific inquiry and promote research dissemination through conference presentations and publications in peer-reviewed journals.
                </p>
                <p>
                  <span style={{ color: 'var(--color-primary-green)', fontWeight: 600 }}>AHD Conference:</span> simHealth Africa is the convener of the Africa Conference on Healthcare Delivery (AHD Conference), one of the largest regional gatherings focused on healthcare delivery and innovation in Africa.
                </p>
                <p>
                  <span style={{ color: 'var(--color-primary-green)', fontWeight: 600 }}>Journal of Applied Health Research:</span> Our peer-reviewed academic journal provides a platform for sharing significant research findings with the broader scientific and professional communities.
                </p>
                <p>
                  Additionally, we utilize <span style={{ color: 'var(--color-primary-green)', fontWeight: 600 }}>simHealth Connect</span> (our regular newsletter) to disseminate health and development-related information, keeping our audience informed on important updates.
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </section>
    </div>
  )
}
