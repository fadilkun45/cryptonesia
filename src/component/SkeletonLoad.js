import React, { useEffect, useState } from "react";

const SkeletonLoad = ({ limit, image = true }) => {
  const deflimit = [];

  for (let i = 1; i <= limit; i++) {
    deflimit.push(i);
  }

  useEffect(() => {
    console.log(deflimit);
  }, []);

  return (
    <>
      {deflimit?.map((key) => (
        <div
          className="animate-pulse bg-gray-300 rounded-sm mb-1 px-4 py-3 w-full flex items-center justify-between px-3 py-2 my-2 text-center"
          key={key}
        >
          {image ? (
            <>
              <div className="w-1/6 flex justify-between items-center">
                <div className="w-10 h-10 bg-gray-700 rounded-full"></div>
              </div>
              <div className="w-5/6 md:w-full flex">
                <div className="w-full h-10 bg-gray-700 rounded-sm"></div>
              </div>
            </>
          ) : (
            <div className="w-full flex">
              <div className="w-full h-10 bg-gray-700 rounded-sm"></div>
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default SkeletonLoad;
