import React from "react";

export const CardServices = ({ title, img }) => {
  return (
    <div className="rounded-lg p-8">
      <div className="flex items-start space-x-5 ">
        <div className="p-5 bg-main-300 rounded-full flex-none text-white">
          <img src={img} className="h-7 w-7 text-white" />
        </div>
        <div></div>
        <div className="">
          <h1 className="font-bold text-lg mb-3">{title}</h1>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
            officia molestiae
          </p>
        </div>
      </div>
    </div>
  );
};
