'use client';

import { useForm } from 'react-hook-form';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface FormData {
    name: string;
    country: string;
    email: string;
    submissionType: string;
    storyTitle: string;
    story: string;
    files?: FileList;
    featuredConsent: boolean;
    featuredReason?: string;
    termsAccepted: boolean;
}

interface InputFieldProps {
    label: string;
    name: keyof FormData;
    type?: string;
    placeholder?: string;
    register: any;
    error?: string;
    required?: boolean;
}

interface TextAreaFieldProps extends Omit<InputFieldProps, 'type'> {
    rows?: number;
}

interface SelectFieldProps extends Omit<InputFieldProps, 'type' | 'placeholder'> {
    options: { value: string; label: string }[];
}

const InputField = ({ label, name, type = 'text', placeholder, register, error, required }: InputFieldProps) => (
    <div className="space-y-1.5">
        <label className="block text-sm font-medium text-gray-700">{label}</label>
        <input
            type={type}
            placeholder={placeholder}
            {...register(name, { required: required && `${label} is required` })}
            className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent transition"
        />
        {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
);

const TextAreaField = ({ label, name, placeholder, register, error, required, rows = 4 }: TextAreaFieldProps) => (
    <div className="space-y-1.5">
        <label className="block text-sm font-medium text-gray-700">{label}</label>
        <textarea
            placeholder={placeholder}
            rows={rows}
            {...register(name, { required: required && `${label} is required` })}
            className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent transition resize-none"
        />
        {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
);

const SelectField = ({ label, name, options, register, error, required }: SelectFieldProps) => (
    <div className="space-y-1.5">
        <label className="block text-sm font-medium text-gray-700">{label}</label>
        <select
            {...register(name, { required: required && `${label} is required` })}
            className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent transition"
        >
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
        {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
);

const SubmitStoryForm = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<FormData>();
    const [fileName, setFileName] = useState<string>('No File Chosen');
    const featuredConsent = watch('featuredConsent');

    const onSubmit = (data: FormData) => {
        console.log('Form submitted:', data);
        // Handle form submission
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files && files.length > 0) {
            setFileName(files.length > 1 ? `${files.length} files selected` : files[0].name);
        } else {
            setFileName('No File Chosen');
        }
    };

    return (
        <>
            <section className="py-8 px-6 relative overflow-hidden my-16">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-100">
                    <Image
                        src="/images/sectionBg.png"
                        alt=""
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="max-w-3xl mx-auto relative">
                    {/* Title */}
                    <div className="text-center mb-6">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
                            Submit Your Story
                        </h2>
                        <div className="flex justify-center mb-4">
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
                    <div className="bg-white rounded-3xl shadow-lg p-6 md:p-8">
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

                            {/* Name & Country Row */}
                            <div className="grid md:grid-cols-2 gap-4">
                                <InputField
                                    label="Name"
                                    name="name"
                                    placeholder="test"
                                    register={register}
                                    error={errors.name?.message}
                                    required
                                />
                                <InputField
                                    label="Country"
                                    name="country"
                                    placeholder="United State"
                                    register={register}
                                    error={errors.country?.message}
                                    required
                                />
                            </div>

                            {/* Email & Type Row */}
                            <div className="grid md:grid-cols-2 gap-4">
                                <InputField
                                    label="Email Address"
                                    name="email"
                                    type="email"
                                    placeholder="test"
                                    register={register}
                                    error={errors.email?.message}
                                    required
                                />
                                <SelectField
                                    label="Type Of Submission"
                                    name="submissionType"
                                    options={[
                                        { value: 'written-story', label: 'Written Story' },
                                        { value: 'photo', label: 'Photo' },
                                        { value: 'video', label: 'Video' },
                                        { value: 'audio', label: 'Audio' }
                                    ]}
                                    register={register}
                                    error={errors.submissionType?.message}
                                    required
                                />
                            </div>

                            {/* Story Title */}
                            <InputField
                                label="Story Title"
                                name="storyTitle"
                                register={register}
                                error={errors.storyTitle?.message}
                                required
                            />

                            {/* Your Story */}
                            <TextAreaField
                                label="Your Story"
                                name="story"
                                rows={4}
                                register={register}
                                error={errors.story?.message}
                                required
                            />

                            {/* Upload Files */}
                            <div className="space-y-1.5">
                                <label className="block text-sm font-medium text-gray-700">
                                    Upload Images, Videos
                                </label>
                                <div className="flex items-center gap-4">
                                    <label className="px-6 py-3 bg-gray-50 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-100 transition">
                                        <span className="text-gray-700">Choose File</span>
                                        <input
                                            type="file"
                                            multiple
                                            accept="image/*,video/*"
                                            {...register('files')}
                                            onChange={handleFileChange}
                                            className="hidden"
                                        />
                                    </label>
                                    <span className="text-sm text-gray-500">{fileName}</span>
                                </div>
                            </div>

                            {/* Featured My Story Section */}
                            <div className="bg-blue-50 rounded-xl p-4 space-y-3">
                                <h3 className="font-semibold text-gray-900">Featured My Story</h3>

                                {/* Featured Consent Checkbox */}
                                <label className="flex items-start gap-3 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        {...register('featuredConsent')}
                                        className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                                    />
                                    <div>
                                        <p className="text-blue-700 font-medium">
                                            I'd like my story to be considered for a featured spot (e.g. Story of the Week)
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            Why should your story be featured? (Optional)
                                        </p>
                                    </div>
                                </label>

                                {/* Featured Reason Textarea - Only show if checkbox is checked */}
                                {featuredConsent && (
                                    <textarea
                                        placeholder="Tell us why you want to feature it..."
                                        rows={3}
                                        {...register('featuredReason')}
                                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
                                    />
                                )}
                            </div>

                            {/* Terms Checkbox */}
                            <label className="flex items-start gap-3 cursor-pointer">
                                <input
                                    type="checkbox"
                                    {...register('termsAccepted', { required: 'You must accept the terms and services' })}
                                    className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                                />
                                <span className="text-gray-700">
                                    I agree to geofroggy terms and services
                                </span>
                            </label>
                            {errors.termsAccepted && (
                                <p className="text-sm text-red-500">{errors.termsAccepted.message}</p>
                            )}

                            {/* Submit Button */}
                            <Link
                                href="#"
                                className="bg-gradient-to-b from-[#8DC63F] to-[#426F05] text-white px-6 py-2 rounded-lg font-medium hover:from-[#7AB52F] hover:to-[#3A5F04] transition-all shadow-md"
                            >
                                Submit Story
                            </Link>
                        </form>
                    </div>
                </div>
            </section>

            <div className="text-center mb-6 py-8 px-6">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
                    Respect & Integrity
                </h2>
                <div className="flex justify-center mb-4">
                    <Image
                        src="/images/heading.png"
                        alt="Decorative line"
                        width={250}
                        height={20}
                        className="object-contain"
                    />
                </div>

                <p className="text-gray-700 text-md mt-8 w-1/2 mx-auto">
                    We value your privacy and integrity. Your story will be reviewed and published after careful consideration. Please read our <span className="text-blue-500">Terms of Service</span> and <span className="text-blue-500">Privacy Policy</span> before submitting your story.
                </p>
            </div>
        </>
    );
}

export default SubmitStoryForm;