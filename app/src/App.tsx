import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Testimonials from './pages/Testimonials';
import TrackRecord from './pages/TrackRecord';
import Packages from './pages/Packages';
import Properties from './pages/Properties';
import OnlineClasses from './pages/OnlineClasses';
import Blog from './pages/Blog';
import Certificate from './pages/Certificate';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/track-record" element={<TrackRecord />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/properties" element={<Properties />} />
            <Route path="/online-classes" element={<OnlineClasses />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/certificate" element={<Certificate />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
