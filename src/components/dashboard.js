import React from 'react';
import ApexChart from './ProgressBarGraph';

const Dashboard = () => {
  const RevenueByJobLocation = [
    { label: 'Everett', value: 100000 },
    { label: 'Seattle', value: 85000 },
    { label: 'Lynnwood', value: 50000 },
    { label: 'Bothell', value: 47000 },
    { label: 'Mukilteo', value: 45000 },
    { label: 'Edmonds', value: 35000 },
  ];
  const RevenueByJobType = [
    { label: 'Service Plumbing', value: 190000 },
    { label: 'Bid Work HVAC', value: 130000 },
    { label: 'Service HVAC', value: 80000 },
    { label: 'Bid Work Plumbing', value: 78000 },
    { label: 'HWT Replacement', value: 45000 },
    { label: 'Maintainance', value: 40000 },
    { label: 'Material Sale', value: 10000 },

  ];
  const cards = [
    {
      title: "Total value",
      value: "$406,411.29"
    },
    {
      title: "Total value",
      value: "$406,411.29"
    },
    {
      title: "Total value",
      value: "$406,411.29"
    },
    {
      title: "Total value",
      value: "$406,411.29"
    },
    {
      title: "Total value",
      value: "$406,411.29"
    },
    {
      title: "Total value",
      value: "$406,411.29"
    },
    {
      title: "Total value",
      value: "$406,411.29"
    },
    {
      title: "Total value",
      value: "$406,411.29"
    }
  ]
  return (
    <div className="py-6 bg-[#e7e7e7] flex flex-col justify-around px-8">
      <p className='text-lg mb-5 font-bold'>Company Metrics</p>
      <div className='flex flex-wrap justify-around gap-y-4'>
        {cards.map((card) => (
          <div className='flex bg-white flex-col gap-y-5 border-2 shadow-md border-l-8 border-l-[#43bf9b] md:w-[22%] px-5 py-4 justify-between items-stretch' key={card.title}>
            <p className='text-[#43bf9b] text-2xl'>{card.value}</p>
            <p className='text-lg'>{card.title}</p>
          </div>
        ))}
      </div>
      <div className='my-16 flex-wrap flex justify-around'>
        <div className='flex flex-col gap-y-5'>
          <p className='text-lg mb-5 font-bold'>Revenue By Job Location</p>
          <div className='bg-white p-4 border rounded shadow'>
            <ApexChart data={RevenueByJobLocation} />
          </div>
        </div>
        <div className='flex flex-col gap-y-5'>
          <p className='text-lg mb-5 font-bold'>Revenue By Job Type</p>
          <div className='bg-white p-4 border rounded shadow'>
            <ApexChart data={RevenueByJobType} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;