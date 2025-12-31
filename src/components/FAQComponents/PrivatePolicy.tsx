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

const PrivacyPolicy: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12 lg:px-32 py-6 sm:py-8 bg-white">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-xl sm:text-2xl font-bold text-[#383838] mb-3 sm:mb-4">Last Updated: 07/09/2025</h1>
                <p className="text-gray-600 leading-relaxed">
                    <span className="font-medium">GeoThready</span> (referred to as "GeoThready," "we," "us,"
                    or "our") is committed to protecting your privacy and we want your personal data to be
                    handled with care, transparency, and community. This Privacy Policy explains what
                    information we collect, how we use it, and the steps we take to safeguard it.
                </p>
            </div>

            {/* Privacy Policy Sections */}
            <div className="space-y-6">
                <Section number={1} title="Information We Collect and How We Use It">
                    <p>
                        We collect the following categories of information when you use the platform, which
                        include:
                    </p>

                    <Subsection title="Personal Information (Voluntarily Provided)">
                        <ul className="list-disc ml-6 space-y-1">
                            <li>Name</li>
                            <li>Age (18 or older)</li>
                            <li>Country</li>
                            <li>Location (general)</li>
                            <li>Email address (for verification)</li>
                            <li>Any other data you choose to provide</li>
                        </ul>
                    </Subsection>

                    <Subsection title="Non-personal (Collected Automatically)">
                        <ul className="list-disc ml-6 space-y-1">
                            <li>IP address</li>
                            <li>Browser type</li>
                            <li>Device information (e.g., device type, device data, and geolocation)</li>
                            <li>Pages visited, actions taken, and content interactions</li>
                            <li>Cookies and similar tracking technologies</li>
                        </ul>
                    </Subsection>

                    <div className="mt-4">
                        <p className="font-semibold text-gray-800 mb-2">
                            We use the information we collect for:
                        </p>
                        <ul className="list-disc ml-6 space-y-1">
                            <li>Testing user experience, platform features, and services</li>
                            <li>
                                Ensuring community compliance with our Terms of Use and community guidelines based on
                                age, region
                            </li>
                            <li>
                                Understanding site traffic (e.g., monetization, products, and ethical enforcement
                                interest)
                            </li>
                            <li>
                                Communicating with you (e.g., platform updates, newsletters, and support responses)
                            </li>
                            <li>Protecting the platform and its user environments</li>
                        </ul>
                    </div>
                </Section>

                <Section number={2} title="Cookies and Tracking Technologies">
                    <p>
                        <span className="font-medium">GeoThready</span> uses cookies and similar technologies
                        (e.g., pixels, beacons, IP analytics) to improve functionality and personalize content.
                        Your use settings can be managed through your browser settings.
                    </p>
                </Section>

                <Section number={3} title="Data Sharing and Third Parties">
                    <p className="mb-3">
                        We do not sell your data. However, we may share data (possibly) to include the following
                        legal purposes:
                    </p>
                    <ul className="list-disc ml-6 space-y-2">
                        <li>
                            <span className="font-semibold">Service Providers:</span> For hosting, maintenance,
                            analytics, and payment processing if paid plans or premium services are introduced in
                            the future
                        </li>
                        <li>
                            <span className="font-semibold">Legal Obligations:</span> If required by law to comply
                            with legal processes (such as court orders or subpoenas)
                        </li>
                        <li>
                            <span className="font-semibold">Promotional Business:</span> For goods we are not
                            third-party owned or secure
                        </li>
                        <li>
                            <span className="font-semibold">Business Transfers:</span> In connection with any
                            merger, acquisition, or sale of assets
                        </li>
                    </ul>
                    <p className="mt-3">
                        We limit data sharing to what is minimally necessary and always seek to keep your data
                        secure and compliant.
                    </p>
                </Section>

                <Section number={4} title="Security of Information">
                    <p>
                        We take data security seriously and use tools like SSL encryption, HTTPS servers, and
                        cloud-hosted data in safe, highly protected infrastructure with secure backup and
                        encryption flows.
                    </p>
                    <p className="mt-2 text-sm italic">
                        However, no system or platform can ensure 100% safety or 100% integrity.
                    </p>
                </Section>

                <Section number={5} title="Third-Party Links">
                    <p>
                        <span className="font-medium">GeoThready</span> may link to third-party websites or
                        services. We are not responsible for their privacy practices. Please review their
                        policies before interacting with those platforms.
                    </p>
                </Section>

                <Section number={6} title="Data Retention">
                    <p>
                        We retain your information only for as long as necessary (or until required by law) to
                        provide you with the activity (and for as long as we have legal obligations). When no
                        longer needed, your data will be securely deleted or anonymized.
                    </p>
                </Section>

                <Section number={7} title="Children's Privacy">
                    <p>
                        <span className="font-medium">GeoThready</span> is not intended for use by children under
                        18. We do not knowingly collect personal data from minors under this age. If we become
                        aware that a child under 18 has provided us data, we will delete it immediately. If you
                        believe a minor has provided their data, please contact us.
                    </p>
                </Section>

                <Section number={8} title="Your Rights">
                    <p className="mb-2">You have the right to:</p>
                    <ul className="list-disc ml-6 space-y-1">
                        <li>Access the personal information we have about you</li>
                        <li>Request corrections or additions to your data</li>
                        <li>Request deletion of your account or data</li>
                        <li>Opt out of marketing communications or analytics</li>
                        <li>Withdraw consent for data processing (where applicable)</li>
                    </ul>
                    <p className="mt-3">
                        To exercise these rights, contact us using the info & admissions email.
                    </p>
                </Section>

                <Section number={9} title="Changes to This Policy">
                    <p>
                        We may update this Privacy Policy periodically. Any material changes will be posted on
                        this page, and you may receive additional notice (such as via email). Please check back
                        from time to time for any updates.
                    </p>
                </Section>

                <Section number={10} title="Contact Us">
                    <p className="mb-2">
                        If you have questions or concerns about this Privacy Policy or how your data is handled,
                        contact us:
                    </p>
                    <p className="flex items-center gap-2">
                        <span className="text-[#8DC63F]">📧</span>
                        <a
                            href="mailto:supportmail@geothready.com"
                            className="text-[#8DC63F] hover:underline font-medium"
                        >
                            supportmail@geothready.com
                        </a>
                    </p>
                </Section>
            </div>
        </div>
    );
};

export default PrivacyPolicy;