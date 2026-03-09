'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react'

export const Footer = () => {
    return (
        <footer style={{ backgroundColor: 'var(--color-slate-black)', color: 'var(--color-cream)', position: 'relative', overflow: 'hidden' }}>

            {/* Glowing Orbs Background */}
            <div style={{ position: 'absolute', top: '-20%', left: '-10%', width: '40%', height: '60%', background: 'radial-gradient(circle, rgba(10,46,21,0.8) 0%, rgba(15,23,42,0) 70%)', filter: 'blur(60px)', zIndex: 0 }} />
            <div style={{ position: 'absolute', bottom: '-20%', right: '-10%', width: '50%', height: '80%', background: 'radial-gradient(circle, rgba(117,192,55,0.15) 0%, rgba(15,23,42,0) 70%)', filter: 'blur(80px)', zIndex: 0 }} />

            {/* Geometric Angled Divider */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '40px', background: 'linear-gradient(to bottom right, var(--color-surface-soft) 49%, transparent 51%)', zIndex: 1 }}></div>

            <div style={{ position: 'relative', zIndex: 10, maxWidth: 'var(--max-content-width)', margin: '0 auto', padding: '6rem 2rem 3rem' }}>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', marginBottom: '4rem' }}>

                    {/* Brand Info */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <Image src="/images/logo1.png" alt="SimHealth Africa Logo" width={200} height={60} style={{ filter: 'brightness(0) invert(1)' }} />
                        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem', lineHeight: 1.6, fontFamily: 'var(--font-secondary)' }}>
                            Independent research, documentation, dissemination, policy and advocacy center supporting a wide range of programs in healthcare delivery across Africa.
                        </p>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--color-primary-green)', marginTop: '0.5rem' }}>
                            <Mail size={18} />
                            <a href="mailto:info@simhealthafrica.org" style={{ fontSize: '0.95rem', fontWeight: 500, fontFamily: 'var(--font-primary)' }}>info@simhealthafrica.org</a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 style={{ color: 'white', fontSize: '1.2rem', fontWeight: 700, fontFamily: 'var(--font-primary)', marginBottom: '1.5rem', letterSpacing: '0.5px' }}>Quick Links</h4>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {[
                                { label: 'Home', href: '/' },
                                { label: 'About Us', href: '/about-us' },
                                { label: 'Our Programs', href: '/programs' },
                                { label: 'Our Projects', href: '/our-projects' },
                                { label: 'Contact Us', href: '/contact-us' }
                            ].map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem', transition: 'all 0.3s ease' }}
                                        onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--color-primary-green)'; e.currentTarget.style.transform = 'translateX(5px)' }}
                                        onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; e.currentTarget.style.transform = 'translateX(0)' }}>
                                        <span>{link.label}</span>
                                        <ArrowUpRight size={14} style={{ opacity: 0.5 }} />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Interactive Map */}
                    <div>
                        <h4 style={{ color: 'white', fontSize: '1.2rem', fontWeight: 700, fontFamily: 'var(--font-primary)', marginBottom: '1.5rem', letterSpacing: '0.5px' }}>Location</h4>
                        <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }}>
                            <iframe
                                src="https://maps.google.com/maps?q=simHealth+Africa&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                width="100%"
                                height="200"
                                style={{ border: 0, display: 'block' }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="SimHealth Africa Location"
                            ></iframe>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div style={{ paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
                    <p style={{ margin: 0, color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', fontFamily: 'var(--font-secondary)' }}>
                        © {new Date().getFullYear()} SimHealth Africa® (Formally "Center for Health Research and Disease Prevention"). All Rights Reserved.
                    </p>
                    <p style={{ margin: 0, color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', fontFamily: 'var(--font-secondary)' }}>
                        Designed with <span style={{ color: 'var(--color-error)' }}>♥</span> locally
                    </p>
                </div>

            </div>
        </footer>
    )
}
