import { Section, Hero, CallToAction } from '@/components'
import styles from './simhealth-connect.module.css'

export const metadata = {
  title: 'SimHealth Connect - SimHealth Africa',
  description:
    'Advocacy, Policy and Collaboration - Improving Health and Wellbeing through community engagement and partnerships.',
}

export default function SimHealthConnectPage() {
  return (
    <>
      <Hero
        title="SimHealth Connect"
        subtitle="(Advocacy, Policy and Collaboration) - Improving Health and Wellbeing"
        backgroundImage="/images/simhealth-connect-hero.jpg"
        backgroundAlt="Healthcare professionals collaborating and advocating for improved health delivery"
      />

      <Section backgroundColor="white">
        <div className={styles.contentWrapper}>
          <p className={styles.leadText}>
            simHealth Africa has been engaged in several formal and informal
            advocacy and mobilization activities for health and non-health
            programs. Some of the activities are stand-alone advocacy and
            mobilization programs, others are embedded in other projects to
            facilitate acceptance and nurture sustainability of intervention
            programs within local communities.
          </p>
          <p>
            Furthermore, simHealth Africa is offering an online community of
            practice, collaboration and linkages with local and international
            academic institutions, healthcare facilities, partners and
            implementers of funded projects, and governments at all levels. We
            promote rapid dissemination of organizations' projects and programs.
          </p>
        </div>
      </Section>

      <CallToAction
        title="Join Our Community"
        description="Connect with healthcare professionals, academic institutions, and partners across Africa"
        buttonText="Get Involved"
        buttonLink="/contact-us"
      />
    </>
  )
}
