import React, { useState } from 'react';
import { Headphones, User, Mail, Phone, MessageCircle, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="min-h-screen py-20 bg-blue-50">
      <div className="container mx-auto px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-16">
          <Headphones className="inline mr-4" size={40} />
          Get in <span className="text-purple-600">Touch</span>
        </h2>

        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-8">
              <img
                src="https://images.pexels.com/photos/5052875/pexels-photo-5052875.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Contact"
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>

            <div className="md:w-1/2 p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-3 bg-blue-50 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 focus:bg-white transition-all"
                    />
                  </div>

                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-3 bg-blue-50 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 bg-blue-50 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 focus:bg-white transition-all"
                  />
                </div>

                <div className="relative">
                  <MessageCircle className="absolute left-4 top-6 text-gray-400" size={20} />
                  <textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full pl-12 pr-4 py-3 bg-blue-50 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 focus:bg-white transition-all resize-none"
                  />
                </div>

                <div className="text-right">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-8 py-3 bg-[#2506ad] text-white rounded-lg hover:bg-[#1a047e] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Submit <Send size={18} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;