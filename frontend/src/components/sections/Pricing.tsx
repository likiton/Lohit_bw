import { PricingCardProps } from "../../types";
import { useState } from "react";

const PRICING_PACKAGES: PricingCardProps[] = [
    {
        duration: '1 Hour',
        title: 'Private',
        price: '₹1000',
        tag: 'POPULAR STARTER',
        features: [
            'Prime seasonal location access',
            'Ideal water reflection optimization',
            'Quick introduction to boating',
        ],
        footer: 'Tight schedule | Highlight capture',
    },
    {
        duration: '1.5 Hour',
        title: 'Creative',
        price: '₹1500',
        tag: 'BEST VALUE',
        features: [
            'Extended still-water period',
            'Guaranteed reflection retry',
            'Advanced angle and pose coaching',
        ],
        footer: 'Higher usable frame yield',
    },
    {
        duration: '2 Hour',
        title: 'Golden Window',
        price: '₹2000',
        tag: 'EXTENDED',
        isExtended: true,
        features: [
            'Exclusive Golden Hour timing',
            'Relaxed, unhurried cruising',
            'Diverse wide and portrait shots',
        ],
        footer: 'Max creative flexibility',
    },
    {
        duration: 'Pre-Wedding',
        title: 'Directed 2H',
        price: '₹2500',
        tag: 'CINEMATIC',
        isCinematic: true,
        features: [
            'Custom boat positioning',
            'Signature silhouette shots',
            'Dedicated angle iteration time',
        ],
        footer: 'Purpose-built for styled shoots',
    },
];

