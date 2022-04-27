import Avatar1 from '../assets/images/avatar-1.jpg';
import Avatar2 from '../assets/images/avatar-2.jpg';
import Avatar3 from '../assets/images/avatar-3.jpg';

import LogoApple from '../assets/images/logo-apple.jpg';
import LogoGS from '../assets/images/logo-gs.jpg';
import LogoInceptio from '../assets/images/logo-inceptio.jpg';
import LogoCruise from '../assets/images/logo-cruise.jpg';

export default [
  {
    title: 'Yangming huang',
    customerTitle: 'CEO',
    customerImage: Avatar1,
    experiences: [
      { logo: LogoGS, employer: 'GaussianRobotics', title: 'Senior Director' },
      { logo: LogoInceptio, employer: 'Inceptio', title: 'Director' },
      { logo: LogoApple, employer: 'Apple', title: 'Senior Architecture' },
    ],
  },
  {
    title: 'Yujing Zheng',
    customerTitle: 'CTO',
    customerImage: Avatar2,
    experiences: [
      { logo: LogoGS, employer: 'GaussianRobotics', title: 'Engineering Manager' },
      { logo: LogoInceptio, employer: 'Inceptio', title: 'Tech Lead' },
    ],
  },
  {
    title: 'Ming Jiang',
    customerTitle: 'Senior Board Advisor',
    customerImage: Avatar3,
    experiences: [{ logo: LogoCruise, employer: 'Cruise', title: 'Staff TPM, Data Infra' }],
  },
];
