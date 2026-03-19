import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Testimonials', path: '/testimonials' },
  { name: 'Track Record', path: '/track-record' },
  { name: 'Packages', path: '/packages' },
  { name: 'Properties', path: '/properties' },
  { name: 'Online Classes', path: '/online-classes' },
  { name: 'Blog', path: '/blog' },
  { name: 'Certificate', path: '/certificate' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <a href="tel:+2348158484621" className="flex items-center gap-1 hover:underline">
              <Phone className="h-3 w-3" />
              +234 815 848 4621
            </a>
            <a href="mailto:Deliamutiempire@gmail.com" className="hidden sm:flex items-center gap-1 hover:underline">
              <Mail className="h-3 w-3" />
              Deliamutiempire@gmail.com
            </a>
          </div>
          <div className="text-xs">Founded 2022 | Trusted Partner</div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="Dmutiechoice" className="h-10 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                location.pathname === link.path
                  ? 'bg-primary text-primary-foreground'
                  : 'hover:bg-muted'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px]">
            <div className="flex flex-col gap-4 mt-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                    location.pathname === link.path
                      ? 'bg-primary text-primary-foreground'
                      : 'hover:bg-muted'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
