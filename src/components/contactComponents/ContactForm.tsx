"use client";

import { useForm } from "react-hook-form";
import Image from "next/image";

interface ContactFormData {
    name: string;
    email: string;
    phone: string;
    message: string;
}

const ContactForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<ContactFormData>();

    const onSubmit = (data: ContactFormData) => {
        console.log("Form Data:", data);
        // Handle form submission here (e.g., send to API)
        alert("Message sent successfully!");
        reset();
    };

    return (
        <section className="py-16 px-4 relative ">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-100">
                <Image
                    src="/images/sectionBg.png"
                    alt=""
                    fill
                />
            </div>

            <div className="absolute inset-0 bg-black opacity-10"></div>

            <div className="max-w-5xl mx-auto relative z-10 ">
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                    <div className="grid lg:grid-cols-2 gap-0">
                        {/* Form Section - Left Side */}
                        <div className="p-8 lg:p-8">
                            <h2 className="text-3xl lg:text-4xl text-center font-medium text-gray-900 mb-8">
                                Send Us a Message
                            </h2>

                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                {/* Name Field */}
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                        Name
                                    </label>
                                    <input
                                        id="name"
                                        type="text"
                                        placeholder="test"
                                        className={`w-full px-4 py-3 border ${errors.name ? "border-red-500" : "border-gray-200"
                                            } rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all`}
                                        {...register("name", {
                                            required: "Name is required",
                                            minLength: {
                                                value: 2,
                                                message: "Name must be at least 2 characters",
                                            },
                                        })}
                                    />
                                    {errors.name && (
                                        <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                                    )}
                                </div>

                                {/* Email Field */}
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                        Enter Email
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="test"
                                        className={`w-full px-4 py-3 border ${errors.email ? "border-red-500" : "border-gray-200"
                                            } rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all`}
                                        {...register("email", {
                                            required: "Email is required",
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: "Invalid email address",
                                            },
                                        })}
                                    />
                                    {errors.email && (
                                        <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                                    )}
                                </div>

                                {/* Phone Number Field */}
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                        Phone Number
                                    </label>
                                    <input
                                        id="phone"
                                        type="tel"
                                        placeholder="+890543 67897"
                                        className={`w-full px-4 py-3 border ${errors.phone ? "border-red-500" : "border-gray-200"
                                            } rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all`}
                                        {...register("phone", {
                                            required: "Phone number is required",
                                            pattern: {
                                                value: /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/,
                                                message: "Invalid phone number",
                                            },
                                        })}
                                    />
                                    {errors.phone && (
                                        <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
                                    )}
                                </div>

                                {/* Message Field */}
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        placeholder="Write your message here..."
                                        className={`w-full px-4 py-3 border ${errors.message ? "border-red-500" : "border-gray-200"
                                            } rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none`}
                                        {...register("message", {
                                            required: "Message is required",
                                            minLength: {
                                                value: 10,
                                                message: "Message must be at least 10 characters",
                                            },
                                        })}
                                    />
                                    {errors.message && (
                                        <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                                    )}
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="bg-gradient-to-b from-[#8DC63F] to-[#6BA82E] text-white px-8 py-3 rounded-lg font-semibold hover:from-[#7AB52F] hover:to-[#5A9624] transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>

                        {/* Image Section - Right Side */}
                        <div className="relative h-64 lg:h-auto">

                            <Image
                                src="/images/contact.png"
                                alt="Happy people celebrating"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;