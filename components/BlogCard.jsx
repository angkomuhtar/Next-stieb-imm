import React from "react";

export const BlogCard = () => {
  return (
    <div className="group cursor-pointer">
      <img
        src="./mision.jpg"
        alt=""
        className="group-hover:scale-110 transition duration-300 rounded-lg"
      />
      <div className="p-4">
        <p className="text-xs font-semibold text-main-500 mb-4">24 Jan 2022</p>
        <h1 className="font-semibold text-lg">
          Menteri ATR/BPN Sofyan A. Djalil Beri Kuliah Umum di FH UI
        </h1>
      </div>
    </div>
  );
};
