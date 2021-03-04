import React from "react";
const firstName = "Noomen";
const lastName = "Krichen";

const FullName = () => {
  return (
    <div className="fullname">
      <h1>
        {firstName} {lastName}
      </h1>
    </div>
  );
};

export default FullName;
