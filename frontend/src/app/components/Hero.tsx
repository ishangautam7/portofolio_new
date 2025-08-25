import React, { useEffect, useState } from 'react';
import { ArrowDown, Linkedin, Github, Facebook, Instagram } from 'lucide-react';
import HeroImage from '../../assests/images/image.png';
import Particles from './Particles';

const Hero = () => {
  const [typingText, setTypingText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const phrases = ['Machine Learning', 'Full Stack Development', 'Web Development', 'Data Science'];

  useEffect(() => {
    const currentPhrase = phrases[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (typingText.length < currentPhrase.length) {
          setTypingText(currentPhrase.substring(0, typingText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (typingText.length > 0) {
          setTypingText(currentPhrase.substring(0, typingText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((currentIndex + 1) % phrases.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [typingText, currentIndex, isDeleting, phrases]);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden">
      {/* Particle effect background */}
      <Particles />
      
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
      </div>

      <div className="container mx-auto px-8 py-16 flex flex-wrap items-center gap-12 relative z-10">
        <div className="flex-1 min-w-[320px]">
          <h2 className="text-5xl md:text-6xl font-bold text-[#002057] mb-4">
            Hi There,<br />
            I'm Ishan <span className="text-[#ff7b00]">Gautam</span>
          </h2>
          
          <p className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8">
            I am into{' '}
            <span className="text-red-600">
              {typingText}
              <span className="animate-pulse">|</span>
            </span>
          </p>

          <button
            onClick={scrollToAbout}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#2506ad] text-white rounded-full hover:bg-[#1a047e] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 mb-12"
          >
            <span className="font-bold text-lg">About Me</span>
            <ArrowDown size={20} />
          </button>

          <div className="flex gap-4">
            {[
              { icon: Linkedin, href: 'https://www.linkedin.com/in/ishangautam7-2471452b8/', color: 'hover:bg-blue-600' },
              { icon: Github, href: 'https://github.com/ishangautam7', color: 'hover:bg-gray-800' },
              { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=100091673215364', color: 'hover:bg-blue-500' },
              { icon: Instagram, href: 'https://www.instagram.com/ishangtm7', color: 'hover:bg-pink-500' }
            ].map(({ icon: Icon, href, color }, index) => (
              <a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-12 h-12 bg-[#09011b] text-[#00d9ff] rounded-full flex items-center justify-center transition-all duration-300 ${color} hover:text-white hover:scale-110`}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <div className="flex-1 text-center">
          <img
            src={HeroImage.src}
            alt="Ishan Gautam"
            className="w-80 h-80 rounded-full mx-auto shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;