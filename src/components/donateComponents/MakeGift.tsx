'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import Link from 'next/link';

type DonationFormData = {
    amount: number;
    customAmount?: number;
    frequency: string;
    paymentMethod: string;
    country: string;
    email: string;
    note?: string;
};

const MakeGift = () => {
    const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
    const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm<DonationFormData>({
        defaultValues: {
            frequency: 'one-time',
            paymentMethod: 'credit-debit',
            country: 'US',
        }
    });

    const presetAmounts = [10, 25, 50, 100];

    const onSubmit = (data: DonationFormData) => {
        console.log('Donation data:', data);
        // Handle donation submission
    };

    const handlePresetClick = (amount: number) => {
        setSelectedAmount(amount);
        setValue('amount', amount);
        setValue('customAmount', undefined);
    };

    return (
        <section className="relative py-12 md:py-16 lg:py-20 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-100">
                <Image
                    src="/images/sectionBg.png" // Replace with your pattern image
                    alt=""
                    fill
                    className="object-cover"
                />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Title */}
                <div className="text-center mb-8">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Make Your Gift
                    </h2>
                    <div className="flex justify-center mb-8">
                        <Image
                            src="/images/heading.png"
                            alt="Decorative line"
                            width={250}
                            height={20}
                            className="object-contain"
                        />
                    </div>
                </div>
                {/* Form Container */}
                <div className="max-w-2xl mx-auto">
                    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 lg:p-10">
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            {/* Donation Amount */}
                            <div>
                                <label className="block text-[#383838] font-semibold mb-3 text-sm md:text-base">
                                    Donation Amount
                                </label>
                                <div className="grid grid-cols-4 gap-2 md:gap-3 mb-3">
                                    {presetAmounts.map((amount) => (
                                        <button
                                            key={amount}
                                            type="button"
                                            onClick={() => handlePresetClick(amount)}
                                            className={`py-2.5 px-3 rounded-md font-semibold text-sm md:text-base transition-colors ${selectedAmount === amount
                                                ? 'bg-[#175883] text-white'
                                                : 'bg-[#175883] text-white hover:bg-[#0d3f5c]'
                                                }`}
                                        >
                                            ${amount}
                                        </button>
                                    ))}
                                </div>
                                <input
                                    type="number"
                                    placeholder="Custom Amount"
                                    {...register('customAmount')}
                                    onChange={(e) => {
                                        setSelectedAmount(null);
                                        setValue('amount', Number(e.target.value));
                                    }}
                                    className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#8DC63F] focus:border-transparent outline-none text-sm md:text-base"
                                />
                            </div>

                            {/* Frequency and Payment Method Row */}
                            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                                {/* Frequency */}
                                <div>
                                    <label className="block text-[#383838] font-semibold mb-2 text-sm md:text-base">
                                        Frequency
                                    </label>
                                    <select
                                        {...register('frequency')}
                                        className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#8DC63F] focus:border-transparent outline-none bg-white text-sm md:text-base"
                                    >
                                        <option value="one-time">One - Time</option>
                                        <option value="monthly">Monthly</option>
                                        <option value="yearly">Yearly</option>
                                    </select>
                                </div>

                                {/* Payment Method */}
                                <div>
                                    <label className="block text-[#383838] font-semibold mb-2 text-sm md:text-base">
                                        Payment Method
                                    </label>
                                    <select
                                        {...register('paymentMethod')}
                                        className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#8DC63F] focus:border-transparent outline-none bg-white text-sm md:text-base"
                                    >
                                        <option value="credit-debit">Credit/Debit Card</option>
                                        <option value="paypal">PayPal</option>
                                        <option value="bank">Bank Transfer</option>
                                    </select>
                                </div>
                            </div>

                            {/* Country and Email Row */}
                            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                                {/* Select Country */}
                                <div>
                                    <label className="block text-[#383838] font-semibold mb-2 text-sm md:text-base">
                                        Select Country
                                    </label>
                                    <select
                                        {...register('country')}
                                        className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#8DC63F] focus:border-transparent outline-none bg-white text-sm md:text-base"
                                    >
                                        <option value="US">United State</option>
                                        <option value="UK">United Kingdom</option>
                                        <option value="CA">Canada</option>
                                        <option value="AU">Australia</option>
                                    </select>
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="block text-[#383838] font-semibold mb-2 text-sm md:text-base">
                                        Email (for receipt)
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="test"
                                        {...register('email', { required: 'Email is required' })}
                                        className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#8DC63F] focus:border-transparent outline-none text-sm md:text-base"
                                    />
                                    {errors.email && (
                                        <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                                    )}
                                </div>
                            </div>

                            {/* Optional Note */}
                            <div>
                                <label className="block text-[#383838] font-semibold mb-2 text-sm md:text-base">
                                    Optional Note
                                </label>
                                <textarea
                                    {...register('note')}
                                    rows={4}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#8DC63F] focus:border-transparent outline-none resize-none text-sm md:text-base"
                                    placeholder="Leave a message..."
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <div className="text-center pt-2">
                                <Link
                                    href="/donate"
                                    className="inline-block bg-gradient-to-b from-[#8DC63F] to-[#426F05] text-white px-6 py-2 rounded-lg font-medium hover:from-[#7AB52F] hover:to-[#3A5F04] transition-all shadow-md"
                                >
                                    Donate Securly
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MakeGift