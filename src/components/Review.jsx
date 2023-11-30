import React from "react";
import ReviewCard from "../Layout/ReviewCard";
import Heading from "./Heading";
import pic1 from "../assets/images/pic1.png";
import pic2 from "../assets/images/pic2.png";
import pic3 from "../assets/images/pic3.png";
function Review() {
  return (
    <div className="min-h-[80vh] text-center flex flex-col items-center justify-center md:px-32 px-5">
      <Heading title={"Our"} title1={"Reviews"} />
      <div className="flex flex-col md:flex-row gap-5 mt-5 mx-5">
        <ReviewCard pic={pic1} />
        <ReviewCard pic={pic2} />
        <ReviewCard pic={pic3} />
      </div>
    </div>
  );
}

export default Review;
