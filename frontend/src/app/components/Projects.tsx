import React from 'react';
import { Code, ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Metaverse',
      description: 'A full stack metaverse app where user can create maps and connect with other people via live video as well as audio chat supports live chat as well.',
      image: '/metaverse.png',
      technologies: ['Next.js', 'Node.js', 'MongoDB', 'Express', 'WebRTC', 'Socket'],
      githubLink: 'https://github.com/ishangautam7/metaverse',
      liveLink: 'https://metaverse.ishan-gautam.com.np/',
      category: 'Full Stack'
    },
    {
      id: 2,
      title: 'Chat Application with LLM & RAG',
      description: 'A fullstack chat application powered by Large Language Models with Retrieval-Augmented Generation (RAG). Users can chat with AI, upload documents for context-aware responses, and get intelligent answers based on custom knowledge bases.',
      image: '/chatbot.png',
      technologies: ['Next.js', 'Node.js', 'Python', 'LLM', 'RAG', 'Vector DB', 'Express', 'Prisma'],
      githubLink: 'https://github.com/ishangautam7/rag-bot',
      liveLink: 'https://chat.ishan-gautam.com.np/',
      category: 'Full Stack, Machine Learning'
    },
    {
      id: 3,
      title: 'Cricket Score Predictor',
      description: 'A machine learning model that analyzes current game scenerio and predicts the output based on the past games used to train the model',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Python', 'Flask', 'scikit-learn', 'numpy', 'Pandas'],
      githubLink: 'https://github.com/ishangautam7/cricket_score_predictor',
      liveLink: '',
      category: 'Full Stack'
    },
    {
      id: 4,
      title: 'Movie Recomendation System',
      description: 'A movie recommendation system that uses machine learning to recommend movies to users based on their liked movies.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Python', 'scikit-learn', 'pandas', 'numpy'],
      githubLink: 'https://github.com/ishangautam7/movie_recommendation',
      liveLink: '',
      category: 'Machine Learning'
    },
    {
      id: 5,
      title: 'Chat Application',
      description: 'A chat application where user can live chat with other. Created using React, Express and Socket',
      image: 'https://as2.ftcdn.net/v2/jpg/05/26/52/71/1000_F_526527151_xsfyOxjCQwASvCNVFpgNM4KyIuqApcnb.jpg',
      technologies: ['React', 'Node.js', 'Socket', 'Express'],
      githubLink: 'https://github.com/ishangautam7/chat_01',
      liveLink: '',
      category: 'Machine Learning'
    },
    {
      id: 6,
      title: '3D Game Engine',
      description: 'A 3D game engine built with C++ and OpenGL. It supports 3D rendering, physics, and game logic.',
      image: '/3dengine.png',
      technologies: ['C', 'C++', 'CMake', 'OpenGL', 'GLFW', 'GLM'],
      githubLink: 'https://github.com/ishangautam7/3DEngine',
      category: 'C++'
    },
    {
      id: 7,
      title: 'System Monitor',
      description: 'Built a real time system monitor in C++ for Linux with kernel level monitoring',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['C', 'C++', 'CMake'],
      githubLink: 'https://github.com/ishangautam7/SystemMonitor',
      category: 'C++'
    }
  ];

  const categories = ['All', 'Full Stack', 'Machine Learning', 'Web App', 'Frontend', 'C++'];
  const [activeCategory, setActiveCategory] = React.useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="min-h-screen py-20 bg-gray-50">
      <div className="container mx-auto px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
          <Code className="inline mr-4" size={40} />
          My <span className="text-purple-600">Projects</span>
        </h2>

        <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Here are some of my recent projects that showcase my skills in web development, machine learning, and software engineering.
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${activeCategory === category
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-purple-100 hover:text-purple-600'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-4">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                  <span className="px-3 py-1 bg-purple-100 text-purple-600 text-sm font-medium rounded-full">
                    {project.category}
                  </span>
                </div>

                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm font-medium"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;