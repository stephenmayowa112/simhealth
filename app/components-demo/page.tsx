'use client';

import { Button, Card, Section } from '@/components';

export default function ComponentsDemo() {
  return (
    <>
      <Section backgroundColor="white">
        <h1 style={{ marginBottom: '32px', fontSize: '40px' }}>UI Components Demo</h1>
        
        <h2 style={{ marginTop: '48px', marginBottom: '24px', fontSize: '32px' }}>Buttons</h2>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '32px' }}>
          <Button variant="primary" size="small">Small Primary</Button>
          <Button variant="primary" size="medium">Medium Primary</Button>
          <Button variant="primary" size="large">Large Primary</Button>
        </div>
        
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '32px' }}>
          <Button variant="secondary" size="small">Small Secondary</Button>
          <Button variant="secondary" size="medium">Medium Secondary</Button>
          <Button variant="secondary" size="large">Large Secondary</Button>
        </div>
        
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <Button variant="text" size="small">Small Text</Button>
          <Button variant="text" size="medium">Medium Text</Button>
          <Button variant="text" size="large">Large Text</Button>
        </div>
      </Section>

      <Section backgroundColor="gray">
        <h2 style={{ marginBottom: '24px', fontSize: '32px' }}>Cards</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          <Card
            variant="default"
            title="Default Card"
            description="This is a default card with a title and description. It has standard padding and shadow effects."
          />
          <Card
            variant="featured"
            title="Featured Card"
            description="This is a featured card with a green border to highlight important content."
          />
          <Card
            variant="compact"
            title="Compact Card"
            description="This is a compact card with reduced padding for denser layouts."
          />
        </div>
      </Section>

      <Section backgroundColor="green">
        <h2 style={{ marginBottom: '24px', fontSize: '32px' }}>Section Backgrounds</h2>
        <p style={{ fontSize: '16px', lineHeight: '24px' }}>
          This section demonstrates the green background variant. Sections automatically handle
          max-width constraints (1200px) and responsive padding.
        </p>
      </Section>
    </>
  );
}
