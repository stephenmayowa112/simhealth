import React from 'react'
import { Section } from '@/components'

export const metadata = {
  title: 'Innovation and Social Entrepreneurship - SimHealth Africa',
  description: 'Promoting innovation and social entrepreneurship programs.',
}

export default function InnovationProgramPage() {
  return (
    <>
      <div style={{ backgroundColor: '#ffc107', padding: '10rem 2rem 6rem', textAlign: 'center', color: 'white', position: 'relative', overflow: 'hidden' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '1.5rem', fontFamily: 'var(--font-primary)', textTransform: 'uppercase' }}>
          INNOVATION AND SOCIAL ENTREPRENEURSHIP PROGRAM
        </h1>
        <p style={{ fontSize: '1.2rem', fontFamily: 'var(--font-secondary)' }}>......Improving Health and Wellbeing</p>

        {/* Decorative Jagged Teeth */}
        <svg style={{ position: 'absolute', bottom: -5, left: 0, width: '100%', height: 'auto', display: 'block' }} viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          {/* Jagged path to match screenshot visually */}
          <path d="M0,100 L0,50 L20,100 L40,40 L60,100 L80,30 L100,100 L120,50 L140,100 L160,30 L180,100 L200,60 L220,100 L240,40 L260,100 L280,50 L300,100 L320,30 L340,100 L360,50 L380,100 L400,20 L420,100 L440,50 L460,100 L480,30 L500,100 L520,60 L540,100 L560,40 L580,100 L600,50 L620,100 L640,30 L660,100 L680,60 L700,100 L720,40 L740,100 L760,50 L780,100 L800,30 L820,100 L840,60 L860,100 L880,40 L900,100 L920,50 L940,100 L960,30 L980,100 L1000,60 L1020,100 L1040,40 L1060,100 L1080,50 L1100,100 L1120,30 L1140,100 L1160,60 L1180,100 L1200,40 L1220,100 L1240,50 L1260,100 L1280,30 L1300,100 L1320,60 L1340,100 L1360,40 L1380,100 L1400,50 L1420,100 L1440,40 L1440,100 Z" fill="#ffffff" />
        </svg>
      </div>

      <Section backgroundColor="white" style={{ padding: '6rem 1rem 8rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>

          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '3rem' }}>
            <span style={{ fontSize: '4.5rem', lineHeight: '0.8', fontWeight: 400, color: '#333', fontFamily: 'var(--font-primary)' }}>W</span>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#444' }}>
              e promote innovation and social entrepreneurship program as a strategy for promoting economic empowerment and poverty reduction, quality education, improvement in livelihoods, and good nutrition. Some of our activities under this division are:
            </p>
          </div>

          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {[
                "Knowledge and talent hunt/management",
                "Innovation and social entrepreneurship program",
                "Micro, Small, and medium enterprises (MSMEs) and start ups",
                "Training, career advice and mentorship program",
                "Youth and women empowerment program, skills acquisition and poverty alleviation"
              ].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#75c037" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                  </svg>
                  <span style={{ fontSize: '1.05rem', lineHeight: 1.5, color: '#444' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </Section>
    </>
  )
}
