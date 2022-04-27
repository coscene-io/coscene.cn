import React from 'react';
import Card from './Card';

const CustomerCard = ({ customer }) => (
  <Card className="mb-8">
    <div className="flex justify-center items-center">
      <img
        className="w-1/2 h-1/2 rounded-full border border-grey-200"
        src={customer.customerImage}
        alt={customer.customerName}
      />
    </div>

    <p className="text-xl mt-2 text-center font-semibold">{customer.title}</p>
    <p className="text-l text-center text-gray-600">{customer.customerTitle}</p>

    <div className="px-12 mt-6 h-24 flex flex-col">
      {customer.experiences.map((experience) => {
        return (
          <div className="flex mt-2">
            <img className="w-8 mr-2" src={experience.logo} />
            <span className="inline-block self-center">{experience.title}</span>
          </div>
        );
      })}
    </div>
  </Card>
);

export default CustomerCard;
