import React from "react";

export const BlogCard = ({ img, date, title, link }) => {
  return (
    <div className='group cursor-pointer'>
      <a href={link} target='_blank' rel='noopener noreferrer'>
        <img
          src={img}
          alt=''
          className='group-hover:scale-110 transition duration-300 rounded-lg cursor-pointer aspect-video'
        />
      </a>
      <div className=''>
        <p className='text-xs font-semibold text-main-500 mb-2 ml-4 mt-3'>
          {date}
        </p>
        <h1 className='font-semibold text-base'>{title}</h1>
      </div>
    </div>
  );
};
