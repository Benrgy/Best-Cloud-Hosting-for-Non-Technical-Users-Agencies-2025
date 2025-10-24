import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const AffiliateDisclosure = () => {
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
        <h1 className="text-4xl font-bold mb-6">Affiliate Disclosure</h1>
        <p className="text-muted-foreground mb-8">Last Updated: January 13, 2025</p>

        <div className="prose prose-lg max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-bold mb-4">Transparency in Our Recommendations</h2>
            <p className="text-muted-foreground mb-4">
              At CloudHost Best Cloud Hosting, we believe in complete transparency with our readers. This page explains how we may earn commissions from the hosting providers we review and recommend.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">What Are Affiliate Links?</h2>
            <p className="text-muted-foreground mb-4">
              Some of the links on our website are affiliate links. This means that if you click on a link and make a purchase, we may receive a commission at no extra cost to you. These commissions help us maintain and improve our website, conduct thorough testing, and provide you with honest, detailed reviews.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Our Review Process Remains Unbiased</h2>
            <p className="text-muted-foreground mb-4">
              The existence of affiliate partnerships does not influence our editorial content or recommendations. Our reviews are based on:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Extensive hands-on testing of each hosting provider</li>
              <li>Real performance benchmarks and uptime monitoring</li>
              <li>Customer support quality assessments</li>
              <li>Price-to-value analysis</li>
              <li>User feedback and experiences</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Why We Use Affiliate Links</h2>
            <p className="text-muted-foreground mb-4">
              Running comprehensive hosting reviews requires significant resources including:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Purchasing and maintaining multiple hosting accounts for testing</li>
              <li>Professional monitoring tools and performance testing software</li>
              <li>Time spent researching and writing detailed reviews</li>
              <li>Regular updates to reflect changes in hosting services</li>
              <li>Website maintenance and hosting costs</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              Affiliate commissions help us cover these costs while keeping our content free for you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">How We Choose What to Recommend</h2>
            <p className="text-muted-foreground mb-4">
              We only recommend hosting providers that we have personally tested and believe offer genuine value to our readers. Our recommendations are based on:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Actual performance and reliability</li>
              <li>Quality of customer support</li>
              <li>User-friendliness for non-technical users</li>
              <li>Fair pricing and transparent billing</li>
              <li>Positive user reviews and reputation</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              We will never recommend a service solely because it offers a high commission rate.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">FTC Compliance</h2>
            <p className="text-muted-foreground mb-4">
              This disclosure is in accordance with the Federal Trade Commission's 16 CFR, Part 255: "Guides Concerning the Use of Endorsements and Testimonials in Advertising."
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Your Support Helps Us</h2>
            <p className="text-muted-foreground mb-4">
              When you use our affiliate links to make a purchase, you're supporting our work at no additional cost to you. This allows us to continue providing free, honest, and comprehensive hosting reviews to help non-technical users and agencies make informed decisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Questions?</h2>
            <p className="text-muted-foreground mb-4">
              If you have any questions about our affiliate relationships or review process, please don't hesitate to contact us through our website contact form. We're committed to maintaining your trust and providing transparent, valuable information.
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

export default AffiliateDisclosure;
