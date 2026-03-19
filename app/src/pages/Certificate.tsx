import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  CheckCircle, 
  Award,
  FileText,
  Building,
  Calendar,
  ArrowRight
} from 'lucide-react';

const certificates = [
  {
    title: 'Tax Identification Number (TIN)',
    number: '1072093089',
    issuer: 'Delta State Board of Internal Revenue',
    date: 'October 16, 2023',
    status: 'Active',
    description: 'Official registration as a taxpayer in Nigeria, demonstrating our commitment to legal compliance.',
    icon: FileText
  },
  {
    title: 'Business Registration',
    number: 'Dmutiechoice Digital Solutions',
    issuer: 'Corporate Affairs Commission',
    date: '2022',
    status: 'Registered',
    description: 'Officially registered business entity in Nigeria, operating since 2022.',
    icon: Building
  },
];

const complianceItems = [
  'Registered with Corporate Affairs Commission',
  'Tax Identification Number (TIN) verified',
  'Delta State Board of Internal Revenue compliant',
  'All statutory payments up to date',
  'Transparent business operations',
  'Verified business address',
];

export default function Certificate() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-muted py-16">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">Certificates & Compliance</h1>
            <p className="text-xl text-muted-foreground">
              Dmutiechoice operates as a fully registered and compliant business entity. 
              Our certifications demonstrate our commitment to transparency and professionalism.
            </p>
          </div>
        </div>
      </section>

      {/* Certificate Display */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Shield className="h-4 w-4" />
                Verified Business
              </div>
              <h2 className="text-3xl font-bold mb-4">Officially Registered & Compliant</h2>
              <p className="text-muted-foreground mb-6">
                Dmutiechoice is a legitimate business entity registered with the appropriate 
                Nigerian authorities. Our Tax Identification Number (TIN) 1072093089 is registered 
                with the Delta State Board of Internal Revenue, issued on October 16, 2023.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">Taxpayer Name</div>
                    <div className="text-sm text-muted-foreground">Joy Oke Oke Lucky</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">TIN Number</div>
                    <div className="text-sm text-muted-foreground">1072093089</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Building className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">Tax Authority</div>
                    <div className="text-sm text-muted-foreground">Delta State Board of Internal Revenue</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">Date of Issue</div>
                    <div className="text-sm text-muted-foreground">October 16, 2023</div>
                  </div>
                </div>
              </div>
              <Button asChild>
                <Link to="/contact">Verify With Us <ArrowRight className="h-4 w-4 ml-2" /></Link>
              </Button>
            </div>
            <div>
              <img 
                src="/certificate-display.jpg" 
                alt="Certificate of Registration"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Compliance Standards</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We maintain the highest standards of business compliance and transparency.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceItems.map((item, idx) => (
              <Card key={idx}>
                <CardContent className="p-6 flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <span>{item}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates List */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Our Certificates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certificates.map((cert, idx) => (
              <Card key={idx} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <cert.icon className="h-7 w-7 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-lg">{cert.title}</h3>
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                          {cert.status}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">{cert.description}</p>
                      <div className="space-y-1 text-sm">
                        <div><span className="text-muted-foreground">Number:</span> <span className="font-medium">{cert.number}</span></div>
                        <div><span className="text-muted-foreground">Issuer:</span> <span className="font-medium">{cert.issuer}</span></div>
                        <div><span className="text-muted-foreground">Date:</span> <span className="font-medium">{cert.date}</span></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Compliance Matters */}
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Why Compliance Matters</h2>
              <p className="text-muted-foreground mb-6">
                Operating as a compliant business is not just about following the law—it's about 
                building trust with our clients, partners, and stakeholders. When you work with 
                Dmutiechoice, you can be confident that you're partnering with a legitimate, 
                transparent, and accountable organization.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Award className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium">Trust & Credibility</div>
                    <div className="text-sm text-muted-foreground">Our certifications prove we're a legitimate business you can trust.</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium">Legal Protection</div>
                    <div className="text-sm text-muted-foreground">Working with a registered business protects your interests.</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium">Quality Assurance</div>
                    <div className="text-sm text-muted-foreground">Compliance standards ensure consistent service quality.</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold mb-4">Business Details</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-muted-foreground">Business Name</div>
                  <div className="font-medium">Dmutiechoice Digital Solutions & Global Procurement</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Founded</div>
                  <div className="font-medium">2022</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">CEO & Founder</div>
                  <div className="font-medium">Lucky Joy</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Address</div>
                  <div className="font-medium">9, No 9 Okene Street, Okuokoko, Delta, Nigeria</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Contact</div>
                  <div className="font-medium">+234 815 848 4621</div>
                  <div className="font-medium">Deliamutiempire@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Work With a Verified Business</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Partner with Dmutiechoice for your digital solutions and import needs. 
            We're a registered, compliant, and trusted business.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/contact">Contact Us <ArrowRight className="h-4 w-4 ml-2" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
