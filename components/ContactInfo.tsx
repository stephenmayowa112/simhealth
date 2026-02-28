'use client';

import React from 'react';
import { colors, spacing, shadows, borderRadius } from '@/lib/design-tokens';
import styles from './ContactInfo.module.css';

export interface ContactInfoItem {
  icon: React.ReactNode;
  title: string;
  details: string[];
  links?: string[];
}

export interface ContactInfoProps {
  items: ContactInfoItem[];
  className?: string;
}

export const ContactInfo: React.FC<ContactInfoProps> = ({ items, className = '' }) => {
  return (
    <div className={`${styles.grid} ${className}`}>
      {items.map((item, index) => (
        <div key={index} className={styles.card}>
          <div className={styles.iconWrapper}>{item.icon}</div>
          <h3 className={styles.title}>{item.title}</h3>
          <div className={styles.details}>
            {item.details.map((detail, detailIndex) => (
              <p key={detailIndex} className={styles.detailItem}>
                {item.links && item.links[detailIndex] ? (
                  <a href={item.links[detailIndex]} className={styles.link}>
                    {detail}
                  </a>
                ) : (
                  detail
                )}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
