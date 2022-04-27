import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import customerData from '../data/customer-data';
import HeroImage from '../svg/HeroImage';
import SvgCharts from '../svg/SvgCharts';
import TeamPic from '../assets/images/team.jpg';

import DataEnginePic from '../assets/images/data-engine.jpg';
import SearchEnginePic from '../assets/images/search-engine.jpg';
import WorkflowEnginePic from '../assets/images/workflow-engine.jpg';

import IndustriesHealthcarePic from '../assets/images/industries-healthcare.jpg';
import IndustriesAvsPic from '../assets/images/industries-avs.jpg';
import IndustriesOilPic from '../assets/images/industries-oil.jpg';

const Index = () => (
  <Layout>
    <section className="pt-20 md:pt-40">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
            One platform for all your <span className="text-blue-600">Scene</span> data operations
          </h1>

          <p className="text-xl lg:text-2xl mt-6 font-light">
            As a multimodal scene data platform, coScene provides a complete toolchain for your R&D
            and operations needs. Taking advantage of coScene's core engines, you will be able to
            efficiently track, store, transform, utilize, and share your scene data on a large
            scale.
          </p>
        </div>
        <div className="lg:w-1/2">
          <HeroImage />
        </div>
      </div>
    </section>

    <section id="features" className="py-20 lg:pb-20 lg:pt-24">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Core Engines</h2>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8 flex flex-col min-h-full ">
              <img
                className="w-1/2 h-1/2 self-center rounded-full border border-grey-200"
                src={DataEnginePic}
                alt="data-engine-pic"
              />
              <p className="font-semibold mt-6 text-xl">Scene Data Management Engine</p>
              <p className="mt-4">
                Collecting, persisting, managing, streaming, anything. The Swiss knife for your
                scene data.
              </p>
            </Card>
          </div>

          <div className="flex-1 px-2">
            <Card className="mb-8 flex flex-col min-h-full">
              <img
                className="w-1/2 h-1/2 self-center rounded-full border border-grey-200"
                src={WorkflowEnginePic}
                alt="workflow-engine-pic"
              />
              <p className="font-semibold mt-6 text-xl">Large Scale Workflow Engine</p>
              <p className="mt-4">
                Scheduling large scale of workers at your fingertip with all the necessary data
                ready for your magic.
              </p>
            </Card>
          </div>

          <div className="flex-1 px-3">
            <Card className="mb-8 flex flex-col min-h-full">
              <img
                className="w-1/2 h-1/2 self-center rounded-full border border-grey-200"
                src={SearchEnginePic}
                alt="search-engine-pic"
              />
              <p className="font-semibold mt-8 text-xl">Semantic Search Engine</p>
              <p className="mt-4">
                Navigating through EBs of data is as easy as walking down the street. Need something
                semantic? It's just a query away.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>

    <section id="features" className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Empowering Industrial Revolutions</h2>
      </div>
    </section>

    <SplitSection
      id="services"
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">
            The Greater Autonomous Driving Industries
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Our team of enthusiastic marketers will analyse and evaluate how your company stacks
            against the closest competitors
          </p>
        </div>
      }
      secondarySlot={<img src={IndustriesAvsPic} />}
    />

    <SplitSection
      reverseOrder
      primarySlot={
        <div className="lg:pl-32 xl:pl-48">
          <h3 className="text-3xl font-semibold leading-tight">Industrial Internet of Things</h3>

          <p className="mt-8 text-xl font-light leading-relaxed">
            Once the market analysis process is completed our staff will search for opportunities
            that are in reach
          </p>
        </div>
      }
      secondarySlot={<img src={IndustriesOilPic} />}
    />

    <SplitSection
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Medical, Healthcare, and Life Science
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            With all the information in place you will be presented with an action plan that your
            company needs to follow
          </p>
        </div>
      }
      secondarySlot={<img src={IndustriesHealthcarePic} />}
    />

    <section id="our-team" className="py-20 lg:py-40">
      <div className="container mx-auto">
        <LabelText className="mb-8 text-gray-600 text-center">We are industrial experts</LabelText>
        <div className="flex flex-col md:flex-row md:-mx-3">
          {customerData.map((customer) => (
            <div key={customer.customerName} className="flex-1 px-3">
              <CustomerCard customer={customer} />
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
      className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center"
    >
      <h3 className="text-5xl font-semibold">We want to grow with you!</h3>

      <p className="mt-8 mx-0 text-xl font-light px-40">
        As an infrastructure and tooling provider, we are fortunate that we don't have to root for
        anyone to lose. We win if everyone wins. As long as autonomy as a whole moves up, we will
        succeed.
      </p>

      <p className="mt-8 text-2xl">
        Contact us now <a href="mailto:contact@coscene.io">contact@coscene.io</a>
      </p>
    </section>
  </Layout>
);

export default Index;
