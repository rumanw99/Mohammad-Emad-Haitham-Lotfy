'use client';
import { Facebook, Linkedin } from 'lucide-react';
import { useCallback } from 'react';

const footerLinks = [
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

export default function Footer() {
  const handleSmoothScroll = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    smoothScrollTo(href, 800);
  }, []);

  return (
    <footer className="w-full bg-emerald-900 text-white py-8 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 gap-4">
        <div className="text-sm">&copy; {new Date().getFullYear()} Mohammad Emad Haitham Lotfy. All rights reserved.</div>
        <div className="flex gap-4 items-center">
          {footerLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-emerald-300 transition"
              onClick={e => handleSmoothScroll(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex gap-3">
          <a href="https://www.facebook.com/share/15RqeWV81L/" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-300 transition"><Facebook size={20} /></a>
          <a href="https://www.linkedin.com/in/emad-lotfy-b89872298" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-300 transition"><Linkedin size={20} /></a>
        </div>
      </div>
    </footer>
  );
} 