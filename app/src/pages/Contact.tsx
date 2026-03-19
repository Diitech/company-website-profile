import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { toast } from 'sonner';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  MessageCircle,
  Send,
  CheckCircle
} from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    content: '+234 815 848 4621',
    link: 'tel:+2348158484621',
    description: 'Call us for immediate assistance'
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'Deliamutiempire@gmail.com',
    link: 'mailto:Deliamutiempire@gmail.com',
    description: 'Send us an email anytime'
  },
  {
    icon: MapPin,
    title: 'Address',
    content: '9, No 9 Okene Street, Okuokoko, Delta, Nigeria',
    link: '#',
    description: 'Visit our office'
  },
  {
    icon: Clock,
    title: 'Business Hours',
    content: 'Mon - Sat: 8:00 AM - 6:00 PM',
    link: '#',
    description: 'We\'re here to help'
  },
];

const services = [
  'Website Development',
  'Website Management',
  'Social Media Management',
  'AI Agent Development',
  'International Product Sourcing',
  'Import Services',
  'Online Classes',
  'Other'
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success('Message sent successfully! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-muted py-16">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-muted-foreground">
              Ready to discuss your project? Get in touch with us today. 
              We're here to help you build, manage, and grow.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, idx) => (
              <Card key={idx} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-1">{info.title}</h3>
                  <a 
                    href={info.link} 
                    className="text-primary hover:underline font-medium block mb-1"
                  >
                    {info.content}
                  </a>
                  <p className="text-sm text-muted-foreground">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & WhatsApp */}
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input 
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input 
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+234 ..."
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="service">Service Interested In</Label>
                    <Select 
                      value={formData.service} 
                      onValueChange={(value) => setFormData(prev => ({ ...prev, service: value }))}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service, idx) => (
                          <SelectItem key={idx} value={service}>{service}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Your Message *</Label>
                  <Textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    rows={5}
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" /> Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* WhatsApp Contact */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Chat on WhatsApp</h2>
              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                      <MessageCircle className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">WhatsApp Business</h3>
                      <p className="text-muted-foreground">Fast response during business hours</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Prefer to chat? Reach out to us on WhatsApp for quick inquiries, 
                    quotes, and support. We're just a message away!
                  </p>
                  <div className="space-y-3">
                    <a 
                      href="https://wa.me/2348158484621" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Button className="w-full bg-green-500 hover:bg-green-600">
                        <MessageCircle className="h-4 w-4 mr-2" /> Chat on WhatsApp
                      </Button>
                    </a>
                    <div className="text-center text-sm text-muted-foreground">
                      Or call us directly at <a href="tel:+2348158484621" className="text-primary hover:underline">+234 815 848 4621</a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Response Promise */}
              <Card className="mt-6">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Our Response Promise</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-sm">WhatsApp: Within 1 hour</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-sm">Email: Within 24 hours</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-sm">Phone: Immediate during business hours</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">Visit Our Office</h2>
            <p className="text-muted-foreground">We're located in Okuokoko, Delta State, Nigeria</p>
          </div>
          <div className="bg-muted rounded-2xl overflow-hidden h-[400px] flex items-center justify-center">
            <div className="text-center p-8">
              <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Dmutiechoice Office</h3>
              <p className="text-muted-foreground mb-4">
                9, No 9 Okene Street<br />
                Okuokoko, Delta State<br />
                Nigeria
              </p>
              <Button asChild variant="outline">
                <a 
                  href="https://maps.google.com/?q=Okuokoko+Delta+Nigeria" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <MapPin className="h-4 w-4 mr-2" /> Get Directions
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Let's Build Together</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Whether you need a website, AI solution, or import services, 
            we're ready to help you achieve your goals.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://wa.me/2348158484621" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="secondary">
                <MessageCircle className="h-4 w-4 mr-2" /> Chat on WhatsApp
              </Button>
            </a>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <a href="tel:+2348158484621">
                <Phone className="h-4 w-4 mr-2" /> Call Now
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
