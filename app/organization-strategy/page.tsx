'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { SubpageHero } from '@/components'
import { Target, Shield, Award, CheckCircle2 } from 'lucide-react'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
}

export default function OrganizationStrategyPage() {
  return (
    <div style={{ backgroundColor: 'var(--color-surface-soft)', minHeight: '100vh', overflowX: 'hidden' }}>

      <SubpageHero title="GOVERNANCE & STRATEGY" subtitle="Building Sustainable Health Systems Across Africa" />

      {/* Governance & Legal Status */}
      <section style={{ padding: '0 2rem 4rem', position: 'relative', zIndex: 20 }}>
        <div style={{ maxWidth: 'var(--max-content-width)', margin: '-4rem auto 0' }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ backgroundColor: 'white', padding: '3.5rem', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-lg)', border: '1px solid rgba(0,0,0,0.03)', marginBottom: '3rem' }}
          >
            <h2 style={{ fontSize: '1.8rem', fontWeight: 900, fontFamily: 'var(--font-primary)', color: 'var(--color-slate-black)', marginBottom: '1.5rem' }}>Governance & Legal Status</h2>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--color-gray-700)' }}>
              simHealth Africa is a non-profit, non-governmental organization registered with the Corporate Affairs Commission of Nigeria (CAC/IT/NO 36867). Our organization is guided by a Board of Trustees (BOTs), supported by a network of national, regional, and international experts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section style={{ padding: '0 2rem 8rem', position: 'relative', zIndex: 20 }}>
        <div style={{ maxWidth: 'var(--max-content-width)', margin: '0 auto' }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}
          >
            {[
              { icon: <Target size={32} />, title: "OUR VISION", desc: "At simHealth Africa, we aspire to enhance health outcomes and strengthen human resource capacities across the continent. Our goal is to foster sustainable healthcare delivery systems and establish ourselves as a center of excellence for innovative, evidence-based programs tailored to local contexts." },
              { icon: <Shield size={32} />, title: "OUR MISSION", desc: "As a knowledge-driven organization, simHealth Africa is dedicated to improving health and well-being. We aim to build human resource capacity, launch innovative initiatives, and fortify healthcare systems throughout Africa." },
              { icon: <Award size={32} />, title: "OUR VALUES", desc: "Our operations are grounded in collaboration and integrity. We adhere to a strict code of conduct that emphasizes honesty and transparency. Our core values include: Collaboration, Equitable Access, Honesty, and Transparency." }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -8, boxShadow: 'var(--shadow-lg)' }}
                style={{ backgroundColor: 'var(--color-white)', padding: '3.5rem 2.5rem', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-md)', transition: 'all 0.4s ease', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', border: '1px solid rgba(0,0,0,0.03)' }}
              >
                <div style={{ width: '70px', height: '70px', borderRadius: '50%', backgroundColor: 'rgba(106,210,32,0.1)', color: 'var(--color-primary-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', boxShadow: 'inset 0 0 20px rgba(106,210,32,0.05)' }}>
                  {item.icon}
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '1rem', fontFamily: 'var(--font-primary)', color: 'var(--color-slate-black)' }}>{item.title}</h3>
                <p style={{ color: 'var(--color-gray-700)', lineHeight: 1.7, fontSize: '0.95rem' }}>{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Organizational Strategy */}
      <section style={{ padding: '6rem 2rem', backgroundColor: 'var(--color-white)', position: 'relative' }}>
        <div style={{ maxWidth: 'var(--max-content-width)', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '4rem' }}
          >
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, fontFamily: 'var(--font-primary)', color: 'var(--color-slate-black)' }}>ORGANIZATIONAL STRATEGY</h2>
          </motion.div>

          <div style={{ backgroundColor: 'var(--color-secondary-yellow)', padding: '4rem 3rem', borderRadius: 'var(--radius-xl)', position: 'relative', overflow: 'hidden' }}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem', alignItems: 'center', position: 'relative', zIndex: 10 }}
            >
              <motion.div variants={fadeInUp} style={{ backgroundColor: 'white', padding: '3rem 2.5rem', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-lg)' }}>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                  {[
                    "Research and Advocacy: Acting as an independent center for research, documentation, and policy advocacy to support healthcare initiatives.",
                    "Global Partnerships: By partnering with researchers worldwide, we conduct impactful studies and enable local data management that drives informed decisions.",
                    "Operational Research: Through systematic reviews and meticulous data management, we are committed to enhancing health outcomes and overall well-being.",
                    "Embracing Technology: Promoting innovative technologies and methods for better health outcomes.",
                    "Strengthening Collaborations: Building partnerships and sharing information on health-related social issues among stakeholders.",
                    "Capacity Building: We empower health systems and communities through targeted resource development and research initiatives that bolster local capacities."
                  ].map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                      <CheckCircle2 size={24} color="var(--color-primary-green)" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ fontSize: '1.05rem', lineHeight: 1.5, color: '#444', fontWeight: 500 }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div variants={fadeInUp} style={{ position: 'relative', height: '450px', borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
                <Image src="https://placehold.co/800x600/eeeeee/999999?text=Training+Session" alt="Training Session" fill style={{ objectFit: 'cover' }} />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Strategies Detailed */}
      <section style={{ padding: '8rem 2rem', position: 'relative' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '4rem' }}
          >
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, fontFamily: 'var(--font-primary)', color: 'var(--color-slate-black)', marginBottom: '1rem' }}>KEY STRATEGIES</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-gray-700)', fontWeight: 500 }}>To effectively realize its mission and vision, simHealth Africa works collaboratively with other organizations with shared vision to achieve its objectives through the following key strategies:</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}
          >
            {[
              "Research and Advocacy: Acting as an independent center for research, documentation, and policy advocacy to support healthcare initiatives.",
              "Global Partnerships: By partnering with researchers worldwide, we conduct impactful studies and enable local data management that drives informed decisions.",
              "Operational Research: Through systematic reviews and meticulous data management, we are committed to enhancing health outcomes and overall well-being.",
              "Embracing Technology: Promoting innovative technologies and methods for better health outcomes.",
              "Strengthening Collaborations: Building partnerships and sharing information on health-related social issues among stakeholders.",
              "Capacity Building: We empower health systems and communities through targeted resource development and research initiatives that bolster local capacities.",
              "Health Promotion Programs: Sponsoring initiatives aimed at disease management and health awareness for key populations, fostering healthier communities.",
              "Advocacy for Access: Campaigning for improved access to essential medicines and health services in resource-limited settings.",
              "Youth Engagement: Encouraging student and young professional involvement in organizational activities, thereby nurturing the next generation of health advocates."
            ].map((item, i) => (
              <motion.div key={i} variants={fadeInUp} style={{ display: 'flex', alignItems: 'flex-start', gap: '1.2rem', backgroundColor: 'white', padding: '2rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)', border: '1px solid rgba(0,0,0,0.03)' }}>
                <div style={{ backgroundColor: 'rgba(106,210,32,0.1)', padding: '10px', borderRadius: '12px', color: 'var(--color-primary-green)' }}>
                  <CheckCircle2 size={24} />
                </div>
                <span style={{ fontSize: '1rem', lineHeight: 1.6, color: '#444' }}>{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

    </div>
  )
}
