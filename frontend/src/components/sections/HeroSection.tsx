import React, { MouseEvent } from 'react';
import { Phone } from "lucide-react"; // ✅ Import the phone icon

const HeroSection: React.FC = () => {
    const handlePlanTripClick = (e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        document.getElementById('planTrip')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="home" className="hero-section text-white">
            <div className="max-w-4xl justify-center p-8 rounded-2xl bg-black/40 backdrop-blur-sm shadow-2xl border-2 border-indigo-400/50">
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-black mb-4 tracking-tight leading-tight">
                    Travel Beyond the Map <span className="text-indigo-300">Start Your Story</span>
                </h1>
                <p className="text-lg md:text-2xl mb-10 font-light opacity-90">
                    Crafting personalized luxury tours and destination experiences that last a lifetime.
                </p>
                <div className="flex my-5 flex-row items-center justify-center">
                    <a className='flex flex-row items-center justify-center' href="tel:+919731520326">

                        <Phone size={22} strokeWidth={2.5} />  &nbsp;&nbsp;+91 9731520326
                    </a>
                </div>
                <a
                    href="#planTrip"
                    className="inline-block px-10 py-4 bg-indigo-500 text-white font-bold rounded-full shadow-xl hover:bg-indigo-600 transition duration-300 transform hover:scale-[1.02] uppercase tracking-wider text-lg"
                    onClick={handlePlanTripClick}
                >
                    Plan Your Trip Now
                </a>
            </div>
        </section>
    );
};
export default HeroSection