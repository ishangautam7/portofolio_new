import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="flex items-center justify-between px-[10%] py-4 h-16">
        <button
          onClick={() => scrollToSection('home')}
          className="text-3xl font-bold text-[#0e2431] hover:text-blue-600 transition-colors"
        >
          Ishan
        </button>

        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {[
              { id: 'home', label: 'Home' },
              { id: 'about', label: 'About' },
              { id: 'skills', label: 'Skills' },
              { id: 'education', label: 'Education' },
              { id: 'projects', label: 'Projects' },
              { id: 'contact', label: 'Contact' }
            ].map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`text-base font-semibold transition-all hover:text-blue-600 ${
                    activeSection === item.id
                      ? 'text-blue-600 border-b-2 border-blue-600 pb-2'
                      : 'text-[#0e2431]'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-3xl text-[#0e2431]"
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-16 right-0 h-screen bg-[#0e0f31] transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ width: '75%' }}
      >
        <ul className="flex flex-col p-4">
          {[
            { id: 'home', label: 'Home' },
            { id: 'about', label: 'About' },
            { id: 'skills', label: 'Skills' },
            { id: 'education', label: 'Education' },
            { id: 'projects', label: 'Projects' },
            { id: 'contact', label: 'Contact' }
          ].map((item) => (
            <li key={item.id} className="mb-4">
              <button
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left p-4 text-white text-xl rounded hover:bg-blue-600 transition-colors"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;