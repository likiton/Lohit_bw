import React, { FC, useState } from 'react';
import { Instagram, Phone, Send, MapPin, Map, DollarSign } from 'lucide-react';

// WhatsApp SVG Icon as JSX
const WhatsAppIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.52 3.48A11.91 11.91 0 0 0 12 0C5.37 0 .02 5.37.02 12a11.9 11.9 0 0 0 1.75 6.15L0 24l5.9-1.53A11.91 11.91 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.2-3.48-8.52zm-8.5 17.6c-2.13 0-4.14-.57-5.92-1.63l-.42-.25-3.5.91.93-3.41-.27-.43a9.906 9.906 0 0 1-1.63-5.9c0-5.52 4.48-10 10-10 2.66 0 5.16 1.04 7.05 2.93s2.93 4.39 2.93 7.05c0 5.52-4.48 10-10 10zm5.18-7.65c-.29-.14-1.72-.85-1.99-.95-.27-.11-.46-.14-.66.14s-.76.95-.93 1.15c-.17.19-.34.21-.63.07-.29-.14-1.23-.45-2.34-1.45-.87-.77-1.45-1.72-1.62-2.01-.17-.28-.02-.43.12-.57.12-.12.27-.32.41-.48.14-.16.18-.28.27-.46.09-.18.04-.33-.02-.46-.06-.13-.66-1.58-.9-2.17-.24-.57-.49-.49-.66-.5-.17-.01-.37-.01-.57-.01s-.46.07-.7.34c-.24.27-.92.9-.92 2.2s.94 2.56 1.07 2.74c.12.18 1.85 2.83 4.49 3.97 2.64 1.14 2.64.76 3.11.72.47-.03 1.52-.62 1.73-1.22.21-.61.21-1.13.15-1.24-.06-.11-.23-.18-.47-.32z" />
  </svg>
);

// --- Contact Information ---
const CONTACT_INFO = {
  phone: '+91 9731520326',
  email: 'hello@boatingtravels.com',
  instagramHandle: '@honnavara__back.water',
  whatsappNumber: '919731520326',
  address: 'Unbounded Heaven, Honnavar, Karnataka, India',
  mapLink: 'https://maps.app.goo.gl/5p16HyT5aXxTQpkP9'
};

// --- IconCard Component ---
interface IconCardProps {
  icon: JSX.Element;
  title: string;
  description: string;
  href: string;
  colorClasses: string;
}

const IconCard: FC<IconCardProps> = ({ icon, title, description, href, colorClasses }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`flex flex-col items-center justify-center p-6 text-center rounded-2xl border border-gray-100 
                transition-all duration-300 shadow-md h-full
                bg-white hover:shadow-xl hover:scale-[1.02]`}
  >
    <div className={`p-4 rounded-full ${colorClasses} text-white mb-3 shadow-lg`}>
      {icon}
    </div>
    <h4 className="text-xl font-bold text-gray-800">{title}</h4>
    <p className="text-sm text-gray-500 mt-1">{description}</p>
  </a>
);

