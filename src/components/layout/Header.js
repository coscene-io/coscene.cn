import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LogoLightPic from '../../assets/images/logo-light.png';

const Header = () => (
  <header className="sticky top-0 bg-white shadow">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center text-2xl text-blue-600">
        <img width="32px" className='mr-2' src={LogoLightPic} />
        coScene
      </div>

      <div className="flex mt-4 sm:mt-0">
        <AnchorLink className="px-4" href="#features">
          Core Engines
        </AnchorLink>

        <AnchorLink className="px-4" href="#services">
          Industries
        </AnchorLink>

        <AnchorLink className="px-4" href="#our-team">
          Our Team
        </AnchorLink>

        <AnchorLink className="px-4" href="#contact-us">
          Contact Us
        </AnchorLink>
      </div>
    </div>
  </header>
);

export default Header;
