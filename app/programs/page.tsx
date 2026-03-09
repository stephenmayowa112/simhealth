import React from 'react'
import { Section, Grid } from '@/components'
import Link from 'next/link'

export const metadata = {
    title: 'Our Programs - SimHealth Africa',
    description: 'Explore our programs including Consultancy Services, Health Program, Innovation and Social Entrepreneurship, SimHealth Institute, and SimHealth Connect.',
}

export default function OurProgramsPage() {
    return (
        <>
            {/* Header Section */}
            <div style={{ backgroundColor: '#75c037', padding: '6rem 2rem 4rem', textAlign: 'center', color: 'white', position: 'relative', overflow: 'hidden' }}>
                <h1 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '1rem', fontFamily: 'var(--font-primary)' }}>OUR PROGRAMS</h1>
                <p style={{ fontSize: '1.2rem', fontFamily: 'var(--font-secondary)' }}>.......Improving Health and Wellbeing</p>

                {/* Decorative Wave */}
                <svg style={{ position: 'absolute', bottom: -5, left: 0, width: '100%', height: 'auto', display: 'block' }} viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0,50 C120,-10 240,-10 360,30 C480,70 600,70 720,30 C840,-10 960,-10 1080,30 C1200,70 1320,70 1440,30 L1440,100 L0,100 Z" fill="#f0ede5" />
                </svg>
            </div>

            {/* Programs Grid block */}
            <Section backgroundColor="gray" style={{ padding: '6rem 0' }}>
                <Grid columns={{ desktop: 3, tablet: 2, mobile: 1 }} gap="xl" style={{ alignItems: 'center' }}>

                    {/* HEALTH PROGRAM */}
                    <Link href="/health-program" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <div style={{ backgroundColor: 'white', padding: '3rem 2rem', textAlign: 'center', borderRadius: '4px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', transition: 'transform 0.3s', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            <div style={{ color: '#75c037', marginBottom: '1.5rem' }}>
                                <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                    <path d="M11 11H9v2h2v2h2v-2h2v-2h-2V9h-2v2z" fill="white" />
                                </svg>
                            </div>
                            <h3 style={{ fontSize: '1.3rem', fontWeight: 900, margin: 0, fontFamily: 'var(--font-primary)' }}>HEALTH PROGRAM</h3>
                        </div>
                    </Link>

                    {/* INNOVATION AND SOCIAL ENTREPRENEURSHIP PROGRAM */}
                    <Link href="/innovation-and-social-entrepreneurship-program" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <div style={{ backgroundColor: 'white', padding: '3rem 2rem', textAlign: 'center', borderRadius: '4px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', transition: 'transform 0.3s', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            <div style={{ color: '#75c037', marginBottom: '1.5rem' }}>
                                <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.992 4.992 0 008 20c.53 0 1.04-.08 1.52-.22L14.1 24l1.1-1.1-3.64-3.64C16.15 17.5 19 13.9 19 9c0-1.87-.5-3.62-1.36-5.14z" />
                                </svg>
                            </div>
                            <h3 style={{ fontSize: '1.3rem', fontWeight: 900, margin: 0, fontFamily: 'var(--font-primary)' }}>INNOVATION AND SOCIAL ENTREPRENEURSHIP PROGRAM</h3>
                        </div>
                    </Link>

                    {/* SIMHEALTH INSTITUTE */}
                    <Link href="/simhealth-institute" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <div style={{ backgroundColor: 'white', padding: '3rem 2rem', textAlign: 'center', borderRadius: '4px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', transition: 'transform 0.3s', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            <div style={{ color: '#75c037', marginBottom: '1.5rem' }}>
                                <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" />
                                </svg>
                            </div>
                            <h3 style={{ fontSize: '1.3rem', fontWeight: 900, margin: 0, fontFamily: 'var(--font-primary)' }}>SIMHEALTH INSTITUTE</h3>
                        </div>
                    </Link>

                    <div style={{ gridColumn: '1 / -1', display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
                        <Grid columns={{ desktop: 2, tablet: 2, mobile: 1 }} gap="xl" style={{ maxWidth: '800px', width: '100%' }}>
                            {/* SIMHEALTH CONNECT */}
                            <Link href="/simhealth-connect" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <div style={{ backgroundColor: 'white', padding: '3rem 2rem', textAlign: 'center', borderRadius: '4px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', transition: 'transform 0.3s', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                    <div style={{ color: '#75c037', marginBottom: '1.5rem' }}>
                                        <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                                        </svg>
                                    </div>
                                    <h3 style={{ fontSize: '1.3rem', fontWeight: 900, margin: 0, fontFamily: 'var(--font-primary)' }}>SIMHEALTH CONNECT</h3>
                                </div>
                            </Link>

                            {/* CONSULTANCY SERVICES */}
                            <Link href="/consultancy-services" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <div style={{ backgroundColor: 'white', padding: '3rem 2rem', textAlign: 'center', borderRadius: '4px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', transition: 'transform 0.3s', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                    <div style={{ color: '#75c037', marginBottom: '1.5rem' }}>
                                        <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                                        </svg>
                                    </div>
                                    <h3 style={{ fontSize: '1.3rem', fontWeight: 900, margin: 0, fontFamily: 'var(--font-primary)' }}>CONSULTANCY SERVICES</h3>
                                </div>
                            </Link>
                        </Grid>
                    </div>

                </Grid>
            </Section>
        </>
    )
}
