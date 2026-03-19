import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Code, 
  Bot, 
  ShoppingCart, 
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Smartphone,
  Home,
  Car,
  Building,
  Factory
} from 'lucide-react';

const digitalServices = [
  {
    title: 'Website Development',
    description: 'Modern, secure, and professional websites tailored for schools, businesses, corporate institutions, entrepreneurs, and e-commerce brands.',
    features: [
      'Mobile responsive design',
      'Professional aesthetics',
      'SEO optimization',
      'Secure and scalable architecture',
      'Built for growth and credibility'
    ],
    icon: Code
  },
  {
    title: 'Website Management & Maintenance',
    description: 'Structured website management to ensure your digital presence remains secure, active, and professionally maintained.',
    features: [
      'Security monitoring',
      'Regular updates',
      'Backup protection',
      'Performance optimization',
      'Technical support',
      'Continuous monitoring'
    ],
    icon: TrendingUp
  },
  {
    title: 'Social Media Management',
    description: 'Grow visibility and engagement through strategic content planning and professional management.',
    features: [
      'Account setup & branding',
      'Content planning & creation',
      'Graphic design',
      'Post scheduling',
      'Audience engagement',
      'Growth strategy',
      'Monthly reporting'
    ],
    icon: TrendingUp
  },
];

const aiServices = [
  {
    title: 'AI Chatbots',
    description: 'Intelligent chatbots for websites that handle customer inquiries 24/7.',
    icon: Bot
  },
  {
    title: 'Automated Customer Support',
    description: 'Smart systems that streamline customer service operations.',
    icon: CheckCircle
  },
  {
    title: 'Business Workflow Automation',
    description: 'Automate repetitive tasks and improve operational efficiency.',
    icon: Factory
  },
  {
    title: 'AI Consultation & Training',
    description: 'Expert guidance on integrating AI into your business operations.',
    icon: Bot
  },
];

const procurementProducts = [
  { name: 'Technology & Gadgets', icon: Smartphone, items: ['Smartphones', 'Laptops', 'Electronics', 'Smart devices'] },
  { name: 'Home & Kitchen Appliances', icon: Home, items: ['Refrigerators', 'Gas cookers', 'Washing machines', 'Kitchen equipment'] },
  { name: 'Fashion & Wears', icon: CheckCircle, items: ['Clothing', 'Shoes', 'Accessories'] },
  { name: 'Furniture', icon: Home, items: ['Office furniture', 'School furniture', 'Home furniture'] },
  { name: 'Automobiles', icon: Car, items: ['Cars', 'Auto parts', 'Vehicle accessories'] },
  { name: 'Building Materials', icon: Building, items: ['Tiles', 'Doors', 'Roofing materials', 'Construction supplies'] },
  { name: 'Industrial Equipment', icon: Factory, items: ['Factory machines', 'Processing equipment', 'Production tools', 'Specialized machinery'] },
];

const countries = [
  { name: 'China', flag: '🇨🇳' },
  { name: 'United Kingdom', flag: '🇬🇧' },
  { name: 'Turkey', flag: '🇹🇷' },
  { name: 'Italy', flag: '🇮🇹' },
];

export default function Services() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-muted py-16">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">Our Services</h1>
            <p className="text-xl text-muted-foreground">
              We build, manage, automate, and source. Comprehensive solutions for 
              your digital transformation and global procurement needs.
            </p>
          </div>
        </div>
      </section>

      {/* Digital Solutions */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Code className="h-4 w-4" />
              Digital Solutions Division
            </div>
            <h2 className="text-3xl font-bold mb-4">Website & Digital Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We design and develop modern, secure, and professional digital solutions 
              tailored for schools, businesses, and institutions.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {digitalServices.map((service, idx) => (
              <Card key={idx} className="h-full">
                <CardHeader>
                  <service.icon className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI & Automation */}
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Bot className="h-4 w-4" />
              AI & Automation Division
            </div>
            <h2 className="text-3xl font-bold mb-4">AI & Automation Solutions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We build and teach AI-driven solutions that improve efficiency and innovation. 
              Our goal is to make AI practical, not complicated.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiServices.map((service, idx) => (
              <Card key={idx} className="text-center">
                <CardContent className="p-6">
                  <service.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Procurement */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <ShoppingCart className="h-4 w-4" />
              International Sourcing Division
            </div>
            <h2 className="text-3xl font-bold mb-4">Global Procurement & Import Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We operate as a professional international buying and procurement agent, 
              helping individuals, schools, and businesses source quality products directly 
              from verified foreign suppliers.
            </p>
          </div>

          {/* Countries */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-center mb-6">Countries We Source From</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {countries.map((country, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-muted px-6 py-3 rounded-full">
                  <span className="text-2xl">{country.flag}</span>
                  <span className="font-medium">{country.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Products */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {procurementProducts.map((product, idx) => (
              <Card key={idx}>
                <CardContent className="p-6">
                  <product.icon className="h-8 w-8 text-primary mb-3" />
                  <h3 className="font-semibold mb-2">{product.name}</h3>
                  <ul className="space-y-1">
                    {product.items.map((item, iidx) => (
                      <li key={iidx} className="text-sm text-muted-foreground flex items-center gap-1">
                        <CheckCircle className="h-3 w-3 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Process */}
          <div className="mt-12">
            <h3 className="text-xl font-semibold text-center mb-6">Our Buying & Verification Process</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                'Verify suppliers and manufacturers',
                'Confirm product authenticity',
                'Negotiate competitive pricing',
                'Review product specifications',
                'Coordinate international shipping',
                'Assist with logistics to Nigeria',
                'Provide transparent procurement guidance',
              ].map((step, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-muted p-4 rounded-lg">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {idx + 1}
                  </div>
                  <span className="text-sm">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your project and get a tailored solution 
            for your needs.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/contact">Request a Quote <ArrowRight className="h-4 w-4 ml-2" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
