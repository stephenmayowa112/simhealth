import dynamic from 'next/dynamic';
import {
  Hero,
  MissionStatement,
  ProgramsGrid,
  Program,
} from '@/components';
import { newsArticles } from '@/lib/news-data';

// Lazy load below-the-fold components
const CallToAction = dynamic(() => import('@/components').then(mod => ({ default: mod.CallToAction })), {
  loading: () => <div style={{ minHeight: '300px' }} />,
});

const NewsPreview = dynamic(() => import('@/components').then(mod => ({ default: mod.NewsPreview })), {
  loading: () => <div style={{ minHeight: '400px' }} />,
});

// Sample data for programs
const programs: Program[] = [
  {
    id: '1',
    title: 'Health Program',
    description: 'Improving healthcare delivery across Africa through innovative solutions and partnerships.',
    imageUrl: 'https://placehold.co/400x300/75c037/ffffff?text=Health+Program',
    imageAlt: 'Health Program',
    link: '/health-program',
  },
  {
    id: '2',
    title: 'Innovation & Social Entrepreneurship',
    description: 'Empowering entrepreneurs to create sustainable solutions for social challenges.',
    imageUrl: 'https://placehold.co/400x300/ffc42e/1a1a1a?text=Innovation+Program',
    imageAlt: 'Innovation Program',
    link: '/innovation-and-social-entrepreneurship-program',
  },
  {
    id: '3',
    title: 'SimHealth Institute',
    description: 'Building capacity through training and education in health systems management.',
    imageUrl: 'https://placehold.co/400x300/48811a/ffffff?text=SimHealth+Institute',
    imageAlt: 'SimHealth Institute',
    link: '/simhealth-institute',
  },
];

export default function Home() {
  return (
    <main>
      <Hero
        title="Transforming Healthcare Delivery in Africa"
        subtitle="The Africa Society for Improved Health Delivery"
        ctaText="Learn More About Our Work"
        ctaLink="/about-us"
        backgroundImage="https://placehold.co/1920x600/48811a/ffffff?text=SimHealth+Africa"
        backgroundAlt="Healthcare workers in Africa"
      />

      <MissionStatement
        title="Our Mission"
        content="SimHealth Africa is dedicated to improving health delivery across the African continent through innovative programs, capacity building, and strategic partnerships. We work to create sustainable solutions that address the unique healthcare challenges facing African communities."
        backgroundColor="green"
      />

      <ProgramsGrid
        title="Our Programs"
        subtitle="Discover how we're making a difference through our comprehensive programs"
        programs={programs}
        backgroundColor="white"
      />

      <CallToAction
        title="Join Us in Making a Difference"
        description="Whether you're looking to volunteer, partner with us, or learn more about our work, we'd love to hear from you."
        buttonText="Get Involved"
        buttonLink="/volunteer"
        backgroundColor="green"
      />

      <NewsPreview
        title="Latest News"
        subtitle="Stay updated with our recent activities and achievements"
        articles={newsArticles}
        backgroundColor="gray"
      />
    </main>
  );
}
