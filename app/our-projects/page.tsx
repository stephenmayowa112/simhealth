import React from 'react'
import { Section, Grid } from '@/components'
import Image from 'next/image'

export const metadata = {
  title: 'Our Projects - SimHealth Africa',
  description: 'Explore our past projects and initiatives in health systems strengthening, malaria prevention, and community health programs across Africa.',
}

export default function OurProjectsPage() {
  const projects = [
    {
      title: 'MAPPING OF THE DISTRIBUTION NETWORK FOR CO-PAID ACT IN NIGERIA',
      imageUrl: 'https://placehold.co/800x600/eeeeee/999999?text=Mapping+Project',
      imageAlt: 'Mapping project field work',
      greenFlair: false,
    },
    {
      title: 'ASSESSMENT OF LIVELIHOOD OPTIONS IN GULLY/EROSION SITES IN EDO STATE, NIGERIA (NEWMAP PROJECT)',
      imageUrl: 'https://placehold.co/800x600/eeeeee/999999?text=NEWMAP+Project',
      imageAlt: 'NEWMAP project assessment',
      greenFlair: false,
    },
    {
      title: 'MONITORING AND EVALUATION OF DRGS FUNDED MDGS PROJECTS AND PROGRAMS IN NIGERIA',
      imageUrl: 'https://placehold.co/800x600/eeeeee/999999?text=MDG+Project',
      imageAlt: 'MDG project monitoring',
      greenFlair: true, /* Matching the design with a green left-side decorative element */
    },
    {
      title: 'MALARIA IN PREGNANCY AWARENESS CAMPAIGN - EMPOWERING HEALTHCARE PROFESSIONALS AND THE ENTIRE COMMUNITY ON THE PREVENTIVE MEASURES FOR MALARIA IN PREGNANCY IN EDO STATE, NIGERIA',
      imageUrl: 'https://placehold.co/800x600/eeeeee/999999?text=Malaria+Campaign',
      imageAlt: 'Malaria in pregnancy awareness campaign',
      greenFlair: true, /* Matching the design with a green left-side decorative element */
    },
    {
      title: 'FIELD STUDIES; OUR FIELD STAFF CONDUCTING INTERVIEWS',
      imageUrl: 'https://placehold.co/800x600/eeeeee/999999?text=Field+Studies+1',
      imageAlt: 'Field staff conducting interviews',
      greenFlair: false,
    },
    {
      title: 'FIELD STUDIES; OUR FIELD STAFF CONDUCTING INTERVIEWS',
      imageUrl: 'https://placehold.co/800x600/eeeeee/999999?text=Field+Studies+2',
      imageAlt: 'Field staff conducting interviews',
      greenFlair: false,
    },
  ]

  return (
    <>
      {/* Header Section */}
      <div style={{ backgroundColor: '#f2c94c', padding: '10rem 2rem 6rem', textAlign: 'center', color: 'white', position: 'relative', overflow: 'hidden' }}>
        <h1 style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: '1.5rem', fontFamily: 'var(--font-primary)' }}>OUR PROJECTS</h1>
        <p style={{ fontSize: '1.2rem', fontFamily: 'var(--font-secondary)' }}>.....Improving Health and Wellbeing</p>

        {/* Decorative Wave matches the image context slightly to blend with the white section below */}
        <svg style={{ position: 'absolute', bottom: -5, left: 0, width: '100%', height: 'auto', display: 'block' }} viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,60 C320,-60 640,-60 960,30 C1120,75 1280,75 1440,30 L1440,120 L0,120 Z" fill="#ffffff" />
        </svg>
      </div>

      {/* Projects Section */}
      <Section backgroundColor="white" style={{ padding: '6rem 1rem 8rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '4rem', fontFamily: 'var(--font-primary)', textAlign: 'center', color: '#000' }}>
            OUR PAST PROJECTS
          </h2>

          <Grid columns={{ desktop: 2, tablet: 1, mobile: 1 }} gap="xl">
            {projects.map((project, index) => (
              <div key={index} style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                {project.greenFlair ? (
                  <div style={{ position: 'relative', display: 'flex', height: '350px', backgroundColor: '#75c037' }}>
                    {/* The image container sits inside the green div, leaving a left border visible */}
                    <div style={{ position: 'relative', width: '100%', marginLeft: '1rem', height: '100%' }}>
                      <Image src={project.imageUrl} alt={project.imageAlt} fill style={{ objectFit: 'cover' }} />
                    </div>
                  </div>
                ) : (
                  <div style={{ position: 'relative', width: '100%', height: '350px' }}>
                    <Image src={project.imageUrl} alt={project.imageAlt} fill style={{ objectFit: 'cover' }} />
                  </div>
                )}

                <div style={{ padding: '1.5rem 0', textAlign: 'center' }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 900, fontFamily: 'var(--font-primary)', color: '#000', margin: 0, lineHeight: 1.4 }}>
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </Grid>
        </div>
      </Section>
    </>
  )
}
