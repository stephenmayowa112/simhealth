/**
 * Full article content for individual news pages
 * This extends the basic NewsArticle data with full body content
 */

export interface FullNewsArticle {
  id: string;
  title: string;
  date: string;
  author?: string;
  featuredImage: {
    url: string;
    alt: string;
  };
  body: string; // HTML content
  excerpt: string;
}

export const fullNewsArticles: Record<string, FullNewsArticle> = {
  'partnership-announced': {
    id: '1',
    title: 'New Partnership Announced with Leading Healthcare Organizations',
    date: 'March 15, 2024',
    author: 'SimHealth Africa Communications Team',
    featuredImage: {
      url: 'https://placehold.co/1200x675/a8d97f/1a1a1a?text=Partnership',
      alt: 'Partnership announcement event',
    },
    excerpt:
      'SimHealth Africa is proud to announce a strategic partnership with leading healthcare organizations across the continent to expand access to quality healthcare services in underserved communities.',
    body: `
      <p>SimHealth Africa is proud to announce a groundbreaking strategic partnership with leading healthcare organizations across the African continent. This collaboration marks a significant milestone in our mission to expand access to quality healthcare services in underserved communities.</p>
      
      <h2>Partnership Overview</h2>
      <p>The partnership brings together expertise from multiple sectors including public health, medical education, and healthcare technology. Together, we will work to address critical healthcare challenges and create sustainable solutions that benefit communities across Africa.</p>
      
      <h2>Key Objectives</h2>
      <p>Our collaborative efforts will focus on:</p>
      <ul>
        <li>Expanding healthcare infrastructure in rural and underserved areas</li>
        <li>Implementing innovative health delivery models</li>
        <li>Training and capacity building for healthcare workers</li>
        <li>Leveraging technology to improve healthcare access and quality</li>
      </ul>
      
      <h2>Expected Impact</h2>
      <p>Through this partnership, we anticipate reaching over 2 million people with improved healthcare services over the next three years. The collaboration will enable us to scale our programs more effectively and create lasting change in communities that need it most.</p>
      
      <p>We are excited about the possibilities this partnership creates and look forward to working together to transform healthcare delivery across Africa.</p>
    `,
  },
  'training-success': {
    id: '2',
    title: 'Training Program Achieves Milestone: 500+ Healthcare Workers Trained',
    date: 'March 10, 2024',
    author: 'SimHealth Africa Training Department',
    featuredImage: {
      url: 'https://placehold.co/400x300/e8f5dc/1a1a1a?text=Training',
      alt: 'Healthcare workers during training session',
    },
    excerpt:
      'Our comprehensive training program has successfully trained over 500 healthcare workers in innovative health delivery methods, significantly improving healthcare capacity across multiple regions.',
    body: `
      <p>We are thrilled to announce that our comprehensive healthcare training program has reached a significant milestone, successfully training over 500 healthcare workers across multiple regions in Africa.</p>
      
      <h2>Program Highlights</h2>
      <p>The training program, launched in early 2023, has focused on equipping healthcare workers with modern skills and knowledge in:</p>
      <ul>
        <li>Evidence-based clinical practices</li>
        <li>Patient-centered care approaches</li>
        <li>Health systems management</li>
        <li>Community health engagement</li>
        <li>Digital health tools and technologies</li>
      </ul>
      
      <h2>Participant Feedback</h2>
      <p>Participants have reported significant improvements in their confidence and competence in delivering quality healthcare services. Many have implemented new practices in their facilities, leading to measurable improvements in patient outcomes.</p>
      
      <h2>Looking Forward</h2>
      <p>Building on this success, we are expanding the program to reach an additional 1,000 healthcare workers in the coming year. We remain committed to building healthcare capacity across the continent and ensuring that communities have access to skilled, knowledgeable healthcare professionals.</p>
    `,
  },
  'impact-report': {
    id: '3',
    title: 'Community Impact Report 2024 Released',
    date: 'March 5, 2024',
    author: 'SimHealth Africa Research Team',
    featuredImage: {
      url: 'https://placehold.co/400x300/75c037/ffffff?text=Impact+Report',
      alt: 'Community health impact statistics',
    },
    excerpt:
      'Our latest annual report demonstrates significant improvements in community health outcomes, with measurable progress in maternal health, disease prevention, and healthcare accessibility.',
    body: `
      <p>SimHealth Africa is pleased to release our 2024 Community Impact Report, showcasing the significant progress we have made in improving health outcomes across the communities we serve.</p>
      
      <h2>Key Findings</h2>
      <p>The report highlights several areas of significant achievement:</p>
      
      <h3>Maternal Health</h3>
      <p>Maternal mortality rates in our program areas decreased by 35% compared to baseline measurements, with improved access to prenatal and postnatal care services.</p>
      
      <h3>Disease Prevention</h3>
      <p>Vaccination coverage increased to 87% in target communities, and preventable disease incidence decreased by 42% through our community health education programs.</p>
      
      <h3>Healthcare Accessibility</h3>
      <p>Over 150,000 people gained access to healthcare services through our mobile clinics and community health worker programs, reducing average travel time to healthcare facilities by 60%.</p>
      
      <h2>Community Testimonials</h2>
      <p>The report includes powerful testimonials from community members whose lives have been transformed by improved access to quality healthcare services.</p>
      
      <h2>Download the Full Report</h2>
      <p>The complete 2024 Community Impact Report is available for download on our website, providing detailed analysis and insights into our programs and their outcomes.</p>
    `,
  },
};

/**
 * Get a full article by its slug
 */
export function getArticleBySlug(slug: string): FullNewsArticle | null {
  return fullNewsArticles[slug] || null;
}

/**
 * Get all article slugs for static generation
 */
export function getAllArticleSlugs(): string[] {
  return Object.keys(fullNewsArticles);
}
