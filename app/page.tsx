import dynamic from 'next/dynamic'
import { Hero, Section, Grid, Flex, Button } from '@/components'
import { newsArticles } from '@/lib/news-data'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Hero
        eyebrow="Welcome To simHealth Africa"
        title="AFRICA SOCIETY FOR IMPROVED HEALTH DELIVERY"
        ctaText="LEARN MORE"
        ctaLink="/about-us"
        backgroundImage="https://placehold.co/1920x600/48811a/ffffff?text=SimHealth+Africa"
        backgroundAlt="Healthcare workers in Africa"
      />

      {/* Vision, Mission, Values Section */}
      <Section backgroundColor="gray">
        <Grid columns={{ desktop: 3, tablet: 1, mobile: 1 }} gap="lg">
          {/* VISION */}
          <div style={{ backgroundColor: 'white', padding: '3rem 2rem', textAlign: 'center', borderRadius: '4px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
            <div style={{ color: '#75c037', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, margin: '0 0 1rem', fontFamily: 'var(--font-primary)' }}>OUR VISION</h3>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: '#555' }}>
              To achieve good health and build human resource capacity of many, and to become a center of excellence in the delivery of innovative, evidence-based, context-specific programs.
            </p>
          </div>
          {/* MISSION */}
          <div style={{ backgroundColor: 'white', padding: '3rem 2rem', textAlign: 'center', borderRadius: '4px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
            <div style={{ color: '#75c037', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.992 4.992 0 008 20c.53 0 1.04-.08 1.52-.22L14.1 24l1.1-1.1-3.64-3.64C16.15 17.5 19 13.9 19 9c0-1.87-.5-3.62-1.36-5.14z" />
              </svg>
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, margin: '0 0 1rem', fontFamily: 'var(--font-primary)' }}>OUR MISSION</h3>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: '#555' }}>
              simHealth Africa is a knowledge-based organization with the mission to improve health and wellbeing, build human resource capacity, and deliver innovative programs.
            </p>
          </div>
          {/* VALUES */}
          <div style={{ backgroundColor: 'white', padding: '3rem 2rem', textAlign: 'center', borderRadius: '4px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
            <div style={{ color: '#75c037', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
              </svg>
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, margin: '0 0 1rem', fontFamily: 'var(--font-primary)' }}>OUR VALUES</h3>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: '#555' }}>
              Our values are predicated on collaborative efforts and contributions with uncompromising integrity in the discharge of our duty with a code of conduct based with honesty and transparency.
            </p>
          </div>
        </Grid>
      </Section>

      {/* Programs Overview Section */}
      <Section backgroundColor="green" style={{ position: 'relative' }}>
        <Grid columns={{ desktop: 2, tablet: 1, mobile: 1 }} gap="xl" style={{ position: 'relative', zIndex: 1, alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'white', marginBottom: '1.5rem', letterSpacing: '0.05em' }}>HEALTH | CAPACITY | INNOVATION</h2>
            <p style={{ color: 'white', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '2rem' }}>
              simHealth is non-profit, non-governmental organization registered with the Corporate Affairs Commission of Nigeria, and managed by Board of Trustees (BOTs) who oversee all activities of the organization. In addition to the Board of Trustees, the organization is supported by the management team of several national and international leading experts, professionals and scientists.
            </p>
            <div style={{ display: 'inline-block', backgroundColor: '#f1c40f', borderRadius: '30px' }}>
              <Button href="/programs" style={{ padding: '0.8rem 2rem', color: '#000', fontWeight: 'bold' }}>OUR PROGRAMS</Button>
            </div>
          </div>
          <Grid columns={{ desktop: 2, tablet: 2, mobile: 1 }} gap="md">
            {/* HEALTH PROGRAM */}
            <div style={{ backgroundColor: 'white', padding: '2.5rem 1rem', borderRadius: '8px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '200px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
              <div style={{ color: '#4a9e22', marginBottom: '1rem' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 900, color: '#000', margin: 0, fontFamily: 'var(--font-primary)' }}>HEALTH PROGRAM</h3>
            </div>
            {/* SIMHEALTH INSTITUTE */}
            <div style={{ backgroundColor: 'white', padding: '2.5rem 1rem', borderRadius: '8px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '200px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
              <div style={{ color: '#4a9e22', marginBottom: '1rem' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" /></svg>
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 900, color: '#000', margin: 0, fontFamily: 'var(--font-primary)' }}>SIMHEALTH INSTITUTE</h3>
            </div>
            {/* SIMHEALTH CONNECT */}
            <div style={{ backgroundColor: 'white', padding: '2.5rem 1rem', borderRadius: '8px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '200px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
              <div style={{ color: '#4a9e22', marginBottom: '1rem' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" /></svg>
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 900, color: '#000', margin: 0, fontFamily: 'var(--font-primary)' }}>SIMHEALTH CONNECT</h3>
            </div>
            {/* CONSULTANCY SERVICES */}
            <div style={{ backgroundColor: 'white', padding: '2.5rem 1rem', borderRadius: '8px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '200px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
              <div style={{ color: '#4a9e22', marginBottom: '1rem' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" /></svg>
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 900, color: '#000', margin: 0, fontFamily: 'var(--font-primary)' }}>CONSULTANCY SERVICES</h3>
            </div>
          </Grid>
        </Grid>
      </Section>

      {/* Organization News Banner */}
      <div style={{ backgroundColor: '#ffc107', padding: '3rem 1rem', textAlign: 'center', clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 85%)', marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#000', margin: 0, fontFamily: 'var(--font-primary)' }}>ORGANIZATION NEWS</h2>
      </div>

      {/* Our Partners */}
      <Section backgroundColor="white">
        <h2 style={{ fontSize: '2rem', fontWeight: 900, color: '#000', margin: '0 0 3rem', textAlign: 'center', fontFamily: 'var(--font-primary)' }}>OUR PARTNERS</h2>
        <Flex justify="center" align="center" gap="xl" wrap>
          <img src="https://placehold.co/200x80/ffffff/000000?text=University+Of+Benin" alt="University of Benin" style={{ maxHeight: '80px', margin: '0 20px' }} />
          <img src="https://placehold.co/120x120/ffffff/000000?text=Logo+2" alt="Government" style={{ maxHeight: '100px', margin: '0 20px' }} />
          <img src="https://placehold.co/250x80/ffffff/000000?text=World+Bank" alt="World Bank" style={{ maxHeight: '80px', margin: '0 20px' }} />
        </Flex>
      </Section>
    </>
  )
}
