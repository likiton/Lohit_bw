import { FC} from 'react';
import { MobileMenuButtonProps } from '../../types';

const MobileMenuButton: FC<MobileMenuButtonProps> = ({ isMenuOpen, setIsMenuOpen }) => {
    return (
        <div className="md:hidden">
            <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white p-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 rounded-lg transition-colors bg-indigo-600/50 hover:bg-indigo-600"
                aria-label="Toggle navigation"
                aria-expanded={isMenuOpen}
            >
                {isMenuOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                )}
            </button>
        </div>
    );
};

export default MobileMenuButton;
