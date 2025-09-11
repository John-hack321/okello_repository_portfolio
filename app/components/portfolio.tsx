
import React from 'react';
import '../cssFiles/portfolio.css';

const Portfolio = () => {
  return (
    <div className="portfolio-container flex flex-col items-center gap-6">
      <h2 className="text-3xl font-bold text-white">Pet projects</h2>
      <div className="flex gap-3 p-2">
        <div className="portfolio-right">
          <div className="project-card">
            <a href="https://ultraviolette-gamers.vercel.app/" target="_blank" rel="noopener noreferrer">
              <img src="/images/exmple_proj.png" alt="Example Project" className="h-100 project-image" />
              <div className="overlay">
                <div className="overlay-text">
                  <span className="visit-link">Visit</span>
                  <p className="text-sm">Still in development and a beta will be launching soon</p>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="portfolio-right">
          <div className="project-card">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="/images/example_proj2.png" alt="Coming Soon" className="h-100 project-image" />
              <div className="overlay">
                <div className="overlay-text">Coming Soon</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
