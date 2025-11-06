import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-indigo-900 text-white py-10">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
                {/* Logo / Brand */}
                <div className="flex flex-col space-y-4">
                    <h1 className="text-2xl font-bold text-white">Avyukta</h1>
                    <p className="text-gray-300 text-sm">
                        Explore, relax, and create unforgettable moments on the open waters.
                    </p>
                </div>

                {/* Navigation */}
                <div className="flex flex-col space-y-2">
                    <h2 className="font-semibold text-white">Navigate</h2>
                    <a href="#aboutUs" className="text-gray-300 hover:text-white transition-colors">About Us</a>
                    <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
                    <a href="#planTrip" className="text-gray-300 hover:text-white transition-colors">Plan Trip</a>
                    <a href="#preWedding" className="text-gray-300 hover:text-white transition-colors">Pre Wedding</a>
                    <a href="#gallery" className="text-gray-300 hover:text-white transition-colors">Gallery</a>
                    <a href="#contactUs" className="text-gray-300 hover:text-white transition-colors">Contact</a>
                </div>

                {/* Contact / Social */}
                <div className="flex flex-col space-y-2">
                    <h2 className="font-semibold text-white">Connect</h2>
                    <p className="text-gray-300 text-sm">nishantnaik75@gmail.com</p>
                    <p className="text-gray-300 text-sm">+91 97315 20326</p>
                    <div className="flex space-x-3 mt-2"><div>
                        <p className="font-semibold text-indigo-200">Follow Us</p>
                        <a href={`https://instagram.com/@honnavara__back.water}`} target="_blank" rel="noopener noreferrer" className="text-lg hover:underline transition">Instagram</a>
                    </div>

                        {/* <a href="#" className="text-gray-300 hover:text-white transition-colors">Instagram</a> */}
                        {/* <a href="#" className="text-gray-300 hover:text-white transition-colors">Facebook</a>
                        <a href="#" className="text-gray-300 hover:text-white transition-colors">Twitter</a> */}
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-indigo-700 mt-8 pt-6">
                <p className="text-center text-gray-400 text-sm">
                    &copy; {new Date().getFullYear()} Avyukta. All rights reserved. <br />
                    Designed by <span className="text-white font-semibold">LiKitON</span>.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
