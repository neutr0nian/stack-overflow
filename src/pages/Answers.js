import React, { useState } from "react";
import Navbar from "../components/Navbar";

const Answers = () => {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Navbar />
      <div className="px-5 mt-10 md:px-10 lg:px-30">
        <div className="border rounded-md w-full p-10">
          <h3 className="text-lg font-medium">
            React Hooks: useEffect() is called twice even if an empty array is
            used as an argument
          </h3>
          <div className="flex justify-start gap-5 mt-1 ">
            <p>
              <span className="text-gray-700">Asked:</span>
            </p>
            <p>
              <span className="text-gray-700">Modified:</span>
            </p>
            <p>
              <span className="text-gray-700">Views:</span>
            </p>
          </div>
          <div className="mt-3 border"></div>
          <div className="mt-2">
            <h4>Answer body</h4>
          </div>
          <div className="">
            <h4>Comments</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Answers;
