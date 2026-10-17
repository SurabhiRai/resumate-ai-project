import React from 'react';

const Privacy = () => {
    return (
        <div className="min-h-screen bg-green-50/40 py-12 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-bold text-gray-900 mb-3">
                        Privacy Policy
                    </h1>
                    <p className="text-gray-500">
                        Last updated: October 17, 2026
                    </p>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-green-100 p-6 md:p-10">
                    <div className="prose prose-gray max-w-none">

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                                1. Introduction
                            </h2>
                            <p className="text-gray-600 leading-7">
                                Welcome to ResuMate AI, a resume-building platform
                                designed to help users create and customize
                                professional resumes. This Privacy Policy explains
                                how information may be handled when you use our
                                website and its features.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                                2. Information You Provide
                            </h2>
                            <p className="text-gray-600 leading-7 mb-3">
                                Depending on the features you use, you may provide
                                information such as:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-600">
                                <li>Your name and contact details.</li>
                                <li>Education, skills, work experience and career goals.</li>
                                <li>Resume content and other information you enter.</li>
                                <li>Files or documents you choose to upload.</li>
                                <li>Information submitted when contacting support.</li>
                            </ul>
                            <p className="text-gray-600 leading-7 mt-3">
                                Please avoid entering sensitive personal information
                                unless it is necessary for your resume.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                                3. How Information May Be Used
                            </h2>
                            <p className="text-gray-600 leading-7">
                                Information you provide may be used to generate,
                                edit and customize resume content; operate the
                                features you request; respond to support enquiries;
                                maintain and troubleshoot the website; and meet
                                applicable legal obligations.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                                4. AI Features and Third-Party Services
                            </h2>
                            <p className="text-gray-600 leading-7">
                                If you use an AI-powered feature, the information
                                submitted to that feature may be processed by the
                                service provider used to deliver it. Third-party
                                services may also be involved in hosting or
                                operating the website. Their handling of information
                                is governed by their own policies and applicable
                                arrangements.
                            </p>
                            <p className="text-gray-600 leading-7 mt-3">
                                We recommend reviewing the relevant provider
                                policies before submitting personal information
                                through AI features.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                                5. Sharing of Information
                            </h2>
                            <p className="text-gray-600 leading-7">
                                Personal information may be processed by service
                                providers when necessary to operate features you
                                request, or disclosed where required by law.
                                Information may also be shared with your direction
                                or consent. The actual sharing depends on the
                                services and integrations enabled in the application.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                                6. Data Storage and Security
                            </h2>
                            <p className="text-gray-600 leading-7">
                                Information may be handled by the website and the
                                services it uses. No method of internet transmission
                                or electronic storage can be guaranteed to be
                                completely secure. Please use care when sharing
                                personal information online.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                                7. Cookies and Technical Information
                            </h2>
                            <p className="text-gray-600 leading-7">
                                The website or its service providers may process
                                technical information, such as browser details,
                                device information, logs or cookies, where these
                                are used to operate, secure or improve the service.
                                The specific information collected depends on the
                                technologies enabled on the website.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                                8. Data Retention and Your Choices
                            </h2>
                            <p className="text-gray-600 leading-7">
                                How long information is retained depends on how
                                the application and its service providers store
                                and process it. You may contact us to ask about
                                your information or request correction or deletion.
                                We will assess such requests in accordance with
                                applicable law and the technical capabilities of
                                the service.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                                9. Children's Privacy
                            </h2>
                            <p className="text-gray-600 leading-7">
                                ResuMate AI is intended for people who can lawfully
                                use the service. If you believe a child has provided
                                personal information inappropriately, please
                                contact us so we can review the concern.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                                10. Changes to This Policy
                            </h2>
                            <p className="text-gray-600 leading-7">
                                This policy may be updated as the website changes.
                                Updates will be posted on this page with a revised
                                date.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                                11. Contact Us
                            </h2>
                            <p className="text-gray-600 leading-7">
                                If you have questions or concerns about this
                                Privacy Policy, contact us at:
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

export default Privacy;