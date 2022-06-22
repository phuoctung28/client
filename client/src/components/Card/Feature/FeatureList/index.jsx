import React, { useEffect, useState } from "react";
import { Feature } from "../";
export const FeatureList = ({ jobList }) => {
  // console.log(jobList[0]);
  // useEffect(() => {
  //   if (jobList) {
  //     effect
  //   }
  //   return () => {
  //     cleanup
  //   };
  // }, [input]);
  return (
    <div className="feature__list">
      {jobList.map((job, index) => (
        <Feature job={job} key={index}/>
      ))}
      {/* <Feature job={jobList[0]} /> */}
    </div>
  );
};
