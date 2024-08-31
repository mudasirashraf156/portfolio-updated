import React from 'react';
import Typed from 'react-typed';
import Fade from 'react-reveal/Fade';
import { ImLinkedin } from 'react-icons/im';
import { AiFillGithub } from 'react-icons/ai';
import { FiCodepen } from 'react-icons/fi';
import { ReactComponent as Logo } from '../assets/home.svg';

const ConfettiJsx = React.lazy(() => import('./Confetti'));

const Home = () => (
  <Fade bottom>
    <ConfettiJsx />
    <div className="flex lg:flex-row flex-col justify-center items-center mx-auto pt-20 lg:py-32 lg:pb-12 lg:text-2xl">
      <div className="px-8 text-zinc-400 text-center leading-10 lg:w-1/2">
        <p>Hello there! I am </p>
        <p className="text-fuchsia-300 text-4xl tracking-wide md:text-6xl lg:text-6xl my-2">Mudasir Ashraf</p>
        <div className="text-green-300 text-2xl md:text-4xl lg:text-4xl py-4">
          <Typed
            strings={['Front-end developer', 'Back-end developer', 'Full-stack developer', 'Mobile developer', 'Web developer']}
            typeSpeed={30}
            backSpeed={60}
            loop
          />
        </div>
        <p>I am a passionate junior backend developer with a love for programming. I continuously seek to expand my skills and knowledge in the field</p>
        <p className="md:flex justify-center md:mb-16 hidden items-center mt-14 mx-auto">
          <a href="https://www.linkedin.com/in/mudasir-ashraf-7a0076226/" alt="linkedin" className="mx-6"><ImLinkedin size={30} /></a>
          <a href="https://github.com/mudasirashraf156" alt="github" className="mx-6"><AiFillGithub size={30} /></a>
          <a href="https://codepen.io/Mudasirparru" alt="codepen" className="mx-6"><FiCodepen size={30} /></a>
        </p>
      </div>
      <Logo className="w-80 h-80 lg:w-2/5 lg:h-2/5" />
    </div>
  </Fade>
);

export default Home;
