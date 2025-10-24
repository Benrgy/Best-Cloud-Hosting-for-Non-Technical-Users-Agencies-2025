import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

const CloudHostingGuide = () => {
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
          <h1 className="text-4xl font-bold mb-6">Complete Cloud Hosting Guide for Beginners 2025</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Everything you need to know about cloud hosting, explained in simple terms for non-technical users.
          </p>

          <div className="space-y-8">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">What Is Cloud Hosting?</h2>
                <p className="text-muted-foreground mb-4">
                  Cloud hosting is a modern way to host websites using multiple connected servers instead of a single physical server. Think of it like having your website stored in many places at once, which makes it faster, more reliable, and easier to manage.
                </p>
                <p className="text-muted-foreground mb-4">
                  Unlike traditional hosting where your website lives on one computer in one location, cloud hosting spreads your website across multiple servers. If one server has a problem, another automatically takes over, so your website stays online.
                </p>
                <h3 className="text-xl font-bold mb-3 mt-6">Simple Analogy:</h3>
                <p className="text-muted-foreground">
                  Traditional hosting is like keeping all your important documents in one filing cabinet. Cloud hosting is like having copies of those documents in multiple secure locations - if one location has an issue, you can still access your documents from another location.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">How Does Cloud Hosting Work?</h2>
                <p className="text-muted-foreground mb-4">
                  Cloud hosting works by distributing your website's files, databases, and resources across multiple servers. Here's what happens behind the scenes:
                </p>
                <ul className="list-decimal pl-6 text-muted-foreground space-y-3">
                  <li><strong>Your website files are stored</strong> on multiple servers at once</li>
                  <li><strong>When someone visits your site,</strong> the system picks the fastest server to deliver your content</li>
                  <li><strong>If a server has issues,</strong> traffic automatically switches to a healthy server</li>
                  <li><strong>Resources like processing power</strong> can be added or removed instantly based on your needs</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  The best part? All of this happens automatically. You don't need to understand how it works to benefit from it.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Cloud Hosting vs Traditional Hosting</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-3">Traditional Shared Hosting</h3>
                    <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                      <li>One physical server hosts many websites</li>
                      <li>Limited resources shared among all users</li>
                      <li>If the server goes down, all websites go down</li>
                      <li>Slower performance during high traffic</li>
                      <li>Cheaper but less reliable</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Cloud Hosting</h3>
                    <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                      <li>Multiple servers work together</li>
                      <li>Resources can scale up or down as needed</li>
                      <li>If one server fails, others take over automatically</li>
                      <li>Consistent fast performance</li>
                      <li>More expensive but much more reliable</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Who Should Use Cloud Hosting?</h2>
                <p className="text-muted-foreground mb-4">
                  Cloud hosting is perfect for:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li><strong>Small Business Owners</strong> who need reliable hosting without technical expertise</li>
                  <li><strong>Bloggers</strong> who want their content to load quickly and stay online</li>
                  <li><strong>E-commerce Stores</strong> that can't afford downtime or slow loading times</li>
                  <li><strong>Agencies</strong> managing multiple client websites</li>
                  <li><strong>Growing Websites</strong> that need easy scalability</li>
                  <li><strong>Anyone</strong> who values reliability and performance over saving a few dollars</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Key Features to Look For</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-bold mb-2">1. Managed Services</h3>
                    <p className="text-muted-foreground">
                      Look for providers that handle server management, updates, and security for you. This means you don't need technical skills.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">2. Automatic Backups</h3>
                    <p className="text-muted-foreground">
                      Daily automatic backups ensure you can restore your website if something goes wrong. Look for at least 30 days of backup retention.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">3. Free SSL Certificate</h3>
                    <p className="text-muted-foreground">
                      SSL certificates encrypt data between your website and visitors. They're essential for security and SEO. Make sure they're included free.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">4. 24/7 Support</h3>
                    <p className="text-muted-foreground">
                      Problems don't wait for business hours. Choose providers with round-the-clock support through live chat, email, or phone.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">5. Easy Control Panel</h3>
                    <p className="text-muted-foreground">
                      The control panel should be intuitive and visual, not filled with technical jargon. Look for one-click installations and clear menus.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">6. SSD Storage</h3>
                    <p className="text-muted-foreground">
                      Solid State Drives (SSDs) are much faster than traditional hard drives. This means faster website loading times.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Understanding Cloud Hosting Pricing</h2>
                <p className="text-muted-foreground mb-4">
                  Cloud hosting typically costs between $14 and $80 per month depending on your needs:
                </p>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-bold mb-2">Entry Level ($14-25/month)</h3>
                    <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                      <li>1-2GB RAM</li>
                      <li>25-50GB storage</li>
                      <li>Perfect for small business websites or blogs</li>
                      <li>Handles 10,000-25,000 visitors per month</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Mid-Range ($35-50/month)</h3>
                    <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                      <li>4GB RAM</li>
                      <li>80GB storage</li>
                      <li>Ideal for e-commerce stores or growing websites</li>
                      <li>Handles 50,000-100,000 visitors per month</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">High-End ($60-80+/month)</h3>
                    <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                      <li>8GB+ RAM</li>
                      <li>160GB+ storage</li>
                      <li>Best for high-traffic websites or agencies</li>
                      <li>Handles 100,000+ visitors per month</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Step-by-Step: Getting Started</h2>
                <ol className="list-decimal pl-6 text-muted-foreground space-y-4">
                  <li>
                    <strong>Choose Your Provider:</strong> Compare features, pricing, and reviews. Start with a free trial if available.
                  </li>
                  <li>
                    <strong>Select a Plan:</strong> Pick a plan based on your current needs. You can always upgrade later.
                  </li>
                  <li>
                    <strong>Register Your Domain:</strong> Choose a domain name for your website or transfer an existing one.
                  </li>
                  <li>
                    <strong>Install Your Application:</strong> Use one-click install for WordPress, Joomla, or other platforms.
                  </li>
                  <li>
                    <strong>Configure Basic Settings:</strong> Set up SSL, email, and basic security features (usually automatic).
                  </li>
                  <li>
                    <strong>Upload Your Content:</strong> Add your website files, images, and content through the control panel.
                  </li>
                  <li>
                    <strong>Test Your Website:</strong> Check that everything works correctly before announcing your launch.
                  </li>
                  <li>
                    <strong>Set Up Monitoring:</strong> Enable uptime monitoring and performance tracking (often included free).
                  </li>
                </ol>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Common Questions Answered</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-bold mb-2">Is cloud hosting secure?</h3>
                    <p className="text-muted-foreground">
                      Yes. Cloud hosting providers implement enterprise-grade security including firewalls, malware scanning, SSL certificates, and regular backups. Top providers blocked 99.96% of attacks in 2024.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Will my website be faster on cloud hosting?</h3>
                    <p className="text-muted-foreground">
                      Yes. Cloud hosting uses SSD storage, CDNs, and advanced caching to deliver faster loading speeds. Most sites see 2-3 second page loads compared to 5-10 seconds on shared hosting.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Can I upgrade my plan later?</h3>
                    <p className="text-muted-foreground">
                      Absolutely. One of cloud hosting's biggest advantages is easy scalability. You can upgrade with just a few clicks, usually with zero downtime.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">What if I need help?</h3>
                    <p className="text-muted-foreground">
                      Quality cloud hosting providers offer 24/7 support through live chat, email, and phone. They also provide documentation, video tutorials, and knowledge bases.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Performance Metrics That Matter</h2>
                <div className="space-y-3">
                  <div>
                    <h3 className="text-lg font-bold mb-2">Uptime: 99.99% or Higher</h3>
                    <p className="text-muted-foreground">
                      This means your website will be down for less than 53 minutes per year. Anything below 99.9% is unacceptable.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Page Load Time: Under 2 Seconds</h3>
                    <p className="text-muted-foreground">
                      Visitors expect fast websites. Every extra second increases bounce rate by 7%. Aim for sub-2-second loads.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Support Response: Under 5 Minutes</h3>
                    <p className="text-muted-foreground">
                      When you need help, you shouldn't wait. Good providers respond to live chat in 2-5 minutes on average.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mt-12 text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Choose Your Cloud Hosting?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Compare the best cloud hosting providers for non-technical users and agencies in 2025.
              </p>
              <div className="flex gap-4 justify-center">
                <Button size="lg" onClick={() => navigate('/')}>
                  View Top Providers
                </Button>
                <Button size="lg" variant="outline" onClick={() => navigate('/benefits')}>
                  See All Benefits
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

export default CloudHostingGuide;
