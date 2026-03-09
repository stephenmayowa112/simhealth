import React from 'react'

export const metadata = {
  title: 'Contact Us - SimHealth Africa',
  description: 'Get in touch with SimHealth Africa. Contact us for inquiries about our programs, services, and partnership opportunities.',
}

export default function ContactPage() {
  return (
    <>
      <div style={{
        backgroundColor: '#75c037',
        padding: '10rem 2rem 6rem',
        textAlign: 'center',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
        backgroundImage: 'url("https://placehold.co/1920x800/75c037/75c037?text=Conference+Room")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'multiply'
      }}>
        <h1 style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: '1.5rem', fontFamily: 'var(--font-primary)' }}>CONTACT US</h1>
        <p style={{ fontSize: '1.2rem', fontFamily: 'var(--font-secondary)' }}>.....Improving Health and Wellbeing</p>

        {/* Decorative Wave */}
        <svg style={{ position: 'absolute', bottom: -5, left: 0, width: '100%', height: 'auto', display: 'block' }} viewBox="0 0 1440 150" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,0 Q30,100 60,60 T120,80 T180,40 T240,110 T300,50 T360,90 T420,30 T480,120 T540,60 T600,140 T660,70 T720,100 T780,50 T840,130 T900,60 T960,110 T1020,40 T1080,90 T1140,50 T1200,120 T1260,70 T1320,100 T1380,40 T1440,90 L1440,150 L0,150 Z" fill="#ffffff" />
        </svg>
      </div>

      <div style={{
        padding: '0 2rem 8rem',
        backgroundColor: '#ffffff',
        position: 'relative',
        zIndex: 10,
        marginTop: '-2rem',
        backgroundImage: 'url("https://placehold.co/1920x800/f5f5f5/f5f5f5?text=Ocean+Background")',
        backgroundSize: 'cover',
        backgroundPosition: 'bottom',
      }}>
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
          backgroundColor: 'white'
        }}>

          {/* Address Column */}
          <div style={{ padding: '4rem 3rem', borderRight: '1px solid #eee' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 900, fontFamily: 'var(--font-primary)', color: '#000', marginBottom: '2rem' }}>
              ADDRESS
              <div style={{ width: '40px', height: '2px', backgroundColor: '#000', marginTop: '0.5rem' }}></div>
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#75c037" style={{ flexShrink: 0, marginTop: '4px' }}>
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
                </svg>
                <p style={{ margin: 0, color: '#444', fontSize: '1.05rem', lineHeight: 1.6 }}>
                  No 44 Boundary Road, GRA,<br />
                  Benin City, Edo State,<br />
                  Nigeria
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#75c037" style={{ flexShrink: 0 }}>
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27 11.36 11.36 0 004.48.9 1 1 0 011 1v3.5a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.9 4.48 1 1 0 01-.27 1.11l-2.2 2.2z" />
                </svg>
                <p style={{ margin: 0, color: '#75c037', fontSize: '1.05rem' }}>+2348076355533</p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#75c037" style={{ flexShrink: 0 }}>
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27 11.36 11.36 0 004.48.9 1 1 0 011 1v3.5a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.9 4.48 1 1 0 01-.27 1.11l-2.2 2.2z" />
                </svg>
                <p style={{ margin: 0, color: '#75c037', fontSize: '1.05rem' }}>08023597448</p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#75c037" style={{ flexShrink: 0 }}>
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <p style={{ margin: 0, color: '#75c037', fontSize: '1.05rem' }}>simhealthafrica@gmail.com</p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#75c037" style={{ flexShrink: 0 }}>
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <p style={{ margin: 0, color: '#75c037', fontSize: '1.05rem' }}>info@simhealthafrica.org</p>
              </div>
            </div>
          </div>

          {/* Opening Hours Column */}
          <div style={{ padding: '4rem 3rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 900, fontFamily: 'var(--font-primary)', color: '#000', marginBottom: '2rem' }}>
              OPENING HOURS
              <div style={{ width: '40px', height: '2px', backgroundColor: '#000', marginTop: '0.5rem' }}></div>
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontWeight: 'bold', fontSize: '1.05rem' }}>
                <span style={{ color: '#000' }}>Monday - Friday</span>
                <span style={{ backgroundColor: '#7ebd42', color: 'white', padding: '0.4rem 1rem', borderRadius: '4px', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'normal' }}>
                  8AM - 5PM
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                  </svg>
                </span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontWeight: 'bold', fontSize: '1.05rem' }}>
                <span style={{ color: '#000' }}>Saturday - Sunday</span>
                <span style={{ backgroundColor: '#7ebd42', color: 'white', padding: '0.4rem 1rem', borderRadius: '4px', fontSize: '0.9rem', fontWeight: 'normal' }}>
                  Close
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
