import React from 'react';

interface GuidelineItemProps {
    number: number;
    title: string;
    description: string | React.ReactNode;
}

const GuidelineItem: React.FC<GuidelineItemProps> = ({ number, title, description }) => (
    <div className="mb-6">
        <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">
            {number}. {title}
        </h3>
        <div className="text-gray-600 text-sm sm:text-base leading-relaxed">{description}</div>
    </div>
);

const CommunityGuidelines: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12 lg:px-32 py-6 sm:py-8 bg-white">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                    Welcome to GeoThready, a platform by{' '}
                    <span className="text-red-600">GeoThreadia</span>!
                </h1>
                <p className="text-gray-600 leading-relaxed">
                    We're dedicated to building a respectful, inclusive, and engaging community where global
                    citizens can thrive. Please review and follow these guidelines to help us create a
                    positive space for everyone.
                </p>
            </div>

            {/* Guidelines */}
            <div className="space-y-6">
                <GuidelineItem
                    number={1}
                    title="Respect One Another"
                    description="Treat all members with dignity, regardless of background, beliefs, or experiences. Hate speech, harassment, bullying, personal attacks, or threats will not be tolerated."
                />

                <GuidelineItem
                    number={2}
                    title="Stay On Topic"
                    description={
                        <>
                            <p className="mb-2">Keep conversations relevant to the discussion or platform area.</p>
                            <p>Avoid spam, off-topic content, or unsolicited self-promotion.</p>
                        </>
                    }
                />

                <GuidelineItem
                    number={3}
                    title="Share Authentically"
                    description={
                        <>
                            <p className="mb-2">Contribute original, honest content.</p>
                            <ul className="list-disc ml-6 space-y-1">
                                <li>Share your own experiences and perspectives</li>
                                <li>Avoid plagiarism</li>
                                <li>Verify facts when sharing information</li>
                                <li>Respect intellectual property and give meaningful contributions</li>
                            </ul>
                        </>
                    }
                />

                <GuidelineItem
                    number={4}
                    title="Protect Privacy"
                    description="Never share anyone's personal information (including names, addresses, or contact details) without their explicit consent."
                />

                <GuidelineItem
                    number={5}
                    title="Be Civil"
                    description={
                        <>
                            <p className="mb-2">Disagree respectfully.</p>
                            <p>
                                We welcome diverse opinions—but inflammatory, aggressive, or intentionally divisive
                                comments are not permitted.
                            </p>
                        </>
                    }
                />

                <GuidelineItem
                    number={6}
                    title="Follow the Law"
                    description={
                        <>
                            <p className="mb-2">
                                Illegal content, copyright violations, or any posts that infringe on others' rights
                                are strictly prohibited.
                            </p>
                            <p>Always provide attribution for shared materials where required.</p>
                        </>
                    }
                />

                <GuidelineItem
                    number={7}
                    title="Report Responsibly"
                    description="If you see content that violates these guidelines, please report it to our moderation team so we can take action."
                />

                <GuidelineItem
                    number={8}
                    title="Use Clear Language"
                    description="Please post in the platform's primary language to ensure accessibility and understanding for all users."
                />

                <GuidelineItem
                    number={9}
                    title="Moderation"
                    description={
                        <>
                            <p className="mb-2">
                                Our moderation team is here to uphold community standards. Actions may include
                                warnings, temporary restrictions, or permanent removal based on the nature of the
                                violation.
                            </p>
                            <p>
                                Moderation decisions are final and made in the interest of maintaining a safe and
                                welcoming environment.
                            </p>
                        </>
                    }
                />

                <GuidelineItem
                    number={10}
                    title="Consequences"
                    description={
                        <>
                            <p className="mb-3">Violating these guidelines may result in:</p>
                            <ul className="list-disc ml-6 space-y-1">
                                <li>A warning</li>
                                <li>Temporary suspension</li>
                                <li>Permanent removal from the community</li>
                            </ul>
                            <p className="mt-3">Severity and frequency will determine the response.</p>
                        </>
                    }
                />
            </div>

            {/* Rights & Discretion */}
            <div className="mt-10 pt-6 border-t border-gray-200">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3">Rights & Discretion</h3>
                <div className="text-gray-600 text-sm sm:text-base leading-relaxed space-y-3">
                    <p>
                        <span className="font-medium">GeoThready</span> reserves the right to remove any content
                        or restrict any user account at our sole discretion, without prior notice, if we believe
                        it is necessary to protect the safety, integrity, or mission of the community.
                    </p>
                    <p>
                        This includes—but is not limited to—violations of these guidelines, disputes between
                        users, or actions that compromise the experience for others.
                    </p>
                    <p>
                        By participating in the <span className="font-medium">GeoThready</span> community, you
                        agree to uphold these standards and help us create a space where meaningful, respectful
                        global conversations can flourish.
                    </p>
                    <p>
                        Thank you for being part of <span className="font-medium">GeoThready</span> by{' '}
                        <span className="font-medium text-red-600">GeoThreadia</span>.
                    </p>
                </div>
            </div>


        </div>
    );
};

export default CommunityGuidelines;