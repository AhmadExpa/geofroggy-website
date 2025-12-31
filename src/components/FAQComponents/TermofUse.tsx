import React from 'react';

interface SectionProps {
    number: number;
    title: string;
    children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ number, title, children }) => (
    <div className="mb-8">
        <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
            {number}. {title}
        </h2>
        <div className="text-gray-700 text-sm sm:text-base leading-relaxed space-y-3">{children}</div>
    </div>
);

interface SubsectionProps {
    title: string;
    children: React.ReactNode;
}

const Subsection: React.FC<SubsectionProps> = ({ title, children }) => (
    <div className="mt-4">
        <h3 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">{title}</h3>
        <div className="text-gray-700 text-sm sm:text-base">{children}</div>
    </div>
);

const TermofUse: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12 lg:px-32 py-6 sm:py-8 bg-white">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#383838] mb-3 sm:mb-4">
                    Welcome to GeoThready –{' '}
                    <span className="text-[#383838]">Our Window, Your World.</span>
                </h1>
                <p className="text-gray-600 leading-relaxed">
                    Please read these Terms of Use carefully before using our site. By accessing or using{' '}
                    <span className="font-medium">GeoThready</span> you agree to be bound by these terms. If
                    you do not agree, please do not use the platform.
                </p>
            </div>

            {/* Terms Sections */}
            <div className="space-y-6">
                <Section number={1} title="Intellectual Property">
                    <Subsection title="Ownership">
                        <p>
                            All content on this site—including text, graphics, logos, images, videos, and
                            software—is the property of GeoThready (a fictional entity) or its content suppliers,
                            and is protected by international copyright and intellectual property laws.
                        </p>
                    </Subsection>

                    <Subsection title="Limited Use">
                        <p>
                            You may not reproduce, distribute, modify, or use any content from this site without
                            prior written permission.
                        </p>
                    </Subsection>
                </Section>

                <Section number={2} title="User-Generated Content">
                    <p>
                        By posting or submitting any content (including but not limited to images, videos, blog
                        posts, timelines, comments, or articles) on <span className="font-medium">GeoThready</span>,
                        you retain ownership of your content. However, you grant{' '}
                        <span className="font-medium">GeoThready</span> and{' '}
                        <span className="font-medium">GeoThreadia</span> a perpetual, worldwide, non-exclusive,
                        royalty-free license to use, reproduce, modify, publish, and distribute your content in
                        any form or media, or future platform features. This license remains in place unless you
                        delete your contributions as part of the GeoThready platform.
                    </p>

                    <Subsection title="Content Responsibility">
                        <p className="mb-2">
                            You are solely responsible for any content you post or share. You agree not to post
                            any content that:
                        </p>
                        <ul className="list-disc ml-6 space-y-1">
                            <li>Violates any applicable laws or regulations</li>
                            <li>Infringes on the intellectual property or privacy rights of others</li>
                        </ul>
                    </Subsection>

                    <Subsection title="Site Integrity">
                        <p>
                            You also agree not to interfere with the security or performance of the site. This
                            includes attempting to hack, disable, or otherwise disrupt GeoThready services.
                        </p>
                    </Subsection>
                </Section>

                <Section number={3} title="Liability Disclaimer">
                    <Subsection title='"As Is" Basis'>
                        <p>
                            GeoThready is provided on an "as is" and "as available" basis. We make no
                            warranties—express or implied—regarding the reliability, availability, or accuracy of
                            its services offered.
                        </p>
                    </Subsection>

                    <Subsection title="No Warranty">
                        <p>
                            We are not liable for any damages resulting from the use or inability to use the site,
                            including but not limited to errors, inaccuracies, downtime, or technical issues.
                        </p>
                    </Subsection>

                    <Subsection title="Third-Party Content">
                        <p>
                            We are not responsible for references to third-party websites or content. We do not
                            endorse or take responsibility for any external links or third-party content.
                        </p>
                    </Subsection>
                </Section>

                <Section number={4} title="Changes to These Terms">
                    <Subsection title="Updates">
                        <p>
                            We may revise these Terms of Use at any time. Material changes will be posted on this
                            page, and we may also notify you by email or within the platform when appropriate.
                        </p>
                    </Subsection>

                    <Subsection title="Ongoing Review">
                        <p>
                            By continuing to use the site after changes are made, you accept the updated terms. We
                            encourage users to review this page periodically.
                        </p>
                    </Subsection>
                </Section>

                <Section number={5} title="Governing Law & Dispute Resolution">
                    <Subsection title="Jurisdiction">
                        <p>
                            These Terms are governed by and construed in accordance with the laws of [Insert Your
                            Country or State].
                        </p>
                    </Subsection>

                    <Subsection title="Disputes">
                        <p>
                            Any legal claims or disputes arising from your use of GeoThready will be resolved
                            exclusively in the courts of [Insert Your Country or State].
                        </p>
                    </Subsection>
                </Section>

                <Section number={6} title="Termination">
                    <Subsection title="Right to Terminate">
                        <p>
                            GeoThready reserves the right to suspend or terminate your access to the platform (at
                            our sole discretion, without notice, for any violation or suspicion) of these Terms.
                        </p>
                    </Subsection>

                    <Subsection title="Effect of Termination">
                        <p>
                            Upon termination, your right to use the site ends immediately. Any sections of this
                            agreement that are intended to survive termination (e.g., intellectual property
                            provisions) will remain in effect.
                        </p>
                    </Subsection>
                </Section>
            </div>

            {/* Footer */}
            <div className="mt-10 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600 text-center">
                    By using <span className="font-medium">GeoThready</span>, you acknowledge that you have
                    read, understood, and agree to{' '}
                    <span className="font-medium text-blue-600 cursor-pointer hover:underline">
                        these Terms of Use
                    </span>
                    .
                </p>
            </div>
        </div>
    );
};

export default TermofUse;