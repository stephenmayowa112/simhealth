import React from 'react'
import { Section } from '@/components/Section'
import Image from 'next/image'
import styles from './about-us.module.css'

// Team members data
const teamMembers = [
  {
    name: 'Dr. John Doe',
    title: 'Executive Director',
    bio: 'Leading expert in public health with over 20 years of experience in healthcare delivery across Africa.',
    image: '/images/team/member-1.jpg',
  },
  {
    name: 'Dr. Jane Smith',
    title: 'Program Director',
    bio: 'Specialist in health program management and community health initiatives.',
    image: '/images/team/member-2.jpg',
  },
  {
    name: 'Prof. Michael Johnson',
    title: 'Research Lead',
    bio: 'Renowned researcher in evidence-based health interventions and policy development.',
    image: '/images/team/member-3.jpg',
  },
]

export default function TeamSection() {
  return (
    <Section backgroundColor="gray">
      <h2 className={styles.sectionHeading}>Our Team</h2>
      <div className={styles.teamGrid}>
        {teamMembers.map((member, index) => (
          <div key={index} className={styles.teamCard}>
            <div className={styles.profileImageWrapper}>
              <Image
                src={member.image}
                alt={`${member.name} - ${member.title}`}
                width={300}
                height={300}
                className={styles.profileImage}
                loading="lazy"
              />
            </div>
            <div className={styles.teamCardContent}>
              <h4 className={styles.memberName}>{member.name}</h4>
              <p className={styles.memberTitle}>{member.title}</p>
              <p className={styles.memberBio}>{member.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
