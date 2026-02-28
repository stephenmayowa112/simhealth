import React from 'react';
import { Section } from '@/components/Section';
import { Card } from '@/components/Card';
import { Grid } from '@/components/Grid';

export const metadata = {
  title: 'Our Projects - SimHealth Africa',
  description: 'Explore our past projects and initiatives in health systems strengthening, malaria prevention, and community health programs across Africa.',
};

export default function OurProjectsPage() {
  const projects = [
    {
      title: 'Mapping of the distribution network for co-paid ACT in Nigeria',
      description: 'Comprehensive mapping study of the distribution network for co-paid Artemisinin-based Combination Therapy (ACT) across Nigeria.',
      imageUrl: '/images/mapping-project.jpg',
      imageAlt: 'Mapping project field work',
    },
    {
      title: 'Assessment of livelihood options in gully/erosion sites in Edo State, Nigeria (NEWMAP project)',
      description: 'Evaluation of livelihood opportunities for communities affected by erosion in Edo State under the Nigeria Erosion and Watershed Management Project.',
      imageUrl: '/images/newmap-project.jpg',
      imageAlt: 'NEWMAP project assessment',
    },
    {
      title: 'Monitoring and evaluation of DRGs Funded MDGs Projects and Programs in Nigeria',
      description: 'Comprehensive monitoring and evaluation of Debt Relief Gains (DRG) funded Millennium Development Goals projects and programs across Nigeria.',
      imageUrl: '/images/mdg-project.jpg',
      imageAlt: 'MDG project monitoring',
    },
    {
      title: 'Malaria in pregnancy awareness campaign',
      description: 'Empowering healthcare professionals and the entire community on the preventive measures for malaria in pregnancy in Edo State, Nigeria.',
      imageUrl: '/images/malaria-pregnancy.jpg',
      imageAlt: 'Malaria in pregnancy awareness campaign',
    },
    {
      title: 'Field studies and community interviews',
      description: 'Our field staff conducting comprehensive interviews and surveys to gather data for health systems research and program evaluation.',
      imageUrl: '/images/field-studies.jpg',
      imageAlt: 'Field staff conducting interviews',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Section backgroundColor="green">
        <div style={{ textAlign: 'center', padding: '80px 0' }}>
          <h1 style={{ fontSize: '48px', marginBottom: '16px', textTransform: 'uppercase' }}>
            Our Projects
          </h1>
          <p style={{ fontSize: '20px', color: '#4a4a4a' }}>
            ……Improving Health and Wellbeing
          </p>
        </div>
      </Section>

      {/* Projects Section */}
      <Section backgroundColor="white">
        <div style={{ padding: '64px 0' }}>
          <h2 style={{ 
            fontSize: '35px', 
            marginBottom: '48px', 
            textTransform: 'uppercase',
            textAlign: 'center',
            fontWeight: 600,
          }}>
            Our Past Projects
          </h2>
          
          <Grid columns={{ desktop: 3, tablet: 2, mobile: 1 }} gap="xl">
            {projects.map((project, index) => (
              <Card
                key={index}
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                imageAlt={project.imageAlt}
                variant="default"
              />
            ))}
          </Grid>
        </div>
      </Section>

      {/* Additional Info Section */}
      <Section backgroundColor="gray">
        <div style={{ padding: '64px 0', textAlign: 'center' }}>
          <h3 style={{ fontSize: '28px', marginBottom: '24px', fontWeight: 600 }}>
            Making a Difference Through Research and Implementation
          </h3>
          <p style={{ fontSize: '18px', lineHeight: '28px', maxWidth: '800px', margin: '0 auto' }}>
            Our projects span across health systems strengthening, malaria prevention, community health programs, and livelihood assessments. We work closely with government agencies, international donors, and local communities to deliver evidence-based solutions that improve health outcomes across Africa.
          </p>
        </div>
      </Section>
    </>
  );
}
