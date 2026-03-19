import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowRight,
  Tag,
  TrendingUp,
  Globe,
  Bot,
  Code
} from 'lucide-react';

const featuredPost = {
  id: 1,
  title: 'The Future of Import Business in Nigeria: Trends to Watch in 2024',
  excerpt: 'Discover the emerging trends shaping the import industry in Nigeria, from digital procurement to AI-powered logistics. Learn how businesses can stay ahead of the curve.',
  content: `The import business in Nigeria is undergoing a significant transformation. With the advent of digital technologies and changing consumer behaviors, businesses need to adapt to stay competitive.

  Key trends include:
  1. Digital Procurement Platforms
  2. AI-Powered Supply Chain Management
  3. Sustainable Sourcing Practices
  4. E-commerce Integration
  5. Blockchain for Transparency

  Businesses that embrace these trends will be better positioned for success in the evolving market landscape.`,
  author: 'Lucky Joy',
  date: 'March 1, 2024',
  readTime: '8 min read',
  category: 'Import Business',
  image: '/blog-header.jpg',
  tags: ['Import', 'Business', 'Trends', 'Nigeria']
};

const blogPosts = [
  {
    id: 2,
    title: 'How AI Chatbots Are Transforming Customer Service in Nigeria',
    excerpt: 'Explore how businesses are leveraging AI chatbots to improve customer engagement and reduce operational costs.',
    author: 'Dmutiechoice Team',
    date: 'February 25, 2024',
    readTime: '6 min read',
    category: 'AI & Automation',
    image: '/online-class-1.jpg',
    tags: ['AI', 'Chatbots', 'Customer Service']
  },
  {
    id: 3,
    title: 'Website Development Best Practices for Nigerian Businesses',
    excerpt: 'Learn the essential elements of a successful business website that converts visitors into customers.',
    author: 'Dmutiechoice Team',
    date: 'February 18, 2024',
    readTime: '5 min read',
    category: 'Web Development',
    image: '/online-class-1.jpg',
    tags: ['Website', 'Development', 'Business']
  },
  {
    id: 4,
    title: 'Sourcing Products from China: A Complete Guide',
    excerpt: 'Everything you need to know about finding reliable suppliers and importing quality products from China.',
    author: 'Lucky Joy',
    date: 'February 10, 2024',
    readTime: '10 min read',
    category: 'Import Business',
    image: '/blog-header.jpg',
    tags: ['China', 'Sourcing', 'Import']
  },
  {
    id: 5,
    title: 'Social Media Marketing Strategies for Schools',
    excerpt: 'Effective social media strategies to increase enrollment and engage with parents and students.',
    author: 'Dmutiechoice Team',
    date: 'February 5, 2024',
    readTime: '7 min read',
    category: 'Digital Marketing',
    image: '/online-class-1.jpg',
    tags: ['Social Media', 'Marketing', 'Education']
  },
  {
    id: 6,
    title: 'Understanding Import Documentation in Nigeria',
    excerpt: 'A comprehensive guide to the documents required for smooth import operations in Nigeria.',
    author: 'Dmutiechoice Team',
    date: 'January 28, 2024',
    readTime: '8 min read',
    category: 'Import Business',
    image: '/blog-header.jpg',
    tags: ['Documentation', 'Import', 'Compliance']
  },
  {
    id: 7,
    title: 'The Benefits of Workflow Automation for Small Businesses',
    excerpt: 'Discover how automation can save time, reduce errors, and boost productivity in your business.',
    author: 'Dmutiechoice Team',
    date: 'January 20, 2024',
    readTime: '6 min read',
    category: 'AI & Automation',
    image: '/online-class-1.jpg',
    tags: ['Automation', 'Productivity', 'Business']
  },
];

const categories = [
  { name: 'Import Business', count: 12, icon: Globe },
  { name: 'AI & Automation', count: 8, icon: Bot },
  { name: 'Web Development', count: 6, icon: Code },
  { name: 'Digital Marketing', count: 5, icon: TrendingUp },
];

export default function Blog() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-muted py-16">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">Dmutiechoice Blog</h1>
            <p className="text-xl text-muted-foreground">
              Insights, tips, and industry news on digital solutions, 
              global procurement, and business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="container">
          <div className="text-sm text-muted-foreground mb-4">Featured Article</div>
          <Card className="overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="aspect-video lg:aspect-auto">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-8 flex flex-col justify-center">
                <Badge className="w-fit mb-4">{featuredPost.category}</Badge>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">{featuredPost.title}</h2>
                <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  <span className="flex items-center gap-1">
                    <User className="h-4 w-4" /> {featuredPost.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" /> {featuredPost.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" /> {featuredPost.readTime}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredPost.tags.map((tag, idx) => (
                    <span key={idx} className="text-xs bg-muted px-2 py-1 rounded flex items-center gap-1">
                      <Tag className="h-3 w-3" /> {tag}
                    </span>
                  ))}
                </div>
                <Button asChild>
                  <Link to="#">Read Full Article <ArrowRight className="h-4 w-4 ml-2" /></Link>
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-muted">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((cat, idx) => (
              <Card key={idx} className="text-center hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <cat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold">{cat.name}</h3>
                  <p className="text-sm text-muted-foreground">{cat.count} articles</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-16">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Latest Articles</h2>
            <Button variant="outline" size="sm">View All</Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden group">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <CardContent className="p-4">
                  <Badge variant="secondary" className="mb-2">{post.category}</Badge>
                  <h3 className="font-semibold text-lg mb-2 line-clamp-2">{post.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" /> {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" /> {post.readTime}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Get the latest insights on digital solutions, import business tips, 
              and industry news delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-foreground"
              />
              <Button variant="secondary" size="lg">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
