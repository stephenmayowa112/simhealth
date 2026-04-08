'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { SubpageHero } from '@/components'

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
}

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

export default function OurProjectsPage() {
  const projects = [
    {
      title: 'MAPPING OF THE DISTRIBUTION NETWORK FOR CO-PAID ACT IN NIGERIA',
      imageUrl: 'https://placehold.co/800x600/eeeeee/999999?text=Mapping+Project',
      imageAlt: 'Mapping project field work',
      greenFlair: false,
    },
    {
      title: 'ASSESSMENT OF LIVELIHOOD OPTIONS IN GULLY/EROSION SITES IN EDO STATE, NIGERIA (NEWMAP PROJECT)',
      imageUrl: 'https://placehold.co/800x600/eeeeee/999999?text=NEWMAP+Project',
      imageAlt: 'NEWMAP project assessment',
      greenFlair: false,
    },
    {
      title: 'MONITORING AND EVALUATION OF DRGS FUNDED MDGS PROJECTS AND PROGRAMS IN NIGERIA',
      imageUrl: 'https://placehold.co/800x600/eeeeee/999999?text=MDG+Project',
      imageAlt: 'MDG project monitoring',
      greenFlair: true, // Specific design requirement from screenshot
    },
    {
      title: 'MALARIA IN PREGNANCY AWARENESS CAMPAIGN - EMPOWERING HEALTHCARE PROFESSIONALS AND THE ENTIRE COMMUNITY',
      imageUrl: 'https://placehold.co/800x600/eeeeee/999999?text=Malaria+Campaign',
      imageAlt: 'Malaria in pregnancy awareness campaign',
      greenFlair: true, // Specific design requirement from screenshot
    },
    {
      title: 'FIELD STUDIES; OUR FIELD STAFF CONDUCTING INTERVIEWS',
      imageUrl: 'https://placehold.co/800x600/eeeeee/999999?text=Field+Studies+1',
      imageAlt: 'Field staff conducting interviews',
      greenFlair: false,
    },
    {
      title: 'FIELD STUDIES; OUR FIELD STAFF CONDUCTING INTERVIEWS',
      imageUrl: 'https://placehold.co/800x600/eeeeee/999999?text=Field+Studies+2',
      imageAlt: 'Field staff conducting interviews',
      greenFlair: false,
    },
  ]

  return (
    <div style={{ backgroundColor: 'var(--color-surface-soft)', minHeight: '100vh', overflowX: 'hidden' }}>

      {/* Custom Hero with Yellow banner and tagline */}
      <section style={{
        position: 'relative',
        padding: '10rem 2rem 6rem',
        backgroundColor: 'var(--color-secondary-yellow)',
        overflow: 'hidden',
        textAlign: 'center'
      }}>
        <motion.div
          animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.4, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          style={{ position: 'absolute', top: '-50%', left: '20%', width: '60vw', height: '60vw', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,0.6) 0%, rgba(15,23,42,0) 70%)', filter: 'blur(80px)', pointerEvents: 'none' }}
        />
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} style={{ position: 'relative', zIndex: 10, maxWidth: '1000px', margin: '0 auto' }}>
          <h1 style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', fontWeight: 900, color: 'var(--color-slate-black)', fontFamily: 'var(--font-primary)', marginBottom: '1rem', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
            OUR PROJECTS
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'rgba(15,23,42,0.8)', fontFamily: 'var(--font-secondary)', fontWeight: 500, marginBottom: '0.5rem' }}>
            Transforming Communities Through Innovation
          </p>
          <p style={{ fontSize: '1rem', color: 'var(--color-primary-green)', fontFamily: 'var(--font-primary)', fontWeight: 700, letterSpacing: '2px' }}>
            Health | Capacity | Innovation
          </p>
        </motion.div>
      </section>

      <section style={{ padding: '6rem 2rem 8rem', position: 'relative', zIndex: 10 }}>
        <div style={{ maxWidth: '1200px', margin: '-4rem auto 0' }}>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ backgroundColor: 'white', padding: '3rem 2rem', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-lg)', marginBottom: '4rem', border: '1px solid rgba(0,0,0,0.03)' }}
          >
            <h2 style={{ fontSize: '2rem', fontWeight: 900, fontFamily: 'var(--font-primary)', color: 'var(--color-slate-black)', marginBottom: '1.5rem', textAlign: 'center' }}>
              CURRENT INITIATIVES
            </h2>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-gray-700)', textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
              simHealth Africa and Med-Vical International are working to integrate healthcare services, enhance access to healthcare products, and create a significant social impact. Through our combined expertise, we are improving healthcare delivery and making quality products more accessible. Our initiatives emphasize innovative solutions, strategic partnerships, and community engagement to bridge health and developmental gaps, ultimately aiming for sustainable health outcomes in Africa.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem', marginBottom: '5rem' }}
          >
            {[
              { title: 'School Health Program', desc: 'Promoting health and educational outcomes in schools and communities through Med-Vical partnership.' },
              { title: 'Outreach Programs', desc: 'Mobile clinics and health outreach efforts reaching underserved populations.' },
              { title: 'Partnerships and Community Engagement', desc: 'Collaborative initiatives with healthcare organizations to strengthen community health systems.' }
            ].map((project, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -8, boxShadow: 'var(--shadow-xl)' }}
                style={{ backgroundColor: 'var(--color-primary-green)', padding: '3rem 2rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)', transition: 'all 0.3s ease', color: 'white', textAlign: 'center' }}
              >
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, fontFamily: 'var(--font-primary)', marginBottom: '1rem' }}>{project.title}</h3>
                <p style={{ fontSize: '1rem', lineHeight: 1.6, opacity: 0.95 }}>{project.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ backgroundColor: 'white', padding: '3rem 2rem', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-lg)', marginBottom: '4rem', border: '1px solid rgba(0,0,0,0.03)', textAlign: 'center' }}
          >
            <h2 style={{ fontSize: '2rem', fontWeight: 900, fontFamily: 'var(--font-primary)', color: 'var(--color-slate-black)', margin: 0 }}>
              PAST PROJECTS
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '3rem' }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -8, boxShadow: 'var(--shadow-xl)' }}
                style={{ backgroundColor: 'white', borderRadius: 'var(--radius-lg)', overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '100%', boxShadow: 'var(--shadow-md)', transition: 'all 0.3s ease', border: '1px solid rgba(0,0,0,0.04)' }}
              >
                {project.greenFlair ? (
                  <div style={{ position: 'relative', display: 'flex', height: '350px', backgroundColor: 'var(--color-primary-green)' }}>
                    <div style={{ position: 'relative', width: '100%', marginLeft: '1.5rem', height: '100%' }}>
                      <Image src={project.imageUrl} alt={project.imageAlt} fill style={{ objectFit: 'cover' }} />
                    </div>
                  </div>
                ) : (
                  <div style={{ position: 'relative', width: '100%', height: '350px' }}>
                    <Image src={project.imageUrl} alt={project.imageAlt} fill style={{ objectFit: 'cover' }} />
                  </div>
                )}

                <div style={{ padding: '2rem 1.5rem', flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 800, fontFamily: 'var(--font-primary)', color: 'var(--color-slate-black)', margin: 0, lineHeight: 1.5 }}>
                    {project.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>
    </div>
  )
}
