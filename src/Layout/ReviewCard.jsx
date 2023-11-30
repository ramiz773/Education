import React from "react";

function ReviewCard({ pic }) {
  return (
    <div className="w-full  bg-white border-2 border-lightText md:border-none p-5 rounded-lg md:w-1/3 hover:shadow-[rgba(0,0,0,0.24)_0px_3px_8px]  transition-all  ">
      <div>
        <p className="text-lightText">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
          aspernatur ducimus excepturi, exercitationem ipsum sunt nam quia
          laudantium nihil molestiae repellat ut rerum ullam necessitatibus
          officia vel totam eveniet cumque.
        </p>
      </div>
      <div className="flex flex-row justify-center">
        <img src={pic} alt="" className="rounded-full w-1/4 " />
      </div>
    </div>
  );
}

export default ReviewCard;
