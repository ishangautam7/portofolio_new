import React from 'react';
import { GraduationCap } from 'lucide-react';
import PulchowkImage from '../../assests/images/pulchowk.jpg';
import KmcImage from '../../assests/images/kmc.jpg';
// @ts-ignore
import PushpasadanImage from '../../assests/images/pushpasadan.JPG';

const Education = () => {
  const educationData = [
    {
      degree: 'Bachelor in Computer Engineering',
      institution: 'Pulchowk Engineering College',
      period: '2079-2084 | Pursuing',
      image: PulchowkImage.src
    },
    {
      degree: '10+2 Science (11,12)',
      institution: 'Kathmandu Model Secondary School',
      period: '2078-2080 | Completed',
      image: KmcImage.src
    },
    {
      degree: 'Up to Class 10',
      institution: 'Pushpasadan Secondary School',
      period: 'Completed',
      image: PushpasadanImage.src
    }
  ];

  return (
    <section id="education" className="min-h-screen py-20 bg-blue-50">
      <div className="container mx-auto px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
          <GraduationCap className="inline mr-4" size={40} />
          My <span className="text-purple-600">Education</span>
        </h2>

        <p className="text-xl text-center font-semibold text-gray-600 mb-16 max-w-3xl mx-auto">
          "Education is not the learning of facts, but the training of the mind to think."
        </p>

        <div className="max-w-5xl mx-auto space-y-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] overflow-hidden"
            >
              <div className="md:w-1/3">
                <img
                  src={edu.image}
                  alt={edu.institution}
                  className="w-full h-48 md:h-full object-cover"
                />
              </div>
              <div className="flex-1 p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-[#012970] mb-3">
                  {edu.degree}
                </h3>
                <p className="text-lg text-gray-700 mb-4">{edu.institution}</p>
                <h4 className="text-xl font-bold text-green-600">{edu.period}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;