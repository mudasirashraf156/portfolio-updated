import React from 'react';
import Fade from 'react-reveal/Fade';
import { ReactComponent as Women } from '../assets/women.svg';
import Resume from '../assets/Resume.pdf';

const About = () => (
  <div className="text-center mt-24 lg:mt-12 md:py-20 mx-10 lg:my-12">
    <h1 className="text-2xl text-gray-500">About</h1>
    <div className="flex lg:flex-row flex-col justify-center items-center mx-auto mt-18 lg:mt-16">
      <div className="w-80 h-80 lg:w-1/3 lg:h-1/3">
        <Fade>
          <Women className="w-80 h-80 lg:w-3/4 mx-auto lg:h-3/4" />
        </Fade>
      </div>
      <div className="text-left text-gray-300 md:p-8 p-4 lg:w-1/2 lg:p-6">
        <Fade>
          <p className="py-4"> Hello! I am Mudasir, and I enjoy building efficient and reliable backend systems. I have a passion for creating robust and scalable solutions that support beautiful and functional products. My programming skills are at the forefront of my work, with a strong focus on performance and usability.
          </p>
          <div className="flex space-x-2 justify-center">
            <div>
              <a href={Resume} alt="resume" target="_blank" className="p-3 text-lg bg-green-600 text-white font-bold leading-normal uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out flex align-center justify-center items-center md:text-1.5xl" rel="noreferrer" download>
                Download Resume
              </a>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  </div>
);

export default About;
