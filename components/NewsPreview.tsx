'use client';

import React from 'react';
import { Section } from './Section';
import { Grid } from './Grid';
import { Card } from './Card';
import styles from './NewsPreview.module.css';

export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  imageUrl: string;
  imageAlt: string;
  link: string;
}

export interface NewsPreviewProps {
  title?: string;
  subtitle?: string;
  articles: NewsArticle[];
  backgroundColor?: 'white' | 'gray' | 'green';
}

export const NewsPreview: React.FC<NewsPreviewProps> = ({
  title = 'Latest News',
  subtitle,
  articles,
  backgroundColor = 'gray',
}) => {
  const sectionRef = React.useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Section backgroundColor={backgroundColor}>
      <div ref={sectionRef} className={`${styles.newsPreview} ${isVisible ? styles.visible : ''}`}>
        <h2 className={styles.title}>{title}</h2>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        <Grid columns={{ desktop: 3, tablet: 2, mobile: 1 }} gap="lg">
          {articles.slice(0, 3).map((article, index) => (
            <div
              key={article.id}
              className={styles.cardWrapper}
              style={{ animationDelay: `${0.1 + index * 0.12}s` }}
            >
              <Card
                imageUrl={article.imageUrl}
                imageAlt={article.imageAlt}
                link={article.link}
                variant="default"
              >
                <div className={styles.articleContent}>
                  <span className={styles.articleDate}>{article.date}</span>
                  <h3 className={styles.articleTitle}>{article.title}</h3>
                  <p className={styles.articleExcerpt}>{article.excerpt}</p>
                  <a href={article.link} className={styles.readMore}>
                    Read More
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={styles.readMoreArrow}>
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </Card>
            </div>
          ))}
        </Grid>
      </div>
    </Section>
  );
};
