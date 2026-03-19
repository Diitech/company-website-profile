import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Play, X, Ship, Truck, Plane, Package } from 'lucide-react';

const videos = [
  {
    id: 1,
    title: 'Sea Freight Shipment Arrival',
    description: 'Container shipment arriving at Lagos Port from China',
    thumbnail: '/lagos-port.jpg',
    duration: '2:45',
    category: 'Sea Freight',
    icon: Ship,
  },
  {
    id: 2,
    title: 'Air Cargo Operations',
    description: 'Express air freight handling at Murtala Muhammed Airport',
    thumbnail: '/air-shipment.jpg',
    duration: '1:58',
    category: 'Air Freight',
    icon: Plane,
  },
  {
    id: 3,
    title: 'Last Mile Delivery',
    description: 'Goods being transported to clients across Lagos',
    thumbnail: '/shipment-truck.jpg',
    duration: '3:12',
    category: 'Road Transport',
    icon: Truck,
  },
  {
    id: 4,
    title: 'Warehouse Operations',
    description: 'Inside our state-of-the-art logistics facility',
    thumbnail: '/warehouse.jpg',
    duration: '4:20',
    category: 'Warehousing',
    icon: Package,
  },
  {
    id: 5,
    title: 'Factory Machine Delivery',
    description: 'Industrial equipment delivered to Nigerian factory',
    thumbnail: '/factory-machine.jpg',
    duration: '2:30',
    category: 'Special Cargo',
    icon: Package,
  },
  {
    id: 6,
    title: 'Online Training Session',
    description: 'Virtual classroom for digital skills training',
    thumbnail: '/video-class.jpg',
    duration: '5:45',
    category: 'Training',
    icon: Package,
  },
];

export function VideoGallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedVideo, setSelectedVideo] = useState<typeof videos[0] | null>(null);

  return (
    <section id="videos" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-blue-400 text-sm font-medium tracking-wider uppercase mb-4">
            Video Gallery
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            See Our Operations in Action
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Watch real footage of our shipments, deliveries, and operations across Nigeria.
          </p>
        </motion.div>

        {/* Videos Grid */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {videos.map((video) => (
            <motion.div
              key={video.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
                },
              }}
              className="group cursor-pointer"
              onClick={() => setSelectedVideo(video)}
            >
              <div className="relative rounded-2xl overflow-hidden bg-glass border border-white/10 transition-all duration-300 group-hover:border-blue-500/30 group-hover:shadow-glow-sm">
                {/* Thumbnail */}
                <div className="relative aspect-video">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 transition-opacity group-hover:bg-black/50" />
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-500/80">
                      <Play className="w-8 h-8 text-white fill-white ml-1" />
                    </div>
                  </div>

                  {/* Duration */}
                  <div className="absolute bottom-3 right-3 bg-black/70 px-2 py-1 rounded text-white text-xs font-medium">
                    {video.duration}
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 bg-blue-500/80 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs font-medium flex items-center gap-1">
                    <video.icon className="w-3 h-3" />
                    {video.category}
                  </div>
                </div>

                {/* Info */}
                <div className="p-4">
                  <h4 className="text-white font-bold mb-1 group-hover:text-blue-400 transition-colors">
                    {video.title}
                  </h4>
                  <p className="text-white/50 text-sm">{video.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Video Modal */}
        {selectedVideo && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <div 
              className="relative w-full max-w-4xl bg-[#0a0f1c] rounded-2xl overflow-hidden border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Video Player Placeholder */}
              <div className="aspect-video bg-black flex items-center justify-center">
                <img
                  src={selectedVideo.thumbnail}
                  alt={selectedVideo.title}
                  className="w-full h-full object-cover opacity-50"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-blue-500 flex items-center justify-center mb-4">
                    <Play className="w-10 h-10 text-white fill-white ml-1" />
                  </div>
                  <p className="text-white/60 text-sm">Video playback would start here</p>
                </div>
              </div>

              {/* Video Info */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-xs font-medium">
                    {selectedVideo.category}
                  </span>
                  <span className="text-white/40 text-xs">{selectedVideo.duration}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{selectedVideo.title}</h3>
                <p className="text-white/60">{selectedVideo.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
