import Avatar1 from '../assets/images/avatar-1.jpg';
import Avatar2 from '../assets/images/avatar-2.jpg';
import LogoApple from '../assets/images/logo-apple.jpg';
import LogoGS from '../assets/images/logo-gs.jpg';
import LogoInceptio from '../assets/images/logo-inceptio.jpg';

export default [
  {
    title: 'Yangming Huang',
    customerTitle: 'CEO',
    customerImage: Avatar1,
    experiences: [
      { logo: LogoGS, employer: 'GaussianRobotics', title: 'Senior Director' },
      { logo: LogoInceptio, employer: 'Inceptio', title: 'Director' },
      { logo: LogoApple, employer: 'Apple', title: 'Senior Architect' },
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
];
