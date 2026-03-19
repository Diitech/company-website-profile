import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Star, MessageCircle, ArrowRight, Quote } from 'lucide-react';

const textTestimonials = [
  {
    name: 'Chioma M.',
    role: 'Business Owner',
    content: 'Thank you Dmutiechoice! My goods arrived safely from China. You saved me from fraud. Highly recommended! The entire process was smooth and transparent.',
    rating: 5,
    service: 'Import from China'
  },
  {
    name: 'Pine Ridge Academy',
    role: 'Educational Institution',
    content: 'The AI chatbot you built for my school is amazing! It handles 90% of parent inquiries automatically. Best investment ever! Our staff can now focus on more important tasks.',
    rating: 5,
    service: 'AI Chatbot Development'
  },
  {
    name: 'Sarah Chen',
    role: 'Entrepreneur',
    content: 'My new website looks fantastic! I\'ve already gotten 3 new leads this week. Your team is professional and fast. The SEO optimization is already showing results.',
    rating: 5,
    service: 'Website Development'
  },
  {
    name: 'Emmanuel O.',
    role: 'Construction Company Owner',
    content: 'Just received my furniture from Turkey. Everything was perfect - quality exceeded expectations and delivery was on time. Dmutiechoice is now my go-to import partner!',
    rating: 5,
    service: 'Import from Turkey'
  },
  {
    name: 'Grace International School',
    role: 'Educational Institution',
    content: 'Your social media management has increased our school\'s enrollment by 40%! The content strategy is brilliant. Parents are engaging more with our posts.',
    rating: 5,
    service: 'Social Media Management'
  },
  {
    name: 'Aisha M.',
    role: 'Online Course Graduate',
    content: 'The AI and Digital Marketing course from Dmutiechoice transformed my career. I got a job within 2 months of completing the course! The instructors are top-notch.',
    rating: 5,
    service: 'Online Training'
  },
];

const whatsappTestimonials = [
  {
    image: '/whatsapp-testimonial-1.jpg',
    caption: 'Client feedback after successful import from China'
  },
  {
    image: '/whatsapp-testimonial-2.jpg',
    caption: 'School administrator praising our AI chatbot solution'
  },
  {
    image: '/whatsapp-testimonial-3.jpg',
    caption: 'Happy client after website launch'
  },
  {
    image: '/whatsapp-testimonial-4.jpg',
    caption: 'Furniture import from Turkey - exceeded expectations'
  },
  {
    image: '/whatsapp-testimonial-5.jpg',
    caption: 'Social media management results'
  },
];

const referralMessages = [
  {
    image: '/whatsapp-referral-1.jpg',
    caption: 'New client referral for electronics import from Turkey'
  },
  {
    image: '/whatsapp-contact-1.jpg',
    caption: 'Referred client reaching out for building materials from Italy'
  },
];

export default function Testimonials() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-muted py-16">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">Client Testimonials</h1>
            <p className="text-xl text-muted-foreground">
              Real feedback from real clients. See why businesses and individuals 
              across Nigeria trust Dmutiechoice for their digital and import needs.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground mt-1">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground mt-1">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">5.0</div>
              <div className="text-sm text-muted-foreground mt-1">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">80%</div>
              <div className="text-sm text-muted-foreground mt-1">Referral Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Text Testimonials */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Genuine testimonials from businesses and individuals who have experienced 
              the Dmutiechoice difference.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {textTestimonials.map((testimonial, idx) => (
              <Card key={idx} className="h-full">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <Quote className="h-8 w-8 text-primary/20 mb-2" />
                  <p className="text-muted-foreground mb-4">{testimonial.content}</p>
                  <div className="border-t pt-4">
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-xs text-primary mt-1">{testimonial.service}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp Testimonials */}
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <MessageCircle className="h-4 w-4" />
              WhatsApp Testimonials
            </div>
            <h2 className="text-3xl font-bold mb-4">Real Conversations, Real Results</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Screenshots of actual client conversations showing their satisfaction 
              with our services.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatsappTestimonials.map((item, idx) => (
              <Card key={idx} className="overflow-hidden">
                <div className="aspect-[9/16] overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.caption}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </div>
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground">{item.caption}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Referral Messages */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Client Referrals</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our clients love us so much, they refer their friends and colleagues. 
              Here are some referral messages we receive.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {referralMessages.map((item, idx) => (
              <Card key={idx} className="overflow-hidden">
                <div className="aspect-[9/16] overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.caption}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </div>
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground">{item.caption}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Satisfied Clients</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Experience the Dmutiechoice difference. Contact us today and let's 
            discuss how we can help your business grow.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/contact">Get Started <ArrowRight className="h-4 w-4 ml-2" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
