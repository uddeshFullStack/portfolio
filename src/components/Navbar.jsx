import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faTwitter, 
  faGithub,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';
import logo from "../assets/logo.jpg";
import VercelLogo from "../assets/vercel.png";

const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-8 h-10'>
      <a href="/">
        <div style={{ width: '100px', height: '100px' }} className='mix-blend-lighten rounded-full mt-8'>
          <img src={logo} alt='Logo' />
        </div>
      </a>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <a href="https://vercel.com/uddeshy-kr-bhagats-projects" target="_blank" rel="noopener noreferrer">
          <img src={VercelLogo} alt="Vercel Logo" className='mix-blend-hard-light' style={{ width: '24px', height: '24px' }} />
        </a>
        <a href="https://x.com/UddeshMCA" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://github.com/uddeshFullStack" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.linkedin.com/in/uddeshy-kr-bhagat-0aa13797/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
