export interface SEOConfig {
  title: string;
  description: string;
  keywords: string;
  ogTitle: string;
  ogDescription: string;
  twitterTitle: string;
  twitterDescription: string;
}

export const seoConfigs: Record<string, SEOConfig> = {
  '/': {
    title: 'Best Cloud Hosting for Non-Technical Users & Agencies 2025 - CloudHost',
    description: 'Discover the best cloud hosting for non-technical users and agencies in 2025. Get managed hosting with one-click deployment and 24/7 support.',
    keywords: 'best cloud hosting 2025, cloud hosting for non-technical users, managed cloud hosting agencies, beginner-friendly cloud hosting, WordPress cloud hosting 2025',
    ogTitle: 'Best Cloud Hosting for Non-Technical Users & Agencies 2025',
    ogDescription: 'Enterprise-grade cloud hosting made simple. Perfect for non-technical users and agencies seeking powerful, managed cloud solutions.',
    twitterTitle: 'Best Cloud Hosting for Non-Technical Users & Agencies 2025',
    twitterDescription: 'Managed cloud hosting solutions perfect for beginners and agencies. No technical skills required.'
  }
  // Add more routes as your site grows
};

export const getDefaultSEO = (): SEOConfig => seoConfigs['/'];