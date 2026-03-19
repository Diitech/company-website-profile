import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Truck, 
  Package, 
  Shield, 
  Clock, 
  MapPin,
  CheckCircle,
  ArrowRight,
  Star,
  Phone
} from 'lucide-react';

const packages = [
  {
    name: 'Basic',
    price: '₦25,000',
    period: 'per shipment',
    description: 'Perfect for small packages and personal items',
    features: [
      'Up to 10kg weight limit',
      'Standard delivery (7-10 days)',
      'Basic tracking',
      'Door delivery in Lagos',
      'Email support',
    ],
    notIncluded: [
      'Express delivery',
      'Insurance coverage',
      'Warehousing',
    ],
    icon: Package,
    popular: false,
    color: 'bg-gray-100'
  },
  {
    name: 'Standard',
    price: '₦50,000',
    period: 'per shipment',
    description: 'Ideal for business shipments and medium cargo',
    features: [
      'Up to 50kg weight limit',
      'Express delivery (5-7 days)',
      'Real-time tracking',
      'Door delivery nationwide',
      'Priority support',
      'Basic insurance (₦100k coverage)',
      '3 days free warehousing',
    ],
    notIncluded: [
      'Dedicated account manager',
    ],
    icon: Truck,
    popular: true,
    color: 'bg-primary/10'
  },
  {
    name: 'Premium',
    price: '₦100,000',
    period: 'per shipment',
    description: 'Complete solution for large cargo and businesses',
    features: [
      'Unlimited weight',
      'Priority express (3-5 days)',
      'Advanced tracking with notifications',
      'Door delivery nationwide',
      '24/7 dedicated support',
      'Full insurance coverage',
      '14 days free warehousing',
      'Dedicated account manager',
      'Customs clearance assistance',
    ],
    notIncluded: [],
    icon: Shield,
    popular: false,
    color: 'bg-yellow-100'
  },
];

const routes = [
  { from: 'Lagos', to: 'Abuja', duration: '2-3 days', price: 'From ₦15,000' },
  { from: 'Lagos', to: 'Port Harcourt', duration: '2-3 days', price: 'From ₦12,000' },
  { from: 'Lagos', to: 'Kano', duration: '3-4 days', price: 'From ₦20,000' },
  { from: 'Lagos', to: 'Ibadan', duration: '1-2 days', price: 'From ₦8,000' },
  { from: 'Lagos', to: 'Enugu', duration: '2-3 days', price: 'From ₦15,000' },
  { from: 'Lagos', to: 'Delta', duration: '1-2 days', price: 'From ₦10,000' },
];

const features = [
  {
    icon: Shield,
    title: 'Secure Handling',
    description: 'Your goods are handled with utmost care and security throughout the journey.'
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description: 'We pride ourselves on meeting delivery deadlines consistently.'
  },
  {
    icon: MapPin,
    title: 'Nationwide Coverage',
    description: 'We deliver to all 36 states in Nigeria including FCT Abuja.'
  },
  {
    icon: Phone,
    title: '24/7 Support',
    description: 'Our customer service team is available round the clock.'
  },
];

export default function Packages() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-muted py-16">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">Nigeria Transport Packages</h1>
            <p className="text-xl text-muted-foreground">
              Reliable and affordable logistics solutions for businesses and individuals 
              across Nigeria. Choose the package that fits your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Transport Image */}
      <section className="py-16">
        <div className="container">
          <div className="relative rounded-2xl overflow-hidden">
            <img 
              src="/transport-packages.jpg" 
              alt="Nigeria Transport Services"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-8 text-white">
                <h2 className="text-3xl font-bold mb-2">Nationwide Delivery Network</h2>
                <p className="opacity-90">Connecting businesses across all 36 states in Nigeria</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Choose Your Package</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Flexible pricing options designed to meet different shipping needs 
              and budgets.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, idx) => (
              <Card key={idx} className={`relative ${pkg.popular ? 'border-primary border-2' : ''}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                      <Star className="h-4 w-4" /> Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className={`${pkg.color} rounded-t-lg`}>
                  <pkg.icon className="h-10 w-10 text-primary mb-2" />
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <div className="mt-2">
                    <span className="text-3xl font-bold">{pkg.price}</span>
                    <span className="text-muted-foreground">/{pkg.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">{pkg.description}</p>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {pkg.notIncluded.length > 0 && (
                    <div className="border-t pt-4 mb-6">
                      <p className="text-sm text-muted-foreground mb-2">Not included:</p>
                      <ul className="space-y-1">
                        {pkg.notIncluded.map((item, nidx) => (
                          <li key={nidx} className="text-sm text-muted-foreground line-through">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <Button 
                    asChild 
                    className="w-full" 
                    variant={pkg.popular ? 'default' : 'outline'}
                  >
                    <Link to="/contact">Get Started</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Routes */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Popular Routes</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Estimated delivery times and pricing for our most popular routes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {routes.map((route, idx) => (
              <Card key={idx}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span className="font-medium">{route.from}</span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span className="font-medium">{route.to}</span>
                    </div>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">
                      <Clock className="h-4 w-4 inline mr-1" />
                      {route.duration}
                    </span>
                    <span className="font-semibold text-primary">{route.price}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Our Logistics</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We provide reliable, secure, and efficient transport services across Nigeria.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <Card key={idx} className="text-center">
                <CardContent className="p-6">
                  <feature.icon className="h-10 w-10 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Ship?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Contact us today for a custom quote. We handle everything from pickup 
            to delivery with care and professionalism.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/contact">Get a Quote <ArrowRight className="h-4 w-4 ml-2" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
