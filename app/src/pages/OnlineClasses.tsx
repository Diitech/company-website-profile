import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Video, 
  Award, 
  Users, 
  Clock, 
  ArrowRight,
  Star,
  Play
} from 'lucide-react';

const courses = [
  {
    id: 1,
    title: 'AI & Automation Fundamentals',
    description: 'Learn the basics of artificial intelligence and how to implement automation in your business.',
    duration: '8 weeks',
    students: 245,
    rating: 4.9,
    price: '₦75,000',
    image: '/online-class-1.jpg',
    topics: ['AI Basics', 'Chatbot Development', 'Workflow Automation', 'AI Tools'],
    level: 'Beginner',
    featured: true
  },
  {
    id: 2,
    title: 'Digital Marketing Mastery',
    description: 'Master the art of digital marketing including SEO, social media, and content strategy.',
    duration: '10 weeks',
    students: 189,
    rating: 4.8,
    price: '₦65,000',
    image: '/online-class-1.jpg',
    topics: ['SEO', 'Social Media', 'Email Marketing', 'Analytics'],
    level: 'Intermediate',
    featured: true
  },
  {
    id: 3,
    title: 'Website Development Bootcamp',
    description: 'Build modern, responsive websites from scratch using the latest technologies.',
    duration: '12 weeks',
    students: 312,
    rating: 4.9,
    price: '₦85,000',
    image: '/online-class-1.jpg',
    topics: ['HTML/CSS', 'JavaScript', 'React', 'Deployment'],
    level: 'Beginner to Advanced',
    featured: true
  },
  {
    id: 4,
    title: 'E-commerce & Dropshipping',
    description: 'Launch and scale your online store with proven e-commerce strategies.',
    duration: '6 weeks',
    students: 156,
    rating: 4.7,
    price: '₦55,000',
    image: '/online-class-1.jpg',
    topics: ['Store Setup', 'Product Sourcing', 'Marketing', 'Fulfillment'],
    level: 'Beginner',
    featured: false
  },
  {
    id: 5,
    title: 'Import & Export Business',
    description: 'Learn how to start and run a successful import/export business in Nigeria.',
    duration: '8 weeks',
    students: 203,
    rating: 4.8,
    price: '₦70,000',
    image: '/online-class-1.jpg',
    topics: ['Sourcing', 'Documentation', 'Logistics', 'Compliance'],
    level: 'Intermediate',
    featured: false
  },
  {
    id: 6,
    title: 'Social Media Management',
    description: 'Become a professional social media manager and grow brands online.',
    duration: '6 weeks',
    students: 178,
    rating: 4.6,
    price: '₦45,000',
    image: '/online-class-1.jpg',
    topics: ['Content Strategy', 'Analytics', 'Engagement', 'Advertising'],
    level: 'Beginner',
    featured: false
  },
];

const testimonials = [
  {
    name: 'Aisha M.',
    role: 'AI & Digital Marketing Graduate',
    content: 'The AI and Digital Marketing course from Dmutiechoice transformed my career. I got a job within 2 months of completing the course!',
    rating: 5,
    image: '/online-class-testimonial-1.jpg'
  },
  {
    name: 'Emmanuel K.',
    role: 'Web Development Graduate',
    content: 'The instructors are top-notch and the curriculum is practical. I built my first client website before even finishing the course!',
    rating: 5,
    image: '/online-class-testimonial-1.jpg'
  },
  {
    name: 'Chioma O.',
    role: 'E-commerce Graduate',
    content: 'I launched my online store during the course and made my first sale in week 4. The support from instructors was incredible.',
    rating: 5,
    image: '/online-class-testimonial-1.jpg'
  },
];

const features = [
  {
    icon: Video,
    title: 'Live Online Classes',
    description: 'Interactive sessions with industry experts'
  },
  {
    icon: BookOpen,
    title: 'Comprehensive Materials',
    description: 'Downloadable resources and templates'
  },
  {
    icon: Award,
    title: 'Certified Courses',
    description: 'Receive a certificate upon completion'
  },
  {
    icon: Users,
    title: 'Community Access',
    description: 'Join our alumni network for opportunities'
  },
];

export default function OnlineClasses() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-muted py-16">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">Online Classes</h1>
            <p className="text-xl text-muted-foreground">
              Learn in-demand skills from industry experts. Our practical courses 
              are designed to help you advance your career or start a new business.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">1,283+</div>
              <div className="text-sm text-muted-foreground mt-1">Students Enrolled</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">12</div>
              <div className="text-sm text-muted-foreground mt-1">Active Courses</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">4.8</div>
              <div className="text-sm text-muted-foreground mt-1">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">85%</div>
              <div className="text-sm text-muted-foreground mt-1">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Learn With Us</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our courses are designed with practical, real-world applications in mind.
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

      {/* Featured Courses */}
      <section className="py-16">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Featured Courses</h2>
            <Button variant="outline" size="sm">View All Courses</Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.filter(c => c.featured).map((course) => (
              <Card key={course.id} className="overflow-hidden group">
                <div className="relative">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button variant="secondary" size="sm">
                      <Play className="h-4 w-4 mr-2" /> Preview
                    </Button>
                  </div>
                  <Badge className="absolute top-3 left-3">{course.level}</Badge>
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center gap-1 bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded text-sm">
                      <Star className="h-3 w-3 fill-current" />
                      {course.rating}
                    </div>
                    <span className="text-sm text-muted-foreground">({course.students} students)</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{course.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{course.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {course.topics.map((topic, idx) => (
                      <span key={idx} className="text-xs bg-muted px-2 py-1 rounded">
                        {topic}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      {course.duration}
                    </div>
                    <div className="text-xl font-bold text-primary">{course.price}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Courses */}
      <section className="py-16 bg-muted">
        <div className="container">
          <h2 className="text-2xl font-bold mb-8">All Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <Card key={course.id} className="overflow-hidden">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-semibold">{course.title}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="secondary" className="text-xs">{course.level}</Badge>
                        <span className="text-xs text-muted-foreground">{course.duration}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-primary">{course.price}</div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{course.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" />
                      {course.students} students
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                      <span className="text-sm">{course.rating}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Student Success Stories</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hear from our graduates who have transformed their careers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-3">
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
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Start Learning Today</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have transformed their careers with 
            Dmutiechoice online classes.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">Enroll Now <ArrowRight className="h-4 w-4 ml-2" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/contact">Request Syllabus</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
