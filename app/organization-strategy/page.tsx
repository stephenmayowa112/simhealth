import React from 'react'
import Image from 'next/image'
import { Section } from '@/components/Section'
import { Card } from '@/components/Card'
import { Grid } from '@/components/Grid'

export const metadata = {
  title: 'Organization Strategy - SimHealth Africa',
  description:
    "Learn about SimHealth Africa's vision, mission, values, and strategic objectives for improving health and wellbeing across Africa.",
}

export default function OrganizationStrategyPage() {
  const objectives = [
    'Health system strengthening and improved healthcare delivery',
    'Research, documentation and dissemination',
    'Innovation and social entrepreneurship',
    'Capacity building, training and mentorship',
    'Policy, advocacy and collaboration',
    'Monitoring and evaluation of projects and programs',
    'Provision of health intervention programs, especially to rural and underserved populations',
  ]

  return (
    <>
      {/* Hero Section */}
      <Section backgroundColor="green">
        <div style={{ textAlign: 'center', padding: '80px 0' }}>
          <h1
            style={{
              fontSize: '48px',
              marginBottom: '16px',
              textTransform: 'uppercase',
            }}
          >
            Organization Strategy
          </h1>
          <p style={{ fontSize: '20px', color: '#4a4a4a' }}>
            ……Improving Health and Wellbeing
          </p>
        </div>
      </Section>

      {/* Vision, Mission, Values Section */}
      <Section backgroundColor="white">
        <div style={{ padding: '64px 0' }}>
          <Grid columns={{ desktop: 3, tablet: 3, mobile: 1 }} gap="xl">
            <Card variant="default">
              <div style={{ textAlign: 'center', padding: '24px 0' }}>
                <div
                  style={{
                    fontSize: '48px',
                    color: '#75c037',
                    marginBottom: '24px',
                  }}
                >
                  ❤️
                </div>
                <h3
                  style={{
                    fontSize: '24px',
                    fontWeight: 700,
                    marginBottom: '16px',
                    textTransform: 'uppercase',
                  }}
                >
                  Our Vision
                </h3>
                <p
                  style={{
                    fontSize: '16px',
                    lineHeight: '24px',
                    color: '#4a4a4a',
                  }}
                >
                  To achieve good health and build human resource capacity of
                  many, and to become a center of excellence in the delivery of
                  innovative, evidence-based, context-specific programs.
                </p>
              </div>
            </Card>

            <Card variant="default">
              <div style={{ textAlign: 'center', padding: '24px 0' }}>
                <div
                  style={{
                    fontSize: '48px',
                    color: '#75c037',
                    marginBottom: '24px',
                  }}
                >
                  🌿
                </div>
                <h3
                  style={{
                    fontSize: '24px',
                    fontWeight: 700,
                    marginBottom: '16px',
                    textTransform: 'uppercase',
                  }}
                >
                  Our Mission
                </h3>
                <p
                  style={{
                    fontSize: '16px',
                    lineHeight: '24px',
                    color: '#4a4a4a',
                  }}
                >
                  simHealth Africa is a knowledge-based organization with the
                  mission to improve health and wellbeing, build human resource
                  capacity, and deliver innovative programs.
                </p>
              </div>
            </Card>

            <Card variant="default">
              <div style={{ textAlign: 'center', padding: '24px 0' }}>
                <div
                  style={{
                    fontSize: '48px',
                    color: '#75c037',
                    marginBottom: '24px',
                  }}
                >
                  🛟
                </div>
                <h3
                  style={{
                    fontSize: '24px',
                    fontWeight: 700,
                    marginBottom: '16px',
                    textTransform: 'uppercase',
                  }}
                >
                  Our Values
                </h3>
                <p
                  style={{
                    fontSize: '16px',
                    lineHeight: '24px',
                    color: '#4a4a4a',
                  }}
                >
                  Our values are predicated on collaborative efforts and
                  contributions with uncompromising integrity in the discharge
                  of our duty with a code of conduct laced with honesty and
                  transparency. In addition, pristine accountability and probity
                  driven by the responsibility for making good use of any
                  investment capital we receive and for communicating and
                  disseminating valuable health information are some of our core
                  mandates.
                </p>
              </div>
            </Card>
          </Grid>
        </div>
      </Section>

      {/* Aims and Objectives Section */}
      <Section backgroundColor="gray">
        <div style={{ padding: '64px 0' }}>
          <h2
            style={{
              fontSize: '35px',
              marginBottom: '48px',
              textTransform: 'uppercase',
              textAlign: 'center',
              fontWeight: 600,
            }}
          >
            Aims and Objectives
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '48px',
              alignItems: 'center',
            }}
          >
            <div>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                }}
              >
                {objectives.map((objective, index) => (
                  <li
                    key={index}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px',
                      marginBottom: '16px',
                      fontSize: '16px',
                      lineHeight: '24px',
                    }}
                  >
                    <span
                      style={{
                        color: '#75c037',
                        fontSize: '20px',
                        flexShrink: 0,
                      }}
                    >
                      ✓
                    </span>
                    <span>{objective}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Image
                src="/images/drg-funded-project.jpg"
                alt="DRG funded project"
                width={500}
                height={375}
                style={{
                  width: '100%',
                  maxWidth: '500px',
                  height: 'auto',
                  borderRadius: '8px',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
                }}
                priority={false}
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Closing Statement Section */}
      <Section backgroundColor="white">
        <div style={{ padding: '64px 0', textAlign: 'center' }}>
          <h3
            style={{ fontSize: '28px', marginBottom: '24px', fontWeight: 600 }}
          >
            Committed to Excellence in Health Delivery
          </h3>
          <p
            style={{
              fontSize: '18px',
              lineHeight: '28px',
              maxWidth: '800px',
              margin: '0 auto',
            }}
          >
            Through our strategic approach and unwavering commitment to our
            values, SimHealth Africa continues to make significant contributions
            to health systems strengthening and improved health outcomes across
            the African continent.
          </p>
        </div>
      </Section>
    </>
  )
}
