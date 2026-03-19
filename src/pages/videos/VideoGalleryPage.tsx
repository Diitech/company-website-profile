import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Play, X, Ship, Truck, Plane, Package, Clock, Eye, Download, Share2 } from 'lucide-react';
import { useState, useRef } from 'react';
import { Badge } from '@/components/ui/badge';

const videos = [
  {
    id: 1,
    title: 'Sea Freight Shipment Arrival',
    description: 'Container shipment arriving at Lagos Port from China. Watch as our team coordinates the unloading and customs clearance process.',
    thumbnail: '/lagos-port.jpg',
    videoUrl: '/videos/sea-freight.mp4',
    duration: '2:45',
    category: 'Sea Freight',
    icon: Ship,
    views: '12.5K',
    date: 'March 2025'
  },
  {
    id: 2,
    title: 'Air Cargo Operations',
    description: 'Express air freight handling at Murtala Muhammed Airport. See how we manage time-sensitive shipments.',
    thumbnail: '/air-shipment.jpg',
    videoUrl: '/videos/air-cargo.mp4',
    duration: '1:58',
    category: 'Air Freight',
    icon: Plane,
    views: '8.3K',
    date: 'February 2025'
  },
  {
    id: 3,
    title: 'Last Mile Delivery in Lagos',
    description: 'Goods being transported to clients across Lagos. From our warehouse to your doorstep.',
    thumbnail: '/shipment-truck.jpg',
    videoUrl: '/videos/last-mile.mp4',
    duration: '3:12',
    category: 'Road Transport',
    icon: Truck,
    views: '15.2K',
    date: 'February 2025'
  },
  {
    id: 4,
    title: 'Warehouse Operations Tour',
    description: 'Inside our state-of-the-art logistics facility. See how we store and manage inventory.',
    thumbnail: '/warehouse.jpg',
    videoUrl: '/videos/warehouse.mp4',
    duration: '4:20',
    category: 'Warehousing',
    icon: Package,
    views: '9.7K',
    date: 'January 2025'
  },
  {
    id: 5,
    title: 'Factory Machine Installation',
    description: 'Industrial equipment delivered and installed at a Nigerian manufacturing facility.',
    thumbnail: '/factory-machine.jpg',
    videoUrl: '/videos/factory.mp4',
    duration: '2:30',
    category: 'Special Cargo',
    icon: Package,
    views: '6.8K',
    date: 'January 2025'
  },
  {
    id: 6,
    title: 'Online Training Session',
    description: 'Virtual classroom for digital skills training. Learn from anywhere in Nigeria.',
    thumbnail: '/video-class.jpg',
    videoUrl: '/videos/training.mp4',
    duration: '5:45',
    category: 'Training',
    icon: Package,
    views: '11.4K',
    date: 'December 2024'
  },
];

