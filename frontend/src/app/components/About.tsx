import React from 'react';
import { User, Download } from 'lucide-react';
import Image1 from '../../assests/images/ishan.png';

const About = () => {
  return (
    <section id="about" className="min-h-screen py-20 bg-white">
      <div className="container mx-auto px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
          <User className="inline mr-4" size={40} />
          About <span className="text-purple-600">Me</span>
        </h2>

        <div className="flex flex-wrap items-center gap-12 mt-16">
          <div className="flex-1 text-center">
            <img
              src={Image1.src}
              alt="Ishan Gautam"
              className="w-96 h-96 rounded-lg mx-auto shadow-xl hover:shadow-2xl transition-all duration-300 object-cover grayscale hover:grayscale-0"
            />
          </div>

          <div className="flex-1 min-w-[320px] p-8">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">I'm Ishan</h3>
            <span className="text-2xl font-semibold text-blue-600 mb-6 block">Full Stack Developer</span>
            
            <p className="text-lg leading-relaxed text-gray-700 mb-8 text-justify">
              I'm Ishan Gautam, a full-stack developer from Kathmandu, Nepal, with a Bachelor's in Engineering Computer from Pulchowk Campus. I specialize in backend development and have a strong background in web and machine learning. Passionate about creating user-friendly experiences, I enjoy tackling complex challenges and continuously enhancing my skills. Outside of coding, I love exploring design trends and collaborating on new projects. Let's connect and share ideas!
            </p>

            <a
              href="/resume"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#2506ad] text-white rounded-lg hover:bg-[#1a047e] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <span className="font-semibold text-lg">Download Resume</span>
              <Download size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;