'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

export default function ContactPage() {
  return (
    <div style={{ backgroundColor: 'var(--color-surface-soft)', minHeight: '100vh', overflowX: 'hidden' }}>

      {/* Sleek Hero with Image Blend */}
      <section style={{
        backgroundColor: 'var(--color-slate-black)',
        padding: '10rem 2rem 6rem',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'url("https://placehold.co/1920x800/0f172a/0f172a?text=Conference+Room")',
          backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.4, mixBlendMode: 'overlay'
        }} />
        <motion.div
          animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.4, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          style={{ position: 'absolute', top: '20%', left: '20%', width: '60vw', height: '60vw', borderRadius: '50%', background: 'radial-gradient(circle, rgba(117,192,55,0.4) 0%, rgba(15,23,42,0) 70%)', filter: 'blur(80px)', pointerEvents: 'none' }}
        />
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} style={{ position: 'relative', zIndex: 10, maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', fontWeight: 900, color: 'var(--color-white)', fontFamily: 'var(--font-primary)', marginBottom: '1.5rem', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
            CONTACT US
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.7)', fontFamily: 'var(--font-secondary)' }}>
            .....Improving Health and Wellbeing
          </p>
        </motion.div>
      </section>

      {/* Main Contact Section */}
      <section style={{ padding: '0 2rem 8rem', position: 'relative', zIndex: 10, marginTop: '-4rem' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ backgroundColor: 'white', padding: '4rem 3rem', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-lg)', border: '1px solid rgba(0,0,0,0.03)' }}
          >
            <h2 style={{ fontSize: '2rem', fontWeight: 900, fontFamily: 'var(--font-primary)', color: 'var(--color-slate-black)', marginBottom: '2.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '40px', height: '4px', backgroundColor: 'var(--color-primary-green)', borderRadius: '2px' }}></div>
              ADDRESS
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.2rem' }}>
                <div style={{ color: 'var(--color-primary-green)', marginTop: '4px', padding: '10px', backgroundColor: 'rgba(117,192,55,0.1)', borderRadius: '12px' }}>
                  <MapPin size={24} />
                </div>
                <p style={{ margin: 0, color: 'var(--color-gray-700)', fontSize: '1.05rem', lineHeight: 1.6, fontWeight: 500 }}>
                  No 44 Boundary Road, GRA,<br />
                  Benin City, Edo State,<br />
                  Nigeria
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
                <div style={{ color: 'var(--color-primary-green)', padding: '10px', backgroundColor: 'rgba(117,192,55,0.1)', borderRadius: '12px' }}>
                  <Phone size={24} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <p style={{ margin: 0, color: 'var(--color-slate-black)', fontSize: '1.05rem', fontWeight: 600 }}>+234 807 635 5533</p>
                  <p style={{ margin: 0, color: 'var(--color-slate-black)', fontSize: '1.05rem', fontWeight: 600 }}>0802 359 7448</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
                <div style={{ color: 'var(--color-primary-green)', padding: '10px', backgroundColor: 'rgba(117,192,55,0.1)', borderRadius: '12px' }}>
                  <Mail size={24} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <p style={{ margin: 0, color: 'var(--color-slate-black)', fontSize: '1.05rem', fontWeight: 600 }}>simhealthafrica@gmail.com</p>
                  <p style={{ margin: 0, color: 'var(--color-slate-black)', fontSize: '1.05rem', fontWeight: 600 }}>info@simhealthafrica.org</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Opening Hours Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ backgroundColor: 'white', padding: '4rem 3rem', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-lg)', border: '1px solid rgba(0,0,0,0.03)' }}
          >
            <h2 style={{ fontSize: '2rem', fontWeight: 900, fontFamily: 'var(--font-primary)', color: 'var(--color-slate-black)', marginBottom: '2.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '40px', height: '4px', backgroundColor: 'var(--color-primary-green)', borderRadius: '2px' }}></div>
              HOURS
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontWeight: 'bold', fontSize: '1.05rem' }}>
                <span style={{ color: 'var(--color-gray-700)' }}>Monday - Friday</span>
                <span style={{ backgroundColor: 'var(--color-primary-green)', color: 'white', padding: '0.6rem 1.2rem', borderRadius: 'var(--radius-pill)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, boxShadow: 'var(--shadow-sm)' }}>
                  8AM - 5PM
                  <Clock size={16} />
                </span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontWeight: 'bold', fontSize: '1.05rem', paddingTop: '1.5rem', borderTop: '1px solid #eee' }}>
                <span style={{ color: 'var(--color-gray-700)' }}>Saturday - Sunday</span>
                <span style={{ backgroundColor: 'var(--color-surface-soft)', color: 'var(--color-gray-500)', padding: '0.6rem 1.2rem', borderRadius: 'var(--radius-pill)', fontSize: '0.9rem', fontWeight: 600, border: '1px solid #eee' }}>
                  Closed
                </span>
              </div>
            </div>

            <div style={{ marginTop: '4rem', padding: '2rem', backgroundColor: 'rgba(242,201,76,0.1)', borderRadius: '16px', border: '1px dashed rgba(242,201,76,0.5)', textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--color-warning)', marginBottom: '0.5rem' }}>Partnership Inquiries</h3>
              <p style={{ color: 'var(--color-gray-700)', fontSize: '0.95rem' }}>For corporate programs, please contact our director directly.</p>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  )
}
