import React from 'react';
import Footer from './Footer';
import Header from './Header';
import { Helmet } from 'react-helmet';

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>coScene 刻行</title>
        <link rel="canonical" href="http://www.coscene.cn" />

        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <meta
          name="description"
          content="场景数据爆炸式增长的当下和未来，刻行帮助各大企业解决增长难题，大幅度降低应用、研发、运维、和售后的成本，降低行业门槛，推动行业发展。"
        />
        <meta property="og:title" content="coScene 刻行" />
        <meta
          property="og:description"
          content="场景数据爆炸式增长的当下和未来，刻行帮助各大企业解决增长难题，大幅度降低应用、研发、运维、和售后的成本，降低行业门槛，推动行业发展。"
        />
      </Helmet>
      <Header />
      <main className="text-gray-900">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
