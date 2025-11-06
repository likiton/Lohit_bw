import React, { MouseEvent } from 'react';
import { NavLinkProps } from '../../types';

const NavLink: React.FC<NavLinkProps> = ({ id, children, onClick, activeSection }) => {
    const isActive = activeSection === id;

    const linkClasses = `
        text-sm font-medium uppercase tracking-wider px-3 py-2 cursor-pointer 
        transition-all duration-300 transform 
        relative group 
        ${isActive
            ? 'text-indigo-400 scale-105'
            : 'text-white hover:scale-105 hover:text-indigo-300'
        }
        md:py-0
    `;

    const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        // Scroll to the target section ID
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        if (onClick) {
            onClick(); // Close mobile menu if open
        }
    };

    return (
        <li className="relative w-full md:w-auto text-center" key={id}>
            <a
                href={`#${id}`}
                className={linkClasses}
                onClick={handleLinkClick}
            >
                {children}
                {/* Underline effect: positioned absolutely, scaled from left */}
                <span className={`
                    absolute bottom-0 left-0 w-full h-[2px] bg-indigo-400 
                    transition-transform duration-300 ease-out 
                    transform origin-left 
                    ${isActive
                        ? 'scale-x-100' // Permanent underline when active
                        : 'scale-x-0 group-hover:scale-x-100' // Grow on hover
                    }
                `}></span>
            </a>
        </li>
    );
};

export default NavLink;