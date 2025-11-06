import { ReactNode, Dispatch, SetStateAction } from 'react';


// --- TYPE DEFINITIONS (types/index.ts) ---
export interface NavItem {
    id: string;
    label: string;
}

export interface PricingCardProps {
    duration: string;
    title: string;
    price: string;
    tag?: string;
    features: string[];
    footer: string;
    isExtended?: boolean;
    isCinematic?: boolean;
}


export interface FeatureCardProps {
    icon: ReactNode;
    title: string;
    description: string;
}

export interface NavLinkProps {
    id: string;
    children: ReactNode;
    onClick: () => void;
    activeSection: string;
}

export interface SectionProps {
    id: string;
    title?: string;
    content?: string;
    bgColor?: string;
    children?: ReactNode;
}

export interface MobileMenuButtonProps {
    isMenuOpen: boolean;
    setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
}

export interface DesktopNavProps {
    isMobile: boolean;
    onLinkClick: () => void;
    activeSection: string;
}
