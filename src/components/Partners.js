import { Trans } from 'gatsby-plugin-react-i18next';
import React from 'react';
import ALIImg from '../assets/images/partners/ali.png';
import GSImg from '../assets/images/partners/gs.png';
import MSImg from '../assets/images/partners/ms.png';
import RAImg from '../assets/images/partners/ra.png';
import SHImg from '../assets/images/partners/sh.png';

const Partners = () => {
  return (
    <div className="container mx-auto text-center flex flex-col">
      <div className="mb-8">
        <h2 className="text-xl text-gray-900 lg:text-2xl font-semibold">
          <Trans>Trusted by industrial leaders</Trans>
        </h2>
      </div>
      <div className="flex justify-between">
        <img src={GSImg} className="lg:h-10 md:h-8 h-6 w-auto"></img>
        <img src={ALIImg} className="lg:h-10 md:h-8 h-6 w-auto"></img>
        <img src={MSImg} className="lg:h-10 md:h-8 h-6 w-auto"></img>
        <img src={RAImg} className="lg:h-10 md:h-8 h-6 w-auto"></img>
        <img src={SHImg} className="lg:h-10 md:h-8 h-6 w-auto"></img>
      </div>
    </div>
  );
};

export default Partners;
