import React from 'react';
import { Section } from '@/components/Section';
import { ContactForm } from '@/components/ContactForm';
import { ContactInfo } from '@/components/ContactInfo';
import { colors } from '@/lib/design-tokens';
import styles from './contact.module.css';

export const metadata = {
  title: 'Contact Us - SimHealth Africa',
  description: 'Get in touch with SimHealth Africa. Contact us for inquiries about our programs, services, and partnership opportunities.',
};

// SVG Icons
const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27 11.36 11.36 0 004.48.9 1 1 0 011 1v3.5a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.9 4.48 1 1 0 01-.27 1.11l-2.2 2.2z"/>
  </svg>
);

const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
);

const LocationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/>
  </svg>
);

export default function ContactPage() {
  const contactItems = [
    {
      icon: <PhoneIcon />,
      title: 'Phone',
      details: ['+234 807 635 5533', '0802 359 7448'],
      links: ['tel:+2348076355533', 'tel:08023597448'],
    },
    {
      icon: <EmailIcon />,
      title: 'Email',
      details: ['info@simhealthafrica.org'],
      links: ['mailto:info@simhealthafrica.org'],
    },
    {
      icon: <LocationIcon />,
      title: 'Address',
      details: [
        'SimHealth Africa',
        'Lagos, Nigeria',
      ],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Section backgroundColor="green" className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Contact Us</h1>
          <p className={styles.heroSubtitle}>
            We'd love to hear from you. Get in touch with us for inquiries about our programs, services, and partnership opportunities.
          </p>
        </div>
      </Section>

      {/* Contact Information Cards */}
      <Section backgroundColor="white">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Get In Touch</h2>
          <p className={styles.sectionDescription}>
            Reach out to us through any of the following channels. We're here to help and answer any questions you may have.
          </p>
        </div>
        <ContactInfo items={contactItems} />
      </Section>

      {/* Contact Form Section */}
      <Section backgroundColor="gray">
        <div className={styles.formSection}>
          <div className={styles.formHeader}>
            <h2 className={styles.sectionTitle}>Send Us a Message</h2>
            <p className={styles.sectionDescription}>
              Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </div>
          <div className={styles.formWrapper}>
            <ContactForm />
          </div>
        </div>
      </Section>

      {/* Additional Information */}
      <Section backgroundColor="white">
        <div className={styles.additionalInfo}>
          <h2 className={styles.sectionTitle}>About SimHealth Africa</h2>
          <p className={styles.infoText}>
            SimHealth Africa is the Africa Society for Improved Health Delivery. We are dedicated to improving healthcare delivery across Africa through innovative programs, capacity building, and strategic partnerships.
          </p>
          <p className={styles.infoText}>
            Whether you're interested in our programs, seeking consultancy services, or exploring partnership opportunities, we're here to collaborate with you in advancing healthcare in Africa.
          </p>
        </div>
      </Section>
    </>
  );
}
