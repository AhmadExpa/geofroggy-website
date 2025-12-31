'use client';

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => (
    <div className="border-b border-gray-200 last:border-b-0">
        <button
            onClick={onClick}
            className="w-full py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors group"
        >
            <span className="text-gray-800 pr-4 text-sm sm:text-[15px]">{question}</span>
            <div className="flex-shrink-0 w-5 h-5 flex items-center justify-center">
                {isOpen ? (
                    <Minus className="w-4 h-4 text-gray-500" />
                ) : (
                    <Plus className="w-4 h-4 text-gray-500" />
                )}
            </div>
        </button>
        {isOpen && (
            <div className="pb-4 text-gray-600 leading-relaxed text-xs sm:text-[14px]">
                <p>{answer}</p>
            </div>
        )}
    </div>
);

interface FAQSectionProps {
    number: number;
    title: string;
    items: Array<{ question: string; answer: string }>;
    showInfoBox?: boolean;
}

const FAQSection: React.FC<FAQSectionProps> = ({ number, title, items, showInfoBox }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <div className="mb-6">
            <h2 className="text-base sm:text-[17px] font-semibold text-gray-900 mb-2 sm:mb-3">
                {number}. {title}
            </h2>

            {showInfoBox && (
                <div className="bg-blue-700 text-white p-3 sm:p-4 rounded-lg mb-3 sm:mb-4 text-xs sm:text-[13px] leading-relaxed">
                    <p>
                        GeoThready is a global platform designed to connect people from around the world through
                        meaningful conversations, cultural exchange, and shared experiences. Think of it as your
                        window to the world.
                    </p>
                </div>
            )}

            <div className="bg-white rounded-lg border border-gray-200">
                {items.map((item, index) => (
                    <FAQItem
                        key={index}
                        question={item.question}
                        answer={item.answer}
                        isOpen={openIndex === index}
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    />
                ))}
            </div>
        </div>
    );
};

