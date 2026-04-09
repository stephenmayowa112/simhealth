'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { SubpageHero } from '@/components'
import { Heart, Activity, Globe2, Briefcase, GraduationCap } from 'lucide-react'

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
}

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

export default function OurProgramsPage() {
    const programs = [
        { title: 'HEALTH PROGRAM', href: '/health-program', icon: <Heart size={40} /> },
        { title: 'simNovate (INNOVATION AND SOCIAL ENTREPRENEURSHIP)', href: '/innovation-and-social-entrepreneurship-program', icon: <Globe2 size={40} /> },
        { title: 'simHealth Institute', href: '/simhealth-institute', icon: <GraduationCap size={40} /> },
        { title: 'simHealth Connect', href: '/simhealth-connect', icon: <Activity size={40} /> },
        { title: 'CONSULTANCY SERVICES', href: '/consultancy-services', icon: <Briefcase size={40} /> },
    ]

    return (
        <div style={{ backgroundColor: 'var(--color-surface-soft)', minHeight: '100vh', overflowX: 'hidden' }}>

            <SubpageHero
                title="OUR PROGRAMS"
                subtitle=".......Improving Health and Wellbeing"
            />

            <section style={{ padding: '6rem 2rem 8rem', position: 'relative', zIndex: 10 }}>
                <div style={{ maxWidth: '1200px', margin: '-4rem auto 0' }}>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}
                    >
                        {programs.map((prog, i) => (
                            <Link key={i} href={prog.href} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <motion.div
                                    variants={fadeInUp}
                                    whileHover={{ y: -10, boxShadow: '0 15px 40px rgba(106,210,32,0.2)' }}
                                    style={{ 
                                      background: 'rgba(255, 255, 255, 0.7)', 
                                      backdropFilter: 'blur(16px)',
                                      WebkitBackdropFilter: 'blur(16px)',
                                      padding: '4rem 2rem', 
                                      textAlign: 'center', 
                                      borderRadius: 'var(--radius-xl)', 
                                      boxShadow: '0 8px 32px rgba(106,210,32,0.15)', 
                                      height: '100%', 
                                      display: 'flex', 
                                      flexDirection: 'column', 
                                      justifyContent: 'center', 
                                      alignItems: 'center', 
                                      border: '1px solid rgba(255, 255, 255, 0.3)', 
                                      transition: 'all 0.3s ease' 
                                    }}
                                >
                                    <div style={{ 
                                      width: '80px', 
                                      height: '80px', 
                                      borderRadius: '24px', 
                                      background: 'linear-gradient(145deg, rgba(106,210,32,0.15), rgba(106,210,32,0.08))',
                                      color: 'var(--color-primary-green)', 
                                      display: 'flex', 
                                      alignItems: 'center', 
                                      justifyContent: 'center', 
                                      marginBottom: '2rem', 
                                      boxShadow: '6px 6px 15px rgba(106,210,32,0.2), -4px -4px 10px rgba(255,255,255,0.8), inset 4px 4px 10px rgba(255,255,255,0.5), inset -4px -4px 10px rgba(106,210,32,0.1)',
                                      transition: 'transform 0.3s ease' 
                                    }}>
                                        {prog.icon}
                                    </div>
                                    <h3 style={{ fontSize: '1.2rem', fontWeight: 800, margin: 0, fontFamily: 'var(--font-primary)', color: 'var(--color-slate-black)', lineHeight: 1.4 }}>
                                        {prog.title}
                                    </h3>
                                </motion.div>
                            </Link>
                        ))}
                    </motion.div>

                </div>
            </section>
        </div>
    )
}
