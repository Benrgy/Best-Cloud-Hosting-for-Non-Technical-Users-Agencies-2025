import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const EditorialPolicy = () => {
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

      <main className="container mx-auto px-6 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">Editorial Policy</h1>
        <p className="text-muted-foreground mb-8">Last Updated: January 13, 2025</p>

        <div className="prose prose-lg max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-muted-foreground mb-4">
              CloudHost Best Cloud Hosting is dedicated to providing honest, accurate, and comprehensive reviews of cloud hosting solutions. Our mission is to help non-technical users and agencies make informed decisions about their hosting needs through expert analysis and real-world testing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Editorial Independence</h2>
            <p className="text-muted-foreground mb-4">
              Our editorial content is completely independent from our business relationships. While we may earn affiliate commissions from some hosting providers, these partnerships never influence:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Which hosting providers we review</li>
              <li>Our ratings and recommendations</li>
              <li>The content of our reviews</li>
              <li>Our testing methodology</li>
              <li>Our critical assessments</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Our Testing Process</h2>
            <p className="text-muted-foreground mb-4">
              Every hosting provider we review undergoes rigorous testing:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>Performance Testing:</strong> We measure page load speeds, server response times, and database query performance</li>
              <li><strong>Uptime Monitoring:</strong> We track uptime over extended periods using professional monitoring tools</li>
              <li><strong>Support Evaluation:</strong> We test customer support through multiple channels at various times</li>
              <li><strong>User Experience Testing:</strong> We evaluate control panels, setup processes, and ease of use for non-technical users</li>
              <li><strong>Security Assessment:</strong> We review security features, SSL implementation, and backup systems</li>
              <li><strong>Price Analysis:</strong> We compare pricing structures, hidden fees, and overall value</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Accuracy and Updates</h2>
            <p className="text-muted-foreground mb-4">
              We are committed to providing accurate, up-to-date information:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>All reviews are based on current testing and research</li>
              <li>We regularly update our content to reflect changes in hosting services</li>
              <li>Pricing information is verified and updated frequently</li>
              <li>We clearly date all content to show when it was last reviewed</li>
              <li>Corrections are made promptly when errors are identified</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Expertise and Authority</h2>
            <p className="text-muted-foreground mb-4">
              Our team consists of experienced web professionals with extensive knowledge in:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Cloud infrastructure and hosting technologies</li>
              <li>Web development and server management</li>
              <li>Performance optimization</li>
              <li>Security best practices</li>
              <li>Agency and business hosting needs</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Transparency in Recommendations</h2>
            <p className="text-muted-foreground mb-4">
              When we recommend a hosting provider, we clearly explain:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Why we recommend them</li>
              <li>What makes them suitable for specific use cases</li>
              <li>Any limitations or drawbacks</li>
              <li>Who they're best suited for</li>
              <li>Alternative options to consider</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">User Feedback</h2>
            <p className="text-muted-foreground mb-4">
              We value feedback from our readers and the hosting community. User experiences help us:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Validate our testing results</li>
              <li>Identify issues we may have missed</li>
              <li>Update reviews with real-world experiences</li>
              <li>Improve our testing methodology</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Conflicts of Interest</h2>
            <p className="text-muted-foreground mb-4">
              We disclose all potential conflicts of interest, including:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Affiliate relationships with hosting providers</li>
              <li>Sponsored content (clearly labeled)</li>
              <li>Free services provided for testing purposes</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              All such relationships are disclosed upfront, and they never compromise our editorial integrity.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="text-muted-foreground mb-4">
              If you have questions about our editorial policy, spot an error in our content, or want to provide feedback, please contact us through our website contact form. We're committed to maintaining the highest editorial standards and welcome your input.
            </p>
          </section>
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

export default EditorialPolicy;
