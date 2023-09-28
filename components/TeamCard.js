import React from "react";

const TeamCard = ({ img, name, position }) => {
  return (
    <div className='rounded-md relative overflow-hidden'>
      <div className='w-full aspect-[3/4] rounded-t-md bg-[#66dab8] backdrop-blur-xl p-2 text-center'>
        <img
          src={img}
          className='absolute top-0 bottom-0 left-0 right-0 object-cover object-top'
        />
      </div>
      <div className='w-full rounded-b-md bg-white/40 backdrop-blur-xl p-2 text-center'>
        <h1 className='text-center font-semibold'>{name}</h1>
        <p>{position}</p>
      </div>
    </div>
  );
};

export default TeamCard;
