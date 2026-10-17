import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="flex flex-wrap justify-center lg:justify-between items-start gap-10 md:gap-20 py-16 px-6 md:px-16 lg:px-24 xl:px-32 text-[13px] text-gray-600 bg-linear-to-r from-white via-green-200/60 to-white">

            {/* ResuMate AI Branding */}
            <div className="flex flex-col max-w-xs">
                <Link to="/" onClick={scrollToTop}>
                    <img
                        src="/resumate-logo.png"
                        alt="ResuMate AI"
                        className="h-11 w-auto mb-4"
                    />
                </Link>

                <p className="text-gray-600 leading-relaxed">
                    Build professional resumes with AI-powered assistance
                    and customizable templates.
                </p>
            </div>

            {/* Product Links */}
            <div>
                <p className="text-slate-800 font-semibold mb-3">
                    Product
                </p>

                <ul className="space-y-3">
                    <li>
                        <Link
                            to="/"
                            onClick={scrollToTop}
                            className="hover:text-green-700 transition-colors"
                        >
                            Home
                        </Link>
                    </li>

                    <li>
                        <a
                            href="mailto:surabhirai011@gmail.com"
                            className="hover:text-green-700 transition-colors"
                        >
                            Support
                        </a>
                    </li>
                </ul>
            </div>

            {/* Legal Links */}
            <div>
                <p className="text-slate-800 font-semibold mb-3">
                    Legal
                </p>

                <ul className="space-y-3">
                    <li>
                        <Link
                            to="/privacy"
                            className="hover:text-green-700 transition-colors"
                        >
                            Privacy Policy
                        </Link>
                    </li>

                    <li>
                        <Link
                            to="/terms"
                            className="hover:text-green-700 transition-colors"
                        >
                            Terms of Service
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Back to Top */}
            <div className="flex flex-col items-center gap-6">
                <button
                    onClick={scrollToTop}
                    className="bg-green-700 text-white p-3 rounded-full hover:bg-green-800 transition-all duration-200 hover:scale-110 shadow-md"
                    title="Back to top"
                    aria-label="Back to top"
                >
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
                    >
                        <path d="m18 15-6-6-6 6" />
                    </svg>
                </button>

                <p className="text-gray-600 text-center mt-4">
                    © 2026 ResuMate AI. All rights reserved.
                </p>
            </div>

        </footer>
    );
};

export default Footer;