function VideoGalleryPage() {
  const [selectedVideo, setSelectedVideo] = useState<typeof videos[0] | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleClose = () => {
    setIsPlaying(false);
    setSelectedVideo(null);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div className="pt-24 pb-16">
      <title>Video Gallery | DMULTICHOICE Operations & Shipments</title>
      <meta name="description" content="Watch real footage of DMULTICHOICE shipments, deliveries, warehouse operations, and training sessions across Nigeria." />
      <meta name="keywords" content="DMULTICHOICE videos, Nigeria shipping, Lagos port, warehouse operations, import delivery" />
      
      {/* Hero */}
      <section className="relative py-16">
        <div className="absolute inset-0 bg-gradient-to-b from-red-500/10 to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/30 rounded-full px-4 py-2 mb-6">
              <Play className="w-4 h-4 text-red-400" />
              <span className="text-red-400 text-sm font-medium">Video Gallery</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              See Our Operations in Action
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Watch real footage of our shipments, deliveries, warehouse operations, 
              and training sessions across Nigeria.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { number: '50+', label: 'Videos' },
              { number: '100K+', label: 'Total Views' },
              { number: '6', label: 'Categories' },
              { number: '4.9★', label: 'Rating' },
            ].map((stat, index) => (
              <div key={index} className="bg-glass rounded-2xl p-6 text-center border border-white/10">
                <p className="text-3xl font-bold text-white mb-2">{stat.number}</p>
                <p className="text-white/50 text-sm">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Videos Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
            }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {videos.map((video) => (
              <motion.div
                key={video.id}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                className="group cursor-pointer"
                onClick={() => setSelectedVideo(video)}
              >
                <div className="relative rounded-2xl overflow-hidden bg-glass border border-white/10 transition-all duration-300 group-hover:border-red-500/30 group-hover:shadow-glow-sm">
                  <div className="relative aspect-video">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 transition-opacity group-hover:bg-black/50" />
                    
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-red-500/80">
                        <Play className="w-8 h-8 text-white fill-white ml-1" />
                      </div>
                    </div>

                    <div className="absolute bottom-3 right-3 bg-black/70 px-2 py-1 rounded text-white text-xs font-medium flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {video.duration}
                    </div>

                    <div className="absolute top-3 left-3 bg-red-500/80 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs font-medium flex items-center gap-1">
                      <video.icon className="w-3 h-3" />
                      {video.category}
                    </div>
                  </div>

                  <div className="p-4">
                    <h4 className="text-white font-bold mb-1 group-hover:text-red-400 transition-colors">
                      {video.title}
                    </h4>
                    <p className="text-white/50 text-sm mb-3 line-clamp-2">{video.description}</p>
                    <div className="flex items-center gap-4 text-xs text-white/40">
                      <span className="flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        {video.views} views
                      </span>
                      <span>{video.date}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Video Player Modal */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
          onClick={handleClose}
        >
          <div 
            className="relative w-full max-w-5xl bg-[#0a0f1c] rounded-2xl overflow-hidden border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-video bg-black relative">
              {!isPlaying ? (
                <>
                  <img
                    src={selectedVideo.thumbnail}
                    alt={selectedVideo.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center">
                    <button
                      onClick={handlePlay}
                      className="w-20 h-20 rounded-full bg-red-500 flex items-center justify-center hover:scale-110 transition-transform"
                    >
                      <Play className="w-10 h-10 text-white fill-white ml-1" />
                    </button>
                    <p className="text-white/60 mt-4">Click to play video</p>
                  </div>
                </>
              ) : (
                <video
                  ref={videoRef}
                  className="w-full h-full"
                  controls
                  autoPlay
                  poster={selectedVideo.thumbnail}
                >
                  <source src={selectedVideo.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>

            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <Badge className="bg-red-500/20 text-red-400 border-0">{selectedVideo.category}</Badge>
                <span className="text-white/40 text-sm flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {selectedVideo.duration}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{selectedVideo.title}</h3>
              <p className="text-white/60 mb-4">{selectedVideo.description}</p>
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 text-white/60 hover:text-white transition-colors">
                  <Share2 className="w-4 h-4" />
                  Share
                </button>
                <button className="flex items-center gap-2 text-white/60 hover:text-white transition-colors">
                  <Download className="w-4 h-4" />
                  Download
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Subscribe CTA */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-gradient-to-r from-red-600/20 to-orange-600/20 rounded-3xl p-8 lg:p-12 border border-white/10 text-center"
          >
            <Play className="w-12 h-12 text-red-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">Subscribe for More Videos</h2>
            <p className="text-white/60 max-w-xl mx-auto mb-8">
              Get notified when we upload new videos showcasing our operations, 
              client success stories, and industry insights.
            </p>
            <Link to="/register">
              <button className="inline-flex items-center gap-2 bg-white text-black hover:bg-white/90 rounded-full px-8 py-4 font-semibold transition-all">
                Subscribe Now
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default VideoGalleryPage;
