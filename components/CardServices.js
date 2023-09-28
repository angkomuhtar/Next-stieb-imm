import React from "react";

export const CardServices = ({ title, img, details }) => {
  return (
    <div className='rounded-lg p-8'>
      <div className='flex items-start space-x-5 '>
        <div className='p-5 bg-main-300 rounded-full flex-none text-white'>
          <img src={img} className='h-7 w-7 text-white' />
        </div>
        <div className=''>
          <h1 className='font-bold text-lg mb-3'>{title}</h1>
          <p className='text-sm'>{details}</p>
        </div>
      </div>
    </div>
  );
};

{
  /* <div className='rounded-lg p-3'>
      <div className='items-start grid gap-3'>
        <div className='flex items-center justify-start space-x-4'>
          <div className='p-3 bg-main-300 rounded-full flex-none text-white'>
            <img src={img} className='h-7 w-7 text-white' />
          </div>
          <h1 className='font-bold text-xl'>{title}</h1>
        </div>
        <div className='px-2'>
          <p className='text-sm leading-relaxed'>{detail}</p>
        </div>
      </div>
    </div> */
}
