import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  Package, 
  Users, 
  Globe, 
  CheckCircle,
  ArrowRight,
  Calendar,
  FileSpreadsheet
} from 'lucide-react';

const trackRecords = [
  {
    month: 'January 2024',
    imports: 12,
    clients: 8,
    countries: ['China', 'UK', 'Turkey'],
    topCategory: 'Electronics'
  },
  {
    month: 'February 2024',
    imports: 15,
    clients: 10,
    countries: ['China', 'Italy', 'Turkey'],
    topCategory: 'Furniture'
  },
  {
    month: 'March 2024',
    imports: 18,
    clients: 12,
    countries: ['China', 'UK', 'Turkey', 'Italy'],
    topCategory: 'Building Materials'
  },
  {
    month: 'April 2024',
    imports: 20,
    clients: 14,
    countries: ['China', 'Turkey'],
    topCategory: 'Industrial Equipment'
  },
  {
    month: 'May 2024',
    imports: 22,
    clients: 15,
    countries: ['China', 'UK', 'Italy'],
    topCategory: 'Home Appliances'
  },
  {
    month: 'June 2024',
    imports: 25,
    clients: 18,
    countries: ['China', 'UK', 'Turkey', 'Italy'],
    topCategory: 'Automobile Parts'
  },
];

const categories = [
  { name: 'Technology & Gadgets', count: 45, growth: '+23%' },
  { name: 'Home & Kitchen Appliances', count: 38, growth: '+18%' },
  { name: 'Fashion & Wears', count: 32, growth: '+15%' },
  { name: 'Furniture', count: 28, growth: '+21%' },
  { name: 'Automobiles & Parts', count: 22, growth: '+30%' },
  { name: 'Building Materials', count: 35, growth: '+25%' },
  { name: 'Industrial Equipment', count: 18, growth: '+12%' },
];

const countries = [
  { name: 'China', flag: '🇨🇳', orders: 120, percentage: 55 },
  { name: 'United Kingdom', flag: '🇬🇧', orders: 35, percentage: 16 },
  { name: 'Turkey', flag: '🇹🇷', orders: 42, percentage: 19 },
  { name: 'Italy', flag: '🇮🇹', orders: 22, percentage: 10 },
];

export default function TrackRecord() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-muted py-16">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">Track Record</h1>
            <p className="text-xl text-muted-foreground">
              Our proven track record of successful imports and satisfied clients. 
              Transparency and results you can count on.
            </p>
          </div>
        </div>
      </section>

      {/* Excel Showcase */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <FileSpreadsheet className="h-4 w-4" />
                Transparent Records
              </div>
              <h2 className="text-3xl font-bold mb-4">Detailed Import Tracking</h2>
              <p className="text-muted-foreground mb-6">
                We maintain detailed records of every import transaction. Our clients 
                have full visibility into their orders, from sourcing to delivery. 
                This transparency is what sets us apart.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  'Real-time order tracking',
                  'Detailed supplier verification records',
                  'Delivery confirmation documentation',
                  'Quality inspection reports',
                  'Complete transaction history',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild>
                <Link to="/contact">Start Your Import Journey</Link>
              </Button>
            </div>
            <div>
              <img 
                src="/excel-track-record.jpg" 
                alt="Excel Track Record"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <Package className="h-10 w-10 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold">500+</div>
                <div className="text-sm text-muted-foreground">Total Imports</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Users className="h-10 w-10 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold">50+</div>
                <div className="text-sm text-muted-foreground">Active Clients</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Globe className="h-10 w-10 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold">4</div>
                <div className="text-sm text-muted-foreground">Source Countries</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <TrendingUp className="h-10 w-10 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold">98%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Monthly Performance */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Monthly Performance (2024)</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Consistent growth in imports and client satisfaction throughout the year.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trackRecords.map((record, idx) => (
              <Card key={idx}>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    <CardTitle className="text-lg">{record.month}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="text-2xl font-bold text-primary">{record.imports}</div>
                      <div className="text-xs text-muted-foreground">Imports</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">{record.clients}</div>
                      <div className="text-xs text-muted-foreground">Clients</div>
                    </div>
                  </div>
                  <div className="text-sm">
                    <span className="text-muted-foreground">Countries: </span>
                    <span className="font-medium">{record.countries.join(', ')}</span>
                  </div>
                  <div className="text-sm mt-1">
                    <span className="text-muted-foreground">Top Category: </span>
                    <span className="font-medium">{record.topCategory}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Category Breakdown */}
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Import Categories</h2>
              <p className="text-muted-foreground mb-6">
                Breakdown of products we've successfully imported for our clients.
              </p>
              <div className="space-y-4">
                {categories.map((cat, idx) => (
                  <div key={idx} className="flex items-center justify-between bg-white p-4 rounded-lg">
                    <div>
                      <div className="font-medium">{cat.name}</div>
                      <div className="text-sm text-muted-foreground">{cat.count} orders</div>
                    </div>
                    <div className="text-green-600 font-semibold">{cat.growth}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Source Countries</h2>
              <p className="text-muted-foreground mb-6">
                Distribution of imports by source country.
              </p>
              <div className="space-y-4">
                {countries.map((country, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{country.flag}</span>
                        <span className="font-medium">{country.name}</span>
                      </div>
                      <div className="text-sm text-muted-foreground">{country.orders} orders</div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full"
                        style={{ width: `${country.percentage}%` }}
                      />
                    </div>
                    <div className="text-right text-xs text-muted-foreground mt-1">
                      {country.percentage}%
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Add Your Success Story</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Join our growing list of satisfied clients. Let us help you import 
            quality products from verified international suppliers.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/contact">Start Importing <ArrowRight className="h-4 w-4 ml-2" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
