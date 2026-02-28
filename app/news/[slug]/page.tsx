import React from 'react';
import { notFound } from 'next/navigation';
import { Section } from '@/components';
import { getArticleBySlug, getAllArticleSlugs } from '@/lib/news-articles-full';
import styles from './article.module.css';
import Image from 'next/image';

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const slugs = getAllArticleSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  return (
    <main>
      <article className={styles.article}>
        <Section backgroundColor="white">
          <div className={styles.articleHeader}>
            <h1 className={styles.articleTitle}>{article.title}</h1>
            <div className={styles.articleMeta}>
              <time className={styles.articleDate}>{article.date}</time>
              {article.author && (
                <>
                  <span className={styles.metaSeparator}>•</span>
                  <span className={styles.articleAuthor}>{article.author}</span>
                </>
              )}
            </div>
          </div>
        </Section>

        <Section backgroundColor="gray">
          <div className={styles.featuredImageContainer}>
            <Image
              src={article.featuredImage.url}
              alt={article.featuredImage.alt}
              width={1200}
              height={675}
              className={styles.featuredImage}
              priority
            />
          </div>
        </Section>

        <Section backgroundColor="white">
          <div className={styles.articleBody}>
            <div
              className={styles.bodyContent}
              dangerouslySetInnerHTML={{ __html: article.body }}
            />
          </div>

          <div className={styles.articleFooter}>
            <a href="/news" className={styles.backLink}>
              ← Back to News
            </a>
          </div>
        </Section>
      </article>
    </main>
  );
}
