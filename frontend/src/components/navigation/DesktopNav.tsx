import React, { FC } from 'react';
import { NAV_ITEMS } from '../../data/navData';
import { DesktopNavProps} from '../../types';


const DesktopNav: FC<DesktopNavProps> = ({ activeSection, onLinkClick }) => {

    // FIX 1: Implement smooth scrolling and menu closing logic here
    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string): void => {
        e.preventDefault();
        // Scroll to the target section ID
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        onLinkClick(); // Close mobile menu
    };

    return (
        <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 lg:space-x-6">
            {NAV_ITEMS.map((item) => {
                const isActive: boolean = activeSection === item.id;

                // --- 3D EFFECT CLASSES ---
                const activeClasses: string = `
          px-4 py-2 rounded-full font-bold text-white cursor-pointer 
          bg-indigo-600 shadow-xl shadow-indigo-500/70 
          transform transition duration-300 ease-in-out scale-105
          hover:bg-indigo-500
        `;
                const inactiveClasses: string = `
          px-4 py-2 rounded-full font-semibold text-gray-300 
          hover:text-white hover:bg-indigo-700/50 
          transition duration-300
        `;
                // -------------------------

                return (
                    <li key={item.id}>
                        <a
                            href={`#${item.id}`}
                            onClick={(e) => handleLinkClick(e, item.id)} // Use the new fixed handler
                            className={`block text-center ${isActive ? activeClasses : inactiveClasses}`}
                        >
                            {item.label}
                        </a>
                    </li>
                );
            })}
        </ul>
    );
};
export default DesktopNav;