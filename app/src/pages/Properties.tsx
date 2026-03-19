import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  Star, 
  MapPin, 
  Bed, 
  Bath, 
  Users, 
  Wifi, 
  Car,
  Shield,
  ArrowRight,
  Heart
} from 'lucide-react';

const properties = [
  {
    id: 1,
    name: 'Luxury Ikeoha Residences',
    location: 'Lekki, Lagos',
    type: 'Apartment',
    price: '₦85,000',
    period: 'per night',
    rating: 4.5,
    reviews: 125,
    image: '/property-sample-1.jpg',
    beds: 3,
    baths: 2,
    guests: 6,
    amenities: ['Pool', 'WiFi', 'Security', 'Parking'],
    featured: true,
    badge: 'Preferred Partner'
  },
  {
    id: 2,
    name: 'Victoria Island Villa',
    location: 'Victoria Island, Lagos',
    type: 'Villa',
    price: '₦150,000',
    period: 'per night',
    rating: 5.0,
    reviews: 89,
    image: '/property-sample-2.jpg',
    beds: 5,
    baths: 4,
    guests: 10,
    amenities: ['Pool', 'WiFi', 'Security', 'Parking', 'Garden'],
    featured: true,
    badge: 'Premium Listing'
  },
  {
    id: 3,
    name: 'Abuja Executive Suites',
    location: 'Maitama, Abuja',
    type: 'Serviced Apartment',
    price: '₦65,000',
    period: 'per night',
    rating: 4.8,
    reviews: 210,
    image: '/property-sample-1.jpg',
    beds: 2,
    baths: 2,
    guests: 4,
    amenities: ['WiFi', 'Security', 'Parking', 'Gym'],
    featured: false,
    badge: null
  },
  {
    id: 4,
    name: 'Port Harcourt Garden Estate',
    location: 'GRA Phase 3, Port Harcourt',
    type: 'House',
    price: '₦45,000',
    period: 'per night',
    rating: 4.3,
    reviews: 67,
    image: '/property-sample-2.jpg',
    beds: 4,
    baths: 3,
    guests: 8,
    amenities: ['Garden', 'Parking', 'Security'],
    featured: false,
    badge: null
  },
  {
    id: 5,
    name: 'Ibadan Royal Apartments',
    location: 'Ring Road, Ibadan',
    type: 'Apartment',
    price: '₦25,000',
    period: 'per night',
    rating: 4.2,
    reviews: 45,
    image: '/property-sample-1.jpg',
    beds: 2,
    baths: 1,
    guests: 3,
    amenities: ['WiFi', 'Parking'],
    featured: false,
    badge: null
  },
  {
    id: 6,
    name: 'Kano Luxury Palace',
    location: 'Bompai, Kano',
    type: 'Villa',
    price: '₦75,000',
    period: 'per night',
    rating: 4.7,
    reviews: 34,
    image: '/property-sample-2.jpg',
    beds: 6,
    baths: 5,
    guests: 12,
    amenities: ['Pool', 'WiFi', 'Security', 'Parking', 'Garden'],
    featured: true,
    badge: 'New Listing'
  },
];

const amenityIcons: Record<string, React.ElementType> = {
  'Pool': MapPin,
  'WiFi': Wifi,
  'Security': Shield,
  'Parking': Car,
  'Garden': MapPin,
  'Gym': Users,
};

export default function Properties() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-muted py-16">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">Property Listings</h1>
            <p className="text-xl text-muted-foreground">
              Discover premium properties across Nigeria. From luxury apartments to 
              spacious villas, find your perfect accommodation.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Featured Properties</h2>
            <Button variant="outline" size="sm">View All</Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.filter(p => p.featured).map((property) => (
              <Card key={property.id} className="overflow-hidden group">
                <div className="relative">
                  <img 
                    src={property.image} 
                    alt={property.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                  />
                  {property.badge && (
                    <Badge className="absolute top-3 left-3 bg-primary">
                      {property.badge}
                    </Badge>
                  )}
                  <button className="absolute top-3 right-3 p-2 bg-white/80 rounded-full hover:bg-white transition">
                    <Heart className="h-4 w-4" />
                  </button>
                </div>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-semibold text-lg">{property.name}</h3>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        {property.location}
                      </div>
                    </div>
                    <div className="flex items-center gap-1 bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
                      <Star className="h-3 w-3 fill-current" />
                      {property.rating}
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Bed className="h-4 w-4" /> {property.beds}
                    </span>
                    <span className="flex items-center gap-1">
                      <Bath className="h-4 w-4" /> {property.baths}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="h-4 w-4" /> {property.guests}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {property.amenities.map((amenity, idx) => {
                      const Icon = amenityIcons[amenity] || MapPin;
                      return (
                        <span key={idx} className="flex items-center gap-1 text-xs bg-muted px-2 py-1 rounded">
                          <Icon className="h-3 w-3" /> {amenity}
                        </span>
                      );
                    })}
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xl font-bold">{property.price}</span>
                      <span className="text-sm text-muted-foreground">/{property.period}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{property.reviews} reviews</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Properties */}
      <section className="py-16 bg-muted">
        <div className="container">
          <h2 className="text-2xl font-bold mb-8">All Properties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.map((property) => (
              <Card key={property.id} className="overflow-hidden group">
                <div className="relative">
                  <img 
                    src={property.image} 
                    alt={property.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                  />
                  {property.badge && (
                    <Badge className="absolute top-3 left-3 bg-primary">
                      {property.badge}
                    </Badge>
                  )}
                </div>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-semibold">{property.name}</h3>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        {property.location}
                      </div>
                    </div>
                    <div className="flex items-center gap-1 bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
                      <Star className="h-3 w-3 fill-current" />
                      {property.rating}
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Bed className="h-4 w-4" /> {property.beds}
                    </span>
                    <span className="flex items-center gap-1">
                      <Bath className="h-4 w-4" /> {property.baths}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="h-4 w-4" /> {property.guests}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-lg font-bold">{property.price}</span>
                      <span className="text-sm text-muted-foreground">/{property.period}</span>
                    </div>
                    <Button size="sm" asChild>
                      <Link to="/contact">Book Now</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Property Management CTA */}
      <section className="py-16">
        <div className="container">
          <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">List Your Property</h2>
                <p className="text-lg opacity-90 mb-6">
                  Are you a property owner? Partner with Dmutiechoice to reach thousands 
                  of potential guests. We handle bookings, payments, and guest management.
                </p>
                <ul className="space-y-2 mb-6">
                  {[
                    'Professional property listing',
                    '24/7 booking management',
                    'Secure payment processing',
                    'Guest verification',
                    'Marketing and promotion'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Shield className="h-5 w-5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild variant="secondary" size="lg">
                  <Link to="/contact">List Your Property <ArrowRight className="h-4 w-4 ml-2" /></Link>
                </Button>
              </div>
              <div className="hidden lg:block">
                <img 
                  src="/property-sample-2.jpg" 
                  alt="Property Management"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
