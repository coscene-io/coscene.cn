import { Trans } from 'gatsby-plugin-react-i18next';
import React from 'react';

const CustomerCard = ({ customer }) => (
  <div
    className="p-12 rounded-lg border border-solid border-gray-200 mb-8"
    style={{
      boxShadow: '0 10px 28px rgba(0,0,0,.08)',
      height: '94%',
    }}
  >
    <div className="flex justify-center items-center">
      <img
        className="w-1/2 h-1/2 rounded-full border border-grey-200"
        src={customer.customerImage}
        alt={customer.customerName}
      />
    </div>

    <p className="text-xl mt-2 text-center font-semibold">
      <Trans>{customer.title}</Trans>
    </p>
    <p className="text-l text-center text-gray-600">{customer.customerTitle}</p>

    <div className="mx-8 flex flex-col">
      {customer.experiences.map((experience, id) => {
        return (
          <div key={id} className="flex w-1/2 md:w-full lg:w-3/4 xl:w-1/2 mt-2 self-center">
            <img className="w-8 mr-2" src={experience.logo} />
            <span className="inline-block self-center">
              <Trans>{experience.title}</Trans>
            </span>
          </div>
        );
      })}
    </div>
  </div>
);

export default CustomerCard;
