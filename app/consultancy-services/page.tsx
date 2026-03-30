'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { SubpageHero } from '@/components'
import { ArrowRightCircle } from 'lucide-react'

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

export default function ConsultancyServicesPage() {
  return (
    <div style={{ backgroundColor: 'var(--color-surface-soft)', minHeight: '100vh' }}>

      <SubpageHero
        title="CONSULTANCY SERVICES"
        subtitle=".....Improving Health and Wellbeing"
      />

      <section style={{ padding: '6rem 2rem 8rem', position: 'relative', zIndex: 10 }}>
        <div style={{ maxWidth: '1000px', margin: '-4rem auto 0' }}>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ backgroundColor: 'white', padding: '4rem', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-lg)', marginBottom: '4rem', border: '1px solid rgba(0,0,0,0.03)' }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '3rem' }}>
              <span style={{ fontSize: '5rem', lineHeight: '0.8', fontWeight: 800, color: 'var(--color-primary-green)', fontFamily: 'var(--font-primary)' }}>S</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-gray-700)' }}>
                <p>
                  imHealth Africa provides specialized consultancy services across both health and non-health sectors. Our clients include ministries, government agencies, donors, implementing partners, and private sector organizations.
                </p>
                <p>
                  With a robust in-house team and a diverse network of national and international consultants, we are well-equipped to deploy expert support rapidly for project implementation, capacity building, and conducting qualitative and quantitative surveys. Our strength lies in forming dynamic, multidisciplinary teams that include consultants, interview specialists, and data analysts capable of executing various project tasks effectively.
                </p>
                <p style={{ fontWeight: 600, color: 'var(--color-slate-black)' }}>
                  Our consultancy services cover a wide range of areas, including:
                </p>
              </div>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              style={{ backgroundColor: 'var(--color-surface-soft)', padding: '3rem', borderRadius: 'var(--radius-lg)' }}
            >
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                {[
                  "System reviews and assessments",
                  "System design and strategic planning",
                  "Strategic stakeholder engagement, team building, collaboration, and advocacy",
                  "Capacity building, curriculum development, training, peer support, coaching, and mentorship",
                  "Operational and implementation research—design, execution, data management, reporting, and dissemination",
                  "Development and strengthening of health systems",
                  "Health supply chain management",
                  "Pharmaceutical systems, medicine management, and the safe clinical use of drugs",
                  "Programs addressing HIV/AIDS, Tuberculosis, and Malaria, including robust interventions for malaria in pregnancy and childhood",
                  "Malaria studies specifically focusing on pregnancy and children",
                  "Monitoring and evaluation",
                  "Livelihood studies and related research"
                ].map((item, i) => (
                  <motion.li key={i} variants={fadeInUp} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', backgroundColor: 'white', padding: '1.5rem', borderRadius: '12px', boxShadow: 'var(--shadow-sm)' }}>
                    <div style={{ color: 'var(--color-primary-green)', marginTop: '2px' }}>
                      <ArrowRightCircle size={22} />
                    </div>
                    <span style={{ fontSize: '1rem', lineHeight: 1.5, color: '#444', fontWeight: 500 }}>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

        </div>
      </section>
    </div>
  )
}
