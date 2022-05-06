import { Trans } from 'gatsby-plugin-react-i18next';
import React from 'react';

const Footer = () => (
  <footer className="container mx-auto py-16 px-3 mt-48 mb-8 text-gray-800">
    <div className="flex -mx-3">
      <div className="flex-1 px-3">
        <div> © {new Date().getFullYear()} coScene Inc. </div>
        <div>
          <a href="http://beian.mitt.gov.cn" target="_blank" rel="noreferrer">
            沪ICP备2022013161号-1
          </a>
        </div>
      </div>

      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">
          <Trans>Connect with us</Trans>
        </h2>
        <ul className="mt-4 leading-loose">
          <li>
            <a href="https://github.com/coscene-io">GitHub</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
