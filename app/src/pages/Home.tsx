import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Code, 
  Bot, 
  ShoppingCart, 
  TrendingUp, 
  CheckCircle,
  ArrowRight,
  Star
} from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Website Development',
    description: 'Modern, secure, and professional websites tailored for schools, businesses, and institutions.',
    link: '/services'
  },
  {
    icon: Bot,
    title: 'AI & Automation',
    description: 'AI chatbots, automated customer support, and business workflow automation solutions.',
    link: '/services'
  },
  {
    icon: ShoppingCart,
    title: 'Global Procurement',
    description: 'Import quality products from verified suppliers in China, UK, Turkey, and Italy.',
    link: '/services'
  },
  {
    icon: TrendingUp,
    title: 'Social Media Management',
    description: 'Strategic content planning, graphic design, and audience engagement.',
    link: '/services'
  },
];

const stats = [
  { value: '500+', label: 'Projects Completed' },
  { value: '50+', label: 'Happy Clients' },
  { value: '4', label: 'Countries Sourced' },
  { value: '3+', label: 'Years Experience' },
];

const testimonials = [
  {
    name: 'Chioma M.',
    role: 'Business Owner',
    content: 'Thank you Dmutiechoice! My goods arrived safely from China. You saved me from fraud. Highly recommended!',
    rating: 5
  },
  {
    name: 'Pine Ridge Academy',
    role: 'Educational Institution',
    content: 'The AI chatbot you built for my school is amazing! It handles 90% of parent inquiries automatically.',
    rating: 5
  },
  {
    name: 'Sarah Chen',
    role: 'Entrepreneur',
    content: 'My new website looks fantastic! I\'ve already gotten 3 new leads this week. Professional and fast service.',
    rating: 5
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/hero-bg.jpg)' }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Digital Solutions & Global Procurement
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              We build, manage, automate, and source. Your trusted partner for 
              website development, AI solutions, and international import services.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link to="/services">Explore Services</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-muted">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Core Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We combine digital innovation with international buying expertise 
              to deliver structured, reliable, and scalable solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <Card key={idx} className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <service.icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                  <Link 
                    to={service.link} 
                    className="inline-flex items-center text-primary text-sm font-medium group-hover:underline"
                  >
                    Learn More <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose Dmutiechoice?</h2>
              <p className="text-muted-foreground mb-6">
                We are not just service providers — we are long-term strategic partners. 
                Our strength lies in combining digital innovation with international buying 
                expertise to deliver structured, reliable, and scalable solutions.
              </p>
              <ul className="space-y-3">
                {[
                  'Access to global markets',
                  'Lower product costs',
                  'Supplier verification',
                  'Transparent procurement process',
                  'Professional representation',
                  'Local support in Nigeria',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="/excel-track-record.jpg" 
                alt="Track Record" 
                className="rounded-lg shadow-lg col-span-2"
              />
              <img 
                src="/whatsapp-testimonial-1.jpg" 
                alt="Client Testimonial" 
                className="rounded-lg shadow-lg"
              />
              <img 
                src="/transport-packages.jpg" 
                alt="Logistics" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real feedback from real clients. See why businesses and individuals trust Dmutiechoice.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="h-full">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link to="/testimonials">View All Testimonials</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Let's build, manage, and grow together. Contact us today for a free consultation 
            and discover how Dmutiechoice can transform your business.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">Contact Us Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
