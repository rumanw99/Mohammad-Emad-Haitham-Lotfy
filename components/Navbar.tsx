'use client';
import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

function smoothScrollTo(targetId: string, duration = 800) {
  const target = document.querySelector(targetId);
  if (!target) return;
  const startY = window.scrollY;
  const endY = target.getBoundingClientRect().top + window.scrollY - 60;
  const distance = endY - startY;
  let startTime: number | null = null;

  function animation(currentTime: number) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = easeInOutQuad(timeElapsed, startY, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    } else {
      window.scrollTo(0, endY);
    }
  }
  function easeInOutQuad(t: number, b: number, c: number, d: number) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }
  requestAnimationFrame(animation);
}

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          if (currentScrollY > lastScrollY && currentScrollY > 80) {
            setShow(false); // Hide on scroll down
          } else {
            setShow(true); // Show on scroll up
          }
          setLastScrollY(currentScrollY);
          ticking.current = false;
        });
        ticking.current = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // For click animation
  const [clickedIdx, setClickedIdx] = useState(-1);

  // Close mobile menu on navigation
  const handleNavClick = (idx: number, href: string) => {
    setClickedIdx(idx);
    setTimeout(() => setClickedIdx(-1), 350);
    smoothScrollTo(href, 800);
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 z-50 w-full bg-emerald-900/95 text-white shadow-md backdrop-blur transition-transform duration-300 ${show ? 'translate-y-0' : '-translate-y-full'}`}
      style={{ willChange: 'transform' }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <span className="font-bold text-xl tracking-wide">Mohammad Emad Lotfy</span>
        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6">
          {navLinks.map((link, idx) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`relative inline-block font-medium transition-all duration-300
                  hover:scale-105 hover:text-emerald-300
                  after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-emerald-300 after:transition-all after:duration-300
                  hover:after:w-full
                  ${clickedIdx === idx ? 'animate-bounce-once text-emerald-200' : ''}
                `}
                style={{
                  transition: 'color 0.3s, transform 0.3s',
                }}
                onClick={e => {
                  e.preventDefault();
                  handleNavClick(idx, link.href);
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        {/* Hamburger Button */}
        <button
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-emerald-400"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMobileMenuOpen(open => !open)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {/* Mobile Menu Fullscreen Overlay */}
      <div
        className={`md:hidden fixed top-0 left-0 z-50 w-full h-screen bg-[#2E4F4F] text-white flex flex-col items-center justify-center p-8 transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8 pointer-events-none'} animate-mobile-menu`}
        style={{transitionProperty:'opacity, transform'}}
      >
        <button onClick={() => setMobileMenuOpen(false)} aria-label="Close menu" className="absolute top-6 right-6 text-white"><X size={32} /></button>
        <ul className="flex flex-col items-center justify-center space-y-6 text-2xl font-semibold w-full">
          {navLinks.map((link, idx) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`block py-2 px-4 rounded transition-all duration-300 hover:bg-emerald-800 hover:text-emerald-200 ${clickedIdx === idx ? 'animate-bounce-once text-emerald-200' : ''}`}
                onClick={e => {
                  e.preventDefault();
                  handleNavClick(idx, link.href);
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <style jsx>{`
        @keyframes bounce-once {
          0% { transform: scale(1); }
          30% { transform: scale(1.12); }
          60% { transform: scale(0.96); }
          100% { transform: scale(1); }
        }
        .animate-bounce-once {
          animation: bounce-once 0.3s;
        }
        @keyframes mobile-menu {
          0% { opacity: 0; transform: translateY(-32px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-mobile-menu {
          animation: mobile-menu 0.3s;
        }
        a.after:after {
          content: '';
        }
      `}</style>
    </nav>
  );
} 