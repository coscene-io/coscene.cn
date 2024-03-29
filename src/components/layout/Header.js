import { Trans, useI18next } from 'gatsby-plugin-react-i18next';

import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LogoLightPic from '../../assets/images/logo-light.png';

const Header = () => {
  const { languages, changeLanguage } = useI18next();

  return (
    <header className="sticky top-0 bg-white shadow">
      <div className="container mx-auto flex flex-col items-center justify-between px-8 py-4 sm:flex-row">
        <div className="flex items-center text-2xl text-blue-600">
          <img width="32px" className="mr-2" src={LogoLightPic} />
          coScene
        </div>

        <div className="mt-4 flex items-center sm:mt-0">
          <AnchorLink className="px-4" href="#features">
            <Trans>Core Engines</Trans>
          </AnchorLink>

          <AnchorLink className="px-4" href="#services">
            <Trans>Industries</Trans>
          </AnchorLink>

          <AnchorLink className="px-4" href="#our-team">
            <Trans>Our Team</Trans>
          </AnchorLink>

          <AnchorLink className="px-4" href="#contact-us">
            <Trans>Contact Us</Trans>
          </AnchorLink>

          <a href="https://docs.coscene.cn" target="_blank" className="px-4">
            <Trans>Docs</Trans>
          </a>

          <div className="px-2">
            <a>
              <span
                className="cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  changeLanguage('en');
                }}
              >
                English
              </span>
            </a>
            <span> | </span>
            <a>
              <span
                className="cursor-pointer"
                onClick={(e) => {
                  changeLanguage('zh');
                }}
              >
                中文
              </span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
