'use client'

import React, { useState } from 'react'
import { Section, Grid, Card } from '@/components'
import { newsArticles } from '@/lib/news-data'
import styles from './news.module.css'

const ARTICLES_PER_PAGE = 9

export default function NewsPage() {
  const [displayCount, setDisplayCount] = useState(ARTICLES_PER_PAGE)

  const visibleArticles = newsArticles.slice(0, displayCount)
  const hasMore = displayCount < newsArticles.length

  const handleLoadMore = () => {
    setDisplayCount((prev) =>
      Math.min(prev + ARTICLES_PER_PAGE, newsArticles.length)
    )
  }

  return (
    <>
      <Section backgroundColor="white">
        <div className={styles.newsHeader}>
          <h1 className={styles.pageTitle}>News</h1>
          <p className={styles.pageSubtitle}>
            Stay updated with the latest news, announcements, and stories from
            SimHealth Africa
          </p>
        </div>
      </Section>

      <Section backgroundColor="gray">
        <Grid columns={{ desktop: 3, tablet: 2, mobile: 1 }} gap="lg">
          {visibleArticles.map((article) => (
            <Card
              key={article.id}
              imageUrl={article.imageUrl}
              imageAlt={article.imageAlt}
              link={article.link}
              variant="default"
            >
              <div className={styles.articleContent}>
                <h2 className={styles.articleTitle}>{article.title}</h2>
                <p className={styles.articleDate}>{article.date}</p>
                <p className={styles.articleExcerpt}>{article.excerpt}</p>
                <a href={article.link} className={styles.readMore}>
                  Read More →
                </a>
              </div>
            </Card>
          ))}
        </Grid>

        {hasMore && (
          <div className={styles.loadMoreContainer}>
            <button onClick={handleLoadMore} className={styles.loadMoreButton}>
              Load More Articles
            </button>
          </div>
        )}
      </Section>
    </>
  )
}
