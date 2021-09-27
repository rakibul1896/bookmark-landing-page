import React from "react";

const Background = ({ boolean }) => {
  return (
    <div
      className={`p-absolute h-p76 w-p120 bg-primary bottom-0 z-n1 ${
        boolean ? " end-n50 rounded-start-50" : " start-n50 rounded-end-50"
      }`}
    ></div>
  );
};

export default Background;
