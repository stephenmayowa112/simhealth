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
        { title: 'INNOVATION AND SOCIAL ENTREPRENEURSHIP', href: '/innovation-and-social-entrepreneurship-program', icon: <Globe2 size={40} /> },
        { title: 'SIMHEALTH INSTITUTE', href: '/simhealth-institute', icon: <GraduationCap size={40} /> },
        { title: 'SIMHEALTH CONNECT', href: '/simhealth-connect', icon: <Activity size={40} /> },
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
                                    whileHover={{ y: -10, boxShadow: 'var(--shadow-lg)' }}
                                    style={{ backgroundColor: 'white', padding: '4rem 2rem', textAlign: 'center', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-md)', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', border: '1px solid rgba(0,0,0,0.03)', transition: 'box-shadow 0.3s ease' }}
                                >
                                    <div style={{ width: '80px', height: '80px', borderRadius: '24px', backgroundColor: 'rgba(117,192,55,0.1)', color: 'var(--color-primary-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem', transition: 'transform 0.3s ease' }}>
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