const PricingCard: React.FC<PricingCardProps> = ({ duration, title, price, tag, features, footer, isExtended, isCinematic }) => {
    // State to manage the expansion of the card details
    const [isExpanded, setIsExpanded] = useState(false); 
    
    const isFeatured = isExtended || isCinematic;

    // --- Dynamic Class Initialization ---
    let cardClasses = 'bg-white text-gray-700 border-4 border-gray-200';
    let priceClasses = 'text-indigo-800';
    let titleSpanColor = 'text-indigo-700';
    let checkColor = 'text-indigo-500';
    let footerColor = 'text-gray-500';
    let featureTextColor = 'text-gray-700';
    let borderTopColor = 'border-gray-200';
    let tagColor = tag === 'BEST VALUE' ? 'bg-yellow-500' : 'bg-gray-700';
    let ctaClasses = 'bg-indigo-500 hover:bg-indigo-600 shadow-indigo-300/50';

    if (isCinematic) {
        cardClasses = 'bg-gradient-to-br from-red-600 to-pink-500 text-white shadow-red-500/50';
        priceClasses = 'text-white';
        titleSpanColor = 'text-white';
        checkColor = 'text-yellow-300';
        footerColor = 'text-red-100';
        featureTextColor = 'text-white';
        borderTopColor = 'border-white/30';
        tagColor = 'bg-red-500';
        ctaClasses = 'bg-red-500 hover:bg-red-600 shadow-red-300/50';
    } else if (isExtended) {
        cardClasses = 'bg-gradient-to-br from-indigo-600 to-blue-500 text-white shadow-blue-500/50';
        priceClasses = 'text-white';
        titleSpanColor = 'text-white';
        checkColor = 'text-cyan-300';
        footerColor = 'text-indigo-100';
        featureTextColor = 'text-white';
        borderTopColor = 'border-white/30';
        tagColor = 'bg-blue-500';
        ctaClasses = 'bg-blue-500 hover:bg-blue-600 shadow-blue-300/50';
    } else if (tag === 'BEST VALUE') {
        cardClasses = 'bg-white text-gray-700 border-4 border-yellow-400 shadow-xl';
    }

    return (
        <div className={`
            relative flex flex-col h-full rounded-xl shadow-2xl 
            ${cardClasses}
            p-5 text-center transition-transform duration-300 hover:scale-[1.03]
            

        `}>
            {/* Tag (if present) */}
            {tag && (
                <span className={`
                    absolute top-0 right-0 px-2 py-0.5 text-xs font-black text-white uppercase rounded-bl-md rounded-tr-lg ${tagColor}
                    shadow-md
                `}>
                    {tag}
                </span>
            )}

            <div className="flex-grow">
                {/* Duration and Title (Always visible) */}
                <h3 className="text-xl font-black mb-0">
                    {duration} <span className={isFeatured ? '' : titleSpanColor}>{title}</span>
                </h3>
                <p className={`text-sm mb-3 font-semibold ${isFeatured ? 'text-white/80' : 'text-gray-500'}`}>
                    Package Type
                </p>

                {/* Price (Always visible) */}
                <div className={`text-4xl font-black mb-4 ${priceClasses}`}>
                    <span className="text-2xl align-top mr-1">₹</span>{price.replace('₹', '')}
                </div>
            </div>

            {/* EXPANDABLE SECTION: Features, Footer, and CTA */}
            {/* Conditional rendering with transition for smooth expansion */}
            <div className={`
                transition-all duration-500 ease-in-out
                ${isExpanded ? 'max-h-[500px] opacity-100 pt-4' : 'max-h-0 opacity-0'}
                overflow-hidden
            `}>
                {/* Features */}
                <ul className={`text-left space-y-2 mb-6 px-0 ${featureTextColor}`}>
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ${checkColor} mr-2 flex-shrink-0 mt-0.5`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            <span className="text-sm leading-snug">{feature}</span>
                        </li>
                    ))}
                </ul>

                {/* Footer Text and CTA */}
                <div className={`mt-auto pt-4 border-t ${borderTopColor}`}>
                    <p className={`text-xs font-medium mb-4 italic ${footerColor}`}>{footer}</p>
                    
                    {/* CTA Button */}
                    <button
                        onClick={() => console.log(`Booking ${duration} ${title}`)}
                        className={`
                            w-full py-2.5 text-white font-bold rounded-full shadow-xl transition duration-300 uppercase text-sm 
                            transform hover:scale-[1.02] ${ctaClasses}
                        `}
                    >
                        Book This Package
                    </button>
                </div>
            </div>

            {/* READ MORE / SHOW LESS BUTTON (Always visible for toggle) */}
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className={`
                    mt-4 w-full py-2 font-semibold rounded-full transition-colors duration-300 text-sm
                    ${isFeatured ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100'}
                `}
                aria-expanded={isExpanded}
            >
                {isExpanded ? 'Show Less' : 'Read More Details'}
            </button>
        </div>
    );
}


// --- 13. PricingSection Component (New Component) ---
/**
 * Dedicated section for the pricing table snapshot.
 */
export const Pricing: React.FC = () => {
    return (
        <section id="pricing" className="py-2 md:py-5 px-6 lg:px-12 min-h-56vh text-center">
            <div className="max-w-7xl mx-auto">
                {/* <h2 className="text-4xl md:text-6xl font-black text-indigo-700 mb-6">
                    BOATING PACKAGES
                </h2> */}
                <p className="text-gray-600 text-xl max-w-4xl mx-auto mb-16">
                    Private backwater rides from <span className="font-extrabold text-indigo-600">₹1000</span>. Upgrade adds retry freedom, light transition sequencing & creative framing headroom.
                </p>

                {/* Pricing Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {PRICING_PACKAGES.map((pkg, index) => (
                        <PricingCard key={index} {...pkg} />
                    ))}
                </div>

                {/* Call-to-Action Buttons & Footer Note */}
                <div className="mt-16 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 max-w-2xl mx-auto">
                    <button onClick={() => {
                            const section = document.getElementById("pricing");
                            if (section) {
                                section.scrollIntoView({ behavior: "smooth" });
                            }
                        }} className="px-8 py-3 bg-indigo-600 text-white font-bold rounded-full shadow-lg hover:bg-indigo-700 transition transform hover:scale-[1.05] uppercase text-sm">
                        Full Pricing & Details
                    </button>
                    <button className="px-8 py-3 bg-gray-300 text-gray-800 font-bold rounded-full shadow-lg hover:bg-gray-400 transition transform hover:scale-[1.05] uppercase text-sm">
                        Which Duration?
                    </button>
                    <button onClick={() => {
                            const section = document.getElementById("contactUs");
                            if (section) {
                                section.scrollIntoView({ behavior: "smooth" });
                            }
                        }} className="px-8 py-3 bg-green-500 text-white font-bold rounded-full shadow-lg hover:bg-green-600 transition transform hover:scale-[1.05] uppercase text-sm">
                        Ask Suggestion
                    </button>
                </div>

                <p className="text-sm text-gray-500 mt-8">
                    Need photo-focused results? Start at <span className="font-bold text-gray-700">1.5H</span> for retry & composition buffer.
                </p>
            </div>
        </section>
    );
}
