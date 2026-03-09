import React from 'react'
import { Section, Grid, Flex } from '@/components'
import Image from 'next/image'

export const metadata = {
  title: 'About Us - SimHealth Africa',
  description: 'Learn about SimHealth Africa, our mission, vision, and organization strategy.',
}

export default function AboutUsPage() {
  return (
    <>
      {/* Header Section */}
      <div style={{ backgroundColor: '#75c037', padding: '6rem 2rem 4rem', textAlign: 'center', color: 'white', position: 'relative', overflow: 'hidden' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem', fontFamily: 'var(--font-primary)' }}>ORGANIZATION STRATEGY</h1>
        <p style={{ fontSize: '1.2rem', fontFamily: 'var(--font-secondary)' }}>...Improving Health and Wellbeing</p>

        {/* Decorative Wave matches the image context slightly to blend with the white section below */}
        <svg style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: 'auto', display: 'block' }} viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,60 C320,-60 640,-60 960,30 C1120,75 1280,75 1440,30 L1440,120 L0,120 Z" fill="#ffffff" />
        </svg>
      </div>

      {/* Vision, Mission, Values */}
      <Section backgroundColor="white">
        <Grid columns={{ desktop: 3, tablet: 1, mobile: 1 }} gap="lg">
          {/* VISION */}
          <div style={{ padding: '1rem 2rem', textAlign: 'center' }}>
            <div style={{ color: '#75c037', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 900, marginBottom: '1rem', fontFamily: 'var(--font-primary)', color: '#000' }}>OUR VISION</h3>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.7, color: '#444' }}>
              To achieve good health and build human resource capacity of many, and to become a center of excellence in the delivery of innovative, evidence-based, context-specific programs.
            </p>
          </div>

          {/* MISSION */}
          <div style={{ padding: '1rem 2rem', textAlign: 'center' }}>
            <div style={{ color: '#75c037', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.992 4.992 0 008 20c.53 0 1.04-.08 1.52-.22L14.1 24l1.1-1.1-3.64-3.64C16.15 17.5 19 13.9 19 9c0-1.87-.5-3.62-1.36-5.14z" />
              </svg>
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 900, marginBottom: '1rem', fontFamily: 'var(--font-primary)', color: '#000' }}>OUR MISSION</h3>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.7, color: '#444' }}>
              simHealth Africa is a knowledge-based organization with the mission to improve health and wellbeing, build human resource capacity, and deliver innovative programs.
            </p>
          </div>

          {/* VALUES */}
          <div style={{ padding: '1rem 2rem', textAlign: 'center' }}>
            <div style={{ color: '#75c037', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
              </svg>
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 900, marginBottom: '1rem', fontFamily: 'var(--font-primary)', color: '#000' }}>OUR VALUES</h3>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.7, color: '#444' }}>
              Our values are predicated on collaborative efforts and contributions with uncompromising integrity in the discharge of our duty with a code of conduct laced with honesty and transparency. In addition, pristine accountability and probity driven by the responsibility for making good use of any investment capital we receive and for communicating and disseminating valuable health information are some of our core mandates.
            </p>
          </div>
        </Grid>
      </Section>

      {/* Aims and Objectives */}
      <Section backgroundColor="white" style={{ paddingTop: '1rem' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 900, textAlign: 'center', marginBottom: '3rem', fontFamily: 'var(--font-primary)', color: '#000' }}>AIMS AND OBJECTIVES</h2>
        <div style={{ backgroundColor: '#f5c842', padding: '3rem 2rem', borderRadius: '24px', position: 'relative' }}>

          <Grid columns={{ desktop: 2, tablet: 1, mobile: 1 }} gap="xl" style={{ alignItems: 'center', position: 'relative', zIndex: 1 }}>
            <div style={{ backgroundColor: 'white', padding: '2.5rem', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                {[
                  "Health system strengthening and improved healthcare delivery",
                  "Research, documentation and dissemination",
                  "Innovation and social entrepreneurship",
                  "Capacity building, training and mentorship",
                  "Policy, advocacy and collaboration",
                  "Monitoring and evaluation of projects and programs",
                  "Provision of health intervention programs, especially to rural and underserved populations"
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="#75c037" style={{ flexShrink: 0, marginTop: '2px' }}>
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                    </svg>
                    <span style={{ fontSize: '1.05rem', lineHeight: 1.5, color: '#444' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div style={{ position: 'relative', height: '450px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                <Image src="https://placehold.co/800x600/eeeeee/999999?text=Training+Session" alt="Training Session" fill style={{ objectFit: 'cover' }} />
              </div>
            </div>
          </Grid>
        </div>
      </Section>

      {/* Organization Strategy Detailed */}
      <Section backgroundColor="gray" style={{ padding: '5rem 0' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 1rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 900, textAlign: 'center', marginBottom: '0.8rem', fontFamily: 'var(--font-primary)', color: '#000' }}>ORGANIZATION STRATEGY</h2>
          <p style={{ textAlign: 'center', fontSize: '1.05rem', color: '#333', marginBottom: '3rem', fontWeight: 500 }}>The Organization will pursue her aims and objectives by:</p>

          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {[
              "Serving as an independent research, documentation, dissemination, policy and advocacy center to support a wide range of programs in healthcare delivery",
              "Partnering with researchers and research institutions globally, to conduct large scale studies and support data management and implementation locally",
              "Conducting systematic reviews, assessments, operational research, data management, documentation and innovations in health and wellbeing",
              "Encouraging the adoption of emerging technologies and innovative methods for improved health and well-being",
              "Strengthening partnerships/collaborations and information sharing on social problems with impact on health and healthy living among government institutions, health workers in public and private sectors, communities and other stakeholders",
              "Supporting health systems/community system strengthening through the provision of institutional and human resource capacity building, research, disease surveillance, monitoring and evaluation, data management and service delivery",
              "Sponsoring health services and community enlightenment programs for health promotion, disease management and control among key populations",
              "Supporting campaigns and advocacy for improved access to health and other social services, in particular, promote access to essential medicines and appropriate health technologies in resource limited settings; rational and cost effective use of medicines and other appropriate health technologies; medicine quality, safety and efficacy and pharmaceutical sector management, systems, and policy for national development;",
              "Facilitating the participation of students and young professionals in activities of the organization and partner organizations."
            ].map((item, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#75c037" style={{ flexShrink: 0, marginTop: '4px' }}>
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                </svg>
                <span style={{ fontSize: '1rem', lineHeight: 1.6, color: '#444' }}>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </>
  )
}
