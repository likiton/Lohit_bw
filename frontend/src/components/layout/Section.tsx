import React from 'react';
import { SectionProps } from '../../types';

// Update your SectionProps type to include children
// Example:
// export interface SectionProps {
//   id: string;
//   title?: string;
//   content?: string;
//   bgColor?: string;
//   children?: ReactNode;
// }

const Section: React.FC<SectionProps> = ({ id, title, content, bgColor, children }) => {
    return (
        <section
            id={id}
            className={`py-8 md:py-8 px-6 lg:px-12 ${bgColor} min-h-[60vh] flex items-center`}
        >
            <div className="max-w-7xl mx-auto text-center">
                {/* Title (optional) */}
                {title && (
                    <h2 className="text-3xl md:text-5xl font-extrabold text-indigo-700 mb-1 border-b-4 border-indigo-300 inline-block pb-1">
                        {title}
                    </h2>
                )}

                {/* Content (optional string) */}
                {content && (
                    <p className="text-gray-700 text-lg md:text-xl leading-relaxed mt-4">
                        {content}
                    </p>
                )}

                {/* Nested React elements */}
                {children && <div className="mt-6">{children}</div>}
            </div>
        </section>
    );
};

export default Section;
