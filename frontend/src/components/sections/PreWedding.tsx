import React, { useState, ReactNode, FC } from 'react';

// --- INTERFACE DEFINITIONS (Normally imported from types/index.ts) ---

interface FAQItemData {
    question: string;
    answer: string;
}

interface PreWeddingFAQItemProps extends FAQItemData {
    isOpen: boolean;
    onClick: () => void;
}

// --- PRE-WEDDING DATA ---
const preWeddingFaqData: FAQItemData[] = [
    { question: 'How long is ideal for pre-wedding boating?', answer: '2 hours gives reflection + lotus + silhouette sequencing without rush. 1.5H works if skipping some retries.' },
    { question: 'Best month for pastel tones?', answer: 'October to February often provides the calmest water and cool air necessary for high-quality pastel tones and reflection symmetry.' },
    { question: 'What if wind picks up mid-session?', answer: 'We sequence the most critical shots (reflection/lotus) early. If wind rises, we switch to directed poses, silhouette framing, and texture shots (like mangroves).' },
];

const topFeatures = [
    { title: 'CLEAN FRAMES', subtitle: 'Minimal background clutter.', color: 'text-blue-500', bgColor: 'bg-blue-50', icon: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>) },
    { title: 'SOFT LIGHT', subtitle: 'Dawn pastel gradients.', color: 'text-yellow-500', bgColor: 'bg-yellow-50', icon: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>) },
    { title: 'ROMANTIC MOOD', subtitle: 'Lotus + calm surface.', color: 'text-pink-500', bgColor: 'bg-red-50', icon: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>) },
    { title: 'STABLE SETUP', subtitle: 'Predictable drift.', color: 'text-green-500', bgColor: 'bg-green-50', icon: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 21 1.7-5.1C5.2 13.9 6.2 12 7.8 11s3.7-1.7 6.2-2.3c2.4-.7 4.2-1.2 5.8-1.5 1.5-.3 2.5-.5 3.5-.8"></path><path d="M21 9v11c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2h12"></path><path d="M18 13 14 17 18 21"></path></svg>) },
];

const shotStyles = [
    'Wide Establishing', 'Depth Layers', 'Reflection', 'Close Couple', 
    'Motion Pan', 'Pastel Soft Tone', 'Silhouette', 'Negative Space'
];

const photographerChecklist = [
    'Polarizer (glare control)', 'Lens cloth (humidity)', '35-85mm + 24mm wide', 
    'Faster shutter in shade', 'Golden edge window ~25m'
];

