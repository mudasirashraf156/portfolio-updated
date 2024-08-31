import React from 'react';
import { ImLinkedin } from 'react-icons/im';
import { AiFillGithub } from 'react-icons/ai';
import { FiCodepen } from 'react-icons/fi';

const Footer = () => (
  <div className="text-slate-600 justify-center mx-auto text-center mt-32 pb-8">
    <p className="flex justify-center items-center">
    <a href="https://www.linkedin.com/in/mudasir-ashraf-7a0076226/" alt="linkedin" className="mx-6"><ImLinkedin size={30} /></a>
          <a href="https://github.com/mudasirashraf156" alt="github" className="mx-6"><AiFillGithub size={30} /></a>
          <a href="https://codepen.io/Mudasirparru" alt="codepen" className="mx-6"><FiCodepen size={30} /></a>
    </p>
 
    <p className="text-green-800 text-xl">mudasirashraf156@gmail.com</p>
  </div>
);

export default Footer;
