
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import DemoModal from '../DemoModal';

const Hero = () => {
    const { user } = useSelector((state) => state.auth);
    const [menuOpen, setMenuOpen] = React.useState(false);
    const [demoModalOpen, setDemoModalOpen] = React.useState(false);

    const closeMenu = () => setMenuOpen(false);

    return (
        <>
            <div className="pb-8">
                {/* Navbar */}
                <nav className="relative z-50 flex items-center justify-between w-full py-4 px-6 md:px-16 lg:px-24 xl:px-40 text-sm">
                    <Link to="/" aria-label="ResuMate AI Home">
                        <img
                            src="/resumate-logo.png"
                            alt="ResuMate AI"
                            className="h-11 w-auto"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8 text-slate-800">
                        <a href="#" className="hover:text-green-600 transition">
                            Home
                        </a>
                        <a href="#features" className="hover:text-green-600 transition">
                            Features
                        </a>
                        <a href="#cta" className="hover:text-green-600 transition">
                            Contact
                        </a>
                    </div>

                    {/* Account Buttons */}
                    <div className="hidden md:flex items-center gap-2">
                        {!user ? (
                            <>
                                <Link
                                    to="/app?state=register"
                                    className="px-6 py-2 bg-green-600 hover:bg-green-700 active:scale-95 transition-all rounded-full text-white"
                                >
                                    Get started
                                </Link>

                                <Link
                                    to="/app?state=login"
                                    className="px-6 py-2 bg-[#E9DED8] border border-[#67343A] hover:bg-[#DCC9C2] transition-all rounded-full text-[#67343A]"
                                >
                                    Login
                                </Link>
                            </>
                        ) : (
                            <Link
                                to="/app"
                                className="px-8 py-2 bg-green-600 hover:bg-green-700 active:scale-95 transition-all rounded-full text-white"
                            >
                                Dashboard
                            </Link>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        type="button"
                        onClick={() => setMenuOpen(true)}
                        className="md:hidden p-2"
                        aria-label="Open navigation menu"
                        aria-expanded={menuOpen}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="26"
                            height="26"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path d="M4 5h16M4 12h16M4 19h16" />
                        </svg>
                    </button>
                </nav>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div className="fixed inset-0 z-100 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center gap-8 text-lg md:hidden">
                        <a href="#" onClick={closeMenu} className="text-white">
                            Home
                        </a>

                        <a href="#features" onClick={closeMenu} className="text-white">
                            Features
                        </a>

                        <a href="#cta" onClick={closeMenu} className="text-white">
                            Contact
                        </a>

                        {!user ? (
                            <>
                                <Link
                                    to="/app?state=register"
                                    onClick={closeMenu}
                                    className="text-white"
                                >
                                    Get started
                                </Link>

                                <Link
                                    to="/app?state=login"
                                    onClick={closeMenu}
                                    className="text-white"
                                >
                                    Login
                                </Link>
                            </>
                        ) : (
                            <Link
                                to="/app"
                                onClick={closeMenu}
                                className="text-white"
                            >
                                Dashboard
                            </Link>
                        )}

                        <button
                            type="button"
                            onClick={closeMenu}
                            className="size-10 flex items-center justify-center bg-green-600 hover:bg-green-700 transition text-white rounded-md"
                            aria-label="Close navigation menu"
                        >
                            X
                        </button>
                    </div>
                )}

                {/* Hero Section */}
                <section className="relative flex flex-col items-center justify-center text-sm px-4 md:px-16 lg:px-24 xl:px-40 text-black">
                    <div className="absolute top-28 xl:top-10 -z-10 left-1/4 size-72 sm:size-96 xl:size-120 2xl:size-132 bg-green-300 blur-[100px] opacity-30" />

                    {/* Main Heading */}
                    <h1 className="text-4xl md:text-6xl font-semibold max-w-5xl text-center mt-20 md:mt-24 md:leading-17.5">
                        Build your next career move with{' '}
                        <span className="text-[#67343A]">
                            AI-powered resumes.
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="max-w-xl text-center text-base md:text-lg my-7 text-slate-600">
                        Create and customize professional resumes with
                        AI-assisted suggestions and clean, modern templates.
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <Link
                            to="/app"
                            className="bg-green-600 hover:bg-green-700 text-white rounded-full px-9 h-12 m-1 ring-offset-2 ring-1 ring-green-400 flex items-center transition-colors"
                        >
                            Get started

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="ml-2 size-4"
                                aria-hidden="true"
                            >
                                <path d="M5 12h14" />
                                <path d="m12 5 7 7-7 7" />
                            </svg>
                        </Link>

                        <button
                            type="button"
                            onClick={() => setDemoModalOpen(true)}
                            className="flex items-center gap-2 bg-[#E9DED8] border border-[#67343A] hover:bg-[#DCC9C2] transition-all rounded-full px-7 h-12 text-[#67343A]"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                aria-hidden="true"
                            >
                                <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
                                <rect x="2" y="6" width="14" height="12" rx="2" />
                            </svg>

                            <span>Try demo</span>
                        </button>
                    </div>
                </section>
            </div>

            {/* Demo Modal */}
            <DemoModal
                isOpen={demoModalOpen}
                onClose={() => setDemoModalOpen(false)}
            />

            {/* Font */}
            <style>
                {`
                    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

                    * {
                        font-family: 'Poppins', sans-serif;
                    }
                `}
            </style>
        </>
    );
};

export default Hero;
