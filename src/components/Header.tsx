import React, { useState, useEffect } from 'react';
import { Phone, Clock, Menu, X, Wrench, ChevronRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';
import { Logo } from './Logo';

interface HeaderProps {
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Requested specific navigation links
  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact Us', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white transition-all duration-200">
      {/* Top Notification / Dispatch Strip */}
      <div className="bg-slate-950 text-slate-300 border-b border-slate-800 text-xs py-2 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          {/* Left badge */}
          <div className="flex items-center gap-2.5 flex-wrap justify-center sm:justify-start">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-red-600/25 text-red-400 font-bold border border-red-500/30 text-[11px]">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              Fast Dispatch
            </span>
            <span className="text-slate-300 font-medium hidden md:inline">
              Serving Burien, Seattle & King County, WA
            </span>
          </div>

          {/* Right quick contact info */}
          <div className="flex items-center gap-5 text-xs font-semibold">
            <div className="hidden lg:flex items-center gap-1.5 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-red-500" />
              <span>Mon-Sat: 7:30 AM - 7:00 PM</span>
            </div>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              id="top-bar-phone-link"
              className="inline-flex items-center gap-1.5 text-white hover:text-red-400 font-extrabold transition-colors"
            >
              <Phone className="w-3.5 h-3.5 fill-red-500 text-red-500" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full bg-white transition-all duration-200 border-b border-slate-200 ${
          isScrolled ? 'shadow-md py-2.5' : 'py-3.5 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          
          {/* Logo & Brand Link */}
          <a
            href="#"
            className="flex items-center shrink-0 focus:outline-hidden hover:opacity-95 transition-opacity"
            id="nav-logo"
            aria-label="A1 & Son Appliance Repair Homepage"
          >
            <Logo size={isScrolled ? 'sm' : 'md'} />
          </a>

          {/* Desktop Navigation (Centered & Cleanly Aligned) */}
          <div className="hidden md:flex items-center gap-7 lg:gap-9 text-[15px] font-semibold text-slate-700">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-red-600 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-red-600 hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Action CTAs */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenBooking}
              id="nav-book-repair-btn"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-800 hover:text-red-600 bg-slate-100 hover:bg-red-50 px-4 py-2.5 rounded-full transition-colors cursor-pointer border border-slate-200 hover:border-red-200"
            >
              <Wrench className="w-3.5 h-3.5 text-red-600" />
              <span>Book Online</span>
            </button>

            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              id="nav-call-now-btn"
              className="bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-full font-bold text-sm shadow-md shadow-red-600/20 flex items-center gap-2 transition-all transform hover:-translate-y-0.5"
            >
              <Phone className="w-3.5 h-3.5 fill-white" />
              <span>Call {BUSINESS_INFO.phone}</span>
            </a>
          </div>

          {/* Mobile Actions & Hamburger Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="bg-red-600 text-white text-xs font-bold px-3.5 py-2 rounded-full shadow-sm flex items-center gap-1.5"
              aria-label="Call Now"
            >
              <Phone className="w-3.5 h-3.5 fill-white" />
              <span>Call</span>
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-800 hover:text-red-600 hover:bg-slate-100 focus:outline-hidden border border-slate-200 transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-slate-800" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200 px-5 py-4 shadow-xl animate-in slide-in-from-top-2 duration-150">
            <nav className="flex flex-col gap-1 mb-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between text-sm font-bold text-slate-800 px-3.5 py-3 rounded-xl hover:bg-red-50 hover:text-red-600 transition-colors border border-transparent hover:border-red-100"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
              ))}
            </nav>

            <div className="flex flex-col gap-2.5 pt-3 border-t border-slate-100">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-sm"
              >
                <Wrench className="w-4 h-4 text-red-500" />
                <span>Request Appliance Repair</span>
              </button>
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-bold text-xs text-center rounded-xl flex items-center justify-center gap-2 transition-colors shadow-md shadow-red-600/20"
              >
                <Phone className="w-4 h-4 fill-white" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
