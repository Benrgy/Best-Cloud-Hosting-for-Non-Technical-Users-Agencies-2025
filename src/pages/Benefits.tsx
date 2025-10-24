import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

const Benefits = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <a href="/" className="text-2xl font-bold text-primary">CloudHost</a>
            <Button variant="outline" onClick={() => navigate('/')}>
              Back to Home
            </Button>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Benefits of Cloud Hosting for Non-Technical Users</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Discover why cloud hosting is the perfect solution for beginners, small businesses, and agencies without technical expertise.
          </p>

          <div className="space-y-8">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">🚀 No Technical Skills Required</h2>
                <p className="text-muted-foreground mb-4">
                  Cloud hosting platforms are designed with simplicity in mind. You don't need to understand server configuration, command lines, or complex technical concepts. Everything is managed through an intuitive visual interface with clear, simple language.
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>One-click website deployment</li>
                  <li>Automatic software updates and security patches</li>
                  <li>Visual control panels instead of command-line interfaces</li>
                  <li>Pre-configured settings optimized for performance</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">💰 Cost-Effective and Transparent Pricing</h2>
                <p className="text-muted-foreground mb-4">
                  Pay only for the resources you need without hidden fees or surprise charges. Cloud hosting eliminates the need to hire expensive IT staff or consultants to manage your servers.
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Plans starting from $14/month</li>
                  <li>No upfront hardware costs</li>
                  <li>Save an average of $3,000 per year compared to hiring technical staff</li>
                  <li>Flexible scaling - upgrade or downgrade anytime</li>
                  <li>Clear pricing with no hidden fees</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">⚡ Superior Performance and Speed</h2>
                <p className="text-muted-foreground mb-4">
                  Cloud hosting delivers faster loading speeds compared to traditional shared hosting, which directly impacts user experience and search engine rankings.
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>SSD storage for faster data access</li>
                  <li>Built-in CDN for global content delivery</li>
                  <li>Advanced caching mechanisms</li>
                  <li>Page load times under 2 seconds</li>
                  <li>Better SEO rankings due to improved speed</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">🔒 Enterprise-Grade Security</h2>
                <p className="text-muted-foreground mb-4">
                  Professional hosting providers handle all security measures, protecting your website from threats without requiring technical knowledge from you.
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Free SSL certificates for secure connections</li>
                  <li>Automatic daily backups</li>
                  <li>24/7 malware scanning and removal</li>
                  <li>DDoS protection</li>
                  <li>Regular security updates</li>
                  <li>99.96% of attacks blocked automatically</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">📈 Easy Scalability</h2>
                <p className="text-muted-foreground mb-4">
                  As your website grows, cloud hosting grows with you. Upgrade resources with just a few clicks without any technical complications or downtime.
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>One-click resource upgrades</li>
                  <li>Handle traffic spikes automatically</li>
                  <li>No downtime during upgrades</li>
                  <li>Scale both vertically and horizontally</li>
                  <li>Perfect for growing businesses</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">🕒 99.99% Uptime Reliability</h2>
                <p className="text-muted-foreground mb-4">
                  Cloud hosting uses multiple servers, so if one fails, your website automatically switches to another. This redundancy ensures your website stays online.
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Guaranteed 99.99% uptime</li>
                  <li>Automatic failover systems</li>
                  <li>No single point of failure</li>
                  <li>Maximum of 53 minutes downtime per year</li>
                  <li>Your business stays accessible 24/7</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">💬 24/7 Expert Support</h2>
                <p className="text-muted-foreground mb-4">
                  Get help whenever you need it from hosting experts who speak in plain English, not technical jargon. No need to troubleshoot problems yourself.
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Live chat support available 24/7</li>
                  <li>Average 2-minute response time</li>
                  <li>Support in plain, easy-to-understand language</li>
                  <li>Video tutorials and documentation</li>
                  <li>Dedicated account managers for agency plans</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">⏱️ Save Time and Focus on Your Business</h2>
                <p className="text-muted-foreground mb-4">
                  With managed cloud hosting, you can focus on running your business instead of managing servers. The hosting provider handles all technical maintenance.
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Automatic software updates</li>
                  <li>Managed backups and security</li>
                  <li>Performance optimization handled for you</li>
                  <li>No server maintenance required</li>
                  <li>Launch websites in 24 hours or less</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">🌍 Global Reach with Local Speed</h2>
                <p className="text-muted-foreground mb-4">
                  Cloud hosting delivers your content from servers closest to your visitors, ensuring fast loading times regardless of where your audience is located.
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Multiple data center locations</li>
                  <li>Built-in Content Delivery Network (CDN)</li>
                  <li>Fast loading for international visitors</li>
                  <li>Choose your preferred server location</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">📊 Business Growth Impact</h2>
                <p className="text-muted-foreground mb-4">
                  Small businesses using easy cloud hosting solutions grow their online revenue faster than those struggling with complex hosting setups.
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>34% faster online revenue growth</li>
                  <li>89% of beginners launch successfully within 24 hours</li>
                  <li>Better SEO rankings from improved performance</li>
                  <li>Higher customer satisfaction due to fast, reliable websites</li>
                  <li>More time to focus on marketing and sales</li>
                </ul>
              </CardContent>
            </Card>

            <div className="mt-12 text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Experience These Benefits?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Join thousands of non-technical users and agencies who have successfully launched their websites with easy cloud hosting.
              </p>
              <div className="flex gap-4 justify-center">
                <Button size="lg" onClick={() => navigate('/')}>
                  View Top Hosting Providers
                </Button>
                <Button size="lg" variant="outline" onClick={() => navigate('/blog')}>
                  Read Our Blog
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t mt-12">
        <div className="container mx-auto px-6 py-8 text-center text-muted-foreground">
          <p>&copy; 2025 CloudHost. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Benefits;
