import React from 'react';
import { Section } from './Section';
import { Grid } from './Grid';
import { Card } from './Card';
import styles from './ProgramsGrid.module.css';

export interface Program {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  link: string;
}

export interface ProgramsGridProps {
  title?: string;
  subtitle?: string;
  programs: Program[];
  backgroundColor?: 'white' | 'gray' | 'green';
}

export const ProgramsGrid: React.FC<ProgramsGridProps> = ({
  title,
  subtitle,
  programs,
  backgroundColor = 'white',
}) => {
  return (
    <Section backgroundColor={backgroundColor}>
      <div className={styles.programsGrid}>
        {title && <h2 className={styles.title}>{title}</h2>}
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        <Grid columns={{ desktop: 3, tablet: 2, mobile: 1 }} gap="lg">
          {programs.map((program) => (
            <Card
              key={program.id}
              title={program.title}
              description={program.description}
              imageUrl={program.imageUrl}
              imageAlt={program.imageAlt}
              link={program.link}
              variant="default"
            />
          ))}
        </Grid>
      </div>
    </Section>
  );
};
