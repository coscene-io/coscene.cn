import { graphql } from 'gatsby';
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import React from 'react';
import DemoQrCodePic from '../assets/images/contacts/demo-qrcode.png';
import GroupQrCodePic from '../assets/images/contacts/group-qrcode.png';
import WxQrCodePic from '../assets/images/contacts/wx-qrcode.jpeg';
import DataEnginePic from '../assets/images/data-engine.jpg';
import IndustriesAvsPic from '../assets/images/industries-avs.jpg';
import IndustriesOilPic from '../assets/images/industries-oil.jpg';
import IndustriesRoboticsPic from '../assets/images/industries-robotics.jpg';
import SearchEnginePic from '../assets/images/search-engine.jpg';
import TeamPic from '../assets/images/team.jpg';
import WorkflowEnginePic from '../assets/images/workflow-engine.jpg';
import Card from '../components/Card';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Partners from '../components/Partners';
import SplitSection from '../components/SplitSection';
import Layout from '../components/layout/Layout';
import { SEO } from '../components/seo';
import customerData from '../data/customer-data';
import HeroImage from '../svg/HeroImage';

const Index = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <section className="pt-20 md:pt-40">
        <div className="container mx-auto px-8 lg:flex">
          <div className="text-center lg:w-1/2 lg:text-left">
            <h1 className="text-4xl font-bold leading-none lg:text-5xl xl:text-6xl">
              <Trans> {t('One platform for all your')}</Trans>
              <span className="text-blue-600">
                <Trans> Scene </Trans>
              </span>
              <Trans>data operations</Trans>
            </h1>

            <p className="mt-6 text-xl font-light lg:text-2xl">{t('platform_introduction')}</p>
          </div>
          <div className="lg:w-1/2">
            <HeroImage />
          </div>
        </div>
      </section>

      <section id="partners" className="pt-20 lg:pt-24">
        <Partners />
      </section>

      <section id="features" className="py-20 lg:pb-20 lg:pt-24">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold lg:text-5xl">
            <Trans>Core Engines</Trans>
          </h2>
          <div className="mt-12 flex flex-col sm:-mx-3 sm:flex-row">
            <div className="flex-1 px-3">
              <Card className="mb-8 flex min-h-full flex-col ">
                <img
                  className="border-grey-200 h-1/2 w-1/2 self-center rounded-full border"
                  src={DataEnginePic}
                  alt="data-engine-pic"
                />
                <p className="mt-6 text-xl font-semibold">
                  <Trans>Scene Data Management Engine</Trans>
                </p>
                <p className="mt-4">{t('scene_data_management_engine_explain')}</p>
              </Card>
            </div>

            <div className="flex-1 px-2">
              <Card className="mb-8 flex min-h-full flex-col">
                <img
                  className="border-grey-200 h-1/2 w-1/2 self-center rounded-full border"
                  src={WorkflowEnginePic}
                  alt="workflow-engine-pic"
                />
                <p className="mt-6 text-xl font-semibold">
                  <Trans>Large Scale Workflow Engine</Trans>
                </p>
                <p className="mt-4">{t('large_scale_workflow_engine_explain')}</p>
              </Card>
            </div>

            <div className="flex-1 px-3">
              <Card className="mb-8 flex min-h-full flex-col">
                <img
                  className="border-grey-200 h-1/2 w-1/2 self-center rounded-full border"
                  src={SearchEnginePic}
                  alt="search-engine-pic"
                />
                <p className="mt-8 text-xl font-semibold">
                  <Trans>Semantic Search Engine</Trans>
                </p>
                <p className="mt-4">{t('semantic_search_engine_explain')}</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold lg:text-5xl">
            <Trans>Empowering Industrial Revolutions</Trans>
          </h2>
        </div>
      </section>

      <SplitSection
        id="services"
        primarySlot={
          <div className="lg:pr-32 xl:pr-48">
            <h3 className="text-3xl font-semibold leading-tight">
              <Trans>The Greater Autonomous Driving Industries</Trans>
            </h3>
            <p className="mt-8 text-xl font-light leading-relaxed">{t('industry_autonomous_explain')}</p>
          </div>
        }
        secondarySlot={<img src={IndustriesAvsPic} />}
      />

      <SplitSection
        reverseOrder
        primarySlot={
          <div className="lg:pl-32 xl:pl-48">
            <h3 className="text-3xl font-semibold leading-tight">
              <Trans>The Future of Robotics</Trans>
            </h3>

            <p className="mt-8 text-xl font-light leading-relaxed">{t('industry_robotics_explain')}</p>
          </div>
        }
        secondarySlot={<img src={IndustriesRoboticsPic} />}
      />

      <SplitSection
        primarySlot={
          <div className="lg:pr-32 xl:pr-48">
            <h3 className="text-3xl font-semibold leading-tight">
              <Trans>Industrial Internet of Things</Trans>
            </h3>

            <p className="mt-8 text-xl font-light leading-relaxed">{t('industry_iiot_explain')}</p>
          </div>
        }
        secondarySlot={<img src={IndustriesOilPic} />}
      />

      <section id="our-team" className="py-20 lg:pb-0">
        <div className="container mx-auto">
          <LabelText className="mb-8 text-center text-gray-600">
            <Trans>We are industrial experts</Trans>
          </LabelText>

          <div className="mb-4 flex flex-col md:-mx-3 md:flex-row">
            {customerData.map((customer, id) => (
              <div key={id} className="flex-1 px-3 lg:m-4">
                <CustomerCard key={id} customer={customer} />
              </div>
            ))}
          </div>

          <div>
            <img src={TeamPic} />
          </div>
        </div>
      </section>

      <section
        id="contact-us"
        style={{ background: '#4199E126' }}
        className="container mx-auto my-20 rounded-lg bg-sky-100 pb-24 pt-20 text-center"
      >
        <h3 className="text-5xl font-semibold">
          <Trans>We want to grow with you!</Trans>
        </h3>

        <p className="mx-0 mt-3 px-40 text-xl font-light">{t('grow_text')}</p>

        <div className="mx-auto mt-8 flex justify-center text-2xl">
          <div className="mx-5 flex w-32 grow-0 flex-col items-center">
            <img className="rounded border-2 border-gray-900" width={80} src={WxQrCodePic}></img>
            <span className="mt-2 text-sm lg:text-xl">{t('coscene-wechat-official-account')}</span>
          </div>

          <div className="mx-5 flex w-32 grow-0 flex-col items-center">
            <img className="rounded border-2 border-gray-900" width={80} src={DemoQrCodePic}></img>
            <span className="mt-2 text-sm lg:text-xl">{t('request-demo')}</span>
          </div>

          <div className="mx-5 flex w-32 grow-0 flex-col items-center">
            <img className="rounded border-2 border-gray-900" width={80} src={GroupQrCodePic}></img>
            <span className="mt-2 text-sm lg:text-xl">{t('join-wecom-group')}</span>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { ns: { in: ["translation", "index"] }, language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;

export const Head = () => <SEO />;
