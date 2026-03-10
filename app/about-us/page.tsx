'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Shield, Target, Award, CheckCircle2 } from 'lucide-react'

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
}

// Reusable Hero Banner for Subpages
const SubpageHero = ({ title, subtitle }: { title: string, subtitle: string }) => (
  <section style={{
    position: 'relative',
    padding: '10rem 2rem 6rem',
    backgroundColor: 'var(--color-slate-black)',
    overflow: 'hidden',
    textAlign: 'center'
  }}>
    <motion.div
      animate={{ scale: [1, 1.05, 1], opacity: [0.4, 0.5, 0.4] }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      style={{ position: 'absolute', top: '-50%', left: '20%', width: '60vw', height: '60vw', borderRadius: '50%', background: 'radial-gradient(circle, rgba(106,210,32,0.3) 0%, rgba(15,23,42,0) 70%)', filter: 'blur(80px)', pointerEvents: 'none' }}
    />
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} style={{ position: 'relative', zIndex: 10, maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, color: 'var(--color-white)', fontFamily: 'var(--font-primary)', marginBottom: '1rem', letterSpacing: '-0.02em' }}>{title}</h1>
      <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.7)', fontFamily: 'var(--font-secondary)' }}>{subtitle}</p>
    </motion.div>
  </section>
)

export default function AboutUsPage() {
  return (
    <div style={{ backgroundColor: 'var(--color-surface-soft)', minHeight: '100vh', overflowX: 'hidden' }}>

      <SubpageHero title="ORGANIZATION STRATEGY" subtitle="...Improving Health and Wellbeing" />

      {/* Vision, Mission, Values */}
      <section style={{ padding: '0 2rem 8rem', position: 'relative', zIndex: 20 }}>
        <div style={{ maxWidth: 'var(--max-content-width)', margin: '-4rem auto 0' }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}
          >
            {[
              { icon: <Target size={32} />, title: "OUR VISION", desc: "To achieve good health and build human resource capacity of many, and to become a center of excellence in the delivery of innovative, evidence-based, context-specific programs." },
              { icon: <Shield size={32} />, title: "OUR MISSION", desc: "simHealth Africa is a knowledge-based organization with the mission to improve health and wellbeing, build human resource capacity, and deliver innovative programs." },
              { icon: <Award size={32} />, title: "OUR VALUES", desc: "Our values are predicated on collaborative efforts and contributions with uncompromising integrity in the discharge of our duty with a code of conduct laced with honesty and transparency." }
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

      {/* Aims and Objectives */}
      <section style={{ padding: '6rem 2rem', backgroundColor: 'var(--color-white)', position: 'relative' }}>
        <div style={{ maxWidth: 'var(--max-content-width)', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '4rem' }}
          >
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, fontFamily: 'var(--font-primary)', color: 'var(--color-slate-black)' }}>AIMS AND OBJECTIVES</h2>
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
                    "Health system strengthening and improved healthcare delivery",
                    "Research, documentation and dissemination",
                    "Innovation and social entrepreneurship",
                    "Capacity building, training and mentorship",
                    "Policy, advocacy and collaboration",
                    "Monitoring and evaluation of projects and programs"
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

      {/* Organization Strategy Detailed */}
      <section style={{ padding: '8rem 2rem', position: 'relative' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '4rem' }}
          >
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, fontFamily: 'var(--font-primary)', color: 'var(--color-slate-black)', marginBottom: '1rem' }}>ORGANIZATION STRATEGY</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-gray-700)', fontWeight: 500 }}>The Organization will pursue her aims and objectives by:</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}
          >
            {[
              "Serving as an independent research, documentation, dissemination, policy and advocacy center.",
              "Partnering with researchers and research institutions globally, to conduct large scale studies.",
              "Conducting systematic reviews, assessments, operational research, and innovations.",
              "Encouraging the adoption of emerging technologies and innovative methods.",
              "Strengthening partnerships/collaborations and information sharing on social problems.",
              "Supporting health systems/community system strengthening through institutional capacity building."
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
