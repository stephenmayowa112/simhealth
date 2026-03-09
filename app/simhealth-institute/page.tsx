import React from 'react'
import { Section, Grid } from '@/components'

export const metadata = {
  title: 'SimHealth Institute - SimHealth Africa',
  description: 'Training, coaching, and capacity building services.',
}

export default function SimHealthInstitutePage() {
  return (
    <>
      <div style={{ backgroundColor: '#75c037', padding: '10rem 2rem 6rem', textAlign: 'center', color: 'white', position: 'relative', overflow: 'hidden' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '1.5rem', fontFamily: 'var(--font-primary)' }}>SIMHEALTH INSTITUTE</h1>
        <p style={{ fontSize: '1.2rem', fontFamily: 'var(--font-secondary)' }}>.....Improving Health and Wellbeing</p>

        {/* Decorative Wave */}
        <svg style={{ position: 'absolute', bottom: -5, left: 0, width: '100%', height: 'auto', display: 'block' }} viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,50 C120,-10 240,-10 360,30 C480,70 600,70 720,30 C840,-10 960,-10 1080,30 C1200,70 1320,70 1440,30 L1440,100 L0,100 Z" fill="#ffffff" />
        </svg>
      </div>

      <Section backgroundColor="white" style={{ padding: '4rem 1rem 6rem' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

          {/* Main Intro Text */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '4rem' }}>
            <span style={{ fontSize: '4rem', lineHeight: '0.8', fontWeight: 400, color: '#333', fontFamily: 'var(--font-primary)' }}>W</span>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#444' }}>
              e offer training, coaching, mentoring and other capacity building services to individual and corporate organizations. simHealth Africa is committed to capacity building and human resource development through curriculum development, training, coaching and mentorship. We are working on technology deployment to facilitate teaching and learning in a cost efficient way. simHealth Africa provides support to the Government of Nigeria (Ministries of Health) in curriculum development, training, mentorship and coaching on public health supply chain. The two main sub-divisions of the Institute are:
            </p>
          </div>

          <Grid columns={{ desktop: 2, tablet: 1, mobile: 1 }} gap="xl">
            {/* Left Column: Education */}
            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 900, marginBottom: '1.5rem', fontFamily: 'var(--font-primary)', letterSpacing: '0.05em', textAlign: 'center' }}>EDUCATION, TRAINING AND MENTORSHIP</h3>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#444', marginBottom: '2rem' }}>
                simHealth has experienced and multidisciplinary faculty and staff who teach, coach and mentor course participants. Our courses are delivered as standard workshops (<span style={{ color: '#75c037' }}>International Training Workshops</span>) and/or seminars (<span style={{ color: '#75c037' }}>SimHealth Africa Seminar Series</span>). Some of our courses include:
              </p>

              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  "Leadership and management",
                  "Operational research, data management and dissemination",
                  "Pharmaceutical systems and services (Drug utilization studies, rational medicine use, pharmacovigilance, pharmacoeconomics, Quality assurance/quality control of pharmaceuticals)",
                  "Supply chain management",
                  "Clinical services and patient care",
                  "Epidemiology, Global/public health and Healthcare delivery",
                  "Monitoring and evaluation"
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="#75c037" style={{ flexShrink: 0, marginTop: '2px' }}>
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                    </svg>
                    <span style={{ fontSize: '1.05rem', lineHeight: 1.6, color: '#444' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column: Research */}
            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 900, marginBottom: '1.5rem', fontFamily: 'var(--font-primary)', letterSpacing: '0.05em', textAlign: 'center' }}>RESEARCH, DOCUMENTATION AND DISSEMINATION</h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', fontSize: '1.05rem', lineHeight: 1.8, color: '#444' }}>
                <p>
                  simHealth Institute is positioned to serve as repository of data and publications on health and health systems, applying rigorous scientific methods for its clinical, epidemiological, pharmaceutical, operational and implementation research works.
                </p>
                <p>
                  The Institute mentors and coaches professionals, students, program persons and academics in key subject areas and build capacity for scientific inquiry, research methods and dissemination (presentation at conferences and publications in peer reviewed journals).
                </p>
                <p>
                  simHealth anchors the Africa Conference on Healthcare Delivery (AHD Conference, <a href="http://www.ahdconference.org" style={{ color: '#75c037', textDecoration: 'none' }}>www.ahdconference.org</a>), one of the largest regional meetings on healthcare delivery and innovation in Africa. See conference website for additional information. We build synergy and collaboration among and between practitioners, program persons, academics, implementing partners, donor agencies, policy makers, and students.
                </p>
                <p>
                  Also, through our peer review <span style={{ color: '#75c037' }}>journal</span>, we offer a platform for dissemination of research findings to the larger scientific and professional communities. In addition, the Institute works with simHealth Connect to rapidly disseminate general information on health and activities of the organization through publication of our regular newsletter ("<span style={{ color: '#75c037' }}>simHealth Focus</span>," the official newsletter of SimHealth Africa).
                </p>
              </div>
            </div>
          </Grid>

        </div>
      </Section>
    </>
  )
}
