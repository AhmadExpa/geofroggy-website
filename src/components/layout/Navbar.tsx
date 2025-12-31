"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

const Navbar = () => {
    const pathname = usePathname();
    const router = useRouter();
    const { user, role } = useAuth();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const isActive = (path: string) => pathname === path;

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleAccountClick = () => {
        if (!user) return;
        if (role === 'admin') {
            router.push('/admin');
        } else {
            router.push('/user');
        }
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/news", label: "News" },
        // { href: "/explore", label: "Explore" },
        { href: "/media", label: "Media" },
        { href: "/donate", label: "Donate" },
        { href: "/get-involved", label: "Get Involved" },
        { href: "/contact", label: "Contact" },
    ];

    return (
        <nav className="relative w-full">
            <div className="bg-[#175883] px-6  ">
                <div className="flex items-center justify-between max-w-7xl mx-auto">
                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center flex-1">
                        <Link
                            href="/"
                            className={`px-6 font-medium transition-colors ${isActive("/")
                                ? "bg-[#8DC63F] text-white py-6 rounded-b-[50%]"
                                : "text-white hover:text-lime-400 py-4"
                                }`}
                        >
                            Home
                        </Link>
                        <div className="flex items-center gap-6 ml-6">
                            {navLinks.slice(1).map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`font-medium transition-colors ${isActive(link.href)
                                        ? "bg-[#8DC63F] text-white py-6 px-4 rounded-b-[50%]"
                                        : "text-white hover:text-lime-400 px-4 py-4"
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Logo or Brand (Mobile) */}
                    <div className="lg:hidden flex items-center py-4">
                        <Link href="/" className="flex items-center">
                            <Image
                                src="/images/footerLogo.png"
                                alt="Geofroggy Logo"
                                width={120}
                                height={60}
                                className="h-8 w-auto object-contain"
                            />
                        </Link>
                    </div>

                    {/* Sign Up / Account Button */}
                    {user ? (
                        <button
                            onClick={handleAccountClick}
                            className="hidden lg:block bg-gradient-to-b from-[#8DC63F] to-[#426F05] text-white px-6 py-2 rounded-lg font-medium hover:from-[#7AB52F] hover:to-[#3A5F04] transition-all shadow-md"
                        >
                            Account
                        </button>
                    ) : (
                        <Link
                            href="/sign-up"
                            className="hidden lg:block bg-gradient-to-b from-[#8DC63F] to-[#426F05] text-white px-6 py-2 rounded-lg font-medium hover:from-[#7AB52F] hover:to-[#3A5F04] transition-all shadow-md"
                        >
                            Sign Up
                        </Link>
                    )}

                    {/* Hamburger Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className="lg:hidden text-white focus:outline-none z-50 relative"
                        aria-label="Toggle menu"
                    >
                        <div className="w-6 h-5 flex flex-col justify-between">
                            <span
                                className={`block h-0.5 w-6 bg-white transform transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""
                                    }`}
                            ></span>
                            <span
                                className={`block h-0.5 w-6 bg-white transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""
                                    }`}
                            ></span>
                            <span
                                className={`block h-0.5 w-6 bg-white transform transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                                    }`}
                            ></span>
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                onClick={closeMenu}
            >
                <div
                    className={`fixed right-0 top-0 h-full w-64 bg-[#175883] shadow-lg transform transition-transform duration-300 ease-in-out  ${isMenuOpen ? "translate-x-0" : "translate-x-full"
                        }`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="flex flex-col h-full">
                        {/* Mobile Menu Header */}
                        <div className="p-6 border-b border-[#1e6a9a]">
                            <h2 className="text-white font-bold text-xl">Menu</h2>
                        </div>

                        {/* Mobile Menu Links */}
                        <div className="flex-1 overflow-y-auto py-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={closeMenu}
                                    className={`block px-6 py-4 font-medium transition-colors ${isActive(link.href)
                                        ? "bg-[#8DC63F] text-white border-l-4 border-white"
                                        : "text-white hover:bg-[#1e6a9a]"
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>

                        {/* Mobile Sign Up Button */}
                        <div className="p-6 border-t border-[#1e6a9a]">
                            {user ? (
                                <button
                                    onClick={() => {
                                        closeMenu();
                                        handleAccountClick();
                                    }}
                                    className="block w-full text-center bg-gradient-to-b from-[#8DC63F] to-[#426F05] text-white px-6 py-3 rounded-lg font-medium hover:from-[#7AB52F] hover:to-[#3A5F04] transition-all shadow-md"
                                >
                                    Account
                                </button>
                            ) : (
                                <Link
                                    href="/sign-up"
                                    onClick={closeMenu}
                                    className="block w-full text-center bg-gradient-to-b from-[#8DC63F] to-[#426F05] text-white px-6 py-3 rounded-lg font-medium hover:from-[#7AB52F] hover:to-[#3A5F04] transition-all shadow-md"
                                >
                                    Sign Up
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;