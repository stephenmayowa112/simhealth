'use client'

import React from 'react'
import { motion } from 'framer-motion'

export const SubpageHero = ({ title, subtitle }: { title: string, subtitle: string }) => {
    return (
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
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut" }} style={{ position: 'relative', zIndex: 10, maxWidth: '900px', margin: '0 auto' }}>
                <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 800, color: 'var(--color-white)', fontFamily: 'var(--font-primary)', marginBottom: '1.5rem', letterSpacing: '-0.02em', lineHeight: 1.1 }}>{title}</h1>
                <p style={{ fontSize: 'clamp(1.1rem, 2vw, 1.3rem)', color: 'rgba(255,255,255,0.7)', fontFamily: 'var(--font-secondary)', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>{subtitle}</p>
            </motion.div>
        </section>
    )
}
