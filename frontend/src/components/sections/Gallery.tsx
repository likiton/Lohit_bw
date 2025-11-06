import { FC } from 'react';
import { Sailboat, Camera } from 'lucide-react';

// Refined Mock Data to match the image content style (Title and Description)
const GALLERY_IMAGES = [
    { id: 1, title: "PRIVATE RIDE", description: "Calm reflective waters at Kerala Spot.", url: "/top_v.webp" },
    { id: 2, title: "SHARAVATHI CHANNEL", description: "Natural corridors & soft gradients.", url: "/side_home_v.webp" },
    { id: 3, title: "LOTUS POINT", description: "Bloom frames during seasonal peak.", url: "/Screenshot_20250105-073619_Chrome-890x1024.webp" },
    { id: 4, title: "MANGROVE TUNNEL", description: "Filtered light & eco texture.", url: "/mang_for.webp" },
    { id: 5, title: "SUNSET ROUTE", description: "Golden reflections & silhouettes.", url: "/BoatBridge-Honavar.webp?" },
    { id: 6, title: "QUIET DRIFT", description: "Private experience & space.", url: "/home_v.webp" },
    { id: 7, title: "GOLDEN HOUR", description: "Edge light shimmer moments.", url: "river_v.webp" },
    { id: 8, title: "KERALA FEEL", description: "Classic backwater aesthetic.", url: "/allapey011.webp" },
];

// --- Sub-Component for the Immersive Card Effect ---

interface GalleryFrameProps {
    image: (typeof GALLERY_IMAGES)[0];
}

const GalleryFrame: FC<GalleryFrameProps> = ({ image }) => {
    return (
        // Card container: Enhanced shadow, smoother transition, and a lift effect on hover
        <div className="relative overflow-hidden w-full h-80 md:h-96 rounded-2xl shadow-2xl group cursor-pointer 
                        transition-all duration-500 ease-in-out 
                        hover:scale-[1.03] hover:-translate-y-1 hover:shadow-indigo-600/60">
            
            {/* Image (Full-bleed, slightly zooms on hover) */}
            <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.1]" // Increased scale for a more dramatic zoom
                // Placeholder fallback
                onError={(e) => {
                    e.currentTarget.onerror = null; 
                    e.currentTarget.src = `https://placehold.co/450x300/1e3a8a/ffffff?text=Image+Unavailable`;
                }}
            />
            
            {/* Dark Overlay Gradient for text contrast (matches the image style) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
            
            {/* Text Content (Absolute position at the bottom-left) */}
            <div className="absolute bottom-0 left-0 p-6 text-white z-10">
                {/* Title */}
                <h3 className="text-xl md:text-3xl font-extrabold tracking-tight mb-1 leading-none">
                    {image.title}
                </h3>
                {/* Description/Subtitle */}
                <p className="text-sm md:text-base font-light opacity-90">
                    {image.description}
                </p>
            </div>
            
            {/* Attractive Hover Border: Thinner, sharper white border on hover */}
            <div className="absolute inset-0 border-2 border-transparent transition-colors duration-500 group-hover:border-white/80 rounded-2xl"></div>
        </div>
    );
};

// --- Main Gallery Component ---

const Gallery: FC = () => {
    return (
        <div className="py-10 md:py-10 px-4 lg:px-12 bg-gray-50">
            
            {/* Header Section */}
            <div className="max-w-4xl mx-auto text-center mb-16">
                <Sailboat className="w-10 h-10 mx-auto text-indigo-600 mb-3" />
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
                    Explore Our Coastal Gems
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    A curated collection of unforgettable backwater excursions and remote island stays.
                </p>
                <div className="w-24 h-1 bg-indigo-500 mx-auto mt-6 rounded-full"></div>
            </div>

            {/* Gallery Grid Container (3-column layout) */}
            <div 
                className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 pb-12"
            >
                {GALLERY_IMAGES.map(image => (
                    <GalleryFrame key={image.id} image={image} />
                ))}
            </div>

            {/* Call to Action */}
            <div className="max-w-4xl mx-auto text-center mt-8 p-6 bg-indigo-50 rounded-xl shadow-inner">
                <Camera className="w-8 h-8 mx-auto text-indigo-600 mb-2" />
                <p className="text-gray-700 font-medium">
                    Ready to capture your own adventure? <span className="text-indigo-700 font-bold hover:underline">Plan your trip now.</span>
                </p>
            </div>
        </div>
    );
};

export default Gallery;
