import React from "react";

function Heading({ title, title1 }) {
  return (
    <div>
      <h3 className="text-5xl font-semibold">
        {title} <span className="text-brightGreen">{title1}</span>
      </h3>
    </div>
  );
}

export default Heading;
