import React from 'react';
import { Section, ProgramHero, ImpactMetrics, RelatedProjects } from '@/components';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SimHealth Institute | SimHealth Africa',
  description: 'SimHealth Institute - Research, documentation, and dissemination for improved health delivery in Africa.',
};

export default function SimHealthInstitutePage() {
  const metrics = [
    {
      value: '100+',
      label: 'Research Publications',
      description: 'Peer-reviewed articles',
    },
    {
      value: '50+',
      label: 'Training Programs',
      description: 'Conducted annually',
    },
    {
      value: '20+',
      label: 'Research Projects',
      description: 'Currently active',
    },
  ];

  const relatedProjects = [
    {
      title: 'Health Systems Research',
      description: 'Conducting rigorous research on health systems strengthening.',
      link: '/our-projects',
    },
    {
      title: 'Capacity Building',
      description: 'Training programs for health researchers and practitioners.',
      link: '/our-projects',
    },
    {
      title: 'Knowledge Management',
      description: 'Building a repository of health data and best practices.',
      link: '/our-projects',
    },
  ];

  return (
    <>
      <ProgramHero
        title="SimHealth Institute"
        imageUrl="/images/simhealth-institute-hero.jpg"
        imageAlt="SimHealth Institute"
      />

      <Section backgroundColor="white">
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ 
            fontSize: 'var(--font-size-desktop-h2)', 
            fontWeight: 'var(--font-weight-semibold)',
            color: 'var(--color-neutral-gray900)',
            marginBottom: 'var(--spacing-lg)',
          }}>
            About SimHealth Institute
          </h2>
          <div style={{ 
            fontSize: 'var(--font-size-desktop-body)', 
            lineHeight: 'var(--line-height-desktop-body)',
            color: 'var(--color-neutral-gray700)',
          }}>
            <p>
              SimHealth Institute is positioned to serve as a repository of data and publications on health and health systems, 
              applying rigorous scientific methods for its clinical, epidemiological, pharmaceutical, operational, 
              and implementation research works.
            </p>
            <p>
              The Institute conducts cutting-edge research, provides training and capacity building, and facilitates 
              knowledge sharing to improve health delivery across Africa. We work with academic institutions, 
              research organizations, and health systems to generate evidence that informs policy and practice.
            </p>
            <h3 style={{ 
              fontSize: 'var(--font-size-desktop-h3)', 
              fontWeight: 'var(--font-weight-semibold)',
              color: 'var(--color-neutral-gray900)',
              marginTop: 'var(--spacing-xl)',
              marginBottom: 'var(--spacing-md)',
            }}>
            Research, Documentation and Dissemination
            </h3>
            <p>
              SimHealth Institute is positioned to serve as repository of data and publications on health and health systems, 
              applying rigorous scientific methods for its clinical, epidemiological, pharmaceutical, operational and 
              implementation research works.
            </p>
            <h3 style={{ 
              fontSize: 'var(--font-size-desktop-h3)', 
              fontWeight: 'var(--font-weight-semibold)',
              color: 'var(--color-neutral-gray900)',
              marginTop: 'var(--spacing-xl)',
              marginBottom: 'var(--spacing-md)',
            }}>
              Core Activities
            </h3>
            <ul style={{ paddingLeft: 'var(--spacing-lg)' }}>
              <li>Health Systems Research</li>
              <li>Clinical and Epidemiological Studies</li>
              <li>Implementation Science</li>
              <li>Training and Capacity Building</li>
              <li>Knowledge Management and Dissemination</li>
              <li>Policy Analysis and Advocacy</li>
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
  );
}
