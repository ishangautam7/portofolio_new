import React from 'react';
import { Code } from 'lucide-react';

const Skills = () => {
  const skills = [
    { name: 'ReactJS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'Express JS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'TensorFlow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
    { name: 'PyTorch', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
    { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg' },
    { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
    { name: 'MATLAB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg' }
  ];

  return (
    <section id="skills" className="min-h-screen py-20 bg-gradient-to-br from-purple-900 to-blue-900">
      <div className="container mx-auto px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
          <Code className="inline mr-4" size={40} />
          Skills & <span className="text-yellow-300">Abilities</span>
        </h2>

        <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 md:p-16 mt-16 max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="bg-black/60 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-black/80 hover:scale-105 transition-all duration-300 cursor-pointer group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  <img 
                    src={skill.icon} 
                    alt={skill.name}
                    className="w-12 h-12 mx-auto"
                    onError={(e) => {
                      // Fallback to emoji if image fails to load
                      const emojiMap: { [key: string]: string } = {
                        'ReactJS': '⚛️',
                        'HTML5': '🌐',
                        'CSS3': '🎨',
                        'JavaScript': '📜',
                        'Express JS': '🚂',
                        'C++': '⚙️',
                        'Python': '🐍',
                        'TensorFlow': '🧠',
                        'PyTorch': '🔥',
                        'GitHub': '🐙',
                        'AWS': '☁️',
                        'MATLAB': '📊'
                      };
                      e.currentTarget.style.display = 'none';
                      const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                      if (nextElement) {
                        nextElement.textContent = emojiMap[skill.name] || '💻';
                        nextElement.style.display = 'block';
                      }
                    }}
                  />
                  <span className="text-4xl hidden">{skill.name}</span>
                </div>
                <span className="text-white font-medium text-lg">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;