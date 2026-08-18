import React, { useState, useEffect } from 'react';
import { Phone, Clock, MapPin, Menu, X, Wrench, ChevronRight } from 'lucide-react';
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

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'Services', href: '#services' },
    { label: 'Appliances', href: '#appliances' },
    { label: 'Why Choose Us', href: '#why-us' },
    { label: 'About', href: '#about' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-200">
      {/* Sleek Top Info Strip */}
      <div className="bg-slate-900 text-slate-300 border-b border-slate-800 text-xs py-2 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          {/* Left indicator */}
          <div className="flex items-center gap-2.5 flex-wrap justify-center sm:justify-start">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-red-600/20 text-red-400 font-bold border border-red-500/30 text-[11px]">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              Fast Dispatch
            </span>
            <span className="text-slate-300 font-medium hidden md:inline">
              Serving Burien, Seattle & Nearby Areas in Washington
            </span>
          </div>

          {/* Right quick contact */}
          <div className="flex items-center gap-4 text-xs font-semibold">
            <div className="hidden lg:flex items-center gap-1 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>Mon-Sat: 7:30AM - 7PM</span>
            </div>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              id="top-bar-phone-link"
              className="inline-flex items-center gap-1.5 text-red-400 hover:text-red-300 font-extrabold transition-colors"
            >
              <Phone className="w-3.5 h-3.5 fill-red-500 text-red-500" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sleek Navigation Bar */}
      <nav className={`w-full bg-white transition-all duration-200 ${
        isScrolled 
          ? 'shadow-md py-3 border-b border-slate-200' 
          : 'py-4 border-b border-slate-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 focus:outline-hidden" id="nav-logo">
            <Logo size={isScrolled ? 'sm' : 'md'} />
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-red-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenBooking}
              id="nav-book-repair-btn"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 px-4 py-2.5 rounded-full transition-colors cursor-pointer border border-slate-200"
            >
              <Wrench className="w-3.5 h-3.5 text-red-600" />
              <span>Request Repair</span>
            </button>

            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              id="nav-call-now-btn"
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-lg shadow-red-600/20 flex items-center gap-2 transition-all transform hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4 fill-white" />
              <span>Call Now: {BUSINESS_INFO.phone}</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="bg-red-600 text-white text-xs font-bold px-3.5 py-2 rounded-full shadow-md"
            >
              Call
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:text-red-600 hover:bg-slate-100 focus:outline-hidden border border-slate-200"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-5 shadow-xl animate-in slide-in-from-top-2 duration-150">
            <div className="grid grid-cols-2 gap-2 mb-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between text-xs font-bold text-slate-700 p-2.5 rounded-lg bg-slate-50 hover:bg-red-50 hover:text-red-600"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-2 pt-2 border-t border-slate-100">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 bg-slate-900 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 cursor-pointer"
              >
                <Wrench className="w-4 h-4 text-red-400" />
                <span>Request Appliance Repair</span>
              </button>
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="w-full py-3 bg-red-600 text-white font-bold text-xs text-center rounded-xl flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 fill-white" />
                <span>Call +1 206-850-3969</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
