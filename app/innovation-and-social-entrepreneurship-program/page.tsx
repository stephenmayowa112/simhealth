import React from 'react';
import { Section, ProgramHero, ImpactMetrics, RelatedProjects } from '@/components';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Innovation and Social Entrepreneurship Program | SimHealth Africa',
  description: 'Fostering innovation and social entrepreneurship in healthcare across Africa.',
};

export default function InnovationProgramPage() {
  const metrics = [
    {
      value: '30+',
      label: 'Startups Supported',
      description: 'Health innovation ventures',
    },
    {
      value: '50+',
      label: 'Entrepreneurs Trained',
      description: 'In social entrepreneurship',
    },
    {
      value: '10+',
      label: 'Innovations Scaled',
      description: 'Across multiple countries',
    },
  ];

  const relatedProjects = [
    {
      title: 'Health Innovation Hub',
      description: 'Supporting health tech startups and innovators across Africa.',
      link: '/our-projects',
    },
    {
      title: 'Social Enterprise Incubator',
      description: 'Nurturing social enterprises focused on health solutions.',
      link: '/our-projects',
    },
    {
      title: 'Innovation Challenge',
      description: 'Annual competition for innovative health solutions.',
      link: '/our-projects',
    },
  ];

  return (
    <main>
      <ProgramHero
        title="Innovation and Social Entrepreneurship Program"
        imageUrl="/images/innovation-program-hero.jpg"
        imageAlt="Innovation and Social Entrepreneurship Program"
      />

      <Section backgroundColor="white">
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ 
            fontSize: 'var(--font-size-desktop-h2)', 
            fontWeight: 'var(--font-weight-semibold)',
            color: 'var(--color-neutral-gray900)',
            marginBottom: 'var(--spacing-lg)',
          }}>
            About the Program
          </h2>
          <div style={{ 
            fontSize: 'var(--font-size-desktop-body)', 
            lineHeight: 'var(--line-height-desktop-body)',
            color: 'var(--color-neutral-gray700)',
          }}>
            <p>
              The Innovation and Social Entrepreneurship Program at SimHealth Africa is designed to foster a culture 
              of innovation and entrepreneurship in the health sector across Africa. We support innovators, entrepreneurs, 
              and social enterprises working to develop and scale sustainable solutions to health challenges.
            </p>
            <p>
              Through mentorship, funding, and technical support, we help transform innovative ideas into viable 
              businesses and scalable solutions. Our program focuses on creating an enabling environment for health 
              innovation while ensuring that solutions are contextually appropriate and sustainable.
            </p>
            <h3 style={{ 
              fontSize: 'var(--font-size-desktop-h3)', 
              fontWeight: 'var(--font-weight-semibold)',
              color: 'var(--color-neutral-gray900)',
              marginTop: 'var(--spacing-xl)',
              marginBottom: 'var(--spacing-md)',
            }}>
              Program Components
            </h3>
            <ul style={{ paddingLeft: 'var(--spacing-lg)' }}>
              <li>Innovation Incubation and Acceleration</li>
              <li>Social Entrepreneurship Training</li>
              <li>Mentorship and Coaching</li>
              <li>Access to Funding and Investment</li>
              <li>Market Linkages and Partnerships</li>
              <li>Technology and Infrastructure Support</li>
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
    </main>
  );
}
