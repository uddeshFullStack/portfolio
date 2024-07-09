import React from 'react';
import logo from "../assets/logo.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faInstagram, 
  faTwitter, 
  faGithub
} from '@fortawesome/free-brands-svg-icons';
const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-8 h-10'>
      <div style={{ width: '8%'}} className='mix-blend-lighten rounded-full'  >
        <img src={logo} alt='Logo' />
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
      <FontAwesomeIcon icon={faInstagram} />
      <FontAwesomeIcon icon={faTwitter} />
      <FontAwesomeIcon icon={faGithub} />
      </div>
    </nav>
  );
}

export default Navbar;