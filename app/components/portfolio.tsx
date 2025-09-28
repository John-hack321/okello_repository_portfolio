
import React from 'react';

const projects = [
  {
    title: 'Ultraviolette Gamers',
    image: '/images/exmple_proj.png',
    url: 'https://ultraviolette-gamers.vercel.app/',
    description: 'Still in development and a beta will be launching soon',
    status: 'Visit',
    statusClass: 'visit-link'
  },
  {
    title: 'Coming Soon',
    image: '/images/example_proj2.png',
    url: '#',
    description: 'New project coming soon',
    status: 'Coming Soon',
    statusClass: 'text-white'
  }
];

const Portfolio = () => {
  return (
    <section className="w-full py-12 md:py-20 bg-[#081b29]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-8 md:mb-12">
          Pet Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 h-full"
            >
              <a 
                href={project.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block h-full"
                aria-label={`View ${project.title}`}
              >
                <div className="relative h-64 md:h-80 w-full">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-200 text-sm md:text-base mb-4">{project.description}</p>
                    <span className={`px-4 py-2 rounded-full font-medium ${project.statusClass} bg-transparent border border-[#00abf0] hover:bg-[#00abf0] hover:text-[#081b29] transition-colors duration-300`}>
                      {project.status}
                    </span>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
