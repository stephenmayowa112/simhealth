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
  return (
    <Section backgroundColor={backgroundColor}>
      <div className={styles.newsPreview}>
        <h2 className={styles.title}>{title}</h2>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        <Grid columns={{ desktop: 3, tablet: 2, mobile: 1 }} gap="lg">
          {articles.slice(0, 3).map((article) => (
            <Card
              key={article.id}
              imageUrl={article.imageUrl}
              imageAlt={article.imageAlt}
              link={article.link}
              variant="default"
            >
              <div className={styles.articleContent}>
                <h3 className={styles.articleTitle}>{article.title}</h3>
                <p className={styles.articleDate}>{article.date}</p>
                <p className={styles.articleExcerpt}>{article.excerpt}</p>
                <a href={article.link} className={styles.readMore}>
                  Read More →
                </a>
              </div>
            </Card>
          ))}
        </Grid>
      </div>
    </Section>
  );
};
