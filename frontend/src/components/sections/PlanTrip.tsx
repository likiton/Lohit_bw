import React from 'react';

// --- TYPE DEFINITIONS ---
interface StepCardProps {
  step: number;
  title: string;
  description: string;
}

interface ReadMoreCardProps {
  title: string;
  description?: string | string[];
  tag?: string;
  borderColor?: string;
  bgColor?: string;
  timing?: string;
}

// --- DATA ---
const rideCardData = [
  {
    title: '45m Sampler',
    tag: 'SHARED',
    description: ['Shared boat access', 'Core stretch', 'Quick taste'],
    borderColor: 'border-green-400',
    time: '45m',
  },
  {
    title: '1H Scenic',
    tag: 'PRIVATE',
    description: ['Reflection + bend', 'Shared / family', 'Budget focus'],
    borderColor: 'border-cyan-400',
    time: '1H',
  },
  {
    title: '1.5H Private',
    tag: 'PREMIUM',
    description: ['Lotus + corridor', 'Light shift capture', 'Flexible pacing'],
    borderColor: 'border-yellow-400',
    time: '1.5H',
  },
  {
    title: '2H Photo+',
    tag: 'PRO',
    description: ['Full sequence', 'Repeat frames', 'Golden return'],
    borderColor: 'border-red-400',
    time: '2H',
  },
];

// --- HELPER COMPONENTS ---
const ReadMoreCard: React.FC<ReadMoreCardProps> = ({ title, description, tag, borderColor, bgColor, timing }) => {
  const renderDescription = () => {
    if (!description) return null;

    if (Array.isArray(description)) {
      return description.map((item, i) => (
        <li key={i} className="flex items-start text-sm text-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-4 w-4 ${borderColor?.replace('border-', 'text-') || 'text-gray-400'} mr-2 flex-shrink-0 mt-0.5`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10"></circle>
          </svg>
          {item}
        </li>
      ));
    } else {
      return <p className="text-sm text-gray-600">{description}</p>;
    }
  };

  return (
    <div
      className={`p-5 rounded-xl border-2 relative flex flex-col justify-between bg-white ${borderColor} ${bgColor} shadow-md transition-shadow duration-300 hover:shadow-xl`}
    >
      {/* Title */}
      <h4 className="text-xl font-bold text-gray-800 mb-2">{title}</h4>

      {/* Tag always visible */}
      {tag && (
        <span
          className={`absolute -top-3 right-3 px-3 py-1 text-xs font-bold uppercase rounded-full shadow-md ${
            borderColor?.replace('border-', 'bg-') || 'bg-gray-400'
          } text-black`}
        >
          {tag}
        </span>
      )}

      {/* Always visible description */}
      {description && (
        <div className="mt-4">
          <ul className="space-y-1">{renderDescription()}</ul>
          {timing && <p className="text-sm font-semibold uppercase text-gray-500 mt-2">{timing} Ride</p>}
        </div>
      )}
    </div>
  );
};

const StepCard: React.FC<StepCardProps> = ({ step, title, description }) => {
  return (
    <div className="flex flex-col items-start justify-between space-y-2 h-full p-4 bg-white rounded-xl shadow-lg border border-gray-200 transform transition-transform duration-300 hover:scale-[1.02]">
      <div className="flex items-center space-x-2">
        <div className="w-7 h-7 flex items-center justify-center rounded-full bg-indigo-500 text-white font-black text-sm shadow-md">
          {step}
        </div>
        <h4 className="text-base font-bold text-gray-800">{title}</h4>
      </div>

      <div className="mt-2">
        <p className="text-xs text-gray-600">{description}</p>
      </div>
    </div>
  );
};

// --- MAIN COMPONENT ---
const PlanTripSection: React.FC = () => {
  return (
    <section id="planTrip" className="py-10 md:py-10 px-4 lg:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-black text-gray-800 mb-2">Plan Your Honnavar Boating Day</h2>
        <p className="text-gray-600 text-lg mb-8 max-w-4xl mx-auto">
          Everything in one page: distances, slot timing, sample mini itinerary, booking flow, season & packing guidance.
        </p>

        {/* --- Access Distances & Ride Durations --- */}
        <div className="mb-20">
          <h3 className="text-3xl font-black text-indigo-700 mb-6">Access Distances & Ride Durations</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {rideCardData.map((d, i) => (
              <ReadMoreCard
                key={i}
                title={d.title}
                description={d.description}
                tag={d.tag}
                borderColor={d.borderColor}
                timing={d.time}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlanTripSection;