const FAQ: React.FC = () => {
    const faqData = [
        {
            number: 1,
            title: 'General Information',
            showInfoBox: true,
            items: [
                {
                    question: 'What is GeoThready?',
                    answer:
                        'GeoThready is a global platform designed to connect people from around the world through meaningful conversations, cultural exchange, and shared experiences.',
                },
                {
                    question: 'How do I get started?',
                    answer:
                        'Simply create an account, set up your profile, and start exploring! You can join discussions, share your experiences, and connect with people from different countries.',
                },
                {
                    question: 'Is GeoThready free to use?',
                    answer:
                        'Yes! GeoThready is completely free to use. We believe in making global connections accessible to everyone.',
                },
            ],
        },
        {
            number: 2,
            title: 'Account Management',
            items: [
                {
                    question: 'How do I update my account?',
                    answer:
                        'Go to your profile settings where you can update your personal information, preferences, and account details at any time.',
                },
                {
                    question: 'What if I forget my password?',
                    answer:
                        'Click on "Forgot Password" on the login page, and we\'ll send you a password reset link to your registered email address.',
                },
                {
                    question: 'How do I change my profile picture/name?',
                    answer:
                        'Navigate to your profile settings, where you can easily update your profile picture, display name, and other profile information.',
                },
                {
                    question: 'Can I delete my account?',
                    answer:
                        'Yes, you can delete your account at any time from your account settings. Please note that this action is permanent.',
                },
            ],
        },
        {
            number: 3,
            title: 'Content Guidelines',
            items: [
                {
                    question: 'What content can I post?',
                    answer:
                        'You can post content related to global discussions, cultural experiences, and meaningful conversations. All content must follow our Community Guidelines.',
                },
                {
                    question: 'Can I share content from GeoThready on other platforms?',
                    answer:
                        'Yes, you can share public content from GeoThready on other platforms. However, please respect the original creator\'s rights.',
                },
            ],
        },
        {
            number: 4,
            title: 'Privacy & Security',
            items: [
                {
                    question: 'How is my data protected?',
                    answer:
                        'We use industry-standard security measures including SSL encryption and secure servers to protect your data. See our Privacy Policy for details.',
                },
                {
                    question: 'Can I control who sees my posts?',
                    answer:
                        'Yes, you can adjust privacy settings to control who can view your content - public, connections only, or private.',
                },
                {
                    question: 'Is messaging safe?',
                    answer:
                        'Yes, our messaging system is secure and private. We never share your private conversations with third parties.',
                },
                {
                    question: 'How do I report inappropriate content?',
                    answer:
                        'Click the report button on any post or message. Our moderation team will review it promptly.',
                },
            ],
        },
        {
            number: 5,
            title: 'Technical Support',
            items: [
                {
                    question: 'Why can\'t I log in?',
                    answer:
                        'Try resetting your password or clearing your browser cache. If issues persist, contact our support team.',
                },
                {
                    question: 'How can I report a bug?',
                    answer:
                        'Use the feedback form in your account settings or email our support team with details about the issue.',
                },
            ],
        },
        {
            number: 6,
            title: 'Billing or Payments',
            items: [
                {
                    question: 'Will there be paid features?',
                    answer:
                        'Currently, GeoThready is completely free. We may introduce optional premium features in the future.',
                },
                {
                    question: 'What payment methods are supported?',
                    answer:
                        'If premium features are introduced, we plan to support major credit/debit cards and popular payment processors.',
                },
            ],
        },
        {
            number: 7,
            title: 'Community & Forum Features',
            items: [
                {
                    question: 'How do community forums work?',
                    answer:
                        'Forums are spaces for discussing specific topics. Join a forum and start participating in discussions with like-minded users.',
                },
                {
                    question: 'How do I participate in discussions?',
                    answer:
                        'Browse topics that interest you, read existing conversations, and add your comments or start new discussion threads.',
                },
                {
                    question: 'Can I create private conversations?',
                    answer:
                        'Yes, you can send private messages to other users and create group conversations with multiple participants.',
                },
            ],
        },
        {
            number: 8,
            title: 'Miscellaneous',
            items: [
                {
                    question: 'What makes GeoThready different?',
                    answer:
                        'We focus on meaningful global connections and cultural exchange, prioritizing quality conversations and respectful community engagement.',
                },
                {
                    question: 'Does GeoThready have a mobile app?',
                    answer:
                        'We\'re working on mobile apps for iOS and Android. Our website is currently fully mobile-responsive.',
                },
                {
                    question: 'Can I collaborate with others?',
                    answer:
                        'Absolutely! GeoThready encourages collaboration through group discussions, shared projects, and community initiatives.',
                },
                {
                    question: 'How can I provide feedback?',
                    answer:
                        'Use the feedback form in your account settings or contact our support team at supportmail@geothready.com.',
                },
                {
                    question: 'When will new features or updates drop?',
                    answer:
                        'We regularly update GeoThready. Follow our announcements section or subscribe to our newsletter for updates.',
                },
                {
                    question: 'What are credits?',
                    answer:
                        'Credits are a reward system that may be introduced to recognize active community members. Stay tuned for more information!',
                },
            ],
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header Section */}
            <div className="bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
                    <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
                        {/* Left: FAQ Content */}
                        <div>
                            <h1 className="text-2xl sm:text-3xl md:text-[32px] font-bold text-gray-900 mb-3 sm:mb-4">FAQs</h1>
                            <p className="text-gray-600 text-sm sm:text-[14px] leading-relaxed mb-3 sm:mb-4">
                                Welcome to GeoThready's FAQ page! Here you'll find answers to the most commonly asked
                                questions about our platform. Whether you're new to GeoThready or a seasoned user, this
                                page will help you navigate and make the most of your experience. If you can't find what
                                you're looking for, feel free to{' '}
                                <a
                                    href="mailto:supportmail@geothready.com"
                                    className="text-blue-600 hover:underline"
                                >
                                    contact our support team
                                </a>
                                .
                            </p>
                            <button className="bg-green-500 hover:bg-green-600 text-white font-medium px-4 sm:px-5 py-2 rounded-md text-xs sm:text-[14px] transition-colors">
                                Ask
                            </button>
                        </div>

                        {/* Right: Illustration */}
                        <div className="hidden lg:flex justify-center items-center">
                            <div className="relative w-full max-w-md">
                                {/* Illustration placeholder - you can replace with actual image */}
                                <div className="relative">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-64 h-64 rounded-full bg-green-50 opacity-40"></div>
                                    </div>
                                    <div className="relative z-10 flex flex-col items-center justify-center py-12">
                                        {/* People illustrations */}
                                        <div className="flex items-end justify-center gap-4 mb-4">
                                            <div className="w-16 h-20 bg-blue-400 rounded-t-full"></div>
                                            <div className="text-6xl font-bold text-green-500">FAQs</div>
                                            <div className="w-16 h-20 bg-blue-500 rounded-t-full"></div>
                                        </div>
                                        {/* Decorative elements */}
                                        <div className="flex gap-2 mt-4">
                                            <div className="w-3 h-3 rounded-full bg-green-300"></div>
                                            <div className="w-3 h-3 rounded-full bg-blue-300"></div>
                                            <div className="w-3 h-3 rounded-full bg-yellow-300"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQ Sections */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
                <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
                    {/* Left Column */}
                    <div>
                        {faqData.slice(0, 4).map((section) => (
                            <FAQSection
                                key={section.number}
                                number={section.number}
                                title={section.title}
                                items={section.items}
                                showInfoBox={section.showInfoBox}
                            />
                        ))}
                    </div>

                    {/* Right Column */}
                    <div>
                        {faqData.slice(4).map((section) => (
                            <FAQSection
                                key={section.number}
                                number={section.number}
                                title={section.title}
                                items={section.items}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;