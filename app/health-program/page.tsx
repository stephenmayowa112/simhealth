import React from 'react'
import {
  Section,
  ProgramHero,
  ImpactMetrics,
  RelatedProjects,
} from '@/components'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Health Program | SimHealth Africa',
  description:
    'SimHealth Africa Health Program - Improving health delivery across Africa through innovative solutions and partnerships.',
}

export default function HealthProgramPage() {
  const metrics = [
    {
      value: '50+',
      label: 'Health Facilities',
      description: 'Supported across Africa',
    },
    {
      value: '100K+',
      label: 'Lives Impacted',
      description: 'Through our programs',
    },
    {
      value: '15+',
      label: 'Countries',
      description: 'Where we operate',
    },
  ]

  const relatedProjects = [
    {
      title: 'Community Health Initiative',
      description:
        'Strengthening community health systems through training and capacity building.',
      link: '/our-projects',
    },
    {
      title: 'Healthcare Technology',
      description:
        'Implementing digital health solutions for improved patient care.',
      link: '/our-projects',
    },
    {
      title: 'Maternal Health Program',
      description:
        'Reducing maternal mortality through improved healthcare access.',
      link: '/our-projects',
    },
  ]

  return (
    <>
      <ProgramHero
        title="Health Program"
        imageUrl="/images/health-program-hero.jpg"
        imageAlt="Health Program"
      />

      <Section backgroundColor="white">
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'var(--font-size-desktop-h2)',
              fontWeight: 'var(--font-weight-semibold)',
              color: 'var(--color-neutral-gray900)',
              marginBottom: 'var(--spacing-lg)',
            }}
          >
            About the Health Program
          </h2>
          <div
            style={{
              fontSize: 'var(--font-size-desktop-body)',
              lineHeight: 'var(--line-height-desktop-body)',
              color: 'var(--color-neutral-gray700)',
            }}
          >
            <p>
              The SimHealth Africa Health Program is dedicated to improving
              health delivery systems across the African continent. We work with
              governments, healthcare providers, and communities to strengthen
              health infrastructure, improve service delivery, and enhance
              health outcomes.
            </p>
            <p>
              Our approach combines evidence-based interventions with innovative
              solutions to address the unique challenges facing African health
              systems. We focus on building sustainable capacity, improving
              quality of care, and ensuring equitable access to essential health
              services.
            </p>
            <h3
              style={{
                fontSize: 'var(--font-size-desktop-h3)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--color-neutral-gray900)',
                marginTop: 'var(--spacing-xl)',
                marginBottom: 'var(--spacing-md)',
              }}
            >
              Key Focus Areas
            </h3>
            <ul style={{ paddingLeft: 'var(--spacing-lg)' }}>
              <li>Health Systems Strengthening</li>
              <li>Quality Improvement in Healthcare Delivery</li>
              <li>Capacity Building for Health Workers</li>
              <li>Community Health Programs</li>
              <li>Health Technology and Innovation</li>
              <li>Maternal and Child Health</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section backgroundColor="gray">
        <ImpactMetrics metrics={metrics} title="Our Impact" />
      </Section>

      <Section backgroundColor="white">
        <RelatedProjects projects={relatedProjects} title="Related Projects" />
      </Section>
    </>
  )
}
