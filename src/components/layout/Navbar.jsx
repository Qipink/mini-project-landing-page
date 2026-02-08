import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Menu Items sesuai permintaan Anda
    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'About', href: '#about' },
        { name: 'Features', href: '#features' }, // Sudah diganti dari Shop ke Features
        { name: 'Contact', href: '#contact' },
    ];

    const Icon = ({ path, className = "w-6 h-6" }) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            {path}
        </svg>
    );

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-transparent font-saira">
            <div className="container mx-auto px-6 py-6 flex justify-between items-center">

                {/* --- 1. LOGO --- */}
                <div className="flex items-center gap-2">
                    <a href="#" className="text-3xl font-bold text-white tracking-wide hover:text-primary transition-colors">
                        Furnishop
                    </a>
                </div>

                {/* --- 2. DESKTOP MENU --- */}
                <ul className="hidden md:flex gap-12 font-thin text-base text-white">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                className="hover:font-bold transition-colors duration-300 relative group"
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;