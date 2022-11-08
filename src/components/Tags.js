import React from "react";

const Tags = ({ name, onClick }) => {
  return (
    <div
      className="border cursor-pointer rounded-xl my-5 bg-gray-50"
      onClick={onClick}
    >
      <h3 className=" pl-3 ml-2 py-2 text-lg font-medium">{name}</h3>
    </div>
  );
};

export default Tags;
