import React from 'react';
import { Section } from './Section';
import styles from './MissionStatement.module.css';

export interface MissionStatementProps {
  title?: string;
  content: string;
  backgroundColor?: 'white' | 'gray' | 'green';
}

export const MissionStatement: React.FC<MissionStatementProps> = ({
  title,
  content,
  backgroundColor = 'green',
}) => {
  return (
    <Section backgroundColor={backgroundColor}>
      <div className={styles.missionStatement}>
        {title && <h2 className={styles.title}>{title}</h2>}
        <p className={styles.content}>{content}</p>
      </div>
    </Section>
  );
};
