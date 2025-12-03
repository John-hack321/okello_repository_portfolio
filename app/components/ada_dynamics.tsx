import React from 'react';
import { Briefcase, ExternalLink } from 'lucide-react';

const AdaDynamicsAffiliation = () => {
  return (
    <section className=" md:mx-80 mx-4 bg-gradient-to-r from-[#0a2e42] to-[#081b29] py-10 md:py-14 lg:py-16 px-4 sm:px-6 relative overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00abf0]/5 via-transparent to-[#0088cc]/5"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Left Section - Icon and Title */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 md:gap-6">
            <div className="h-20 w-20 md:h-24 md:w-24 rounded-full bg-[#00abf0]/10 flex-shrink-0 flex items-center justify-center border-2 border-[#00abf0] shadow-lg shadow-[#00abf0]/20 hover:shadow-[#00abf0]/40 transition-all duration-300">
              <Briefcase className="h-9 w-9 md:h-10 md:w-10 text-[#00abf0]" />
            </div>
            <div>
              <p className="text-xs sm:text-sm text-gray-300 uppercase tracking-wider mb-1 md:mb-2">Residency</p>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white bg-gradient-to-r from-white to-[#00abf0] bg-clip-text text-transparent leading-tight">
                Ada Dynamics
              </h3>
              <p className="text-sm sm:text-base text-gray-300 mt-1 md:mt-2">Building innovative solutions for the future</p>
            </div>
          </div>

          {/* Right Section - Role Badge */}
          <div className="flex flex-col items-center lg:items-end gap-4 mt-4 lg:mt-0">
            <div className="bg-gradient-to-r from-[#00abf0] to-[#0088cc] px-6 py-3 sm:px-8 sm:py-4 rounded-lg shadow-xl shadow-[#00abf0]/30 transform hover:scale-105 transition-all duration-300 hover:shadow-[#00abf0]/50">
              <p className="text-[#081b29] font-bold text-lg sm:text-xl">Resident Engineer</p>
            </div>
            <a 
              href="https://adadynamics.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#00abf0] hover:text-white transition-all duration-300 text-sm sm:text-base font-medium group"
              aria-label="Visit Ada Dynamics website"
            >
              <span>Visit Ada Dynamics</span>
              <ExternalLink className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdaDynamicsAffiliation;