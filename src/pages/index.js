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
          <div className="text-center lg:text-left lg:w-1/2">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
              <Trans> {t('One platform for all your')}</Trans>
              <span className="text-blue-600">
                <Trans> Scene </Trans>
              </span>
              <Trans>data operations</Trans>
            </h1>

            <p className="text-xl lg:text-2xl mt-6 font-light">{t('platform_introduction')}</p>
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
          <h2 className="text-3xl lg:text-5xl font-semibold">
            <Trans>Core Engines</Trans>
          </h2>
          <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
            <div className="flex-1 px-3">
              <Card className="mb-8 flex flex-col min-h-full ">
                <img
                  className="w-1/2 h-1/2 self-center rounded-full border border-grey-200"
                  src={DataEnginePic}
                  alt="data-engine-pic"
                />
                <p className="font-semibold mt-6 text-xl">
                  <Trans>Scene Data Management Engine</Trans>
                </p>
                <p className="mt-4">{t('scene_data_management_engine_explain')}</p>
              </Card>
            </div>

            <div className="flex-1 px-2">
              <Card className="mb-8 flex flex-col min-h-full">
                <img
                  className="w-1/2 h-1/2 self-center rounded-full border border-grey-200"
                  src={WorkflowEnginePic}
                  alt="workflow-engine-pic"
                />
                <p className="font-semibold mt-6 text-xl">
                  <Trans>Large Scale Workflow Engine</Trans>
                </p>
                <p className="mt-4">{t('large_scale_workflow_engine_explain')}</p>
              </Card>
            </div>

            <div className="flex-1 px-3">
              <Card className="mb-8 flex flex-col min-h-full">
                <img
                  className="w-1/2 h-1/2 self-center rounded-full border border-grey-200"
                  src={SearchEnginePic}
                  alt="search-engine-pic"
                />
                <p className="font-semibold mt-8 text-xl">
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
          <h2 className="text-3xl lg:text-5xl font-semibold">
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
          <LabelText className="mb-8 text-gray-600 text-center">
            <Trans>We are industrial experts</Trans>
          </LabelText>

          <div className="flex flex-col mb-4 md:flex-row md:-mx-3">
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

      <section id="contact-us" className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center">
        <h3 className="text-5xl font-semibold">
          <Trans>We want to grow with you!</Trans>
        </h3>

        <p className="mt-8 mx-0 text-xl font-light px-40">{t('grow_text')}</p>

        <div className="mt-8 text-2xl flex justify-between mx-auto md:w-1/2">
          <div className="flex flex-col">
            <div className="border-2 border-gray-900 rounded mx-10">
              <img width={160} src={WxQrCodePic}></img>
            </div>
            <span className="text-sm lg:text-xl">{t('coscene-wechat-official-account')}</span>
          </div>
          <div className="flex flex-col">
            <div className="border-2 border-gray-900 rounded mx-10">
              <img width={160} src={DemoQrCodePic}></img>
            </div>
            <span className="text-sm lg:text-xl">{t('request-demo')}</span>
          </div>
          <div className="flex flex-col">
            <div className="border-2 border-gray-900 rounded mx-10">
              <img width={160} src={GroupQrCodePic}></img>
            </div>
            <span className="text-sm lg:text-xl">{t('join-wecom-group')}</span>
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
