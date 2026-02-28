import React from 'react';
import dynamic from 'next/dynamic';
import { Section } from '@/components/Section';
import { Button } from '@/components/Button';
import Image from 'next/image';
import styles from './about-us.module.css';

// Lazy load below-the-fold sections
const TeamSection = dynamic(() => import('./TeamSection'), {
  loading: () => <div style={{ minHeight: '400px' }} />,
});

const ValuesSection = dynamic(() => import('./ValuesSection'), {
  loading: () => <div style={{ minHeight: '400px' }} />,
});

export const metadata = {
  title: 'About Us - SimHealth Africa',
  description: 'Learn about SimHealth Africa, our mission, vision, and the team dedicated to improving health and wellbeing across Africa.',
};

export default function AboutUsPage() {
  return (
    <>
      {/* Organization Overview Section */}
      <Section backgroundColor="white">
        <div className={styles.overviewSection}>
          <div className={styles.overviewContent}>
            <h1 className={styles.pageTitle}>About Us</h1>
            <p className={styles.overviewText}>
              simHealth is non-profit/non-governmental organization registered with the Corporate Affairs Commission of Nigeria, 
              and managed by Board of Trustees (BOTs) who oversee all activities of the organization. In addition to the Board 
              of Trustees, the organization is supported by the management team of several national and international leading 
              experts, professionals and scientists.
            </p>
            <Button 
              variant="primary" 
              size="large"
              href="/organization-strategy"
            >
              Organization Strategy
            </Button>
          </div>
          <div className={styles.overviewImage}>
            <Image
              src="/images/about-overview.jpg"
              alt="SimHealth Africa team working together"
              width={600}
              height={400}
              className={styles.image}
            />
          </div>
        </div>
      </Section>

      {/* Vision and Mission Section */}
      <Section backgroundColor="gray">
        <div className={styles.visionMissionGrid}>
          <div className={styles.visionCard}>
            <div className={styles.iconWrapper}>
              <svg className={styles.icon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" fill="currentColor"/>
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Our Vision</h3>
            <p className={styles.cardDescription}>
              To achieve good health and build human resource capacity of many, and to become a center of excellence 
              in the delivery of innovative, evidence-based, context-specific programs.
            </p>
          </div>

          <div className={styles.missionCard}>
            <div className={styles.iconWrapper}>
              <svg className={styles.icon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V7.89l7-3.11v8.2z" fill="currentColor"/>
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Our Mission</h3>
            <p className={styles.cardDescription}>
              simHealth Africa is a knowledge-based organization with the mission to improve health and wellbeing, 
              build human resource capacity, and deliver innovative programs.
            </p>
          </div>
        </div>
      </Section>

      {/* Governance Section */}
      <Section backgroundColor="white">
        <div className={styles.governanceSection}>
          <div className={styles.iconWrapper}>
            <svg className={styles.icon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V11H5V6.3l7-3.11v8.8z" fill="currentColor"/>
            </svg>
          </div>
          <h3 className={styles.sectionTitle}>Governance and Legal Status</h3>
          <p className={styles.governanceText}>
            simHealth Africa is non-profit/non-governmental organization registered with the Corporate Affairs Commission 
            of Nigeria (CAC/IT/NO 36867), which is managed by Board of Trustees (BOTs) who oversee all activities of the 
            organization. In addition to the BOTs, the organization is supported by the management team of several national 
            and international leading experts, professionals and scientists.
          </p>
        </div>
      </Section>

      {/* Team Section */}
      <TeamSection />

      {/* Values Section */}
      <ValuesSection />
    </>
  );
}
