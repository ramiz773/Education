import React from "react";

function CourseCard({ img, title }) {
  return (
    <div className="flex flex-col items-center justify-between bg-white border-2 border-lightText md:border-none md:w-2/5 p-5 cursor-pointer rounded-lg hover:shadow-[rgba(0,0,0,0.24)_0px_3px_8px] transition-all">
      <div className="w-3/5">
        <img src={img} alt="fjfjfj" />
      </div>
      <div>
        <h3 className="font-semibold text-lg text-center my-5">{title}</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
        </p>
      </div>
    </div>
  );
}

export default CourseCard;
