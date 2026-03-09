import React from 'react'
import { Section } from '@/components'
import Image from 'next/image'

export const metadata = {
  title: 'SimHealth Connect - SimHealth Africa',
  description: 'Advocacy, policy and collaboration programs.',
}

export default function SimHealthConnectPage() {
  return (
    <>
      <div style={{ backgroundColor: '#75c037', padding: '10rem 2rem 6rem', textAlign: 'center', color: 'white', position: 'relative', overflow: 'hidden' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '0.5rem', fontFamily: 'var(--font-primary)' }}>SIMHEALTH CONNECT</h1>
        <h2 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '1.5rem', fontFamily: 'var(--font-primary)' }}>(ADVOCACY, POLICY AND COLLABORATION)</h2>
        <p style={{ fontSize: '1.2rem', fontFamily: 'var(--font-secondary)' }}>.......Improving Health and Wellbeing</p>

        {/* Decorative Drip Line */}
        <svg style={{ position: 'absolute', bottom: -5, left: 0, width: '100%', height: 'auto', display: 'block' }} viewBox="0 0 1440 150" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,0 Q30,100 60,60 T120,80 T180,40 T240,110 T300,50 T360,90 T420,30 T480,120 T540,60 T600,140 T660,70 T720,100 T780,50 T840,130 T900,60 T960,110 T1020,40 T1080,90 T1140,50 T1200,120 T1260,70 T1320,100 T1380,40 T1440,90 L1440,150 L0,150 Z" fill="#ffffff" />
        </svg>
      </div>

      <Section backgroundColor="white" style={{ padding: '4rem 1rem 6rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
          <span style={{ fontSize: '4rem', lineHeight: '0.8', fontWeight: 400, color: '#333', fontFamily: 'var(--font-primary)' }}>S</span>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#444' }}>
            imHealth Africa has been engaged in several formal and informal advocacy and mobilization activities for health and non-health programs. Some of the activities are stand-alone advocacy and mobilization programs, others are embedded in other projects to facilitate acceptance and nurture sustainability of intervention programs within local communities. Furthermore, simHealth Africa is offering an online community of practice, collaboration and linkages with local and international academic institutions, healthcare facilities, partners and implementers of funded projects, and governments at all levels. We promote rapid dissemination of organizations' projects and programs.
          </p>
        </div>
      </Section>
    </>
  )
}