const planningTips = [
    { icon: (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>), text: 'Book dawn slot early (peak months)' },
    { icon: (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 14.5a2 2 0 0 1 0 4l-7.5-7.5a2 2 0 0 1-4-4l7.5 7.5"></path><path d="m20.5 7.5-4-4"></path><path d="m14.5 10.5 4 4"></path></svg>), text: 'Reflection best before wind build' },
    { icon: (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 20.27c.42-.56 1-.95 1.7-1.17l2.6-1.5c.7-.22 1.5-.22 2.2 0l2.6 1.5c.7.22 1.3.6 1.7 1.17L23 15.5l-4-4V7c0-1.1-.9-2-2-2h-2c-.5-1.6-2.1-2.9-4.2-2.9C8.3 2.1 6.7 3.4 6.2 5H4c-1.1 0-2 .9-2 2v4.5l-4 4.5 1.5 2.77c.42-.56 1-.95 1.7-1.17l2.6-1.5c.7-.22 1.5-.22 2.2 0l2.6 1.5c.7.22 1.3.6 1.7 1.17L23 15.5l-4-4V7c0-1.1-.9-2-2-2h-2c-.5-1.6-2.1-2.9-4.2-2.9C8.3 2.1 6.7 3.4 6.2 5H4c-1.1 0-2 .9-2 2v4.5z"></path></svg>), text: 'Pastel = earlier vs golden edge later' },
    { icon: (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>), text: 'WhatsApp for rapid slot confirm' },
    { icon: (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>), text: 'Pad 10m buffer before first frame' },
];

const sequenceStrategy = [
    'Wide establishing reflection',
    'Mid-length intimacy pose',
    'Lotus/foreground layering',
    'Silhouette or rim-light edge',
    'Creative negative space',
];

const lightingWindows = [
    { title: 'DAWN', time: '6:00 - 7:15', description: ['Soft gradients', 'High symmetry', 'Cool tone'], tag: 'PASTEL', tagBg: 'bg-green-500', cardBg: 'bg-blue-50' },
    { title: 'GOLDEN EDGE', time: 'LAST 60M', description: ['Rim highlight', 'Silhouette option', 'Warm drama'], tag: 'DRAMATIC', tagBg: 'bg-orange-500', cardBg: 'bg-yellow-50' },
    { title: 'EXTENDED', time: '1.5H+', description: ['Retry angles', 'Creative pacing', 'Multiple frames'], tag: 'BALANCED', tagBg: 'bg-blue-500', cardBg: 'bg-indigo-50' },
];

// --- HELPER COMPONENTS ---

/**
 * Helper for rendering a Mood/Lighting Card
 */
const MoodCard: FC<{ data: typeof lightingWindows[0] }> = ({ data }) => (
    <div className={`p-6 rounded-xl shadow-lg border-2 border-transparent ${data.cardBg} h-full relative transition-all duration-300 hover:shadow-2xl`}>
        <span className={`absolute top-0 right-0 px-3 py-1 text-xs font-black text-white uppercase rounded-bl-md rounded-tr-lg ${data.tagBg} shadow-md`}>
            {data.tag}
        </span>
        <h4 className="text-xl font-bold text-gray-800 mb-1">{data.title}</h4>
        <p className="text-base font-semibold text-gray-600 mb-3">{data.time}</p>
        <ul className="space-y-1 mt-2 text-left">
            {data.description.map((item, index) => (
                <li key={index} className="flex items-center text-sm text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-indigo-500 mr-2 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    {item}
                </li>
            ))}
        </ul>
    </div>
);

/**
 * Helper for rendering the small top feature cards
 */
const FeatureKeyCard: FC<{ icon: ReactNode, title: string, subtitle: string, color: string, bgColor: string }> = ({ icon, title, subtitle, color, bgColor }) => (
    <div className={`p-6 rounded-xl shadow-md ${bgColor} h-full transition-all duration-300 hover:shadow-lg`}>
        <div className={`text-4xl mb-2 ${color}`}>{icon}</div>
        <h4 className="text-lg font-bold text-gray-800">{title}</h4>
        <p className="text-sm text-gray-600">{subtitle}</p>
    </div>
);

/**
 * Helper for Pre-Wedding FAQ Accordion
 */
const PreWeddingFAQItem: FC<PreWeddingFAQItemProps> = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className={`rounded-xl shadow-sm transition duration-300 overflow-hidden ${isOpen ? 'bg-indigo-50 border-indigo-300' : 'bg-white border-gray-200'} border-2`}>
            <button 
                className="w-full text-left p-4 flex justify-between items-center" 
                onClick={onClick}
            >
                <span className={`font-semibold ${isOpen ? 'text-indigo-700' : 'text-gray-800'}`}>{question}</span>
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 text-indigo-500 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
            </button>
            <div className={`px-4 pb-4 transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pt-0' : 'max-h-0 opacity-0'}`}>
                <p className="text-sm text-gray-600 border-t border-indigo-100 pt-3">{answer}</p>
            </div>
        </div>
    );
};


// --- MAIN PRE-WEDDING SECTION COMPONENT ---

const PreWedding: FC = () => {
    // State to manage which individual FAQ item is open (accordion behavior)
    const [openFAQ, setOpenFAQ] = useState<number | null>(0); 
    // New state to manage the visibility of the entire FAQ block (collapsible behavior)
    const [isFaqSectionVisible, setIsFaqSectionVisible] = useState<boolean>(false);

    const toggleFaqVisibility = () => {
        setIsFaqSectionVisible(!isFaqSectionVisible);
        // Reset the open item when closing the whole section for a clean state
        if (isFaqSectionVisible) {
            setOpenFAQ(null);
        } else {
            // Optionally open the first item when expanding
            setOpenFAQ(0); 
        }
    };

    return (
        <section id="preWedding" className="py-10 md:py-10 px-4 lg:px-12 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-black text-indigo-700 mb-2">
                    Honnavar Pre-Wedding Photography Guide
                </h2>
                <p className="text-gray-600 text-lg mb-16 max-w-4xl mx-auto">
                    Plan cinematic Sharavati river pre-wedding boat frames: reflection symmetry, soft pastel tone, silhouette edge light and layered mangrove texture.
                </p>

                {/* --- 1. Key Benefits / Setup --- */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    {topFeatures.map((f, i) => (
                        <FeatureKeyCard key={i} {...f} />
                    ))}
                </div>

                {/* --- 2. Shot Styles & Photographer Checklist --- */}
                <div className="grid lg:grid-cols-3 gap-10 mb-20">
                    {/* Shot Styles */}
                    <div className="lg:col-span-1 bg-white p-6 rounded-xl shadow-2xl border-t-4 border-indigo-400">
                        <h3 className="text-2xl font-black text-gray-800 mb-6 border-b pb-2">SHOT STYLES</h3>
                        <div className="flex flex-wrap gap-3">
                            {shotStyles.map((style, i) => (
                                <span key={i} className="px-4 py-2 text-sm font-semibold rounded-full bg-indigo-100 text-indigo-800 transition-colors hover:bg-indigo-200 cursor-default">
                                    {style}
                                </span>
                            ))}
                        </div>
                        <p className="text-xs text-gray-500 italic mt-4">
                            Ask operator to rotate bow slightly for symmetry or silhouette emphasis.
                        </p>
                    </div>

                    {/* Photographer Checklist */}
                    <div className="lg:col-span-2 bg-gray-900 p-8 rounded-xl shadow-2xl text-white">
                        <h3 className="text-2xl font-black text-indigo-400 mb-6 border-b border-indigo-700 pb-2">PHOTOGRAPHER CHECKLIST</h3>
                        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
                            {photographerChecklist.map((item, i) => (
                                <div key={i} className="flex items-center text-lg font-medium">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    {item}
                                </div>
                            ))}
                        </div>
                        <p className="text-xs text-gray-500 italic mt-6">
                            Drone: responsibility & compliance with local rules.
                        </p>
                    </div>
                </div>

                {/* --- 3. Lighting & Mood Windows --- */}
                <div className="mb-20">
                    <h3 className="text-3xl font-black text-indigo-700 mb-10">
                        LIGHTING & MOOD WINDOWS
                    </h3>
                    <p className="text-gray-600 text-lg mb-8 max-w-4xl mx-auto">
                        Pick mood first (pastel romance vs golden drama) then schedule slot, reflection priority earlier.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {lightingWindows.map((data, i) => (
                            <MoodCard key={i} data={data} />
                        ))}
                    </div>
                </div>

                {/* --- 4. Planning Tips & Sequence Strategy --- */}
                <div className="grid lg:grid-cols-2 gap-10 mb-20">
                    {/* Planning Tips */}
                    <div className="bg-gray-900 p-8 rounded-xl shadow-2xl text-white">
                        <h3 className="text-2xl font-black text-indigo-400 mb-6 border-b border-indigo-700 pb-2">PLANNING TIPS</h3>
                        <ul className="space-y-4">
                            {planningTips.map((tip, i) => (
                                <li key={i} className="flex items-start text-lg">
                                    <div className="flex-shrink-0 mr-4 mt-1 text-yellow-400">{tip.icon}</div>
                                    <span className="text-gray-200">{tip.text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Sequence Strategy */}
                    <div className="bg-gray-800 p-8 rounded-xl shadow-2xl text-white">
                        <h3 className="text-2xl font-black text-indigo-400 mb-6 border-b border-indigo-700 pb-2">SEQUENCE STRATEGY</h3>
                        <ul className="space-y-4">
                            {sequenceStrategy.map((step, i) => (
                                <li key={i} className="flex items-center space-x-4">
                                    <div className="h-6 w-6 flex-shrink-0 flex items-center justify-center bg-indigo-500 text-white rounded-full font-bold text-sm">
                                        {i + 1}
                                    </div>
                                    <span className="text-lg text-gray-200">{step}</span>
                                </li>
                            ))}
                            <li className="text-sm italic text-gray-400 pt-2">REUSE ANGLES ONLY IF RIPPLE INCREASES.</li>
                        </ul>
                    </div>
                </div>
                
                {/* --- 5. PRE-WEDDING FAQ (Collapsible Section) --- */}
                

            </div>
        </section>
    );
}

export default PreWedding;
