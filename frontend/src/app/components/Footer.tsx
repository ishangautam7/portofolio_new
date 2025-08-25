import React from 'react';
import { ChevronRight, Phone, Mail, MapPin, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const quickLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <footer className="bg-[#00012b] text-white py-16">
      <div className="container mx-auto px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          <div>
            <h3 className="text-2xl font-normal mb-4">Ishan's Portfolio</h3>
            <p className="text-gray-300 leading-relaxed">
              Thank you for visiting my personal portfolio website. Connect with me over socials.
              <br /><br />
              Connect with me over live chat!
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-normal mb-4">Quick Links</h3>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="flex items-center text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  <ChevronRight size={16} className="mr-2" />
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-normal mb-4">Contact Info</h3>
            <div className="space-y-3 text-gray-300">
              <p className="flex items-center">
                <Phone size={16} className="mr-3 text-yellow-400" />
                +977 9848867399
              </p>
              <p className="flex items-center">
                <Mail size={16} className="mr-3 text-yellow-400" />
                isangautam@gmail.com
              </p>
              <p className="flex items-center">
                <MapPin size={16} className="mr-3 text-yellow-400" />
                Kathmandu, Nepal
              </p>
            </div>

            <div className="flex gap-4 mt-6">
              {[
                { icon: Linkedin, href: 'https://www.linkedin.com/in/ishan-gautam-2471452b8/', label: 'LinkedIn' },
                { icon: Github, href: 'https://github.com/ishangautam7', label: 'GitHub' },
                { icon: Mail, href: 'mailto:GautamIshan9762@gmail.com', label: 'Email' }
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-12 h-12 bg-gray-200 text-[#02094b] rounded-full flex items-center justify-center hover:bg-transparent hover:text-yellow-400 hover:border hover:border-gray-400 transition-all duration-300 transform hover:scale-95"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6 text-center">
          <p className="text-gray-300">
            Designed by{' '}
            <a
              href="https://www.linkedin.com/in/ishan-gautam-2471452b8/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 hover:underline"
            >
              Ishan Gautam
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;