import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Target, 
  Eye, 
  Award, 
  Users, 
  Globe, 
  Shield,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: 'Trust & Integrity',
    description: 'We build relationships based on honesty and transparency.'
  },
  {
    icon: Target,
    title: 'Excellence',
    description: 'We deliver professional solutions that exceed expectations.'
  },
  {
    icon: Users,
    title: 'Partnership',
    description: 'We are long-term strategic partners, not just service providers.'
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Connecting Nigeria to verified international markets.'
  },
];

const advantages = [
  'Website Development + Management Combined',
  'AI Integration Capability',
  'Local Pricing with Professional Standards',
  'Verified International Supplier Network',
  'Risk-Reduced Procurement System',
  'Long-Term Partnership Approach',
];

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-muted py-16">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">About Dmutiechoice</h1>
            <p className="text-xl text-muted-foreground">
              Digital Solutions & Global Procurement Company - Your trusted partner 
              for building, managing, automating, and sourcing since 2022.
            </p>
          </div>
        </div>
      </section>

      {/* CEO Profile Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/ceo-photo.png" 
                alt="Lucky Joy - CEO & Founder" 
                className="rounded-2xl shadow-xl w-full max-w-md mx-auto"
              />
            </div>
            <div>
              <div className="text-primary font-semibold mb-2">Founder & CEO</div>
              <h2 className="text-3xl font-bold mb-4">Lucky Joy</h2>
              <p className="text-muted-foreground mb-4">
                Lucky Joy is the visionary founder and CEO of Dmutiechoice, a forward-thinking 
                digital transformation and international procurement company. With a passion for 
                technology and global trade, she established Dmutiechoice in 2022 with a mission 
                to help schools, businesses, and institutions grow through innovative digital solutions 
                and safe access to international markets.
              </p>
              <p className="text-muted-foreground mb-4">
                Under her leadership, Dmutiechoice has grown to become a trusted partner for 
                hundreds of clients across Nigeria, providing professional website development, 
                AI automation solutions, and verified import services from China, UK, Turkey, and Italy.
              </p>
              <p className="text-muted-foreground mb-6">
                Lucky Joy holds a Tax Identification Number (TIN) 1072093089 registered with the 
                Delta State Board of Internal Revenue, demonstrating her commitment to operating 
                a legitimate and compliant business.
              </p>
              <div className="flex gap-4">
                <Button asChild>
                  <Link to="/contact">Work With Us</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/certificate">View Certificate</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="h-full">
              <CardContent className="p-8">
                <Eye className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground">
                  To become a leading digital transformation and global procurement partner 
                  for schools and businesses across Nigeria and beyond. We aim to bridge the 
                  gap between Nigeria and international markets, enabling businesses and 
                  individuals to access global products safely, affordably, and efficiently.
                </p>
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardContent className="p-8">
                <Target className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>To build secure digital systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>To simplify technology for institutions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>To integrate AI into everyday operations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>To provide safe access to international markets</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>To create long-term professional partnerships</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do at Dmutiechoice.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <Card key={idx} className="text-center">
                <CardContent className="p-6">
                  <value.icon className="h-10 w-10 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Competitive Advantage */}
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Competitive Advantage</h2>
              <p className="text-muted-foreground mb-6">
                What sets Dmutiechoice apart from the competition is our unique combination 
                of digital expertise and international procurement experience.
              </p>
              <ul className="space-y-3">
                {advantages.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-primary text-primary-foreground p-6 rounded-lg text-center">
                <div className="text-4xl font-bold">2022</div>
                <div className="text-sm opacity-90">Year Founded</div>
              </div>
              <div className="bg-primary text-primary-foreground p-6 rounded-lg text-center">
                <div className="text-4xl font-bold">500+</div>
                <div className="text-sm opacity-90">Projects Done</div>
              </div>
              <div className="bg-primary text-primary-foreground p-6 rounded-lg text-center">
                <div className="text-4xl font-bold">50+</div>
                <div className="text-sm opacity-90">Happy Clients</div>
              </div>
              <div className="bg-primary text-primary-foreground p-6 rounded-lg text-center">
                <div className="text-4xl font-bold">4</div>
                <div className="text-sm opacity-90">Global Markets</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Strategy */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Growth Strategy (3-5 Years)</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We have a clear roadmap for the future.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              'Expand school digital management portfolio',
              'Build recurring monthly management clients',
              'Introduce AI solutions across institutions',
              'Strengthen international supplier network',
              'Establish Dmutiechoice as a recognized digital systems brand',
            ].map((item, idx) => (
              <Card key={idx} className="text-center">
                <CardContent className="p-6">
                  <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                    {idx + 1}
                  </div>
                  <p className="text-sm">{item}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Let's Build Together</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Ready to transform your business? Contact us today and let's discuss 
            how Dmutiechoice can help you achieve your goals.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/contact">Get Started <ArrowRight className="h-4 w-4 ml-2" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
