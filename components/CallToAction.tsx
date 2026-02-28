import React from 'react';
import { Section } from './Section';
import { Button } from './Button';
import styles from './CallToAction.module.css';

export interface CallToActionProps {
  title: string;
  description?: string;
  buttonText: string;
  buttonLink: string;
  backgroundColor?: 'white' | 'gray' | 'green';
}

export const CallToAction: React.FC<CallToActionProps> = ({
  title,
  description,
  buttonText,
  buttonLink,
  backgroundColor = 'green',
}) => {
  return (
    <Section backgroundColor={backgroundColor}>
      <div className={styles.cta}>
        <h2 className={styles.title}>{title}</h2>
        {description && <p className={styles.description}>{description}</p>}
        <Button href={buttonLink} size="large" variant="primary">
          {buttonText}
        </Button>
      </div>
    </Section>
  );
};
