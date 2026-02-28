'use client';

import React from 'react';
import { Card } from './Card';
import { Grid } from './Grid';
import styles from './ImpactMetrics.module.css';

export interface Metric {
  value: string;
  label: string;
  description?: string;
}

export interface ImpactMetricsProps {
  metrics: Metric[];
  title?: string;
}

export const ImpactMetrics: React.FC<ImpactMetricsProps> = ({
  metrics,
  title = 'Our Impact',
}) => {
  return (
    <div className={styles.container}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <Grid columns={{ desktop: 3, tablet: 2, mobile: 1 }} gap="lg">
        {metrics.map((metric, index) => (
          <Card key={index} variant="default" className={styles.metricCard}>
            <div className={styles.metricContent}>
              <div className={styles.value}>{metric.value}</div>
              <div className={styles.label}>{metric.label}</div>
              {metric.description && (
                <p className={styles.description}>{metric.description}</p>
              )}
            </div>
          </Card>
        ))}
      </Grid>
    </div>
  );
};
