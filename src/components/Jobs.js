import React from "react";
import Job from "./Job";

const Jobs = ({ data }) => {
  return (
    <div className="jobs">
      <h1>Jobs</h1>
      {data.map((item, id) => {
        return <Job data={item} key={id} />;
      })}
    </div>
  );
};

export default Jobs;