// --- Contact Component ---
const Contact: FC = () => {
  const [formData, setFormData] = useState({ name: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage('');

    if (!formData.name || !formData.message) {
      setStatusMessage('Please fill out all fields.');
      setIsSubmitting(false);
      return;
    }

    const waText = `Hello, my name is ${formData.name}. I saw your website and I'd like to ask about: ${formData.message}`;
    const encodedText = encodeURIComponent(waText);
    const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodedText}`;

    try {
      window.open(whatsappUrl, '_blank');
      setStatusMessage('Opening WhatsApp... Please send the pre-filled message.');
      setFormData({ name: '', message: '' });
    } catch {
      setStatusMessage('Could not open WhatsApp. Please use the direct links above.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = "w-full p-3 border border-indigo-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-300 bg-white shadow-sm";
  const labelClasses = "block text-sm font-medium text-gray-700 mb-1";

  return (
    <div id="contactUs" className="min-h-screen bg-gray-50 font-sans p-4 md:p-12">

      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-10 pt-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4 uppercase">Contact</h2>
        <div className="w-16 h-1 bg-teal-400 mx-auto mb-6 rounded-full"></div>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto">
          Fastest ways to reach us for <strong>Honnavar backwater boating</strong> slot confirmation or custom package queries.
        </p>
      </div>

      {/* Icon Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
        <IconCard icon={<Phone className="w-6 h-6 text-white" />} title="Call" description="Immediate assistance" href={`tel:${CONTACT_INFO.phone.replace(/ /g, '')}`} colorClasses="bg-indigo-500" />
        <IconCard icon={WhatsAppIcon} title="WhatsApp" description="Send a message now, we reply fast." href={`https://wa.me/${CONTACT_INFO.whatsappNumber}`} colorClasses="bg-green-500" />
        <IconCard icon={<MapPin className="w-6 h-6 text-white" />} title="Directions" description="Navigate to our boarding point." href={CONTACT_INFO.mapLink} colorClasses="bg-red-500" />
        <IconCard icon={<DollarSign className="w-6 h-6 text-white" />} title="Pricing" description="View package rates and booking details." href="#pricing" colorClasses="bg-amber-500" />
      </div>

      {/* Contact Form & Info */}
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2">

          {/* Info Column */}
          <div className="bg-indigo-700/90 backdrop-blur-lg text-white p-6 sm:p-8 md:p-12 rounded-3xl shadow-2xl flex flex-col md:flex-row justify-between gap-6 md:gap-12">
            {/* Left Content */}
            <div className="flex-1 w-full">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 sm:mb-6 border-b-4 border-indigo-400 pb-2">
                Direct Contact
              </h3>
              <p className="mb-6 sm:mb-8 text-indigo-100 text-base sm:text-lg leading-relaxed">
                Connect with our team instantly for quotes, bookings, or questions. We’re here to make your experience seamless.
              </p>

              {/* Contact Items */}
              <div className="space-y-4 sm:space-y-6">
                {/* Base Location */}
                <div className="flex items-center gap-3 w-full">
                  <MapPin className="w-6 h-6 text-indigo-300 flex-shrink-0 mt-1" />
                  <div className="w-full">
                    <p className="font-semibold text-indigo-200">Base Location</p>
                    <p className="text-base sm:text-lg">{CONTACT_INFO.address}</p>
                  </div>
                </div>


                {/* Instagram */}
                <div className="flex items-center gap-3 w-full">
                  <Instagram className="w-6 h-6 mr-3 mt-1 text-indigo-300 flex-shrink-0 align justify-center" />
                  <div className="w-full">
                    <p className="font-semibold text-indigo-200">Follow Us</p>
                    <a
                      href={`https://instagram.com/${CONTACT_INFO.instagramHandle.substring(1)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base sm:text-lg hover:underline transition-colors duration-300"
                    >
                      {CONTACT_INFO.instagramHandle}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Illustration (optional) */}
            {/* <div className="hidden md:flex flex-1 justify-center items-center">
              <img
                src="src/images/contact-vector.webp"
                alt="Contact Illustration"
                className="w-48 h-48 object-contain rounded-xl shadow-xl"
              />
            </div> */}
          </div>



          {/* Form Column */}
          <div className="p-8 md:p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Quick Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className={labelClasses}>Your Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className={inputClasses} required />
              </div>
              <div>
                <label htmlFor="message" className={labelClasses}>Your Message</label>
                <textarea id="message" name="message" rows={5} value={formData.message} onChange={handleChange} className={`${inputClasses} resize-none`} required />
              </div>
              {statusMessage && <p className={`text-sm font-medium ${statusMessage.includes('Please') ? 'text-red-600' : 'text-green-600'}`}>{statusMessage}</p>}
              <button type="submit" disabled={isSubmitting} className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-bold rounded-xl shadow-md text-white bg-indigo-600 hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:scale-[1.01] disabled:bg-indigo-400 disabled:cursor-not-allowed">
                {isSubmitting ? 'Sending...' : <>
                  <Send className="w-5 h-5 mr-3" /> Send Message (via WhatsApp)
                </>}
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* Map Section */}
      <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-2xl">
        {/* Header Section */}
        <div className="flex items-center text-2xl font-bold text-gray-800 p-6 bg-white border-b border-gray-100">
          <Map className="w-6 h-6 mr-3 text-indigo-600 flex-shrink-0" />
          Our Backwater Boating Location
        </div>

        {/* Embedded Google Map */}
        <div className="relative w-full h-96 bg-gray-100">
          <iframe
            src="https://www.google.com/maps?q=14.2773427963257,74.4594116210938&z=15&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-b-3xl"
          ></iframe>

          {/* Optional overlay text */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/40 text-white text-sm px-4 py-1.5 rounded-full backdrop-blur-md">
            Explore Honnavar Backwaters 🌊
          </div>
        </div>
      </div>

    </div>
  );
};

export default Contact;
