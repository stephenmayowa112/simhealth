import React from 'react';
import { Section } from '@/components/Section';
import { Card } from '@/components/Card';
import { Button } from '@/components/Button';
import { Grid } from '@/components/Grid';
import styles from './volunteer.module.css';

export const metadata = {
  title: 'Volunteer - SimHealth Africa',
  description: 'Join SimHealth Africa as a volunteer and make a difference in healthcare delivery across Africa. Explore volunteer opportunities and get involved.',
};

export default function VolunteerPage() {
  const volunteerOpportunities = [
    {
      title: 'Healthcare Program Volunteer',
      description: 'Support our healthcare delivery programs by assisting with community outreach, health education, and program coordination.',
    },
    {
      title: 'Innovation & Entrepreneurship Mentor',
      description: 'Share your expertise with aspiring health entrepreneurs and innovators through mentorship and guidance.',
    },
    {
      title: 'Research & Documentation',
      description: 'Help document our impact, conduct research, and contribute to knowledge sharing in healthcare delivery.',
    },
    {
      title: 'Training & Capacity Building',
      description: 'Assist in developing and delivering training programs for healthcare professionals and community health workers.',
    },
    {
      title: 'Communications & Advocacy',
      description: 'Support our communications efforts, social media presence, and advocacy campaigns for improved healthcare.',
    },
    {
      title: 'Administrative Support',
      description: 'Provide administrative assistance to help our programs run smoothly and efficiently.',
    },
  ];

  const benefits = [
    {
      title: 'Make an Impact',
      description: 'Contribute to improving healthcare delivery across Africa and make a real difference in communities.',
    },
    {
      title: 'Gain Experience',
      description: 'Develop valuable skills and gain hands-on experience in healthcare, development, and social impact work.',
    },
    {
      title: 'Build Your Network',
      description: 'Connect with like-minded professionals, healthcare experts, and changemakers across Africa.',
    },
    {
      title: 'Professional Development',
      description: 'Access training opportunities and professional development resources to enhance your career.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Section backgroundColor="green" className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Volunteer With Us</h1>
          <p className={styles.heroSubtitle}>
            Join our mission to improve healthcare delivery across Africa. Your time, skills, and passion can make a lasting impact on communities in need.
          </p>
          <div className={styles.heroButtons}>
            <Button href="#opportunities" variant="primary" size="large">
              View Opportunities
            </Button>
            <Button href="/contact-us" variant="secondary" size="large">
              Contact Us
            </Button>
          </div>
        </div>
      </Section>

      {/* Why Volunteer Section */}
      <Section backgroundColor="white">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Why Volunteer With SimHealth Africa?</h2>
          <p className={styles.sectionDescription}>
            Volunteering with SimHealth Africa offers you the opportunity to be part of a dynamic team working to transform healthcare in Africa. Here's what you can expect:
          </p>
        </div>
        <Grid columns={{ mobile: 1, tablet: 2, desktop: 2 }}>
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              title={benefit.title}
              description={benefit.description}
              variant="default"
            />
          ))}
        </Grid>
      </Section>

      {/* Volunteer Opportunities Section */}
      <Section backgroundColor="gray" id="opportunities">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Volunteer Opportunities</h2>
          <p className={styles.sectionDescription}>
            Explore our current volunteer opportunities and find the role that matches your skills and interests.
          </p>
        </div>
        <Grid columns={{ mobile: 1, tablet: 2, desktop: 3 }}>
          {volunteerOpportunities.map((opportunity, index) => (
            <Card
              key={index}
              title={opportunity.title}
              description={opportunity.description}
              variant="default"
            />
          ))}
        </Grid>
      </Section>

      {/* How to Apply Section */}
      <Section backgroundColor="white">
        <div className={styles.applySection}>
          <h2 className={styles.sectionTitle}>How to Apply</h2>
          <div className={styles.steps}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>1</div>
              <h3 className={styles.stepTitle}>Review Opportunities</h3>
              <p className={styles.stepDescription}>
                Browse through our volunteer opportunities and identify roles that match your skills and interests.
              </p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>2</div>
              <h3 className={styles.stepTitle}>Get In Touch</h3>
              <p className={styles.stepDescription}>
                Contact us through our contact form or email to express your interest and share your background.
              </p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>3</div>
              <h3 className={styles.stepTitle}>Start Making Impact</h3>
              <p className={styles.stepDescription}>
                Once approved, you'll be onboarded and can begin contributing to our mission of improving healthcare in Africa.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Call to Action Section */}
      <Section backgroundColor="green">
        <div className={styles.ctaSection}>
          <h2 className={styles.ctaTitle}>Ready to Make a Difference?</h2>
          <p className={styles.ctaDescription}>
            Join our team of dedicated volunteers and help us transform healthcare delivery across Africa.
          </p>
          <div className={styles.ctaButtons}>
            <Button href="/contact-us" variant="primary" size="large">
              Apply Now
            </Button>
            <Button href="/about-us" variant="secondary" size="large">
              Learn More About Us
            </Button>
          </div>
        </div>
      </Section>

      {/* Additional Information */}
      <Section backgroundColor="white">
        <div className={styles.additionalInfo}>
          <h2 className={styles.sectionTitle}>Volunteer Requirements</h2>
          <div className={styles.requirements}>
            <div className={styles.requirement}>
              <h3 className={styles.requirementTitle}>Commitment</h3>
              <p className={styles.requirementText}>
                We ask for a minimum commitment of 3-6 months to ensure continuity and meaningful impact in our programs.
              </p>
            </div>
            <div className={styles.requirement}>
              <h3 className={styles.requirementTitle}>Skills & Qualifications</h3>
              <p className={styles.requirementText}>
                Requirements vary by role. We welcome volunteers from diverse backgrounds including healthcare, education, business, communications, and more.
              </p>
            </div>
            <div className={styles.requirement}>
              <h3 className={styles.requirementTitle}>Location</h3>
              <p className={styles.requirementText}>
                Both remote and on-site volunteer opportunities are available. Remote volunteers can contribute from anywhere in the world.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
