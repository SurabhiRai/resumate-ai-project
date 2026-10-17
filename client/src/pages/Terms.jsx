import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div className="min-h-screen bg-green-50/40 py-12 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-bold text-gray-900 mb-3">
                        Terms of Service
                    </h1>
                    <p className="text-gray-500">
                        Last updated: October 17, 2026
                    </p>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-green-100 p-6 md:p-10">
                    <div className="space-y-8">

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                                1. Acceptance of Terms
                            </h2>
                            <p className="text-gray-600 leading-7">
                                Welcome to ResuMate AI. By accessing or using this
                                website, you agree to these Terms of Service. If
                                you do not agree, please stop using the service.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                                2. About ResuMate AI
                            </h2>
                            <p className="text-gray-600 leading-7">
                                ResuMate AI is a resume-building platform intended
                                to help users create, customize and prepare
                                professional resumes. Available features may
                                include resume templates and AI-assisted content
                                suggestions, depending on the current version
                                of the application.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                                3. Your Information
                            </h2>
                            <p className="text-gray-600 leading-7">
                                You are responsible for ensuring that information
                                you enter into your resume is accurate and that
                                you have permission to use any information or
                                documents you provide. Avoid including sensitive
                                information that is not necessary for your resume.
                            </p>
                            <p className="text-gray-600 leading-7 mt-3">
                                Please read our{' '}
                                <Link
                                    to="/privacy"
                                    className="text-green-700 hover:underline"
                                >
                                    Privacy Policy
                                </Link>{' '}
                                to understand how information may be handled.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                                4. Acceptable Use
                            </h2>
                            <p className="text-gray-600 leading-7 mb-3">
                                When using ResuMate AI, you agree not to:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-600">
                                <li>Use the service for unlawful purposes.</li>
                                <li>Submit information that you do not have permission to use.</li>
                                <li>Attempt to disrupt, damage or gain unauthorized access to the website.</li>
                                <li>Misuse the service or interfere with other users.</li>
                                <li>Use generated content to misrepresent your qualifications or experience.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                                5. AI-Generated Content
                            </h2>
                            <p className="text-gray-600 leading-7">
                                AI-assisted suggestions may contain errors,
                                omissions or unsuitable wording. You are
                                responsible for reviewing and editing your resume
                                before using or submitting it. ResuMate AI does
                                not guarantee interviews, employment or any
                                particular career outcome.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                                6. Intellectual Property
                            </h2>
                            <p className="text-gray-600 leading-7">
                                The website's design, branding, software and
                                original materials may be protected by applicable
                                intellectual property laws. You retain
                                responsibility for the content you provide and
                                must ensure you have the necessary rights to use it.
                                Any rights in templates or third-party materials
                                remain subject to their applicable terms.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                                7. Availability and Changes
                            </h2>
                            <p className="text-gray-600 leading-7">
                                Features may be changed, updated or temporarily
                                unavailable. We cannot guarantee uninterrupted
                                access to the website or that every feature will
                                always be available.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                                8. Disclaimer
                            </h2>
                            <p className="text-gray-600 leading-7">
                                ResuMate AI provides resume-building tools and
                                suggestions for general assistance. You should
                                verify the accuracy of all information before
                                relying on it. To the extent permitted by
                                applicable law, the service is provided on an
                                as-available basis without guarantees of specific
                                results.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                                9. Limitation of Liability
                            </h2>
                            <p className="text-gray-600 leading-7">
                                To the extent permitted by applicable law,
                                ResuMate AI is not responsible for losses arising
                                from reliance on unverified AI-generated content,
                                inability to access the service, or use of the
                                website contrary to these terms. Nothing in these
                                terms excludes liability where exclusion is not
                                permitted by law.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                                10. Changes to These Terms
                            </h2>
                            <p className="text-gray-600 leading-7">
                                These terms may be updated as the service evolves.
                                The latest version will be published on this page
                                with an updated date. Continued use after an
                                update means you accept the revised terms where
                                permitted by applicable law.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                                11. Contact Us
                            </h2>
                            <p className="text-gray-600 leading-7">
                                For questions about these Terms of Service,
                                contact us at:
                            </p>
                            <p className="text-gray-600 mt-3">
                                <strong>Email:</strong>{' '}
                                <a
                                    href="mailto:surabhirai011@gmail.com"
                                    className="text-green-700 hover:underline"
                                >
                                    surabhirai011@gmail.com
                                </a>
                            </p>
                        </section>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Terms;