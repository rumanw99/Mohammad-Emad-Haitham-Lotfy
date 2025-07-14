"use client"

import Image from "next/image";
import { MapPin, Mail, Phone, Facebook, Linkedin } from "lucide-react";
import { useRef } from "react";

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

export default function Home() {
  // For smooth scroll polyfill if needed
  const contactRef = useRef(null);

  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="w-full flex flex-col items-center justify-center py-20 bg-gradient-to-b from-emerald-900 to-emerald-700 text-white text-center animate-fadeIn">
        <div className="w-40 h-40 relative mb-6 rounded-full overflow-hidden border-4 border-emerald-300 shadow-lg mx-auto">
          <Image src="https://i.postimg.cc/52xxNRCh/IMG-9687.jpg" alt="Mohammad Emad Haitham Lotfy" fill className="object-cover" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight">Mohammad Emad Haitham Lotfy</h1>
        <p className="text-lg md:text-xl mb-4 font-medium">Civil Engineer | Structural & Seismic Specialist</p>
        <div className="flex flex-col md:flex-row gap-4 justify-center mb-6">
          <a href="#projects" onClick={e => {e.preventDefault(); smoothScrollTo('#projects', 800);}} className="bg-emerald-300 text-emerald-900 px-6 py-2 rounded-full font-semibold shadow hover:bg-emerald-200 transition">View Projects</a>
          <a href="#contact" onClick={e => {e.preventDefault(); smoothScrollTo('#contact', 800);}} className="border border-emerald-300 text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-emerald-800 transition">Contact Me</a>
        </div>
        <span className="inline-block text-emerald-100 italic mt-2">Building the future, one structure at a time.</span>
      </section>

      {/* About Section */}
      <section id="about" className="w-full max-w-5xl mx-auto py-16 px-4 flex flex-col md:flex-row gap-10 items-center">
        <div className="md:w-2/3">
          <h2 className="text-3xl font-bold mb-4 text-emerald-900">About Me</h2>
          <p className="text-md text-gray-800 mb-4">
            I am a civil engineer specializing in structural and seismic engineering, with a passion for modern design and technical excellence. I use advanced tools like SAP2000, ETABS, SAFE, and SP Columns to deliver safe, efficient, and innovative solutions. My expertise includes reinforced concrete design, technical report writing, and structural calculations using Excel.
          </p>
          <ul className="list-disc list-inside text-emerald-800 mb-4">
            <li>Structural & Seismic Analysis</li>
            <li>Reinforced Concrete Design</li>
            <li>Technical Report Writing</li>
            <li>Excel for Structural Calculations</li>
          </ul>
          <div className="flex flex-wrap gap-2 mt-2">
            <span className="bg-emerald-900 text-white px-3 py-1 rounded-full text-sm">Arabic – Native</span>
            <span className="bg-emerald-900 text-white px-3 py-1 rounded-full text-sm">English – Good</span>
          </div>
        </div>
        <div className="md:w-1/3 flex flex-col items-start w-full">
          <h3 className="font-semibold mb-2 text-emerald-900">Contact Info</h3>
          <div className="flex items-center gap-2 mb-1 text-emerald-800"><MapPin className="w-5 h-5" /><span>Hama, Syria</span></div>
          <div className="flex items-center gap-2 mb-1 text-emerald-800"><Phone className="w-5 h-5" /><a href="tel:+963936260932" className="underline">+963 936 260 932</a></div>
          <div className="flex items-center gap-2 text-emerald-800"><Mail className="w-5 h-5" /><a href="mailto:Lotfye42@gmail.com" className="underline">Lotfye42@gmail.com</a></div>
          <div className="flex gap-3 mt-4">
            <a href="https://www.linkedin.com/in/emad-lotfy-b89872298" target="_blank" rel="noopener noreferrer" className="bg-emerald-900 text-white w-9 h-9 rounded-full flex items-center justify-center hover:bg-emerald-700 transition"><Linkedin className="w-5 h-5" /></a>
            <a href="https://www.facebook.com/share/15RqeWV81L/" target="_blank" rel="noopener noreferrer" className="bg-emerald-900 text-white w-9 h-9 rounded-full flex items-center justify-center hover:bg-emerald-700 transition"><Facebook className="w-5 h-5" /></a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="w-full max-w-5xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-8 text-emerald-900 text-center">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <span className="bg-emerald-900 text-white px-4 py-2 rounded-full text-md font-medium shadow">Structural Analysis (SAP2000, SAFE)</span>
          <span className="bg-emerald-900 text-white px-4 py-2 rounded-full text-md font-medium shadow">Seismic Studies (ETABS, SP Columns)</span>
          <span className="bg-emerald-900 text-white px-4 py-2 rounded-full text-md font-medium shadow">Reinforced Concrete Design</span>
          <span className="bg-emerald-900 text-white px-4 py-2 rounded-full text-md font-medium shadow">Excel for Structural Calculations</span>
          <span className="bg-emerald-900 text-white px-4 py-2 rounded-full text-md font-medium shadow">Technical Report Writing</span>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="w-full max-w-3xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-8 text-emerald-900 text-center">Projects</h2>
        {/* Project 1 */}
        <div className="mb-12 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-shrink-0 w-full md:w-2/5">
            <div className="overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:scale-105">
              <Image src="https://i.postimg.cc/4ydTHR03/Whats-App-Image-2025-07-13-at-4-32-16-AM.jpg" alt="Residential Building (Flat Slab + Isolated Footing)" width={500} height={320} className="object-cover w-full h-64" />
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-2 text-emerald-900">Residential Building (Flat Slab + Isolated Footing)</h3>
            <p className="text-gray-700 mb-2">Designed with focus on structural efficiency and proper load distribution.</p>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="bg-emerald-100 text-emerald-900 px-3 py-1 rounded-full text-xs font-medium">Flat Slab</span>
              <span className="bg-emerald-100 text-emerald-900 px-3 py-1 rounded-full text-xs font-medium">Isolated Footing</span>
              <span className="bg-emerald-100 text-emerald-900 px-3 py-1 rounded-full text-xs font-medium">Structural Efficiency</span>
            </div>
          </div>
        </div>
        {/* Project 2 */}
        <div className="mb-12 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-shrink-0 w-full md:w-2/5 order-2 md:order-1">
            <div className="overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:scale-105">
              <Image src="https://i.postimg.cc/wv9zHmcL/Whats-App-Image-2025-07-13-at-4-32-18-AM.jpg" alt="Residential Building (Hollow Block System)" width={500} height={320} className="object-cover w-full h-64" />
            </div>
          </div>
          <div className="flex-1 order-1 md:order-2">
            <h3 className="text-xl font-bold mb-2 text-emerald-900">Residential Building (Hollow Block System)</h3>
            <p className="text-gray-700 mb-2">Designed and analyzed using hollow block system for seismic compliance.</p>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="bg-emerald-100 text-emerald-900 px-3 py-1 rounded-full text-xs font-medium">Hollow Block</span>
              <span className="bg-emerald-100 text-emerald-900 px-3 py-1 rounded-full text-xs font-medium">Seismic Compliance</span>
            </div>
          </div>
        </div>
        {/* Project 3 - Show each image individually with description */}
        <div className="mb-12 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-shrink-0 w-full md:w-2/5">
            <div className="overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:scale-105">
              <Image src="https://i.postimg.cc/QtS3Md0P/Whats-App-Image-2025-07-13-at-4-32-19-AM.jpg" alt="9-Story Tower 1" width={500} height={320} className="object-cover w-full h-64" />
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-2 text-emerald-900">9-Story Residential Tower (Flat Slab + Raft Foundation)</h3>
            <p className="text-gray-700 mb-2">High-rise modeling using flat slab + raft foundation. (View 1)</p>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="bg-emerald-100 text-emerald-900 px-3 py-1 rounded-full text-xs font-medium">Flat Slab</span>
              <span className="bg-emerald-100 text-emerald-900 px-3 py-1 rounded-full text-xs font-medium">Raft Foundation</span>
              <span className="bg-emerald-100 text-emerald-900 px-3 py-1 rounded-full text-xs font-medium">High-rise</span>
            </div>
          </div>
        </div>
        <div className="mb-12 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-shrink-0 w-full md:w-2/5 order-2 md:order-1">
            <div className="overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:scale-105">
              <Image src="https://i.postimg.cc/MpjqYxpM/Whats-App-Image-2025-07-13-at-4-32-20-AM.jpg" alt="9-Story Tower 2" width={500} height={320} className="object-cover w-full h-64" />
            </div>
          </div>
          <div className="flex-1 order-1 md:order-2">
            <h3 className="text-xl font-bold mb-2 text-emerald-900">9-Story Residential Tower (Flat Slab + Raft Foundation)</h3>
            <p className="text-gray-700 mb-2">High-rise modeling using flat slab + raft foundation. (View 2)</p>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="bg-emerald-100 text-emerald-900 px-3 py-1 rounded-full text-xs font-medium">Flat Slab</span>
              <span className="bg-emerald-100 text-emerald-900 px-3 py-1 rounded-full text-xs font-medium">Raft Foundation</span>
              <span className="bg-emerald-100 text-emerald-900 px-3 py-1 rounded-full text-xs font-medium">High-rise</span>
            </div>
          </div>
        </div>
        <div className="mb-12 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-shrink-0 w-full md:w-2/5">
            <div className="overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:scale-105">
              <Image src="https://i.postimg.cc/TPMG7SKk/Whats-App-Image-2025-07-13-at-4-35-00-AM.jpg" alt="9-Story Tower 3" width={500} height={320} className="object-cover w-full h-64" />
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-2 text-emerald-900">9-Story Residential Tower (Flat Slab + Raft Foundation)</h3>
            <p className="text-gray-700 mb-2">High-rise modeling using flat slab + raft foundation. (View 3)</p>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="bg-emerald-100 text-emerald-900 px-3 py-1 rounded-full text-xs font-medium">Flat Slab</span>
              <span className="bg-emerald-100 text-emerald-900 px-3 py-1 rounded-full text-xs font-medium">Raft Foundation</span>
              <span className="bg-emerald-100 text-emerald-900 px-3 py-1 rounded-full text-xs font-medium">High-rise</span>
            </div>
          </div>
        </div>
        <div className="mb-12 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-shrink-0 w-full md:w-2/5 order-2 md:order-1">
            <div className="overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:scale-105">
              <Image src="https://i.postimg.cc/rp1TvJWq/Whats-App-Image-2025-07-13-at-4-35-01-AM.jpg" alt="9-Story Tower 4" width={500} height={320} className="object-cover w-full h-64" />
            </div>
          </div>
          <div className="flex-1 order-1 md:order-2">
            <h3 className="text-xl font-bold mb-2 text-emerald-900">9-Story Residential Tower (Flat Slab + Raft Foundation)</h3>
            <p className="text-gray-700 mb-2">High-rise modeling using flat slab + raft foundation. (View 4)</p>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="bg-emerald-100 text-emerald-900 px-3 py-1 rounded-full text-xs font-medium">Flat Slab</span>
              <span className="bg-emerald-100 text-emerald-900 px-3 py-1 rounded-full text-xs font-medium">Raft Foundation</span>
              <span className="bg-emerald-100 text-emerald-900 px-3 py-1 rounded-full text-xs font-medium">High-rise</span>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="w-full max-w-3xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-4 text-emerald-900">Education</h2>
        <div className="bg-white rounded-xl shadow p-6">
          <p className="text-md text-emerald-900 font-medium">Bachelor’s degree in Civil Engineering</p>
          <p className="text-md text-gray-700">Al-Wataniya Private University – Syria</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full flex items-center justify-center py-16 bg-gradient-to-t from-emerald-900 to-emerald-700">
        <div className="bg-white/95 rounded-xl shadow-xl p-10 max-w-lg w-full flex flex-col items-center animate-fadeInUp">
          <h2 className="text-3xl font-bold mb-2 text-center text-emerald-900">Contact Me</h2>
          <p className="text-md text-gray-700 mb-6 text-center">
            Feel free to reach out for collaborations, project inquiries, or just to connect!
          </p>
          <div className="w-full mb-6">
            <div className="flex items-center gap-2 mb-2 text-emerald-800"><MapPin className="w-5 h-5" /><span>Hama, Syria</span></div>
            <div className="flex items-center gap-2 mb-2 text-emerald-800"><Phone className="w-5 h-5" /><a href="tel:+963936260932" className="underline">+963 936 260 932</a></div>
            <div className="flex items-center gap-2 text-emerald-800"><Mail className="w-5 h-5" /><a href="mailto:Lotfye42@gmail.com" className="underline">Lotfye42@gmail.com</a></div>
          </div>
          <div className="flex gap-4 mt-2">
            <a href="https://www.linkedin.com/in/emad-lotfy-b89872298" target="_blank" rel="noopener noreferrer" className="bg-emerald-900 text-white w-9 h-9 rounded-full flex items-center justify-center hover:bg-emerald-700 transition"><Linkedin className="w-5 h-5" /></a>
            <a href="https://www.facebook.com/share/15RqeWV81L/" target="_blank" rel="noopener noreferrer" className="bg-emerald-900 text-white w-9 h-9 rounded-full flex items-center justify-center hover:bg-emerald-700 transition"><Facebook className="w-5 h-5" /></a>
          </div>
        </div>
      </section>
    </>
  );
}
