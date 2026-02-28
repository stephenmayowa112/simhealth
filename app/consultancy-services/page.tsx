import React from 'react';
import { Section } from '@/components/Section';
import { Card } from '@/components/Card';
import { Grid } from '@/components/Grid';
import { CallToAction } from '@/components/CallToAction';

export const metadata = {
  title: 'Consultancy Services - SimHealth Africa',
  description: 'SimHealth Africa offers consultancy services in health and non-health sectors to ministries, government agencies, donors, implementing partners, and the private sector.',
};

export default function ConsultancyServicesPage() {
  const services = [
    'System reviews and assessment',
    'System design and strategy',
    'Strategic stakeholders engagement, team building, collaboration and advocacy',
    'Capacity building, curriculum design, training, peer support, coaching and mentorship',
    'Operational/implementation research - design, execution, data management, reporting and dissemination',
    'Health systems development/strengthening',
    'Health supply chain management',
    'Pharmaceutical systems, medicine management, safety and clinical use of drugs',
    'HIV/AIDs, Tuberculosis and Malaria health programs. We have a robust malaria in pregnancy and children intervention programs',
    'Malaria studies, malaria in pregnancy and children',
    'Monitoring and evaluation',
    'Livelihood and related studies, etc.',
  ];

  return (
    <>
      {/* Hero Section */}
      <Section backgroundColor="green">
        <div style={{ textAlign: 'center', padding: '80px 0' }}>
          <h1 style={{ fontSize: '48px', marginBottom: '16px', textTransform: 'uppercase' }}>
            Consultancy Services
          </h1>
          <p style={{ fontSize: '20px', color: '#4a4a4a' }}>
            ……Improving Health and Wellbeing
          </p>
        </div>
      </Section>

      {/* Introduction Section */}
      <Section backgroundColor="white">
        <div style={{ padding: '64px 0' }}>
          <p style={{ fontSize: '18px', lineHeight: '28px', marginBottom: '24px' }}>
            simHealth Africa offers consultancy services in health and non-health sectors to ministries/government agencies, donors, implementing partners, and the private sector.
          </p>
          <p style={{ fontSize: '18px', lineHeight: '28px', marginBottom: '24px' }}>
            We have both the necessary in-house capacity and a pool of national and international consultants that we can deploy within a short time frame for project implementation, capacity building, qualitative and quantitative surveys, etc. We are able to put together and deploy a strong, versatile, multi-disciplinary team of consultants, interview experts and data analysts who are able to successfully carry out project tasks.
          </p>
          <p style={{ fontSize: '18px', lineHeight: '28px', fontWeight: 600 }}>
            Some of the areas where we offer consultancy services are:
          </p>
        </div>
      </Section>

      {/* Services Grid Section */}
      <Section backgroundColor="gray">
        <div style={{ padding: '64px 0' }}>
          <Grid columns={{ desktop: 2, tablet: 2, mobile: 1 }} gap="md">
            {services.map((service, index) => (
              <Card key={index} variant="compact">
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <span style={{ color: '#75c037', fontSize: '20px', flexShrink: 0 }}>✓</span>
                  <span style={{ fontSize: '16px', lineHeight: '24px' }}>{service}</span>
                </div>
              </Card>
            ))}
          </Grid>
        </div>
      </Section>

      {/* Call to Action Section */}
      <CallToAction
        title="Need Consultancy Services?"
        description="Get in touch with us to discuss how we can help with your project needs."
        buttonText="Contact Us"
        buttonLink="/contact-us"
      />
    </>
  );
}
