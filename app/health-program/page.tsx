import React from 'react'
import { Section, Grid } from '@/components'
import Image from 'next/image'

export const metadata = {
  title: 'Health Program - SimHealth Africa',
  description: 'Access to quality and affordable healthcare products and services.',
}

export default function HealthProgramPage() {
  return (
    <>
      <div style={{ backgroundColor: '#eeb019', padding: '10rem 2rem 6rem', textAlign: 'center', color: 'white', position: 'relative', overflow: 'hidden' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '1.5rem', fontFamily: 'var(--font-primary)' }}>HEALTH PROGRAM</h1>
        <p style={{ fontSize: '1.2rem', fontFamily: 'var(--font-secondary)' }}>.....Improving Health and Wellbeing</p>

        {/* Decorative Wave */}
        <svg style={{ position: 'absolute', bottom: -5, left: 0, width: '100%', height: 'auto', display: 'block' }} viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,50 C120,-10 240,-10 360,30 C480,70 600,70 720,30 C840,-10 960,-10 1080,30 C1200,70 1320,70 1440,30 L1440,100 L0,100 Z" fill="#ffffff" />
        </svg>
      </div>

      <Section backgroundColor="white" style={{ padding: '6rem 1rem 8rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

          <Grid columns={{ desktop: 2, tablet: 1, mobile: 1 }} gap="xl" style={{ alignItems: 'center' }}>

            {/* Left side text content */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem', fontSize: '1.05rem', lineHeight: 1.8, color: '#444' }}>
              <p>
                simHealth Africa promotes access to quality and affordable healthcare products and services.
              </p>
              <p>
                In addition, the organization supports governments, donor agencies, implementing partners, health facilities (public and private) and the local community in health strengthening, promotion of healthy living and disease prevention.
              </p>
              <p>
                In addition, through <span style={{ color: '#0066cc' }}>Med-Vical International</span> (the social enterprise) simHealth Africa, provides access to quality and affordable healthcare products and services, especially in resource limited settings.
              </p>
              <p>
                We provide smart and convenient primary and specialized secondary healthcare services, which include, but not limited to: basic and advanced health checks/screening, health education and counseling, pharmacy and pharmaceutical services, immunization services, school health program and other health promotion and disease prevention services, diagnostic and clinical services (pediatrics, obstetrics and gynecology, internal medicine, surgery, eye care, etc).
              </p>
              <p>
                Furthermore, through <span style={{ color: '#0066cc' }}>simHealth Mission</span> (one of our outreach programs), we provide mobile and medical outreach services. We do this through in-house <span style={{ color: '#0066cc' }}>Med-Vical Medical Centre</span> [MMC] and by collaborating with other hospitals and healthcare organizations.
              </p>
            </div>

            {/* Right side image */}
            <div style={{ position: 'relative', width: '100%', minHeight: '400px', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 10px 40px rgba(0,0,0,0.1)' }}>
              <Image
                src="https://placehold.co/800x600/eeeeee/999999?text=Health+Program+Group"
                alt="Health Program Group Photo"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>

          </Grid>

        </div>
      </Section>
    </>
  )
}
